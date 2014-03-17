var trackconfig = 
{
	'menu': [
		{ id: 'IEM', info: { type: 'iem', name: 'IEM Messages', 'url': 'http://mesonet.agron.iastate.edu/projects/iembot/' } },
		{
			id: 'SPC Mesoanalysis',
			children: [
				{
					id: 'National',
					children: [
						{ id: 'TTD', info: { type: 'spcmeso', name: 'SPC Temp/Td/Wind', sector: 19, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s19/ttd/ttd.gif' } },
						{ id: '500mb', info: { type: 'spcmeso', name: 'SPC 500mb', sector: 19, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s19/500mb/500mb.gif' } },
						{ id: '700mb', info: { type: 'spcmeso', name: 'SPC 700mb', sector: 19, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s19/700mb/700mb.gif' } },
						{ id: '850mb', info: { type: 'spcmeso', name: 'SPC 850mb', sector: 19, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s19/850mb/850mb.gif' } },
						{ id: 'VTM', info: { type: 'spcmeso', name: 'SPC VTM', sector: 19, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s19/vtm/vtm.gif' } },
						{ id: 'MLCP', info: { type: 'spcmeso', name: 'SPC MLCAPE', sector: 19, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s19/mlcp/mlcp.gif' } },
						{ id: 'NCAP', info: { type: 'spcmeso', name: 'SPC NCAPE', sector: 19, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s19/ncap/ncap.gif' } },
						{ id: 'lllr/lllr', info: { type: 'spcmeso', name: 'SPC lllr/lllr', sector: 19, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s19/lllr/lllr.gif' } },
						{ id: 'ESHR', info: { type: 'spcmeso', name: 'SPC Eff Shear', sector: 19, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s19/eshr/eshr.gif' } },
						{ id: 'EFFH', info: { type: 'spcmeso', name: 'SPC Eff SRH', sector: 19, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s19/effh/effh.gif' } },
						{ id: 'SCP', info: { type: 'spcmeso', name: 'SPC SCP', sector: 19, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s19/scp/scp.gif' } },
						{ id: 'STPC', info: { type: 'spcmeso', name: 'SPC Eff STP', sector: 19, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s19/stpc/stpc.gif' } },
						{ id: 'VGP3', info: { type: 'spcmeso', name: 'SPC VGP', sector: 19, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s19/vgp3/vgp3.gif' } },
						{ id: 'LR3C', info: { type: 'spcmeso', name: 'SPC LR3C', sector: 19, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s19/lr3c/lr3c.gif' } }
					]
				},
				{
					id: 'NPlains',
					children: [
						{ id: 'TTD', info: { type: 'spcmeso', name: 'SPC TTD', sector: 13, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s13/ttd/ttd.gif' } },
						{ id: '500mb', info: { type: 'spcmeso', name: 'SPC 500mb', sector: 13, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s13/500mb/500mb.gif' } },
						{ id: '700mb', info: { type: 'spcmeso', name: 'SPC 700mb', sector: 13, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s13/700mb/700mb.gif' } },
						{ id: '850mb', info: { type: 'spcmeso', name: 'SPC 850mb', sector: 13, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s13/850mb/850mb.gif' } },
						{ id: 'VTM', info: { type: 'spcmeso', name: 'SPC VTM', sector: 13, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s13/vtm/vtm.gif' } },
						{ id: 'MLCP', info: { type: 'spcmeso', name: 'SPC MLCAPE', sector: 13, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s13/mlcp/mlcp.gif' } },
						{ id: 'NCAP', info: { type: 'spcmeso', name: 'SPC NCAPE', sector: 13, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s13/ncap/ncap.gif' } },
						{ id: 'lllr/lllr', info: { type: 'spcmeso', name: 'SPC lllr/lllr', sector: 13, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s13/lllr/lllr.gif' } },
						{ id: 'ESHR', info: { type: 'spcmeso', name: 'SPC Eff Shear', sector: 13, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s13/eshr/eshr.gif' } },
						{ id: 'EFFH', info: { type: 'spcmeso', name: 'SPC Eff SRH', sector: 13, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s13/effh/effh.gif' } },
						{ id: 'SCP', info: { type: 'spcmeso', name: 'SPC SCP', sector: 13, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s13/scp/scp.gif' } },
						{ id: 'STPC', info: { type: 'spcmeso', name: 'SPC Eff STP', sector: 13, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s13/stpc/stpc.gif' } },
						{ id: 'VGP3', info: { type: 'spcmeso', name: 'SPC VGP', sector: 13, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s13/vgp3/vgp3.gif' } },
						{ id: 'LR3C', info: { type: 'spcmeso', name: 'SPC LR3C', sector: 13, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s13/lr3c/lr3c.gif' } }
					]
				},
				{
					id: 'CPlains',
					children: [
						{ id: 'TTD', info: { type: 'spcmeso', name: 'SPC TTD', sector: 14, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s14/ttd/ttd.gif' } },
						{ id: '500mb', info: { type: 'spcmeso', name: 'SPC 500mb', sector: 14, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s14/500mb/500mb.gif' } },
						{ id: '700mb', info: { type: 'spcmeso', name: 'SPC 700mb', sector: 14, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s14/700mb/700mb.gif' } },
						{ id: '850mb', info: { type: 'spcmeso', name: 'SPC 850mb', sector: 14, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s14/850mb/850mb.gif' } },
						{ id: 'VTM', info: { type: 'spcmeso', name: 'SPC VTM', sector: 14, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s14/vtm/vtm.gif' } },
						{ id: 'MLCP', info: { type: 'spcmeso', name: 'SPC MLCAPE', sector: 14, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s14/mlcp/mlcp.gif' } },
						{ id: 'NCAP', info: { type: 'spcmeso', name: 'SPC NCAPE', sector: 14, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s14/ncap/ncap.gif' } },
						{ id: 'lllr/lllr', info: { type: 'spcmeso', name: 'SPC lllr/lllr', sector: 14, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s14/lllr/lllr.gif' } },
						{ id: 'ESHR', info: { type: 'spcmeso', name: 'SPC Eff Shear', sector: 14, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s14/eshr/eshr.gif' } },
						{ id: 'EFFH', info: { type: 'spcmeso', name: 'SPC Eff SRH', sector: 14, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s14/effh/effh.gif' } },
						{ id: 'SCP', info: { type: 'spcmeso', name: 'SPC SCP', sector: 14, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s14/scp/scp.gif' } },
						{ id: 'STPC', info: { type: 'spcmeso', name: 'SPC Eff STP', sector: 14, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s14/stpc/stpc.gif' } },
						{ id: 'VGP3', info: { type: 'spcmeso', name: 'SPC VGP', sector: 14, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s14/vgp3/vgp3.gif' } },
						{ id: 'LR3C', info: { type: 'spcmeso', name: 'SPC LR3C', sector: 14, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s14/lr3c/lr3c.gif' } }
					]
				},
				{
					id: 'SPlains',
					children: [
						{ id: 'TTD', info: { type: 'spcmeso', name: 'SPC TTD', sector: 15, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s15/ttd/ttd.gif' } },
						{ id: '500mb', info: { type: 'spcmeso', name: 'SPC 500mb', sector: 15, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s15/500mb/500mb.gif' } },
						{ id: '700mb', info: { type: 'spcmeso', name: 'SPC 700mb', sector: 15, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s15/700mb/700mb.gif' } },
						{ id: '850mb', info: { type: 'spcmeso', name: 'SPC 850mb', sector: 15, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s15/850mb/850mb.gif' } },
						{ id: 'VTM', info: { type: 'spcmeso', name: 'SPC VTM', sector: 15, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s15/vtm/vtm.gif' } },
						{ id: 'MLCP', info: { type: 'spcmeso', name: 'SPC MLCAPE', sector: 15, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s15/mlcp/mlcp.gif' } },
						{ id: 'NCAP', info: { type: 'spcmeso', name: 'SPC NCAPE', sector: 15, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s15/ncap/ncap.gif' } },
						{ id: 'lllr/lllr', info: { type: 'spcmeso', name: 'SPC lllr/lllr', sector: 15, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s15/lllr/lllr.gif' } },
						{ id: 'ESHR', info: { type: 'spcmeso', name: 'SPC Eff Shear', sector: 15, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s15/eshr/eshr.gif' } },
						{ id: 'EFFH', info: { type: 'spcmeso', name: 'SPC Eff SRH', sector: 15, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s15/effh/effh.gif' } },
						{ id: 'SCP', info: { type: 'spcmeso', name: 'SPC SCP', sector: 15, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s15/scp/scp.gif' } },
						{ id: 'STPC', info: { type: 'spcmeso', name: 'SPC Eff STP', sector: 15, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s15/stpc/stpc.gif' } },
						{ id: 'VGP3', info: { type: 'spcmeso', name: 'SPC VGP', sector: 15, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s15/vgp3/vgp3.gif' } },
						{ id: 'LR3C', info: { type: 'spcmeso', name: 'SPC LR3C', sector: 15, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s15/lr3c/lr3c.gif' } }
					]
				},
				{
					id: 'Midwest',
					children: [
						{ id: 'TTD', info: { type: 'spcmeso', name: 'SPC TTD', sector: 20, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s20/ttd/ttd.gif' } },
						{ id: '500mb', info: { type: 'spcmeso', name: 'SPC 500mb', sector: 20, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s20/500mb/500mb.gif' } },
						{ id: '700mb', info: { type: 'spcmeso', name: 'SPC 700mb', sector: 20, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s20/700mb/700mb.gif' } },
						{ id: '850mb', info: { type: 'spcmeso', name: 'SPC 850mb', sector: 20, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s20/850mb/850mb.gif' } },
						{ id: 'VTM', info: { type: 'spcmeso', name: 'SPC VTM', sector: 20, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s20/vtm/vtm.gif' } },
						{ id: 'MLCP', info: { type: 'spcmeso', name: 'SPC MLCAPE', sector: 20, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s20/mlcp/mlcp.gif' } },
						{ id: 'NCAP', info: { type: 'spcmeso', name: 'SPC NCAPE', sector: 20, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s20/ncap/ncap.gif' } },
						{ id: 'lllr/lllr', info: { type: 'spcmeso', name: 'SPC lllr/lllr', sector: 20, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s20/lllr/lllr.gif' } },
						{ id: 'ESHR', info: { type: 'spcmeso', name: 'SPC Eff Shear', sector: 20, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s20/eshr/eshr.gif' } },
						{ id: 'EFFH', info: { type: 'spcmeso', name: 'SPC Eff SRH', sector: 20, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s20/effh/effh.gif' } },
						{ id: 'SCP', info: { type: 'spcmeso', name: 'SPC SCP', sector: 20, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s20/scp/scp.gif' } },
						{ id: 'STPC', info: { type: 'spcmeso', name: 'SPC Eff STP', sector: 20, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s20/stpc/stpc.gif' } },
						{ id: 'VGP3', info: { type: 'spcmeso', name: 'SPC VGP', sector: 20, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s20/vgp3/vgp3.gif' } },
						{ id: 'LR3C', info: { type: 'spcmeso', name: 'SPC LR3C', sector: 20, url: 'http://www.spc.noaa.gov/exper/mesoanalysis/s20/lr3c/lr3c.gif' } }
					]
				}
			]
		},
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