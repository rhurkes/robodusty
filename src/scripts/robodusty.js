// TODO don't pollute global namespace
// TODO add title alert?
// TODO don't flood the user with speaktext on first load
// TODO add delay pattern to windowresize method
// TODO refactor buttons and allow for selected buttons in left menu everywhere
// TODO truncate COD images when there are more than X?
// TODO check timers for deleted tracks, make sure everything is cleaned up
var Dusty = Dusty || {};
var removeMode = false;
var tracks = [];
var speakerQueue = [];
var currentPosition;
var canvas = $('#canvas');
var context = canvas[0].getContext('2d');
	
var trackcallback = function(data) {
	$('#menu').empty().hide();
	
	if (data.info.type == 'codsat') {
		var track = new Track(data.info.Name, data.info.url, data.info.type, 3);
	}
	
	if (data.info.type == 'iem') {
		var track = new Track(data.info.name, data.info.url, data.info.type, 3);
	}
	
	if (data.info.type == 'spcmeso') {
		var track = new Track(data.info.name, data.info.url, data.info.type, 3);
	}
};
	
// Update clock
setInterval(function() { _setClock() }, 1000 );
_setClock();
function _setClock() {
	$('#clock').text(moment.utc(new Date()).utc().format('HH:mm') + 'Z');
	$.each(tracks, function() {
		var updated = formatLastUpdate(this.lastUpdate);
		var trackId = this.id;
		$('#tracks li').each(function() {
			if ($(this).data('trackId') == trackId) {
				$(this).find('.updated').text('last update: ' + updated);
				return false;
			}
		});
	});
}

function speakText(text, playEas) {
	spAmp = 100;
	spGap = 0;
	spPitch = 30;
	spSpeed =  140;
	if (playEas) {
		$('audio#alert')[0].play();
		setTimeout(function() { speak(text, { amplitude: spAmp, wordgap: spGap, pitch: spPitch, speed: spSpeed }); }, 27000);
	}
	else {
		speak(text, { amplitude: spAmp, wordgap: spGap, pitch: spPitch, speed: spSpeed });
	}
}

var _alertEl = $('#alert')[0];
var processAudioQueue = setInterval(function() {
	if (!speakerQueue.length) { return; }
	var _player = $('#player')[0];
	if ((_player == null || _player.paused) && _alertEl.paused) {
		var nextSpeak = speakerQueue.shift();
		speakText(nextSpeak.text, nextSpeak.alert);
	}
}, 3000);

// New blinkers
// TODO get blinkers on updated image
var _lastBlinkerShow = true;
setInterval(function() { 
	$('.status').each(function() {
		if ($(this).data('status') == 'new') {
			if (_lastBlinkerShow) {
				$(this).hide();
			}
			else {
				$(this).show();
			}
			_lastBlinkerShow = !_lastBlinkerShow;
		}
	})
}, 2000);

// Add track
$('#addTrack').click(function() {
	$('#display > div').hide();
	$('#menu').empty();
	$('#menu').tinyMenu(trackconfig, trackcallback).show();
});

// Remove track
$('#removeTrack').click(function() {
	if (!removeMode) {
		$(this).text('Cancel');
		$('#overlay').show();
		removeMode = true;
	}
	else {
		$('#overlay').hide();
		removeMode = false;
		$(this).text('Remove track');
	}	
});

// Config menu
$('#config').click(function() { });

// TODO prevent dupe tracks
// TODO maybe refactor all these init functions?
function initIemTrack(track) {
	var maxWidth = $('#display').width() - 20;
	var maxHeight = $('#display').height() - 20;
	var trackdiv = $('<div/>', { 'class': 'track', 'id': 'displayIem' })
			.data('trackId', track.url.hashCode())
			.css('max-width', maxWidth)
			.css('max-height', maxHeight)
			.append($('<ol/>'));
	$('#display').append(trackdiv);
	track.element = trackdiv;
	getIemMessages(track);
}

function initSatTrack(track) {
	var maxWidth = $('#display').width() - 20;
	var maxHeight = $('#display').height() - 20;
	var trackdiv = $('<div/>', { 'class': 'track' })
			.data('trackId', track.url.hashCode())
			.css('max-width', maxWidth)
			.css('max-height', maxHeight);
	$('#display').append(trackdiv);
	track.element = trackdiv;
	updateSatTrack(track);
}

function initSpcMesoTrack(track) {
	var getSector;
	var splitUrl = track.url.split('/');
	var maxWidth = $('#display').width() - 20;
	var maxHeight = $('#display').height() - 20;
	var sector = (splitUrl.length == 8) ? splitUrl[5] : null;
	var trackdiv = $('<div/>', { 'class': 'track' })
			.data('trackId', track.url.hashCode())
			.css('max-width', maxWidth)
			.css('max-height', maxHeight)
			.css('background', '#FFF')
			.css('position', 'relative')
			.data('sector', sector)
			.append($('<div/>', { 'class': 'spcLocation' }));
	track.element = trackdiv;
	if (sector != null) {
		trackdiv.append(
			$('<img/>', { 'class': 'static', 'src': 'http://www.spc.noaa.gov/exper/mesoanalysis/' + sector + '/cnty/cnty.gif' })
				.css('position', 'absolute')
		);
	}
	$('#display').append(trackdiv);
	updateSpcMesoTrack(track);
	updateSpcTracksPosition(sector);
}

function processImage(img, track) {
	$(canvas).attr('width', img.naturalWidth).attr('height', img.naturalHeight);
	context.drawImage(img, 0, 0);
	imageData = context.getImageData(415, 589, 200, 11);
	var hash = JSON.stringify(imageData.data).hashCode();

	if (track.lastHash != null) {
		if (track.lastHash == hash) {
			track.element.find('img').last().remove();
		}
		else {
			$('#clink')[0].play();
			setTimeout(function() {	speakText('Visible satellite image has updated.'); }, 1000);
			$('li.track').each(function() {
				if ($(this).data('trackId') == track.id) {
					$(this).find('.status').data('status', 'new');
				}
			});
		}
	}
	
	track.lastHash = hash;
	track.element.find('img').hide();
	resizeDisplay();
	track.element.find('img').last().show();
}

function updateSpcMesoTrack(track) {
	var image = track.element.find('img:not(".static")');
	if (!image.length) {
		image = $('<img/>', {'class': 'shadow'}).css('position', 'absolute');
		track.element.append(image);
	}
	var ticks = new Date().getTime();
	image[0].src = track.url + '?' + ticks;
	resizeDisplay();
}

function updateSatTrack(track) {
	var images = track.element.find('img');
	var img = new Image();
	var ticks = new Date().getTime();
	img.crossOrigin = 'Anonymous';
	img.src = track.url + '?' + ticks;
	img.onload = function() { processImage(img, track) };
	track.element.append(img);
}

var Track = function()
{
    var constructor = function Track(name, url, type, updateMinutes) {
		var track = this;
		
		this.Name = name;
		this.url = url
		this.id = url.hashCode();
		this.lastHash = null;
		this.UpdateMinutes = updateMinutes;
		this.lastUpdate = null;
		this.type = type;
		this.element = null;
		
		// Initialize tracks
		switch (type) {
			case 'iem':
				var iemTimer = setInterval(function() { getIemMessages(track); }, 30000);
				initIemTrack(track);
				break;
			case 'codsat':
				setInterval(function() { updateSatTrack(track) }, updateMinutes * 60000);
				initSatTrack(track);
				break;
			case 'spcmeso':
				setInterval(function() { updateSpcMesoTrack(track) }, updateMinutes * 60000);
				initSpcMesoTrack(track);
				break;
		}
		
		// Add track to control list
		$('#tracks li').removeClass('selected');
		$('#tracks ul').append(
			$('<li/>', { 'class': 'track selected' })
				.data('trackId', url.hashCode()).append(
					$('<div/>', { 'class': 'label', 'text': name }),
					$('<div/>', { 'class': 'updated', 'text': 'last update:' }),
					$('<div/>', { 'class': 'arrow' })
				)
				.click(function() {
					if (!removeMode) {
						// Switch tracks
						$('#tracks li').removeClass('selected');
						$(this).addClass('selected');
						$('#display > div').hide();
						track.element.show();
					}
					else {
						// Remove track
						$(this).remove();
						track.element.remove();
						$('#overlay').hide();
						removeMode = false;
						$('#removeTrack').text('Remove track');
					}
				})
		);

		tracks.push(track);
    };

    return constructor;
}();

function formatLastUpdate(ts) {
	var diff = new Date() - ts;
	if (diff < 60000) { return '< 1min'; }
	if (diff >= 60000 && diff < 300000) { return '< 5min'; }
	if (diff >= 300000) { return '> 5min'; }
}

function resizeDisplay() {
	var displayWidth = $(window).width() - $('#controls').width() - 10;
	var displayHeight = $(window).height() - 20;
	$('#display img').css('max-width', displayWidth + 10).css('max-height', displayHeight);
	$('#display').width(displayWidth).height(displayHeight);
}
$(window).resize(function() {
	resizeDisplay();
});
resizeDisplay();

// IEM STUFF
var lastSeqNum = 0;
var lastEven = false;
var _isFilteredType = function(code) {
	return (code == 'RER' || code == 'WSW' || code == 'MWW' || code == 'PNS' || code == 'HWO' || code == 'NPW' || code == 'FLS' || code == 'CFW' || code == 'SMW' || code == 'MWS' || code == 'FFA'
	|| code == 'ADM' || code == 'FLW' || code == 'RFD' || code == 'RFW' || code == 'SPE');
};
var _isFilteredLsr = function(msg) {
	return (msg.indexOf('reports TSTM WND') > -1 || msg.indexOf('reports HEAVY RAIN') > -1 || msg.indexOf('reports SLEET') > -1 || msg.indexOf('reports MARINE') > -1);
}
var _isAllowedWfo = function(msg) {
	var wfo = msg.replace('K', '');
	return (wfo == 'BOU' || wfo == 'GJT' || wfo == 'PUB' || wfo == 'LOT' || wfo == 'ILX' || wfo == 'DVN' || wfo == 'DMX' || wfo == 'DDC' || wfo == 'GLD' || wfo == 'TOP' || wfo == 'ICT'
		|| wfo == 'MPX' || wfo == 'EAX' || wfo == 'SGF' || wfo == 'LSX' || wfo == 'GID' || wfo == 'LBF' || wfo == 'OAX' || wfo == 'ABR' || wfo == 'UNR' || wfo == 'FSD' || wfo == 'CYS' 
		|| wfo == 'OUN' || wfo == 'TSA' || wfo == 'AMA' || wfo == 'FWD' || wfo == 'LUB' || wfo == 'MAF');
}
function getIemMessages(track) {
	// Truncate older messages to keep things fast
	if ($('#displayIem li').length > 100) {
		var count = 0;
		$('#displayIem li').each(function() {
			count++;
			if (count > 100) { $(this).remove(); }
		});
	}
	
	var url = 'http://mesonet.agron.iastate.edu/iembot-json/room/botstalk?seqnum=' + lastSeqNum + '&callback=?';
	$.getJSON(url, null, function(data) {
		var tmpCode = '';
		
		$.each(data.messages, function() {
			var tmpMessage = $(this)[0];
			if (tmpMessage.product_id.length > 0) {
				var tmpProductData = tmpMessage.product_id.split('-');
				if (tmpProductData[3] !== null && tmpProductData[3].length >= 3) { tmpCode = tmpProductData[3].substring(0, 3); }
				if (tmpProductData[1] === 'KWNS') { tmpCode += '|SPC'; }
				if (_isFilteredType(tmpCode)) { return; }
				if (_isFilteredLsr(tmpMessage.message)) { return; }
				//if ((tmpCode == 'AFD' || tmpCode == 'NOW' || tmpCode == 'LSR') && !_isAllowedWfo(tmpProductData[1])) { return; }
				if ((tmpCode == 'WCN' || tmpCode == 'SVS') && (tmpMessage.message.indexOf('cancels') > -1 || tmpMessage.message.indexOf('continues'))) { return; }
			}
			
			// Speaker Queue stuff testing
			// Parse abbreviations
			
			if (tmpCode == 'LSR') {
				var parsedText = tmpProductData[1] + $('<div/>').html(tmpMessage.message).find('a').text();
				parsedText = parsedText.replaceAll('Co', 'county');
				parsedText = parsedText.replaceAll('TSTM', 'thunder storm');
				parsedText = parsedText.replaceAll('WND', 'wind');
				parsedText = parsedText.replaceAll('DMG', 'damage');
				parsedText = parsedText.replaceAll('GST', 'gust');
				parsedText = parsedText.replaceAll('MPH', 'miles per hour');
				parsedText = parsedText.replaceAll('KY', 'Kentucky');
				speakerQueue.push( { 'text': 'There is a new local storm report. ' + parsedText, 'alert': false });
			}
			
			if (tmpCode == 'TOR') {
				speakerQueue.push( { 'text': 'The national weather service has issued a tornado warning. ' + parsedText, 'alert': true });
			}

			var li = $('<li/>', { 'class': tmpCode }).addClass('shadow');
			if (lastEven) { li.addClass('even'); }
			lastEven = !lastEven;
			
			$('#displayIem > ol').prepend(
					li.append($('<span/>', { 'class': 'iemTimestamp', 'text': moment(tmpMessage.ts).format('MM/DD HH:mm') + 'Z' }))
					.append($('<span/>', { 'class': 'iemMessage', 'html': tmpMessage.message }))
			);
		});
		
		if (data.messages.length > 0) {
			tmpLastSeqNum = data.messages[data.messages.length - 1].seqnum;
			if (!isNaN(tmpLastSeqNum)) {
				lastSeqNum = tmpLastSeqNum;
			}
		}
		
		track.lastUpdate = new Date();
	});
}

function setCurrentPosition(position) {
	currentPosition = [position.coords.latitude, position.coords.longitude];
}

// TODO Ugh, updating sector mapping every time is annoying (but easy)
function updateSpcTracksPosition() {
	if (currentPosition == null) { return; }
	$.each(tracks, function() {
		if (this.type != 'spcmeso' || this.element == null) { return; }
		
		setMap(this.element.data('sector').replace('s', ''));
		var xy = lalo_xy(currentPosition[0], currentPosition[1]);
		var xsys = xy_pix(xy[0], xy[1]);
		// TODO this is nasty, the 4 is half the width of the marker, the 10 is the padding of the track div
		this.element.find('.spcLocation')
			.css('top', xsys[1] - 4 + 10)
			.css('left', xsys[0] - 4 + 10)
			.show();
	});
}

var spcPositionTimer = setInterval(function() { updateSpcTracksPosition(); }, 60000);

// TODO error handling
// TODO config for accuracy
$(document).ready(function() {
	navigator.geolocation.watchPosition(setCurrentPosition, null, { enableHighAccuracy: true });
});