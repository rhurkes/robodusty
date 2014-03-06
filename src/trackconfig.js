var trackconfig = 
{
	'menu': [
		{ id: 'IEM', info: { type: 'iem', name: 'IEM Messages', 'url': 'http://mesonet.agron.iastate.edu/projects/iembot/' } },
		{
			id: 'CoD Satellite',
			children: [
				{	
					id: 'Region',
					children: [
						{ id: 'Northwest', info: { type: 'codsat', 'Name': 'CoD Sat Northwest', 'url': 'http://climate.cod.edu/data/satellite/regional/northwest/current/northwest.vis.gif'} },
						{ id: 'Southwest', info: { type: 'codsat', 'Name': 'CoD Sat Southwest', 'url': 'http://climate.cod.edu/data/satellite/regional/southwest/current/southwest.vis.gif'} },
						{ id: 'North Central', info: { type: 'codsat', 'Name': 'CoD Sat North Central', 'url': 'http://climate.cod.edu/data/satellite/regional/northcentral/current/northcentral.vis.gif'} },
						{ id: 'South Central', info: { type: 'codsat', 'Name': 'CoD Sat South Central', 'url': 'http://climate.cod.edu/data/satellite/regional/southcentral/current/southcentral.vis.gif'} },
						{ id: 'Northeast', info: { type: 'codsat', 'Name': 'CoD Sat Northeast', 'url': 'http://climate.cod.edu/data/satellite/regional/northeast/current/northeast.vis.gif'} },
						{ id: 'Southeast', info: { type: 'codsat', 'Name': 'CoD Sat Southeast', 'url': 'http://climate.cod.edu/data/satellite/regional/southeast/current/southeast.vis.gif'} },
					]
				},
				{
					id: '2km',
					children: [
						{ id: 'SD', info: { type: 'codsat', 'Name': 'CoD Sat SD', 'url': 'http://climate.cod.edu/data/satellite/2km/SD/current/SD.vis.gif'} },
						{ id: 'KS', info: { type: 'codsat', 'Name': 'CoD Sat KS', 'url': 'http://climate.cod.edu/data/satellite/2km/KS/current/KS.vis.gif'} },
						{ id: 'TX', info: { type: 'codsat', 'Name': 'CoD Sat TX', 'url': 'http://climate.cod.edu/data/satellite/2km/TX/current/TX.vis.gif'} },
						{ id: 'IL', info: { type: 'codsat', 'Name': 'CoD Sat IL', 'url': 'http://climate.cod.edu/data/satellite/2km/IL/current/IL.vis.gif'} },
						{ id: 'IL_IN', info: { type: 'codsat', 'Name': 'CoD Sat IL_IN', 'url': 'http://climate.cod.edu/data/satellite/2km/IL_IN/current/IL_IN.vis.gif'} },
						{ id: 'MS', info: { type: 'codsat', 'Name': 'CoD Sat MS', 'url': 'http://climate.cod.edu/data/satellite/2km/MS/current/MS.vis.gif'} },
						{ id: 'ND', info: { type: 'codsat', 'Name': 'CoD Sat ND', 'url': 'http://climate.cod.edu/data/satellite/2km/ND/current/ND.vis.gif'} },
						{ id: 'MI', info: { type: 'codsat', 'Name': 'CoD Sat MI', 'url': 'http://climate.cod.edu/data/satellite/2km/MI/current/MI.vis.gif'} }
					]
				},
				{
					id: '1km',
					children: [
						{ id: 'Siouxland', info: { type: 'codsat', 'Name': 'CoD Sat Siouxland', 'url': 'http://climate.cod.edu/data/satellite/1km/Siouxland/current/Siouxland.vis.gif'} },
						{ id: 'Minnesota', info: { type: 'codsat', 'Name': 'CoD Sat Minnesota', 'url': 'http://climate.cod.edu/data/satellite/1km/Minnesota/current/Minnesota.vis.gif'} },
						{ id: 'South_Dakota', info: { type: 'codsat', 'Name': 'CoD Sat South_Dakota', 'url': 'http://climate.cod.edu/data/satellite/1km/South_Dakota/current/South_Dakota.vis.gif'} },
						{ id: 'Iowa', info: { type: 'codsat', 'Name': 'CoD Sat Iowa', 'url': 'http://climate.cod.edu/data/satellite/1km/Iowa/current/Iowa.vis.gif'} },
						{ id: 'Julesburg', info: { type: 'codsat', 'Name': 'CoD Sat Julesburg', 'url': 'http://climate.cod.edu/data/satellite/1km/Julesburg/current/Julesburg.vis.gif'} },
						{ id: 'Colorado', info: { type: 'codsat', 'Name': 'CoD Sat Colorado', 'url': 'http://climate.cod.edu/data/satellite/1km/Colorado/current/Colorado.vis.gif'} },
						{ id: 'Kansas', info: { type: 'codsat', 'Name': 'CoD Sat Kansas', 'url': 'http://climate.cod.edu/data/satellite/1km/Kansas/current/Kansas.vis.gif'} },
						{ id: 'Clayton', info: { type: 'codsat', 'Name': 'CoD Sat Clayton', 'url': 'http://climate.cod.edu/data/satellite/1km/Clayton/current/Clayton.vis.gif'} },
						{ id: 'Panhandle', info: { type: 'codsat', 'Name': 'CoD Sat Panhandle', 'url': 'http://climate.cod.edu/data/satellite/1km/Panhandle/current/Panhandle.vis.gif'} },
						{ id: 'N_Texas', info: { type: 'codsat', 'Name': 'CoD Sat N_Texas', 'url': 'http://climate.cod.edu/data/satellite/1km/N_Texas/current/N_Texas.vis.gif'} },
						{ id: 'Oklahoma', info: { type: 'codsat', 'Name': 'CoD Sat Oklahoma', 'url': 'http://climate.cod.edu/data/satellite/1km/Oklahoma/current/Oklahoma.vis.gif'} },
						{ id: 'Missouri', info: { type: 'codsat', 'Name': 'CoD Sat Missouri', 'url': 'http://climate.cod.edu/data/satellite/1km/Missouri/current/Missouri.vis.gif'} },
						{ id: 'Arkansas', info: { type: 'codsat', 'Name': 'CoD Sat Arkansas', 'url': 'http://climate.cod.edu/data/satellite/1km/Arkansas/current/Arkansas.vis.gif'} },
						{ id: 'S_Illinois', info: { type: 'codsat', 'Name': 'CoD Sat S_Illinois', 'url': 'http://climate.cod.edu/data/satellite/1km/S_Illinois/current/S_Illinois.vis.gif'} },
						{ id: 'N_Illinois', info: { type: 'codsat', 'Name': 'CoD Sat N_Illinois', 'url': 'http://climate.cod.edu/data/satellite/1km/N_Illinois/current/N_Illinois.vis.gif'} },
						{ id: 'Michigan', info: { type: 'codsat', 'Name': 'CoD Sat Michigan', 'url': 'http://climate.cod.edu/data/satellite/1km/Michigan/current/Michigan.vis.gif'} },
						{ id: 'North_Dakota', info: { type: 'codsat', 'Name': 'CoD Sat North_Dakota', 'url': 'http://climate.cod.edu/data/satellite/1km/North_Dakota/current/North_Dakota.vis.gif'} }
					]
				}
			]
		}
	]
};