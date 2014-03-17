// Borrowed some math from SPC's carto.js

var cart = {};
var rad = 0.01745;
var pi = 3.1416;
var RRR = 6371;

// For whatever reason, the initmap won't work with scaled images, so we'll do it this way
function scalePosition(imgWidth, xsys) {
	// Assume a scale that preserves ratio
	var ratio = imgWidth / 1000;
		
	return [xsys[0] * ratio, xsys[1] * ratio];
}

function initmap(clat, clon, slat1, slat2, slon, zoom, hgt, wid, meshsize) {
	var xyvals = new Array();
	cart['reflat1'] = slat1;
	cart['reflat2'] = slat2;
	cart['reflon'] = slon;
	var term1 = Math.log(Math.cos(d2r(cart['reflat1'])) / Math.cos(d2r(cart['reflat2'])));
	var term2 = Math.log(Math.tan(d2r(45.0 - (cart['reflat1']/2.0))) / Math.tan(d2r(45.0 - (cart['reflat2']/2.0))));
	cart['coneconst'] = (term2 == 0) ? 1 : term1/term2;
	cart['clat'] = clat;
	cart['clon'] = clon;
	cart['gridsize'] = meshsize;
	cart['xshift'] = 0;
	cart['yshift'] = 0;
	cart['scrnwid'] = wid;
	cart['scrnlen'] = hgt;
	cart['xscle'] = zoom;
	cart['yscle'] = zoom;
	xyvals = lalo_xy(clat, clon);
	cart['xxl'] = xyvals[0];
	cart['yyl'] = xyvals[1];
}

function lalo_xy(lat, lon) {
	var theta = d2r(lon - cart['reflon']) * cart['coneconst'];
	var term1 = RRR * Math.cos(d2r(cart['reflat1']));
	var term2 = Math.pow(Math.tan(d2r(45.0 - cart['reflat1']/2.0)), cart['coneconst']);
	var psi = term1 / (cart['coneconst'] * term2);
	var rho1 = psi * term2;
	var rho = psi * Math.pow((Math.tan(d2r(45.0 - lat / 2.0))), cart['coneconst']);
	var x = (1 / cart['gridsize']) * rho * Math.sin(theta);
	var y = (1 / cart['gridsize']) * (rho1 - rho * Math.cos(theta));
	
	return Array(x, y);
}

function xy_pix(x, y) {
	var xs = ((((x - cart['xxl']) * cart['xscle'])) + (cart['scrnwid'] / 2)) + cart['xshift'];
	var ys = ((((y - cart['yyl']) * cart['yscle'])) - (cart['scrnlen'] / 2)) - cart['yshift'];
	
	return Array(xs, -ys);
}

function d2r(val) {
	return val * rad;
}

function r2d(val) {
	return val / rad;
}

function setMap(sectornum) {
	if (sectornum == 11) { initmap(44.60, -114.05, 20, 60, -100, 21.4, 750, 1000, 40); }
	if (sectornum == 12) { initmap(35.70, -112.75, 20, 60, -100, 19.8, 750, 1000, 40); }
	if (sectornum == 13) { initmap(44.95, -96.95, 20, 60, -100, 23.9, 750, 1000, 40); }
	if (sectornum == 14) { initmap(37.95, -97.35, 20, 60, -100, 24.2, 750, 1000, 40); }
	if (sectornum == 15) { initmap(31.91, -97.05, 20, 60, -100, 20.5, 750, 1000, 40); }
	if (sectornum == 16) { initmap(43.60, -79.8, 20, 60, -100, 20.5, 750, 1000, 40); }
	if (sectornum == 17) { initmap(36.85, -82.35, 20, 60, -100, 23.7, 750, 1000, 40); }
	if (sectornum == 18) { initmap(30.1, -86.25, 20, 60, -100, 20.5, 750, 1000, 40); }
	if (sectornum == 19) { initmap(38.15, -96.80, 20, 60, -100, 8.9, 750, 1000, 40); }
	if (sectornum == 20) { initmap(39.2, -91.75, 20, 60, -100, 23.15, 750, 1000, 40); }
}