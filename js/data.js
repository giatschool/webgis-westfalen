//Attributfeldnamen der einzelnen Layer:
var attributeFields = [ 'Kreisname',
                        '',
                        'einwohner_.einwohner',
                        'einwohner_entwicklung_.einwohnerentwicklung',
                        'bevoelkerungsdichte_.bevölkerungsdichte',
                        'altersgruppen_._',
                        '',
                        'geburtenrate_.geburtenrate',
                        'sterberate_.sterberate',
                        'migration_gesamt_.migrationengesamt',
                        'migration_nichtdeutsch_.migrationennichtdeutsche',
                        '',
                        'pflegebeduerftige_.pflegebeduerftige',
                        'pflegeeinrichtungen_.pflegeeinrichtungen',
                        'haush',
                        'single_haushalte_.single_Haushalte',
                        'nichtdeutsche_.nichtdeutsche',
                        'migranten_.migranten',
                        'einkommen_.einkommen',
                        'konfessionen_.',
                        '',
'einwohner_Kommunen_entwicklungCheck', /////testing new "kommunenLayer"
'bevoelkerungsdichte_.bevölkerungsdichteKommunen' /////testing new "kommunenLayer"
                        ]; // used fields from the raw data

var diagramFields = new Array(attributeFields.length);

//Für die verschiedenen Layer verfügbare Jahreswerte:
var years = [   
				[],
                [],
                [1990, 2012, 'prognose2030'],
                ['19902012', '20122030'],
                [2012, 2013],
                [182011, 302011, 652011, 2011],
                [],
                ['20072011', '20102013'],
                ['20072011', '20102013'],
                ['20072011', '20102013'],
                ['20072011', '20102013'],
                [],
                [2011],
                [2009],
                [2010],
                [2010, 2012],
                [2000, 2011, 2013],
                [2008, 2011],
                [2009, 2012],
                ['römisch_katholisch2008_2010', 'evangelisch2008_2010', 'andere_konfessionslos2008_2010'],
                [],
                [1990, 2013, 2030], ///testing new "kommunenLayer"
                [2013], ///testing new "kommunenLayer"
                []
            ];

//Jahreswerte, welche beim Layerwechsel als erstes angezeigt werden sollen:
var initYearValues = [  0, ///testing new "kommunenLayer"
						0, ///testing new "kommunenLayer"
						0,
						0,
						0,
						0,
						0,
						0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0
                      
                    ];

var timesliderLabelValues = [
								['2013'],///testing new "kommunenLayer"
								['1990', '2013', '2030'], ///testing new "kommunenLayer"
								['0 - 17 Jahre', '18 - 29 Jahre', '30 - 64 Jahre', 'über 65 Jahre'],///testing new "kommunenLayer"
								['2010 - 2013'],//testing new "kummunenLayer"
								['2010 - 2013'],//testing new "kummunenLayer"
								['2010 - 2013'],
								['katholisch', 'evangelisch', 'andere'],
                       			[],
                       			[],
				                [],
				                ['1990', '2012', '2030 (Prognose)'],
				                ['1990 - 2012', '2012 - 2030 (Prognose)'],
				                ['2012', '2013'],
				                ['0 - 18 Jahre', '25 - 30 Jahre', '30 - 65 Jahre', 'über 65 Jahre'],
				                [],
				                ['2007 - 2011', '2010 - 2013'],
				                ['2007 - 2011', '2010 - 2013'],
				                ['2007 - 2011', '2010 - 2013'],
				                ['2007 - 2011', '2010 - 2013'],
				                [],
				                ['2011'],
				                ['2009'],
				                ['2010'],
				                ['2010', '2012'],
				                ['2000','2011', '2013'],
				                ['2008', '2011'],
				                ['2009', '2012'],
				                ['katholisch', 'evangelisch', 'andere'],
				                []
				            ];

var timesliderMinLabelValues = [
                        '',
				                '',
				                '1990',
				                '1990',
				                '2012',
				                '0',
				                '',
				                '2007 - 2011',
				                '2007 - 2011',
				                '2007 - 2011',
				                '2007 - 2011',
				                '',
				                '',
				                '',
				                '',
				                '2010',
				                '2000',
				                '2008',
				                '2009',
				                '',
				                '',
				                '',
				                ''
				            	];

var timesliderMaxLabelValues = [
                        '',
				                '',
				                '2030',
				                '2030',
				                '2013',
				                '> 65',
				                '',
				                '2010 - 2013',
				                '2010 - 2013',
				                '2010 - 2013',
				                '2010 - 2013',
				                '',
				                '',
				                '',
				                '',
				                '2012',
				                '2013',
				                '2011',
				                '2012',
				                '',
				                '',
				                '> 65',
				                ''
				            	];

var layerNames = [ 'Kreisname',
                        '',
                        'Einwohner',
                        'Einwohnerentwicklung',
                        'Bev&ouml;lkerungsdichte',
                        'Altersgruppen',
                        '',
                        'Geburtenrate',
                        'Sterberate',
                        'Zu-/Fortzüge Gesamt',
                        'Zu-/Fortzüge Nichtdeutsche',
                        '',
                        'Pflegebed&uuml;rftige',
                        'Pflegeplätze',
                        'Haushaltsgr&ouml;ssen',
                        'Single-Haushalte',
                        'Nichtdeutsche',
                        'Migranten',
                        'Einkommen',
                        'Konfessionen',
                        ''
                        ];

var shapeNames = [
	'Bottrop',
	'Gelsenkirchen',
	'Münster',
	'Borken',
	'Coesfeld',
	'Recklinghausen',
	'Steinfurt',
	'Warendorf',
	'Bielefeld',
	'Gütersloh',
	'Herford',
	'Höxter',
	'Lippe',
	'Minden-Lübbecke',
	'Paderborn',
	'Bochum',
	'Dortmund',
	'Hagen',
	'Hamm',
	'Herne',
	'Ennepe-Ruhr-Kreis',
	'Hochsauerlandkreis',
	'Märkischer Kreis',
	'Olpe',
	'Siegen-Wittgenstein',
	'Soest',
	'Unna',
];

var defaultClassification = [
	['Bottrop',				[255,255,255,0.5]	]	,
	['Gelsenkirchen',		[255,255,255,0.5]	]	,
	['Münster',				[255,255,255,0.5]	]	,
	['Borken',				[255,255,255,0.5]	]	,
	['Coesfeld',			[255,255,255,0.5]	]	,
	['Recklinghausen',		[255,255,255,0.5]	]	,
	['Steinfurt',			[255,255,255,0.5]	]	,
	['Warendorf',			[255,255,255,0.5]	]	,
	['Bielefeld',			[255,255,255,0.5]	]	,
	['Gütersloh',			[255,255,255,0.5]	]	,
	['Herford',				[255,255,255,0.5]	]	,
	['Höxter',				[255,255,255,0.5]	]	,
	['Lippe',				[255,255,255,0.5]	]	,
	['Minden-Lübbecke',		[255,255,255,0.5]	]	,
	['Paderborn',			[255,255,255,0.5]	]	,
	['Bochum',				[255,255,255,0.5]	]	,
	['Dortmund',			[255,255,255,0.5]	]	,
	['Hagen',				[255,255,255,0.5]	]	,
	['Hamm',				[255,255,255,0.5]	]	,
	['Herne',				[255,255,255,0.5]	]	,
	['Ennepe-Ruhr-Kreis',	[255,255,255,0.5]	]	,
	['Hochsauerlandkreis',	[255,255,255,0.5]	]	,
	['Märkischer Kreis',	[255,255,255,0.5]	]	,
	['Olpe',				[255,255,255,0.5]	]	,
	['Siegen-Wittgenstein',	[255,255,255,0.5]	]	,
	['Soest',				[255,255,255,0.5]	]	,
	['Unna',				[255,255,255,0.5]	]
];

var defaultClassificationKommunen = [  ///testing for "KommunenLayer" //// Allgemein eine dumme Lösung hier! Wird genutzuz von "getLayerData()"
	[
		'Bottrop', [255, 255, 255, 0.5]
	], [
		'Gelsenkirchen', [255, 255, 255, 0.5]
	], [
		'Münster', [255, 255, 255, 0.5]
	], [
		'Ahaus', [255, 255, 255, 0.5]
	], [
		'Bocholt', [255, 255, 255, 0.5]
	], [
		'Borken', [255, 255, 255, 0.5]
	], [
		'Gescher', [255, 255, 255, 0.5]
	], [
		'Gronau', [255, 255, 255, 0.5]
	], [
		'Heek', [255, 255, 255, 0.5]
	], [
		'Heiden', [255, 255, 255, 0.5]
	], [
		'Isselburg', [255, 255, 255, 0.5]
	], [
		'Legden', [255, 255, 255, 0.5]
	], [
		'Raesfeld', [255, 255, 255, 0.5]
	], [
		'Reken', [255, 255, 255, 0.5]
	], [
		'Rhede', [255, 255, 255, 0.5]
	], [
		'Schöppingen', [255, 255, 255, 0.5]
	], [
		'Stadtlohn', [255, 255, 255, 0.5]
	], [
		'Südlohn', [255, 255, 255, 0.5]
	], [
		'Velen', [255, 255, 255, 0.5]
	], [
		'Vreden', [255, 255, 255, 0.5]
	], [
		'Ascheberg', [255, 255, 255, 0.5]
	], [
		'Billerbeck', [255, 255, 255, 0.5]
	], [
		'Coesfeld', [255, 255, 255, 0.5]
	], [
		'Dülmen', [255, 255, 255, 0.5]
	], [
		'Havixbeck', [255, 255, 255, 0.5]
	], [
		'Lüdinghausen', [255, 255, 255, 0.5]
	], [
		'Nordkirchen', [255, 255, 255, 0.5]
	], [
		'Nottuln', [255, 255, 255, 0.5]
	], [
		'Olfen', [255, 255, 255, 0.5]
	], [
		'Rosendahl', [255, 255, 255, 0.5]
	], [
		'Senden', [255, 255, 255, 0.5]
	], [
		'Castrop-Rauxel', [255, 255, 255, 0.5]
	], [
		'Datteln', [255, 255, 255, 0.5]
	], [
		'Dorsten', [255, 255, 255, 0.5]
	], [
		'Gladbeck', [255, 255, 255, 0.5]
	], [
		'Haltern am See', [255, 255, 255, 0.5]
	], [
		'Herten', [255, 255, 255, 0.5]
	], [
		'Marl', [255, 255, 255, 0.5]
	], [
		'Oer-Erkenschwick', [255, 255, 255, 0.5]
	], [
		'Recklinghausen', [255, 255, 255, 0.5]
	], [
		'Waltrop', [255, 255, 255, 0.5]
	], [
		'Altenberge', [255, 255, 255, 0.5]
	], [
		'Emsdetten', [255, 255, 255, 0.5]
	], [
		'Greven', [255, 255, 255, 0.5]
	], [
		'Hörstel', [255, 255, 255, 0.5]
	], [
		'Hopsten', [255, 255, 255, 0.5]
	], [
		'Horstmar', [255, 255, 255, 0.5]
	], [
		'Ibbenbüren', [255, 255, 255, 0.5]
	], [
		'Ladbergen', [255, 255, 255, 0.5]
	], [
		'Laer', [255, 255, 255, 0.5]
	], [
		'Lengerich', [255, 255, 255, 0.5]
	], [
		'Lienen', [255, 255, 255, 0.5]
	], [
		'Lotte', [255, 255, 255, 0.5]
	], [
		'Metelen', [255, 255, 255, 0.5]
	], [
		'Mettingen', [255, 255, 255, 0.5]
	], [
		'Neuenkirchen', [255, 255, 255, 0.5]
	], [
		'Nordwalde', [255, 255, 255, 0.5]
	], [
		'Ochtrup', [255, 255, 255, 0.5]
	], [
		'Recke', [255, 255, 255, 0.5]
	], [
		'Rheine', [255, 255, 255, 0.5]
	], [
		'Saerbeck', [255, 255, 255, 0.5]
	], [
		'Steinfurt', [255, 255, 255, 0.5]
	], [
		'Tecklenburg', [255, 255, 255, 0.5]
	], [
		'Westerkappeln', [255, 255, 255, 0.5]
	], [
		'Wettringen', [255, 255, 255, 0.5]
	], [
		'Ahlen', [255, 255, 255, 0.5]
	], [
		'Beckum', [255, 255, 255, 0.5]
	], [
		'Beelen', [255, 255, 255, 0.5]
	], [
		'Drensteinfurt', [255, 255, 255, 0.5]
	], [
		'Ennigerloh', [255, 255, 255, 0.5]
	], [
		'Everswinkel', [255, 255, 255, 0.5]
	], [
		'Oelde', [255, 255, 255, 0.5]
	], [
		'Ostbevern', [255, 255, 255, 0.5]
	], [
		'Sassenberg', [255, 255, 255, 0.5]
	], [
		'Sendenhorst', [255, 255, 255, 0.5]
	], [
		'Telgte', [255, 255, 255, 0.5]
	], [
		'Wadersloh', [255, 255, 255, 0.5]
	], [
		'Warendorf', [255, 255, 255, 0.5]
	], [
		'Bielefeld', [255, 255, 255, 0.5]
	], [
		'Borgholzhausen', [255, 255, 255, 0.5]
	], [
		'Gütersloh', [255, 255, 255, 0.5]
	], [
		'Halle', [255, 255, 255, 0.5]
	], [
		'Harsewinkel', [255, 255, 255, 0.5]
	], [
		'Herzebrock-Clarholz', [255, 255, 255, 0.5]
	], [
		'Langenberg', [255, 255, 255, 0.5]
	], [
		'Rheda-Wiedenbrück', [255, 255, 255, 0.5]
	], [
		'Rietberg', [255, 255, 255, 0.5]
	], [
		'Schloß Holte-Stukenbrock', [255, 255, 255, 0.5]
	], [
		'Steinhagen', [255, 255, 255, 0.5]
	], [
		'Verl', [255, 255, 255, 0.5]
	], [
		'Versmold', [255, 255, 255, 0.5]
	], [
		'Werther', [255, 255, 255, 0.5]
	], [
		'Bünde', [255, 255, 255, 0.5]
	], [
		'Enger', [255, 255, 255, 0.5]
	], [
		'Herford', [255, 255, 255, 0.5]
	], [
		'Hiddenhausen', [255, 255, 255, 0.5]
	], [
		'Kirchlengern', [255, 255, 255, 0.5]
	], [
		'Löhne', [255, 255, 255, 0.5]
	], [
		'Rödinghausen', [255, 255, 255, 0.5]
	], [
		'Spenge', [255, 255, 255, 0.5]
	], [
		'Vlotho', [255, 255, 255, 0.5]
	], [
		'Bad Driburg', [255, 255, 255, 0.5]
	], [
		'Beverungen', [255, 255, 255, 0.5]
	], [
		'Borgentreich', [255, 255, 255, 0.5]
	], [
		'Brakel', [255, 255, 255, 0.5]
	], [
		'Höxter', [255, 255, 255, 0.5]
	], [
		'Marienmünster', [255, 255, 255, 0.5]
	], [
		'Nieheim', [255, 255, 255, 0.5]
	], [
		'Steinheim', [255, 255, 255, 0.5]
	], [
		'Warburg', [255, 255, 255, 0.5]
	], [
		'Willebadessen', [255, 255, 255, 0.5]
	], [
		'Augustdorf', [255, 255, 255, 0.5]
	], [
		'Bad Salzuflen', [255, 255, 255, 0.5]
	], [
		'Barntrup', [255, 255, 255, 0.5]
	], [
		'Blomberg', [255, 255, 255, 0.5]
	], [
		'Detmold', [255, 255, 255, 0.5]
	], [
		'Dörentrup', [255, 255, 255, 0.5]
	], [
		'Extertal', [255, 255, 255, 0.5]
	], [
		'Horn-Bad Meinberg', [255, 255, 255, 0.5]
	], [
		'Kalletal', [255, 255, 255, 0.5]
	], [
		'Lage', [255, 255, 255, 0.5]
	], [
		'Lemgo', [255, 255, 255, 0.5]
	], [
		'Leopoldshöhe', [255, 255, 255, 0.5]
	], [
		'Lügde', [255, 255, 255, 0.5]
	], [
		'Oerlinghausen', [255, 255, 255, 0.5]
	], [
		'Schieder-Schwalenberg', [255, 255, 255, 0.5]
	], [
		'Schlangen', [255, 255, 255, 0.5]
	], [
		'Bad Oeynhausen', [255, 255, 255, 0.5]
	], [
		'Espelkamp', [255, 255, 255, 0.5]
	], [
		'Hille', [255, 255, 255, 0.5]
	], [
		'Hüllhorst', [255, 255, 255, 0.5]
	], [
		'Lübbecke', [255, 255, 255, 0.5]
	], [
		'Minden', [255, 255, 255, 0.5]
	], [
		'Petershagen', [255, 255, 255, 0.5]
	], [
		'Porta Westfalica', [255, 255, 255, 0.5]
	], [
		'Preußisch Oldendorf', [255, 255, 255, 0.5]
	], [
		'Rahden', [255, 255, 255, 0.5]
	], [
		'Stemwede', [255, 255, 255, 0.5]
	], [
		'Altenbeken', [255, 255, 255, 0.5]
	], [
		'Bad Lippspringe', [255, 255, 255, 0.5]
	], [
		'Borchen', [255, 255, 255, 0.5]
	], [
		'Büren', [255, 255, 255, 0.5]
	], [
		'Delbrück', [255, 255, 255, 0.5]
	], [
		'Hövelhof', [255, 255, 255, 0.5]
	], [
		'Lichtenau', [255, 255, 255, 0.5]
	], [
		'Paderborn', [255, 255, 255, 0.5]
	], [
		'Salzkotten', [255, 255, 255, 0.5]
	], [
		'Bad Wünnenberg', [255, 255, 255, 0.5]
	], [
		'Bochum', [255, 255, 255, 0.5]
	], [
		'Dortmund', [255, 255, 255, 0.5]
	], [
		'Hagen', [255, 255, 255, 0.5]
	], [
		'Hamm', [255, 255, 255, 0.5]
	], [
		'Herne', [255, 255, 255, 0.5]
	], [
		'Breckerfeld', [255, 255, 255, 0.5]
	], [
		'Ennepetal', [255, 255, 255, 0.5]
	], [
		'Gevelsberg', [255, 255, 255, 0.5]
	], [
		'Hattingen', [255, 255, 255, 0.5]
	], [
		'Herdecke', [255, 255, 255, 0.5]
	], [
		'Schwelm', [255, 255, 255, 0.5]
	], [
		'Sprockhövel', [255, 255, 255, 0.5]
	], [
		'Wetter', [255, 255, 255, 0.5]
	], [
		'Witten', [255, 255, 255, 0.5]
	], [
		'Arnsberg', [255, 255, 255, 0.5]
	], [
		'Bestwig', [255, 255, 255, 0.5]
	], [
		'Brilon', [255, 255, 255, 0.5]
	], [
		'Eslohe', [255, 255, 255, 0.5]
	], [
		'Hallenberg', [255, 255, 255, 0.5]
	], [
		'Marsberg', [255, 255, 255, 0.5]
	], [
		'Medebach', [255, 255, 255, 0.5]
	], [
		'Meschede', [255, 255, 255, 0.5]
	], [
		'Olsberg', [255, 255, 255, 0.5]
	], [
		'Schmallenberg', [255, 255, 255, 0.5]
	], [
		'Sundern', [255, 255, 255, 0.5]
	], [
		'Winterberg', [255, 255, 255, 0.5]
	], [
		'Altena', [255, 255, 255, 0.5]
	], [
		'Balve', [255, 255, 255, 0.5]
	], [
		'Halver', [255, 255, 255, 0.5]
	], [
		'Hemer', [255, 255, 255, 0.5]
	], [
		'Herscheid', [255, 255, 255, 0.5]
	], [
		'Iserlohn', [255, 255, 255, 0.5]
	], [
		'Kierspe', [255, 255, 255, 0.5]
	], [
		'Lüdenscheid', [255, 255, 255, 0.5]
	], [
		'Meinerzhagen', [255, 255, 255, 0.5]
	], [
		'Menden', [255, 255, 255, 0.5]
	], [
		'Nachrodt-Wiblingwerde', [255, 255, 255, 0.5]
	], [
		'Neuenrade', [255, 255, 255, 0.5]
	], [
		'Plettenberg', [255, 255, 255, 0.5]
	], [
		'Schalksmühle', [255, 255, 255, 0.5]
	], [
		'Werdohl', [255, 255, 255, 0.5]
	], [
		'Attendorn', [255, 255, 255, 0.5]
	], [
		'Drolshagen', [255, 255, 255, 0.5]
	], [
		'Finnentrop', [255, 255, 255, 0.5]
	], [
		'Kirchhundem', [255, 255, 255, 0.5]
	], [
		'Lennestadt', [255, 255, 255, 0.5]
	], [
		'Olpe', [255, 255, 255, 0.5]
	], [
		'Wenden', [255, 255, 255, 0.5]
	], [
		'Bad Berleburg', [255, 255, 255, 0.5]
	], [
		'Burbach', [255, 255, 255, 0.5]
	], [
		'Erndtebrück', [255, 255, 255, 0.5]
	], [
		'Freudenberg', [255, 255, 255, 0.5]
	], [
		'Hilchenbach', [255, 255, 255, 0.5]
	], [
		'Kreuztal', [255, 255, 255, 0.5]
	], [
		'Bad Laasphe', [255, 255, 255, 0.5]
	], [
		'Netphen', [255, 255, 255, 0.5]
	], [
		'Neunkirchen', [255, 255, 255, 0.5]
	], [
		'Siegen', [255, 255, 255, 0.5]
	], [
		'Wilnsdorf', [255, 255, 255, 0.5]
	], [
		'Anröchte', [255, 255, 255, 0.5]
	], [
		'Bad Sassendorf', [255, 255, 255, 0.5]
	], [
		'Ense', [255, 255, 255, 0.5]
	], [
		'Erwitte', [255, 255, 255, 0.5]
	], [
		'Geseke', [255, 255, 255, 0.5]
	], [
		'Lippetal', [255, 255, 255, 0.5]
	], [
		'Lippstadt', [255, 255, 255, 0.5]
	], [
		'Möhnesee', [255, 255, 255, 0.5]
	], [
		'Rüthen', [255, 255, 255, 0.5]
	], [
		'Soest', [255, 255, 255, 0.5]
	], [
		'Warstein', [255, 255, 255, 0.5]
	], [
		'Welver', [255, 255, 255, 0.5]
	], [
		'Werl', [255, 255, 255, 0.5]
	], [
		'Wickede', [255, 255, 255, 0.5]
	], [
		'Bergkamen', [255, 255, 255, 0.5]
	], [
		'Bönen', [255, 255, 255, 0.5]
	], [
		'Fröndenberg', [255, 255, 255, 0.5]
	], [
		'Holzwickede', [255, 255, 255, 0.5]
	], [
		'Kamen', [255, 255, 255, 0.5]
	], [
		'Lünen', [255, 255, 255, 0.5]
	], [
		'Schwerte', [255, 255, 255, 0.5]
	], [
		'Selm', [255, 255, 255, 0.5]
	], [
		'Unna', [255, 255, 255, 0.5]
	], [
		'Werne', [255, 255, 255, 0.5]]
];

var allLayerAttributes = [
	//[dataset, 'Title (String)', 'Value (String)', 'Legend-description']
	[datenEinwohner, 'Einwohner-Entwicklung Absolut', '', ''],
	[datenEinwohnerEntwicklung, 'Einwohner-Entwicklung', '&#037;', ''],
	[datenBevoelkerungsdichte, 'Bevölkerungsdichte', '', 'Einheit: Einwohner pro km&sup2;'],
	[datenAltersgruppen, 'Altersgruppen 2015', '&#037;', ''],
	[datenGeburtenrate, 'Geburtenrate', '&permil;', 'je 1.000 Einwohner (&permil;)'],
	[datenSterberate, 'Sterberate', '&permil;', 'je 1.000 Einwohner (&permil;)'],
	[datenMigrationenGesamt, 'Zu-/Fortzüge (gesamt)', '&permil;', 'je 1.000 Einwohner (&permil;)'],
	[datenMigrationenNichtdeutsche, 'Zu-/Fortzüge (Nichtdeutsche)', '&permil;', 'je 1.000 Einwohner (&permil;)'],
	[datenPflegebeduerftige, 'Pflegebedürftige', '&permil;', ''],
	[datenPflegebeduerftigePflegeheim, 'Pflegebedürftige in Pflegeheimen', '&#037;', ''],
	[datenPflegeeinrichtungen, 'Pflegeplätze', '', 'Einheit: je 100000 Einwohner ab 65 J.'],
	[datenHaushaltsgroesse, 'Haushaltsgrößen', 'Personen', ''],
	[datenSingleHaushalte, 'Single-Haushalte', '&#037;', ''],
	[datenNichtdeutsche, 'Nichtdeutsche', '&#037;', ''],
	[datenMigranten, 'Menschen mit Migrationshintergrund', '&#037;', ''],
	[datenEinkommen, 'Einkommen', '&euro;', 'Einheit: &euro; je Einwohner'],
	[datenAbschlüsse, 'Abschlüsse 2013', '&#037;', ''],
	[datenArbeitslosenquote, 'Arbeitslosenquote', '&#037;', ''],
	[datenArbeitslosenquote25, 'Arbeitslosenquote unter 25 Jahre', '&#037;', ''],
	[datenArbeitslosenquote55, 'Arbeitslosenquote über 55 Jahre', '&#037;', ''],
	[datenArbeitslosenquoteND, 'Arbeitslosenquote Nichtdeutsche', '&#037;', ''],
	[datenErwerbstätige, 'Erwerbstätigen', '&#037;', ''],
	[datenBeschäftigte, 'Beschäftigte 2014', '', ''],
	[datenBIP, 'Bruttoinlandsprodukt (BIP)', '&euro;', ''],
	[datenPendlersaldo, 'Pendlersaldo', '', ''],
	[datenKonfessionen, 'Konfessionen 2011', '&#037;', ''],
	[datenPflegeheimPersonal, 'Personal in Pflegeheimen 2007 - 2013', '&#037;', ''],
	[datenEinwohnerKommunen, 'Einwohner-Entwicklung Absolut', '', ''], //testing new "GemeindeLayer"
	[datenEinwohnerEntwicklungKommunen, 'Einwohner-Entwicklung', '&#037;', ''],
	[datenBevoelkerungsdichteKommunen, 'Bevölkerungsdichte', '', 'Einheit: Einwohner pro km&sup2;'],  //testing new "GemeindeLayer"
	[datenAltersgruppenKommunen, 'Altersgruppen 2015', '&#037;', ''], //testing new "GemeindeLayer"
	[datenSterberateKommunen, 'Sterberate', '&permil;', ''], //testing new "GemeindeLayer"
	[datenGeburtenrateKommunen, 'Geburtenrate', '&permil;', 'je 1.000 Einwohner (&permil;)'],
	[datenMigrationenNichtdeutscheKommunen, 'Zu-/Fortzüge (Nichtdeutsche)', '&permil;', ''], //testing new "GemeindeLayer" 
	[datenMigrationenGesamtKommunen, 'Zu-/Fortzüge', '&permil;', ''],
	[datenNichtdeutscheKommunen, 'Nichtdeutsche', '&#037;', ''], //testing new "GemeindeLayer"
	[datenEinkommenKommunen, 'Einkommen', '&euro;', 'Einheit: &euro; je Einwohner'], //testing new "GemeindeLayer"
	[datenKonfessionenKommunen, 'Konfessionen 2011', '&#037;', ''], //testing new "GemeindeLayer"
	[datenBeschäftigteKommunen, 'Beschäftigte 2014', '', ''],
	[datenPendlersaldoKommunen, 'Pendlersaldo', '', ''],
];
