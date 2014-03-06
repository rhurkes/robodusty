var trackconfig = 
{
	'menu': [
		{ id: 'IEM', info: { type: 'iem', name: 'IEM Messages' } },
		{
			id: 'CoD Satellite',
			children: [
				{	
					id: 'Region',
					children: [
						{ id: 'Northwest', info: { type: 'codsat', 'Name': 'CoD Sat Northwest', 'Url': 'http://climate.cod.edu/data/satellite/regional/northwest/current/northwest.vis.gif'} },
						{ id: 'Southwest', info: { type: 'codsat', 'Name': 'CoD Sat Southwest', 'Url': 'http://climate.cod.edu/data/satellite/regional/southwest/current/southwest.vis.gif'} },
						{ id: 'North Central', info: { type: 'codsat', 'Name': 'CoD Sat North Central', 'Url': 'http://climate.cod.edu/data/satellite/regional/northcentral/current/northcentral.vis.gif'} },
						{ id: 'South Central', info: { type: 'codsat', 'Name': 'CoD Sat South Central', 'Url': 'http://climate.cod.edu/data/satellite/regional/southcentral/current/southcentral.vis.gif'} },
						{ id: 'Northeast', info: { type: 'codsat', 'Name': 'CoD Sat Northeast', 'Url': 'http://climate.cod.edu/data/satellite/regional/northeast/current/northeast.vis.gif'} },
						{ id: 'Southeast', info: { type: 'codsat', 'Name': 'CoD Sat Southeast', 'Url': 'http://climate.cod.edu/data/satellite/regional/southeast/current/southeast.vis.gif'} },
					]
				},
				{
					id: '2km',
					children: [
						{ id: 'SD', info: { type: 'codsat', 'Name': 'CoD Sat SD', 'Url': 'http://climate.cod.edu/data/satellite/2km/SD/current/SD.vis.gif'} },
						{ id: 'KS', info: { type: 'codsat', 'Name': 'CoD Sat KS', 'Url': 'http://climate.cod.edu/data/satellite/2km/KS/current/KS.vis.gif'} },
						{ id: 'TX', info: { type: 'codsat', 'Name': 'CoD Sat TX', 'Url': 'http://climate.cod.edu/data/satellite/2km/TX/current/TX.vis.gif'} },
						{ id: 'IL', info: { type: 'codsat', 'Name': 'CoD Sat IL', 'Url': 'http://climate.cod.edu/data/satellite/2km/IL/current/IL.vis.gif'} },
						{ id: 'IL_IN', info: { type: 'codsat', 'Name': 'CoD Sat IL_IN', 'Url': 'http://climate.cod.edu/data/satellite/2km/IL_IN/current/IL_IN.vis.gif'} },
						{ id: 'MS', info: { type: 'codsat', 'Name': 'CoD Sat MS', 'Url': 'http://climate.cod.edu/data/satellite/2km/MS/current/MS.vis.gif'} },
						{ id: 'ND', info: { type: 'codsat', 'Name': 'CoD Sat ND', 'Url': 'http://climate.cod.edu/data/satellite/2km/ND/current/ND.vis.gif'} },
						{ id: 'MI', info: { type: 'codsat', 'Name': 'CoD Sat MI', 'Url': 'http://climate.cod.edu/data/satellite/2km/MI/current/MI.vis.gif'} }
					]
				},
				{
					id: '1km',
					children: [
						{ id: 'Siouxland', info: { type: 'codsat', 'Name': 'CoD Sat Siouxland', 'Url': 'http://climate.cod.edu/data/satellite/1km/Siouxland/current/Siouxland.vis.gif'} },
						{ id: 'Minnesota', info: { type: 'codsat', 'Name': 'CoD Sat Minnesota', 'Url': 'http://climate.cod.edu/data/satellite/1km/Minnesota/current/Minnesota.vis.gif'} },
						{ id: 'South_Dakota', info: { type: 'codsat', 'Name': 'CoD Sat South_Dakota', 'Url': 'http://climate.cod.edu/data/satellite/1km/South_Dakota/current/South_Dakota.vis.gif'} },
						{ id: 'Iowa', info: { type: 'codsat', 'Name': 'CoD Sat Iowa', 'Url': 'http://climate.cod.edu/data/satellite/1km/Iowa/current/Iowa.vis.gif'} },
						{ id: 'Julesburg', info: { type: 'codsat', 'Name': 'CoD Sat Julesburg', 'Url': 'http://climate.cod.edu/data/satellite/1km/Julesburg/current/Julesburg.vis.gif'} },
						{ id: 'Colorado', info: { type: 'codsat', 'Name': 'CoD Sat Colorado', 'Url': 'http://climate.cod.edu/data/satellite/1km/Colorado/current/Colorado.vis.gif'} },
						{ id: 'Kansas', info: { type: 'codsat', 'Name': 'CoD Sat Kansas', 'Url': 'http://climate.cod.edu/data/satellite/1km/Kansas/current/Kansas.vis.gif'} },
						{ id: 'Clayton', info: { type: 'codsat', 'Name': 'CoD Sat Clayton', 'Url': 'http://climate.cod.edu/data/satellite/1km/Clayton/current/Clayton.vis.gif'} },
						{ id: 'Panhandle', info: { type: 'codsat', 'Name': 'CoD Sat Panhandle', 'Url': 'http://climate.cod.edu/data/satellite/1km/Panhandle/current/Panhandle.vis.gif'} },
						{ id: 'N_Texas', info: { type: 'codsat', 'Name': 'CoD Sat N_Texas', 'Url': 'http://climate.cod.edu/data/satellite/1km/N_Texas/current/N_Texas.vis.gif'} },
						{ id: 'Oklahoma', info: { type: 'codsat', 'Name': 'CoD Sat Oklahoma', 'Url': 'http://climate.cod.edu/data/satellite/1km/Oklahoma/current/Oklahoma.vis.gif'} },
						{ id: 'Missouri', info: { type: 'codsat', 'Name': 'CoD Sat Missouri', 'Url': 'http://climate.cod.edu/data/satellite/1km/Missouri/current/Missouri.vis.gif'} },
						{ id: 'Arkansas', info: { type: 'codsat', 'Name': 'CoD Sat Arkansas', 'Url': 'http://climate.cod.edu/data/satellite/1km/Arkansas/current/Arkansas.vis.gif'} },
						{ id: 'S_Illinois', info: { type: 'codsat', 'Name': 'CoD Sat S_Illinois', 'Url': 'http://climate.cod.edu/data/satellite/1km/S_Illinois/current/S_Illinois.vis.gif'} },
						{ id: 'N_Illinois', info: { type: 'codsat', 'Name': 'CoD Sat N_Illinois', 'Url': 'http://climate.cod.edu/data/satellite/1km/N_Illinois/current/N_Illinois.vis.gif'} },
						{ id: 'Michigan', info: { type: 'codsat', 'Name': 'CoD Sat Michigan', 'Url': 'http://climate.cod.edu/data/satellite/1km/Michigan/current/Michigan.vis.gif'} },
						{ id: 'North_Dakota', info: { type: 'codsat', 'Name': 'CoD Sat North_Dakota', 'Url': 'http://climate.cod.edu/data/satellite/1km/North_Dakota/current/North_Dakota.vis.gif'} }
					]
				}
			]
		}
	]
};