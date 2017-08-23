var datenEinwohner = [
  {
    'Name': 'Jahre',
    'Data': [1990, 2015, 2040]
  }, {
    'Name': 'Bottrop',
    'Data': [118936, 117143, 105875]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [293714, 260368, 248100]
  }, {
    'Name': 'Münster',
    'Data': [259438, 310039, 349353]
  }, {
    'Name': 'Borken',
    'Data': [320580, 369666, 339809]
  }, {
    'Name': 'Coesfeld',
    'Data': [184241, 218401, 208616]
  }, {
    'Name': 'Recklinghausen',
    'Data': [651588, 617807, 562995]
  }, {
    'Name': 'Steinfurt',
    'Data': [390945, 443374, 430199]
  }, {
    'Name': 'Warendorf',
    'Data': [257028, 277431, 264479]
  }, {
    'Name': 'Bielefeld',
    'Data': [319037, 333090, 336623]
  }, {
    'Name': 'Gütersloh',
    'Data': [303829, 360642, 361115]
  }, {
    'Name': 'Herford',
    'Data': [238231, 252122, 229975]
  }, {
    'Name': 'Höxter',
    'Data': [146238, 144010, 119884]
  }, {
    'Name': 'Lippe',
    'Data': [340202, 350750, 309720]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [298771, 313050, 282040]
  }, {
    'Name': 'Paderborn',
    'Data': [249096, 304332, 304139]
  }, {
    'Name': 'Bochum',
    'Data': [396486, 364742, 345390]
  }, {
    'Name': 'Dortmund',
    'Data': [599055, 586181, 605141]
  }, {
    'Name': 'Hagen',
    'Data': [214449, 189044, 168006]
  }, {
    'Name': 'Hamm',
    'Data': [179639, 179397, 175202]
  }, {
    'Name': 'Herne',
    'Data': [178132, 155851, 148620]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [349412, 325954, 296992]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [268627, 263762, 220085]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [443026, 416171, 337188]
  }, {
    'Name': 'Olpe',
    'Data': [130471, 136365, 120243]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [288922, 280800, 255253]
  }, {
    'Name': 'Soest',
    'Data': [277333, 302995, 276689]
  }, {
    'Name': 'Unna',
    'Data': [406434, 396035, 356288]
  }
];

/*var datenEinwohnerEntwicklung = [ //alte Daten
  {
    'Name':'Jahre',
    'Data': ['1990 - 2012', '2012 - 2030']
  },
  {
    'Name':'Bottrop',
    'Data': [-2, -8]
  },
  {
    'Name':'Gelsenkirchen',
    'Data': [-13, -9]
  },
  {
    'Name':'Münster',
    'Data': [13, 12]
  },
  {
    'Name':'Borken',
    'Data': [15, -3]
  },
  {
    'Name':'Coesfeld',
    'Data': [19, -3]
  },
  {
    'Name':'Recklinghausen',
    'Data': [-4, -9]
  },
  {
    'Name':'Steinfurt',
    'Data': [13, -2]
  },
  {
    'Name':'Warendorf',
    'Data': [8, -4]
  },
  {
    'Name':'Bielefeld',
    'Data': [1, -2]
  },
  {
    'Name':'Gütersloh',
    'Data': [17, 0]
  },
  {
    'Name':'Herford',
    'Data': [4, -8]
  },
  {
    'Name':'Höxter',
    'Data': [-1, -15]
  },
  {
    'Name':'Lippe',
    'Data': [2, -9]
  },
  {
    'Name':'Minden-Lübbecke',
    'Data': [4, -9]
  },
  {
    'Name':'Paderborn',
    'Data': [21, 1]
  },
  {
    'Name':'Bochum',
    'Data': [-6, -8]
  },
  {
    'Name':'Dortmund',
    'Data': [-3, -3]
  },
  {
    'Name':'Hagen',
    'Data': [-13, -14]
  },
  {
    'Name':'Hamm',
    'Data': [1, -2]
  },
  {
    'Name':'Herne',
    'Data': [-8, -10]
  },
  {
    'Name':'Ennepe-Ruhr-Kreis',
    'Data': [-6, -11]
  },
  {
    'Name':'Hochsauerlandkreis',
    'Data': [-1, -12]
  },
  {
    'Name':'Märkischer Kreis',
    'Data': [-4, -14]
  },
  {
    'Name':'Olpe',
    'Data': [6, -9]
  },
  {
    'Name':'Siegen-Wittgenstein',
    'Data': [-3, -10]
  },
  {
    'Name':'Soest',
    'Data': [10, -6]
  },
  {
    'Name':'Unna',
    'Data': [0, -8]
  }
];*/

var datenEinwohnerEntwicklung = [
  {
    'Name': 'Jahre',
    'Data': ['1990 - 2015', '2015 - 2040']
  }, {
    'Name': 'Bottrop',
    'Data': [-1.5, -9.6]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [-11.4, -4.7]
  }, {
    'Name': 'Münster',
    'Data': [19.5, 12.7]
  }, {
    'Name': 'Borken',
    'Data': [15.3, -8.1]
  }, {
    'Name': 'Coesfeld',
    'Data': [18.5, -4.5]
  }, {
    'Name': 'Recklinghausen',
    'Data': [-5.2, -8.9]
  }, {
    'Name': 'Steinfurt',
    'Data': [13.4, -3]
  }, {
    'Name': 'Warendorf',
    'Data': [7.9, -4.7]
  }, {
    'Name': 'Bielefeld',
    'Data': [4.4, 1.1]
  }, {
    'Name': 'Gütersloh',
    'Data': [18.7, 0.1]
  }, {
    'Name': 'Herford',
    'Data': [5.8, -8.8]
  }, {
    'Name': 'Höxter',
    'Data': [-1.5, -16.8]
  }, {
    'Name': 'Lippe',
    'Data': [3.1, -11.7]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [4.8, -9.9]
  }, {
    'Name': 'Paderborn',
    'Data': [22.2, -0.1]
  }, {
    'Name': 'Bochum',
    'Data': [-8, -5.3]
  }, {
    'Name': 'Dortmund',
    'Data': [-2.1, 3.2]
  }, {
    'Name': 'Hagen',
    'Data': [-11.8, -11.1]
  }, {
    'Name': 'Hamm',
    'Data': [-0.1, -2.3]
  }, {
    'Name': 'Herne',
    'Data': [-12.5, -4.6]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [-6.7, -8.9]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [-1.8, -16.6]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [-6.1, -19]
  }, {
    'Name': 'Olpe',
    'Data': [4.5, -11.8]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [-2.8, -9.1]
  }, {
    'Name': 'Soest',
    'Data': [9.3, -8.7]
  }, {
    'Name': 'Unna',
    'Data': [-2.6, -10]
  }
];

var datenBevoelkerungsdichte = [
  {
    'Name':'Jahre',
    'Data': [2012, 2013, 2015]
  },
  {
    'Name':'Bottrop',
    'Data': [1154, 1146, 1164.3]
  },
  {
    'Name':'Gelsenkirchen',
    'Data': [2444, 2442, 2481]
  },
  {
    'Name':'Münster',
    'Data': [966, 983, 1022.3]
  },
  {
    'Name':'Borken',
    'Data': [260, 260, 260.1]
  },
  {
    'Name':'Coesfeld',
    'Data': [197, 197, 196.4]
  },
  {
    'Name':'Recklinghausen',
    'Data': [821, 817, 811.5]
  },
  {
    'Name':'Steinfurt',
    'Data': [247, 246, 246.9]
  },
  {
    'Name':'Warendorf',
    'Data': [210, 210, 210.3]
  },
  {
    'Name':'Bielefeld',
    'Data': [1256, 1256, 1286.9]
  },
  {
    'Name':'Gütersloh',
    'Data': [367, 367, 372.1]
  },
  {
    'Name':'Herford',
    'Data': [549, 548, 559.8]
  },
  {
    'Name':'Höxter',
    'Data': [121, 120, 119.9]
  },
  {
    'Name':'Lippe',
    'Data': [280, 278, 281.5]
  },
  {
    'Name':'Minden-Lübbecke',
    'Data': [271, 270, 271.6]
  },
  {
    'Name':'Paderborn',
    'Data': [241, 242, 244.1]
  },
  {
    'Name':'Bochum',
    'Data': [2561, 2560, 2504]
  },
  {
    'Name':'Dortmund',
    'Data': [2070, 2086, 2088.2]
  },
  {
    'Name':'Hagen',
    'Data': [1165, 1160, 1178.2]
  },
  {
    'Name':'Hamm',
    'Data': [805, 802, 792.3]
  },
  {
    'Name':'Herne',
    'Data': [3187, 3185, 3030.9]
  },
  {
    'Name':'Ennepe-Ruhr-Kreis',
    'Data': [806, 802, 795.7]
  },
  {
    'Name':'Hochsauerlandkreis',
    'Data': [135, 134, 134.6]
  },
  {
    'Name':'Märkischer Kreis',
    'Data': [403, 398, 392.2]
  },
  {
    'Name':'Olpe',
    'Data': [194, 193, 191.5]
  },
  {
    'Name':'Siegen-Wittgenstein',
    'Data': [248, 247, 247.9]
  },
  {
    'Name':'Soest',
    'Data': [229, 227, 228]
  },
  {
    'Name':'Unna',
    'Data': [753, 748, 729.1]
  }
];

var datenAltersgruppen = [
  {
    'Name':'Jahre',
    'Data': ['0 - 17', '18 - 29', '30 - 64', '> 65']
  },
  {
    'Name':'Bottrop',
    'Data': [16, 14, 50, 21]
  },
  {
    'Name':'Gelsenkirchen',
    'Data': [17, 16, 47, 21]
  },
  {
    'Name':'Münster',
    'Data': [15, 21, 47, 17]
  },
  {
    'Name':'Borken',
    'Data': [20, 15, 48, 17]
  },
  {
    'Name':'Coesfeld',
    'Data': [19, 14, 49, 18]
  },
  {
    'Name':'Recklinghausen',
    'Data': [16, 13, 49, 21]
  },
  {
    'Name':'Steinfurt',
    'Data': [19, 14, 48, 19]
  },
  {
    'Name':'Warendorf',
    'Data': [19, 14, 48, 19]
  },
  {
    'Name':'Bielefeld',
    'Data': [17, 16, 46, 20]
  },
  {
    'Name':'Gütersloh',
    'Data': [19, 14, 48, 19]
  },
  {
    'Name':'Herford',
    'Data': [18, 13, 47, 22]
  },
  {
    'Name':'Höxter',
    'Data': [18, 14, 48, 21]
  },
  {
    'Name':'Lippe',
    'Data': [18, 14, 46, 22]
  },
  {
    'Name':'Minden-Lübbecke',
    'Data': [18, 14, 47, 21]
  },
  {
    'Name':'Paderborn',
    'Data': [19, 16, 48, 17]
  },
  {
    'Name':'Bochum',
    'Data': [14, 16, 49, 21]
  },
  {
    'Name':'Dortmund',
    'Data': [16, 15, 48, 21]
  },
  {
    'Name':'Hagen',
    'Data': [17, 14, 47, 23]
  },
  {
    'Name':'Hamm',
    'Data': [18, 14, 49, 20]
  },
  {
    'Name':'Herne',
    'Data': [15, 14, 50, 22]
  },
  {
    'Name':'Ennepe-Ruhr-Kreis',
    'Data': [16, 13, 49, 23]
  },
  {
    'Name':'Hochsauerlandkreis',
    'Data': [18, 14, 47, 21]
  },
  {
    'Name':'Märkischer Kreis',
    'Data': [17, 14, 48, 21]
  },
  {
    'Name':'Olpe',
    'Data': [18, 14, 49, 19]
  },
  {
    'Name':'Siegen-Wittgenstein',
    'Data': [16, 15, 48, 20]
  },
  {
    'Name':'Soest',
    'Data': [18, 14, 49, 20]
  },
  {
    'Name':'Unna',
    'Data': [17, 12, 50, 21]
  }
];

var datenGeburtenrate = [
  {
    'Name': 'Jahre',
    'Data': ['2007', '2009', '2011', '2013', '2015']
  }, {
    'Name': 'Bottrop',
    'Data': [7.5, 7.5, 7, 7, 8]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [8.5, 8.5, 7.6, 7.9, 9.5]
  }, {
    'Name': 'Münster',
    'Data': [9.2, 9.2, 9.3, 9.5, 10.1]
  }, {
    'Name': 'Borken',
    'Data': [9.3, 8.7, 8.9, 8.7, 9.5]
  }, {
    'Name': 'Coesfeld',
    'Data': [8.2, 7.7, 7.5, 7.7, 8.6]
  }, {
    'Name': 'Recklinghausen',
    'Data': [7.6, 7.2, 7.3, 7.6, 8.1]
  }, {
    'Name': 'Steinfurt',
    'Data': [8.6, 8.3, 8.2, 8.3, 8.8]
  }, {
    'Name': 'Warendorf',
    'Data': [8.8, 8.1, 7.9, 8, 8.7]
  }, {
    'Name': 'Bielefeld',
    'Data': [9.4, 9, 9.2, 9.2, 9.8]
  }, {
    'Name': 'Gütersloh',
    'Data': [9, 8.5, 8.6, 8.7, 9.2]
  }, {
    'Name': 'Herford',
    'Data': [8.6, 8.2, 7.8, 8, 8.8]
  }, {
    'Name': 'Höxter',
    'Data': [8.3, 7.8, 7.2, 7.5, 7.7]
  }, {
    'Name': 'Lippe',
    'Data': [8.9, 8.4, 8, 8.4, 8.9]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [8.6, 8.3, 8.3, 8.1, 8.6]
  }, {
    'Name': 'Paderborn',
    'Data': [9.7, 9.5, 9.4, 9.4, 10.2]
  }, {
    'Name': 'Bochum',
    'Data': [7.4, 7.2, 7.4, 7.8, 8.3]
  }, {
    'Name': 'Dortmund',
    'Data': [8.3, 8.2, 8.2, 8.6, 9.4]
  }, {
    'Name': 'Hagen',
    'Data': [8.2, 7.6, 7.6, 8.1, 9.3]
  }, {
    'Name': 'Hamm',
    'Data': [8.6, 8.4, 8, 8.9, 9.1]
  }, {
    'Name': 'Herne',
    'Data': [7.4, 7.2, 7.7, 7.8, 8.4]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [7.3, 7, 7, 7.3, 7.9]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [8.3, 7.8, 7.2, 7.5, 7.7]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [8.4, 7.9, 7.9, 7.9, 8.6]
  }, {
    'Name': 'Olpe',
    'Data': [8.5, 7.9, 8.1, 8.2, 9.3]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [7.8, 7.6, 8, 7.9, 8.8]
  }, {
    'Name': 'Soest',
    'Data': [8.6, 8.1, 8, 8, 8.7]
  }, {
    'Name': 'Unna',
    'Data': [7.5, 7.1, 7.1, 7.7, 8]
  }

];

/*var datenGeburtenrate = [
  {
    'Name':'Jahre',
    'Data': ['2007 - 2011', '2010 - 2013']
  },
  {
    'Name':'Bottrop',
    'Data': [7, 7.1]
  },
  {
    'Name':'Gelsenkirchen',
    'Data': [8, 8]
  },
  {
    'Name':'Münster',
    'Data': [9, 9.4]
  },
  {
    'Name':'Borken',
    'Data': [9, 8.7]
  },
  {
    'Name':'Coesfeld',
    'Data': [8, 7.5]
  },
  {
    'Name':'Recklinghausen',
    'Data': [7, 7.3]
  },
  {
    'Name':'Steinfurt',
    'Data': [8, 8.2]
  },
  {
    'Name':'Warendorf',
    'Data': [8, 7.9]
  },
  {
    'Name':'Bielefeld',
    'Data': [9, 9.4]
  },
  {
    'Name':'Gütersloh',
    'Data': [9, 8.6]
  },
  {
    'Name':'Herford',
    'Data': [8, 8.0]
  },
  {
    'Name':'Höxter',
    'Data': [8, 7.3]
  },
  {
    'Name':'Lippe',
    'Data': [9, 8.3]
  },
  {
    'Name':'Minden-Lübbecke',
    'Data': [8, 8.2]
  },
  {
    'Name':'Paderborn',
    'Data': [9, 9.1]
  },
  {
    'Name':'Bochum',
    'Data': [7, 7.4]
  },
  {
    'Name':'Dortmund',
    'Data': [8, 8.3]
  },
  {
    'Name':'Hagen',
    'Data': [8, 7.8]
  },
  {
    'Name':'Hamm',
    'Data': [8, 8.2]
  },
  {
    'Name':'Herne',
    'Data': [7, 7.4]
  },
  {
    'Name':'Ennepe-Ruhr-Kreis',
    'Data': [7, 7.0]
  },
  {
    'Name':'Hochsauerlandkreis',
    'Data': [8, 7.3]
  },
  {
    'Name':'Märkischer Kreis',
    'Data': [8, 8]
  },
  {
    'Name':'Olpe',
    'Data': [8, 8.1]
  },
  {
    'Name':'Siegen-Wittgenstein',
    'Data': [8, 7.8]
  },
  {
    'Name':'Soest',
    'Data': [8, 7.8]
  },
  {
    'Name':'Unna',
    'Data': [7, 7.1]
  } //alte Daten //alte Daten
];*/

var datenSterberate = [
  {
    'Name': 'Jahre',
    'Data': ['2007', '2009', '2011', '2013', '2015']
  }, {
    'Name': 'Bottrop',
    'Data': [11, 12.3, 11.3, 12.4, 12.9]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [12.9, 13.4, 13.3, 13.3, 13.2]
  }, {
    'Name': 'Münster',
    'Data': [8.4, 8.8, 8.4, 8.3, 8.5]
  }, {
    'Name': 'Borken',
    'Data': [8.7, 8.8, 9.3, 9.4, 10]
  }, {
    'Name': 'Coesfeld',
    'Data': [8.9, 8.9, 9.5, 10.1, 10]
  }, {
    'Name': 'Recklinghausen',
    'Data': [11.5, 12, 12.2, 12.7, 12.7]
  }, {
    'Name': 'Steinfurt',
    'Data': [8.7, 9.3, 9.4, 9.8, 10.2]
  }, {
    'Name': 'Warendorf',
    'Data': [8.9, 9.4, 9.7, 10.5, 9.9]
  }, {
    'Name': 'Bielefeld',
    'Data': [10.4, 10.9, 10.1, 10.8, 10.7]
  }, {
    'Name': 'Gütersloh',
    'Data': [8.8, 9.1, 8.7, 9.8, 9.7]
  }, {
    'Name': 'Herford',
    'Data': [10.9, 11.2, 10.9, 11.7, 11.9]
  }, {
    'Name': 'Höxter',
    'Data': [10.1, 11.3, 11, 12.5, 11.9]
  }, {
    'Name': 'Lippe',
    'Data': [11, 11.3, 11.7, 12, 12.3]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [11, 11.4, 11.7, 11.9, 11.7]
  }, {
    'Name': 'Paderborn',
    'Data': [8.3, 8.3, 8.5, 9, 9.2]
  }, {
    'Name': 'Bochum',
    'Data': [11.2, 11.7, 12.1, 12.6, 12.7]
  }, {
    'Name': 'Dortmund',
    'Data': [11.4, 11.6, 11.8, 12.1, 12.3]
  }, {
    'Name': 'Hagen',
    'Data': [12, 12.2, 12.8, 13.3, 13.5]
  }, {
    'Name': 'Hamm',
    'Data': [10.7, 11.1, 11.2, 11.5, 11.9]
  }, {
    'Name': 'Herne',
    'Data': [12.1, 12.6, 13.3, 13.8, 13.6]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [12.1, 12.2, 12.5, 13.4, 13.5]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [10.7, 11, 11.3, 11.8, 12.6]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [10.4, 11.1, 10.8, 12, 12.2]
  }, {
    'Name': 'Olpe',
    'Data': [9.2, 9.5, 10.5, 11.1, 11]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [10.5, 10.8, 11.2, 11.7, 11.6]
  }, {
    'Name': 'Soest',
    'Data': [10.6, 10.7, 11, 12.2, 11.9]
  }, {
    'Name': 'Unna',
    'Data': [10, 10.6, 11.4, 12.5, 12.8]
  }
];

/*var datenSterberate = [
  {
    'Name':'Jahre',
    'Data': ['2007 - 2011', '2010 - 2013']
  },
  {
    'Name':'Bottrop',
    'Data': [12, 11.9]
  },
  {
    'Name':'Gelsenkirchen',
    'Data': [13, 13.3]
  },
  {
    'Name':'Münster',
    'Data': [9, 8.4]
  },
  {
    'Name':'Borken',
    'Data': [9, 9.2]
  },
  {
    'Name':'Coesfeld',
    'Data': [9, 9.4]
  },
  {
    'Name':'Recklinghausen',
    'Data': [12, 12.2]
  },
  {
    'Name':'Steinfurt',
    'Data': [9, 9.5]
  },
  {
    'Name':'Warendorf',
    'Data': [9, 9.8]
  },
  {
    'Name':'Bielefeld',
    'Data': [11, 10.6]
  },
  {
    'Name':'Gütersloh',
    'Data': [9, 9.3]
  },
  {
    'Name':'Herford',
    'Data': [11, 11.5]
  },
  {
    'Name':'Höxter',
    'Data': [11, 11.7]
  },
  {
    'Name':'Lippe',
    'Data': [11, 11.5]
  },
  {
    'Name':'Minden-Lübbecke',
    'Data': [11, 11.7]
  },
  {
    'Name':'Paderborn',
    'Data': [8, 8.5]
  },
  {
    'Name':'Bochum',
    'Data': [12, 11.9]
  },
  {
    'Name':'Dortmund',
    'Data': [12, 11.7]
  },
  {
    'Name':'Hagen',
    'Data': [12, 12.9]
  },
  {
    'Name':'Hamm',
    'Data': [11, 10.9]
  },
  {
    'Name':'Herne',
    'Data': [12, 12.9]
  },
  {
    'Name':'Ennepe-Ruhr-Kreis',
    'Data': [12, 12.6]
  },
  {
    'Name':'Hochsauerlandkreis',
    'Data': [11, 11.2]
  },
  {
    'Name':'Märkischer Kreis',
    'Data': [11, 11.3]
  },
  {
    'Name':'Olpe',
    'Data': [10, 10.4]
  },
  {
    'Name':'Siegen-Wittgenstein',
    'Data': [11, 11.2]
  },
  {
    'Name':'Soest',
    'Data': [11, 11.1]
  },
  {
    'Name':'Unna',
    'Data': [11, 11.6]
  }//alte Daten //alte Daten
];*/

var datenMigrationenGesamt = [
  {
    'Name': 'Jahre',
    'Data': ['2007', '2009', '2011', '2013', '2015']
  }, {
    'Name': 'Bottrop',
    'Data': [0.3, 0.5, 0.9, 1.6, 14.5]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [-3.2, -4.1, 0.6, 5.5, 13.9]
  }, {
    'Name': 'Münster',
    'Data': [2.3, 5.6, 39.9, 8.9, 22.9]
  }, {
    'Name': 'Borken',
    'Data': [1.2, -1.7, -0.9, 1.9, 12.3]
  }, {
    'Name': 'Coesfeld',
    'Data': [0.2, -0.6, -2.2, 2, 12.3]
  }, {
    'Name': 'Recklinghausen',
    'Data': [-1.7, -1, -0.4, 1.7, 12]
  }, {
    'Name': 'Steinfurt',
    'Data': [1.5, -0.7, -1.2, 1.5, 15.3]
  }, {
    'Name': 'Warendorf',
    'Data': [-3.7, -2.5, -2.2, 1.6, 15.4]
  }, {
    'Name': 'Bielefeld',
    'Data': [-1.9, 0.2, 1.3, 3.2, 10.5]
  }, {
    'Name': 'Gütersloh',
    'Data': [0.3, -0.6, 2.5, 3, 17.4]
  }, {
    'Name': 'Herford',
    'Data': [-0.9, -2.3, -2, 2.7, 14.4]
  }, {
    'Name': 'Höxter',
    'Data': [-7.1, -5.4, -4.8, -1.7, 13]
  }, {
    'Name': 'Lippe',
    'Data': [-2.3, -3.2, -2, -0.3, 19.4]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [-2.1, -2.9, -2.8, 1.5, 15.2]
  }, {
    'Name': 'Paderborn',
    'Data': [-2.4, -0.5, 3.5, 1.4, 16.1]
  }, {
    'Name': 'Bochum',
    'Data': [-1.9, -1.6, 2.6, 2.6, 11.9]
  }, {
    'Name': 'Dortmund',
    'Data': [1.9, -2, 4.5, 8.8, 11.1]
  }, {
    'Name': 'Hagen',
    'Data': [-6.1, -6.1, -0.6, 3.2, 15.9]
  }, {
    'Name': 'Hamm',
    'Data': [-1.2, -1.2, 5.2, 0.3, 18]
  }, {
    'Name': 'Herne',
    'Data': [-4.5, -2.5, 2.2, 5.1, 13.2]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [-1.4, -1.4, 0.3, 1.2, 14.8]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [-3.5, -4, -4.8, -2.3, 12.8]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [-5.6, -5.5, -3.1, -5, 8.8]
  }, {
    'Name': 'Olpe',
    'Data': [-1.4, -4.2, -1.7, -1.5, 13.4]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [-2.2, -3.5, -0.8, 1, 20.3]
  }, {
    'Name': 'Soest',
    'Data': [-0.1, -0.8, 1.5, 0.7, 25.1]
  }, {
    'Name': 'Unna',
    'Data': [-2.6, -2.8, -1.6, 1.3, 15.2]
  }

  ];

/*var datenMigrationenGesamt = [
  {
    'Name':'Jahre',
    'Data': ['2007 - 2011', '2010 - 2013']
  },
  {
    'Name':'Bottrop',
    'Data': [0, 0.7]
  },
  {
    'Name':'Gelsenkirchen',
    'Data': [-3, 1.9]
  },
  {
    'Name':'Münster',
    'Data': [13, 18.3]
  },
  {
    'Name':'Borken',
    'Data': [0, 0.2]
  },
  {
    'Name':'Coesfeld',
    'Data': [-1, 0.1]
  },
  {
    'Name':'Recklinghausen',
    'Data': [-1, 0.4]
  },
  {
    'Name':'Steinfurt',
    'Data': [0, 0.7]
  },
  {
    'Name':'Warendorf',
    'Data': [-3, -0.2]
  },
  {
    'Name':'Bielefeld',
    'Data': [-2, 2.6]
  },
  {
    'Name':'Gütersloh',
    'Data': [1, 2.5]
  },
  {
    'Name':'Herford',
    'Data': [-2, -0.2]
  },
  {
    'Name':'Höxter',
    'Data': [-6, -3.7]
  },
  {
    'Name':'Lippe',
    'Data': [-3, -1.4]
  },
  {
    'Name':'Minden-Lübbecke',
    'Data': [-3, -0.7]
  },
  {
    'Name':'Paderborn',
    'Data': [0, 1.8]
  },
  {
    'Name':'Bochum',
    'Data': [-5, 2.1]
  },
  {
    'Name':'Dortmund',
    'Data': [1, 4.8]
  },
  {
    'Name':'Hagen',
    'Data': [-4, -0.5]
  },
  {
    'Name':'Hamm',
    'Data': [1, 2.6]
  },
  {
    'Name':'Herne',
    'Data': [-2, 2.7]
  },
  {
    'Name':'Ennepe-Ruhr-Kreis',
    'Data': [-1, 0.8]
  },
  {
    'Name':'Hochsauerlandkreis',
    'Data': [-4, -3.5]
  },
  {
    'Name':'Märkischer Kreis',
    'Data': [-5, -3.8]
  },
  {
    'Name':'Olpe',
    'Data': [-3, -2.2]
  },
  {
    'Name':'Siegen-Wittgenstein',
    'Data': [-3, -0.4]
  },
  {
    'Name':'Soest',
    'Data': [0, 0.8]
  },
  {
    'Name':'Unna',
    'Data': [-2, -0.4]
  } //alte Daten
];*/

var datenMigrationenNichtdeutsche = [
  {
    'Name': 'Jahre',
    'Data': ['2007', '2009', '2011', '2013', '2015']
  }, {
    'Name': 'Bottrop',
    'Data': [1.1, -0.3, 2.4, 3.2, 14.2]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [1.5, 0.5, 3.8, 10.8, 18.6]
  }, {
    'Name': 'Münster',
    'Data': [0.4, 0.7, 5.2, 5.1, 13.3]
  }, {
    'Name': 'Borken',
    'Data': [2.8, 0.8, 3.3, 4.7, 14.4]
  }, {
    'Name': 'Coesfeld',
    'Data': [0.7, 1.4, 1.9, 2.8, 13]
  }, {
    'Name': 'Recklinghausen',
    'Data': [-0.4, 0.5, 1.8, 3.3, 12.8]
  }, {
    'Name': 'Steinfurt',
    'Data': [0.9, 0.5, 2.5, 3.3, 16.9]
  }, {
    'Name': 'Warendorf',
    'Data': [-0.6, 0.2, 3.1, 3.7, 18.1]
  }, {
    'Name': 'Bielefeld',
    'Data': [1.4, 2.1, 2.9, 4.1, 13.3]
  }, {
    'Name': 'Gütersloh',
    'Data': [0.8, 0.9, 5, 5, 19.2]
  }, {
    'Name': 'Herford',
    'Data': [-0.1, -0.2, 1.7, 4.2, 16.4]
  }, {
    'Name': 'Höxter',
    'Data': [-0.8, 0.1, 1.7, 4.1, 17.3]
  }, {
    'Name': 'Lippe',
    'Data': [0.2, 0.1, 1.4, 2.9, 20.7]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [1.3, 0.5, 1.9, 4.1, 17.4]
  }, {
    'Name': 'Paderborn',
    'Data': [-0.6, 1, 3.9, 4.1, 16.2]
  }, {
    'Name': 'Bochum',
    'Data': [1, 0.6, 4, 4.3, 15]
  }, {
    'Name': 'Dortmund',
    'Data': [3.9, -0.5, 4, 7.4, 13]
  }, {
    'Name': 'Hagen',
    'Data': [-0.9, -0.4, 3, 6.2, 22.6]
  }, {
    'Name': 'Hamm',
    'Data': [1.1, 0.9, 7.2, 2.5, 20.1]
  }, {
    'Name': 'Herne',
    'Data': [-0.6, 0.6, 4.5, 6.6, 14.5]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [0, -0.5, 1.4, 2.5, 14.4]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [0.2, -0.3, 1.4, 2.5, 15.4]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [-0.3, -0.6, 2.6, 1.2, 13.8]
  }, {
    'Name': 'Olpe',
    'Data': [0.2, -0.2, 2.7, 3.1, 17.4]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [1.1, 0.2, 2.6, 3.9, 22.1]
  }, {
    'Name': 'Soest',
    'Data': [-0.1, 0.4, 3.5, 2.5, 22.4]
  }, {
    'Name': 'Unna',
    'Data': [0, -0.7, 1.4, 2.2, 16.2]
  }
];

/*var datenMigrationenNichtdeutsche = [
  {
    'Name':'Jahre',
    'Data': ['2007 - 2011', '2010 - 2013']
  },
  {
    'Name':'Bottrop',
    'Data': [1, 2.4]
  },
  {
    'Name':'Gelsenkirchen',
    'Data': [2, 5.9]
  },
  {
    'Name':'Münster',
    'Data': [2, 4.5]
  },
  {
    'Name':'Borken',
    'Data': [2, 3.3]
  },
  {
    'Name':'Coesfeld',
    'Data': [1, 1.8]
  },
  {
    'Name':'Recklinghausen',
    'Data': [0, 2.1]
  },
  {
    'Name':'Steinfurt',
    'Data': [1, 2.7]
  },
  {
    'Name':'Warendorf',
    'Data': [1, 3.1]
  },
  {
    'Name':'Bielefeld',
    'Data': [0, 3.7]
  },
  {
    'Name':'Gütersloh',
    'Data': [2, 5.0]
  },
  {
    'Name':'Herford',
    'Data': [1, 2.4]
  },
  {
    'Name':'Höxter',
    'Data': [0, 1.8]
  },
  {
    'Name':'Lippe',
    'Data': [0, 1.8]
  },
  {
    'Name':'Minden-Lübbecke',
    'Data': [1, 2.6]
  },
  {
    'Name':'Paderborn',
    'Data': [1, 3.2]
  },
  {
    'Name':'Bochum',
    'Data': [0, 3.6]
  },
  {
    'Name':'Dortmund',
    'Data': [2, 4.5]
  },
  {
    'Name':'Hagen',
    'Data': [1, 3.4]
  },
  {
    'Name':'Hamm',
    'Data': [3, 4.7]
  },
  {
    'Name':'Herne',
    'Data': [1, 4.5]
  },
  {
    'Name':'Ennepe-Ruhr-Kreis',
    'Data': [0, 1.8]
  },
  {
    'Name':'Hochsauerlandkreis',
    'Data': [0, 1.7]
  },
  {
    'Name':'Märkischer Kreis',
    'Data': [0, 1.7]
  },
  {
    'Name':'Olpe',
    'Data': [1, 2.0]
  },
  {
    'Name':'Siegen-Wittgenstein',
    'Data': [1, 2.6]
  },
  {
    'Name':'Soest',
    'Data': [1, 2.4]
  },
  {
    'Name':'Unna',
    'Data': [0, 1.4]
  } //alte Daten /alte Daten
];*/

var datenPflegebeduerftigePflegeheim = [ //Pflegebedürftige in Pflegeheimen 2007 – 2013
  {
    'Name': 'Jahre',
    'Data': ['2007 - 2013']
  }, {
    'Name': 'Bottrop',
    'Data': [18.3]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [5.8]
  }, {
    'Name': 'Münster',
    'Data': [8.7]
  }, {
    'Name': 'Borken',
    'Data': [20.6]
  }, {
    'Name': 'Coesfeld',
    'Data': [19.7]
  }, {
    'Name': 'Recklinghausen',
    'Data': [20.3]
  }, {
    'Name': 'Steinfurt',
    'Data': [17.5]
  }, {
    'Name': 'Warendorf',
    'Data': [22.7]
  }, {
    'Name': 'Bielefeld',
    'Data': [1.3]
  }, {
    'Name': 'Gütersloh',
    'Data': [14.6]
  }, {
    'Name': 'Herford',
    'Data': [23]
  }, {
    'Name': 'Höxter',
    'Data': [26]
  }, {
    'Name': 'Lippe',
    'Data': [8.5]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [17.3]
  }, {
    'Name': 'Paderborn',
    'Data': [24.3]
  }, {
    'Name': 'Bochum',
    'Data': [-0.2]
  }, {
    'Name': 'Dortmund',
    'Data': [14.2]
  }, {
    'Name': 'Hagen',
    'Data': [9.7]
  }, {
    'Name': 'Hamm',
    'Data': [4.6]
  }, {
    'Name': 'Herne',
    'Data': [18.5]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [18]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [4]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [12.2]
  }, {
    'Name': 'Olpe',
    'Data': [49.5]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [24]
  }, {
    'Name': 'Soest',
    'Data': [4.7]
  }, {
    'Name': 'Unna',
    'Data': [9.9]
  }

];


var datenPflegebeduerftige = [ //alte Daten//ältere Daten aber auch andere Daten, hier: 'Anteil der Pflegebedürftigen an der Gesamtbevölkerung'
  {
    'Name':'Jahre',
    'Data': [2011]
  },
  {
    'Name':'Bottrop',
    'Data': [39]
  },
  {
    'Name':'Gelsenkirchen',
    'Data': [36]
  },
  {
    'Name':'Münster',
    'Data': [21]
  },
  {
    'Name':'Borken',
    'Data': [26]
  },
  {
    'Name':'Coesfeld',
    'Data': [27]
  },
  {
    'Name':'Recklinghausen',
    'Data': [38]
  },
  {
    'Name':'Steinfurt',
    'Data': [26]
  },
  {
    'Name':'Warendorf',
    'Data': [27]
  },
  {
    'Name':'Bielefeld',
    'Data': [29]
  },
  {
    'Name':'Gütersloh',
    'Data': [27]
  },
  {
    'Name':'Herford',
    'Data': [18]
  },
  {
    'Name':'Höxter',
    'Data': [37]
  },
  {
    'Name':'Lippe',
    'Data': [27]
  },
  {
    'Name':'Minden-Lübbecke',
    'Data': [33]
  },
  {
    'Name':'Paderborn',
    'Data': [25]
  },
  {
    'Name':'Bochum',
    'Data': [32]
  },
  {
    'Name':'Dortmund',
    'Data': [36]
  },
  {
    'Name':'Hagen',
    'Data': [37]
  },
  {
    'Name':'Hamm',
    'Data': [28]
  },
  {
    'Name':'Herne',
    'Data': [36]
  },
  {
    'Name':'Ennepe-Ruhr-Kreis',
    'Data': [32]
  },
  {
    'Name':'Hochsauerlandkreis',
    'Data': [29]
  },
  {
    'Name':'Märkischer Kreis',
    'Data': [28]
  },
  {
    'Name':'Olpe',
    'Data': [30]
  },
  {
    'Name':'Siegen-Wittgenstein',
    'Data': [31]
  },
  {
    'Name':'Soest',
    'Data': [28]
  },
  {
    'Name':'Unna',
    'Data': [34]
  } 
];

var datenPflegeeinrichtungen = [
  {
    'Name':'Jahre',
    'Data': [2009]
  },
  {
    'Name':'Bottrop',
    'Data': [5302]
  },
  {
    'Name':'Gelsenkirchen',
    'Data': [4813]
  },
  {
    'Name':'Münster',
    'Data': [5458]
  },
  {
    'Name':'Borken',
    'Data': [4384]
  },
  {
    'Name':'Coesfeld',
    'Data': [6055]
  },
  {
    'Name':'Recklinghausen',
    'Data': [4870]
  },
  {
    'Name':'Steinfurt',
    'Data': [4975]
  },
  {
    'Name':'Warendorf',
    'Data': [4433]
  },
  {
    'Name':'Bielefeld',
    'Data': [4766]
  },
  {
    'Name':'Gütersloh',
    'Data': [4114]
  },
  {
    'Name':'Herford',
    'Data': [4665]
  },
  {
    'Name':'Höxter',
    'Data': [4956]
  },
  {
    'Name':'Lippe',
    'Data': [5107]
  },
  {
    'Name':'Minden-Lübbecke',
    'Data': [6059]
  },
  {
    'Name':'Paderborn',
    'Data': [5237]
  },
  {
    'Name':'Bochum',
    'Data': [4574]
  },
  {
    'Name':'Dortmund',
    'Data': [4477]
  },
  {
    'Name':'Hagen',
    'Data': [4792]
  },
  {
    'Name':'Hamm',
    'Data': [4927]
  },
  {
    'Name':'Herne',
    'Data': [4845]
  },
  {
    'Name':'Ennepe-Ruhr-Kreis',
    'Data': [5756]
  },
  {
    'Name':'Hochsauerlandkreis',
    'Data': [4602]
  },
  {
    'Name':'Märkischer Kreis',
    'Data': [5104]
  },
  {
    'Name':'Olpe',
    'Data': [4448]
  },
  {
    'Name':'Siegen-Wittgenstein',
    'Data': [3844]
  },
  {
    'Name':'Soest',
    'Data': [7375]
  },
  {
    'Name':'Unna',
    'Data': [4827]
  }
];

var datenHaushaltsgroesse = [ 
  {
    'Name': 'Jahre',
    'Data': ['2007', '2009', '2011', '2013']
  }, {
    'Name': 'Bottrop',
    'Data': [2.2, 2.1, 2.1, 2]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [2, 2, 2, 2]
  }, {
    'Name': 'Münster',
    'Data': [1.7, 1.8, 1.8, 1.7]
  }, {
    'Name': 'Borken',
    'Data': [2.5, 2.4, 2.4, 2.4]
  }, {
    'Name': 'Coesfeld',
    'Data': [2.4, 2.3, 2.3, 2.3]
  }, {
    'Name': 'Recklinghausen',
    'Data': [2.2, 2.1, 2.1, 2.1]
  }, {
    'Name': 'Steinfurt',
    'Data': [2.5, 2.4, 2.4, 2.3]
  }, {
    'Name': 'Warendorf',
    'Data': [2.4, 2.4, 2.3, 2.3]
  }, {
    'Name': 'Bielefeld',
    'Data': [1.9, 1.9, 1.9, 2]
  }, {
    'Name': 'Gütersloh',
    'Data': [2.3, 2.3, 2.3, 2.3]
  }, {
    'Name': 'Herford',
    'Data': [2.2, 2.2, 2.2, 2.1]
  }, {
    'Name': 'Höxter',
    'Data': [2.4, 2.3, 2.2, 2.2]
  }, {
    'Name': 'Lippe',
    'Data': [2.2, 2.2, 2.2, 2.2]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [2.2, 2.1, 2.2, 2.2]
  }, {
    'Name': 'Paderborn',
    'Data': [2.2, 2.3, 2.3, 2.2]
  }, {
    'Name': 'Bochum',
    'Data': [1.9, 1.9, 1.9, 1.9]
  }, {
    'Name': 'Dortmund',
    'Data': [2, 1.9, 1.9, 1.9]
  }, {
    'Name': 'Hagen',
    'Data': [2.1, 2.2, 2, 2]
  }, {
    'Name': 'Hamm',
    'Data': [2.2, 2.2, 2.2, 2.1]
  }, {
    'Name': 'Herne',
    'Data': [2, 2, 2, 1.9]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [2.1, 2, 2, 2]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [2.3, 2.2, 2.2, 2.1]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [2.1, 2.2, 2.1, 2.1]
  }, {
    'Name': 'Olpe',
    'Data': [2.5, 2.3, 2.4, 2.3]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [2.2, 2.2, 2.2, 2.2]
  }, {
    'Name': 'Soest',
    'Data': [2.3, 2.3, 2.3, 2.2]
  }, {
    'Name': 'Unna',
    'Data': [2.2, 2.2, 2.2, 2.2]
  }
];

/*var datenHaushaltsgroesse = [
  {
    'Name':'Jahre',
    'Data': [2010]
  },
  {
    'Name':'Bottrop',
    'Data': [2.10]
  },
  {
    'Name':'Gelsenkirchen',
    'Data': [1.99]
  },
  {
    'Name':'Münster',
    'Data': [1.86]
  },
  {
    'Name':'Borken',
    'Data': [2.38]
  },
  {
    'Name':'Coesfeld',
    'Data': [2.24]
  },
  {
    'Name':'Recklinghausen',
    'Data': [2.12]
  },
  {
    'Name':'Steinfurt',
    'Data': [2.32]
  },
  {
    'Name':'Warendorf',
    'Data': [2.30]
  },
  {
    'Name':'Bielefeld',
    'Data': [1.98]
  },
  {
    'Name':'Gütersloh',
    'Data': [2.25]
  },
  {
    'Name':'Herford',
    'Data': [2.19]
  },
  {
    'Name':'Höxter',
    'Data': [2.18]
  },
  {
    'Name':'Lippe',
    'Data': [2.11]
  },
  {
    'Name':'Minden-Lübbecke',
    'Data': [2.14]
  },
  {
    'Name':'Paderborn',
    'Data': [2.21]
  },
  {
    'Name':'Bochum',
    'Data': [1.89]
  },
  {
    'Name':'Dortmund',
    'Data': [1.90]
  },
  {
    'Name':'Hagen',
    'Data': [2.08]
  },
  {
    'Name':'Hamm',
    'Data': [2.24]
  },
  {
    'Name':'Herne',
    'Data': [1.98]
  },
  {
    'Name':'Ennepe-Ruhr-Kreis',
    'Data': [2.02]
  },
  {
    'Name':'Hochsauerlandkreis',
    'Data': [2.24]
  },
  {
    'Name':'Märkischer Kreis',
    'Data': [2.12]
  },
  {
    'Name':'Olpe',
    'Data': [2.33]
  },
  {
    'Name':'Siegen-Wittgenstein',
    'Data': [2.21]
  },
  {
    'Name':'Soest',
    'Data': [2.25]
  },
  {
    'Name':'Unna',
    'Data': [2.15]
  }//alte Daten
];*/

var datenSingleHaushalte = [ 
  {
    'Name': 'Jahre',
    'Data': [2007, 2009, 2011, 2013]
  }, {
    'Name': 'Bottrop',
    'Data': [33.3, 37.5, 38.6, 39]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [41.2, 42.6, 44.5, 40.2]
  }, {
    'Name': 'Münster',
    'Data': [53.5, 48.3, 50, 51.8]
  }, {
    'Name': 'Borken',
    'Data': [27, 29.9, 31.2, 29.6]
  }, {
    'Name': 'Coesfeld',
    'Data': [26.6, 30.2, 33, 31.2]
  }, {
    'Name': 'Recklinghausen',
    'Data': [33.3, 35.8, 37.2, 36]
  }, {
    'Name': 'Steinfurt',
    'Data': [26.3, 28, 29.9, 30.5]
  }, {
    'Name': 'Warendorf',
    'Data': [27.1, 27.7, 30.8, 34.2]
  }, {
    'Name': 'Bielefeld',
    'Data': [45.6, 45.5, 45, 43.4]
  }, {
    'Name': 'Gütersloh',
    'Data': [29.4, 32.7, 31.8, 31.4]
  }, {
    'Name': 'Herford',
    'Data': [39, 35.3, 32.8, 36.1]
  }, {
    'Name': 'Höxter',
    'Data': [33.3, 34.4, 36.4, 33.8]
  }, {
    'Name': 'Lippe',
    'Data': [36.4, 36.4, 37.7, 36.3]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [31.9, 37.2, 36.6, 33.8]
  }, {
    'Name': 'Paderborn',
    'Data': [34.8, 34.1, 33.3, 33.8]
  }, {
    'Name': 'Bochum',
    'Data': [44.5, 45.5, 45, 48.5]
  }, {
    'Name': 'Dortmund',
    'Data': [41.9, 44.7, 46.5, 45.4]
  }, {
    'Name': 'Hagen',
    'Data': [37.6, 36.4, 42.6, 40.9]
  }, {
    'Name': 'Hamm',
    'Data': [35.3, 33.7, 36.7, 37.8]
  }, {
    'Name': 'Herne',
    'Data': [39.5, 40, 39.7, 45.7]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [37.4, 39.2, 40.2, 39.5]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [30.5, 33.9, 33.6, 35]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [36.2, 33.2, 36.3, 36.2]
  }, {
    'Name': 'Olpe',
    'Data': [24.6, 31.7, 29.3, 25.9]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [32.8, 34.4, 32.8, 33.9]
  }, {
    'Name': 'Soest',
    'Data': [33.1, 32.8, 33.3, 32.6]
  }, {
    'Name': 'Unna',
    'Data': [33.2, 36.6, 35.2, 33.7]
  }
];

/*var datenSingleHaushalte = [ 
  {
    'Name':'Jahre',
    'Data': [2010, 2012]
  },
  {
    'Name':'Bottrop',
    'Data': [37, 37.5]
  },
  {
    'Name':'Gelsenkirchen',
    'Data': [44, 44.0]
  },
  {
    'Name':'Münster',
    'Data': [49, 53.1]
  },
  {
    'Name':'Borken',
    'Data': [31, 29.7]
  },
  {
    'Name':'Coesfeld',
    'Data': [33, 29.6]
  },
  {
    'Name':'Recklinghausen',
    'Data': [36, 36.4]
  },
  {
    'Name':'Steinfurt',
    'Data': [29, 30.3]
  },
  {
    'Name':'Warendorf',
    'Data': [29, 30.2]
  },
  {
    'Name':'Bielefeld',
    'Data': [44, 45.7]
  },
  {
    'Name':'Gütersloh',
    'Data': [33, 31.3]
  },
  {
    'Name':'Herford',
    'Data': [32, 33.9]
  },
  {
    'Name':'Höxter',
    'Data': [37, 35.3]
  },
  {
    'Name':'Lippe',
    'Data': [37, 37.4]
  },
  {
    'Name':'Minden-Lübbecke',
    'Data': [36, 34.6]
  },
  {
    'Name':'Paderborn',
    'Data': [35, 33.7]
  },
  {
    'Name':'Bochum',
    'Data': [44, 45.9]
  },
  {
    'Name':'Dortmund',
    'Data': [46, 46.1]
  },
  {
    'Name':'Hagen',
    'Data': [39, 39.8]
  },
  {
    'Name':'Hamm',
    'Data': [33, 34.4]
  },
  {
    'Name':'Herne',
    'Data': [41, 39.7]
  },
  {
    'Name':'Ennepe-Ruhr-Kreis',
    'Data': [39, 39.7]
  },
  {
    'Name':'Hochsauerlandkreis',
    'Data': [32, 35.0]
  },
  {
    'Name':'Märkischer Kreis',
    'Data': [36, 37.3]
  },
  {
    'Name':'Olpe',
    'Data': [32, 29.6]
  },
  {
    'Name':'Siegen-Wittgenstein',
    'Data': [36, 34.2]
  },
  {
    'Name':'Soest',
    'Data': [33, 33.5]
  },
  {
    'Name':'Unna',
    'Data': [37, 35.2]
  } //alte Daten //alte Daten
];*/

var datenNichtdeutsche = [
  {
    'Name': 'Jahre',
    'Data': [2007, 2009, 2011, 2013, 2015]
  }, {
    'Name': 'Bottrop',
    'Data': [9.4, 9.1, 7.7, 8.1, 9.7]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [13.8, 13.9, 13.4, 14.7, 17]
  }, {
    'Name': 'Münster',
    'Data': [7, 6.7, 7.4, 8, 9.5]
  }, {
    'Name': 'Borken',
    'Data': [6.8, 6.9, 6.1, 6.7, 8.5]
  }, {
    'Name': 'Coesfeld',
    'Data': [4, 4, 3.3, 3.7, 5.4]
  }, {
    'Name': 'Recklinghausen',
    'Data': [8.8, 8.7, 7.8, 8.1, 9.6]
  }, {
    'Name': 'Steinfurt',
    'Data': [5.7, 5.6, 4.9, 5.6, 7.8]
  }, {
    'Name': 'Warendorf',
    'Data': [7.1, 6.9, 6.1, 6.7, 8.9]
  }, {
    'Name': 'Bielefeld',
    'Data': [12, 11.9, 11.3, 11.7, 13.1]
  }, {
    'Name': 'Gütersloh',
    'Data': [8.5, 8.4, 8, 8.9, 11.3]
  }, {
    'Name': 'Herford',
    'Data': [6.1, 6, 5.8, 6.3, 8.2]
  }, {
    'Name': 'Höxter',
    'Data': [4.7, 4.6, 3, 3.4, 5.7]
  }, {
    'Name': 'Lippe',
    'Data': [6, 5.9, 5.1, 5.5, 7.9]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [5, 4.9, 4.4, 5, 7]
  }, {
    'Name': 'Paderborn',
    'Data': [6.8, 6.7, 5.7, 6.2, 8.4]
  }, {
    'Name': 'Bochum',
    'Data': [11.4, 11.2, 8.3, 9, 10.8]
  }, {
    'Name': 'Dortmund',
    'Data': [16, 15.7, 12.3, 13.2, 15.7]
  }, {
    'Name': 'Hagen',
    'Data': [13.1, 12.9, 12.6, 13.1, 15.9]
  }, {
    'Name': 'Hamm',
    'Data': [13.6, 13.7, 10.8, 11.2, 13.5]
  }, {
    'Name': 'Herne',
    'Data': [15, 15.1, 11.7, 12.6, 14.4]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [8.1, 7.9, 7.2, 7.6, 9.3]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [6.8, 6.7, 5.6, 6, 8]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [11.7, 11.6, 10.1, 10.3, 11.9]
  }, {
    'Name': 'Olpe',
    'Data': [8.3, 8.3, 6.7, 7, 8.9]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [8.6, 8.5, 6.6, 7.1, 9.8]
  }, {
    'Name': 'Soest',
    'Data': [7, 6.9, 5.7, 6.1, 8.9]
  }, {
    'Name': 'Unna',
    'Data': [8.9, 8.7, 7, 7.1, 9]
  }

];

/*var datenNichtdeutsche = [
  {
    'Name':'Jahre',
    'Data': [2000, 2011, 2013]
  },
  {
    'Name':'Bottrop',
    'Data': [9.5, 9, 9.5]
  },
  {
    'Name':'Gelsenkirchen',
    'Data': [13.7, 14, 15.7]
  },
  {
    'Name':'Münster',
    'Data': [7.7, 7, 7.5]
  },
  {
    'Name':'Borken',
    'Data': [6.6, 7, 7.9]
  },
  {
    'Name':'Coesfeld',
    'Data': [4.2, 4, 4.6]
  },
  {
    'Name':'Recklinghausen',
    'Data': [9.7, 9, 9.1]
  },
  {
    'Name':'Steinfurt',
    'Data': [5.9, 6, 6.5]
  },
  {
    'Name':'Warendorf',
    'Data': [8.0, 7, 7.8]
  },
  {
    'Name':'Bielefeld',
    'Data': [12.8, 12, 12.4]
  },
  {
    'Name':'Gütersloh',
    'Data': [8.8, 9, 9.8]
  },
  {
    'Name':'Herford',
    'Data': [7.2, 6, 6.6]
  },
  {
    'Name':'Höxter',
    'Data': [5.0, 5, 5.2]
  },
  {
    'Name':'Lippe',
    'Data': [6.7, 6, 6.3]
  },
  {
    'Name':'Minden-Lübbecke',
    'Data': [5.6, 5, 5.6]
  },
  {
    'Name':'Paderborn',
    'Data': [7.0, 7, 7.6]
  },
  {
    'Name':'Bochum',
    'Data': [11.6, 12, 12.2]
  },
  {
    'Name':'Dortmund',
    'Data': [16.1, 16, 16.8]
  },
  {
    'Name':'Hagen',
    'Data': [14.0, 13, 13.4]
  },
  {
    'Name':'Hamm',
    'Data': [12.5, 15, 14.9]
  },
  {
    'Name':'Herne',
    'Data': [15.0, 15, 16.2]
  },
  {
    'Name':'Ennepe-Ruhr-Kreis',
    'Data': [8.7, 8, 8.4]
  },
  {
    'Name':'Hochsauerlandkreis',
    'Data': [7.5, 7, 7.2]
  },
  {
    'Name':'Märkischer Kreis',
    'Data': [12.8, 12, 12.0]
  },
  {
    'Name':'Olpe',
    'Data': [9.0, 8, 8.8]
  },
  {
    'Name':'Siegen-Wittgenstein',
    'Data': [8.7, 7, 9.2]
  },
  {
    'Name':'Soest',
    'Data': [7.5, 7, 7.6]
  },
  {
    'Name':'Unna',
    'Data': [9.6, 9, 8.9]
  } //alte Daten
];
*/

var datenMigranten = [
  {
    'Name':'Jahre',
    'Data': [2008, 2011]
  },
  {
    'Name':'Bottrop',
    'Data': [26, 23.5]
  },
  {
    'Name':'Gelsenkirchen',
    'Data': [27, 29.6]
  },
  {
    'Name':'Münster',
    'Data': [21, 19.5]
  },
  {
    'Name':'Borken',
    'Data': [14, 14.1]
  },
  {
    'Name':'Coesfeld',
    'Data': [8, 10.9]
  },
  {
    'Name':'Recklinghausen',
    'Data': [18, 19.9]
  },
  {
    'Name':'Steinfurt',
    'Data': [14, 15.8]
  },
  {
    'Name':'Warendorf',
    'Data': [18, 20.4]
  },
  {
    'Name':'Bielefeld',
    'Data': [31, 32.5]
  },
  {
    'Name':'Gütersloh',
    'Data': [26, 26.5]
  },
  {
    'Name':'Herford',
    'Data': [22, 25.8]
  },
  {
    'Name':'Höxter',
    'Data': [14, 17.3]
  },
  {
    'Name':'Lippe',
    'Data': [24, 25.9]
  },
  {
    'Name':'Minden-Lübbecke',
    'Data': [20, 23.8]
  },
  {
    'Name':'Paderborn',
    'Data': [28, 27.4]
  },
  {
    'Name':'Bochum',
    'Data': [24, 22.9]
  },
  {
    'Name':'Dortmund',
    'Data': [28, 28.2]
  },
  {
    'Name':'Hagen',
    'Data': [34, 32.0]
  },
  {
    'Name':'Hamm',
    'Data': [30, 28.8]
  },
  {
    'Name':'Herne',
    'Data': [23, 28.0]
  },
  {
    'Name':'Ennepe-Ruhr-Kreis',
    'Data': [22, 19.6]
  },
  {
    'Name':'Hochsauerlandkreis',
    'Data': [16, 17.5]
  },
  {
    'Name':'Märkischer Kreis',
    'Data': [29, 27.8]
  },
  {
    'Name':'Olpe',
    'Data': [21, 18.1]
  },
  {
    'Name':'Siegen-Wittgenstein',
    'Data': [18, 19.8]
  },
  {
    'Name':'Soest',
    'Data': [20, 21.1]
  },
  {
    'Name':'Unna',
    'Data': [24, 23.5]
  }
];

var datenEinkommen = [
  {
    'Name': 'Jahre',
    'Data': [2007, 2009, 2011, 2013]
  }, {
    'Name': 'Bottrop',
    'Data': [16437, 16962, 18076, 18862]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [14550, 14786, 15410, 15904]
  }, {
    'Name': 'Münster',
    'Data': [20506, 20668, 21927, 22095]
  }, {
    'Name': 'Borken',
    'Data': [17213, 17430, 19146, 19966]
  }, {
    'Name': 'Coesfeld',
    'Data': [17654, 18482, 20538, 21420]
  }, {
    'Name': 'Recklinghausen',
    'Data': [16345, 16723, 17904, 18704]
  }, {
    'Name': 'Steinfurt',
    'Data': [17129, 17432, 18948, 19789]
  }, {
    'Name': 'Warendorf',
    'Data': [18790, 18837, 20610, 21460]
  }, {
    'Name': 'Bielefeld',
    'Data': [18455, 18756, 20616, 21288]
  }, {
    'Name': 'Gütersloh',
    'Data': [20973, 20367, 22076, 22873]
  }, {
    'Name': 'Herford',
    'Data': [19047, 19304, 21152, 22124]
  }, {
    'Name': 'Höxter',
    'Data': [16435, 17115, 18583, 19476]
  }, {
    'Name': 'Lippe',
    'Data': [18848, 19333, 21324, 22254]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [18356, 18660, 20368, 21256]
  }, {
    'Name': 'Paderborn',
    'Data': [16634, 17214, 18675, 19386]
  }, {
    'Name': 'Bochum',
    'Data': [16744, 16910, 17815, 18484]
  }, {
    'Name': 'Dortmund',
    'Data': [16081, 16454, 17217, 17714]
  }, {
    'Name': 'Hagen',
    'Data': [17674, 17716, 18886, 19732]
  }, {
    'Name': 'Hamm',
    'Data': [14892, 15276, 16165, 16901]
  }, {
    'Name': 'Herne',
    'Data': [14859, 15174, 15889, 16419]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [21124, 20738, 22612, 23584]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [18908, 19298, 21317, 22405]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [21408, 20795, 22971, 24056]
  }, {
    'Name': 'Olpe',
    'Data': [22330, 22258, 25460, 26632]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [19909, 19862, 21752, 22681]
  }, {
    'Name': 'Soest',
    'Data': [17562, 17962, 19615, 20550]
  }, {
    'Name': 'Unna',
    'Data': [16634, 16993, 18253, 19166]
  }
];

/*var datenEinkommen = [
  {
    'Name':'Jahre',
    'Data': [2009, 2012]
  },
  {
    'Name':'Bottrop',
    'Data': [17978, 18940]
  },
  {
    'Name':'Gelsenkirchen',
    'Data': [15905, 16309]
  },
  {
    'Name':'Münster',
    'Data': [21757, 21932]
  },
  {
    'Name':'Borken',
    'Data': [18859, 19845]
  },
  {
    'Name':'Coesfeld',
    'Data': [19399, 21429]
  },
  {
    'Name':'Recklinghausen',
    'Data': [17840, 18831]
  },
  {
    'Name':'Steinfurt',
    'Data': [18888, 19770]
  },
  {
    'Name':'Warendorf',
    'Data': [20723, 21345]
  },
  {
    'Name':'Bielefeld',
    'Data': [19784, 21049]
  },
  {
    'Name':'Gütersloh',
    'Data': [22587, 22497]
  },
  {
    'Name':'Herford',
    'Data': [20704, 21774]
  },
  {
    'Name':'Höxter',
    'Data': [18209, 19347]
  },
  {
    'Name':'Lippe',
    'Data': [20683, 21899]
  },
  {
    'Name':'Minden-Lübbecke',
    'Data': [20151, 20944]
  },
  {
    'Name':'Paderborn',
    'Data': [18198, 19385]
  },
  {
    'Name':'Bochum',
    'Data': [18006, 18571]
  },
  {
    'Name':'Dortmund',
    'Data': [17333, 17893]
  },
  {
    'Name':'Hagen',
    'Data': [19286, 19572]
  },
  {
    'Name':'Hamm',
    'Data': [16408, 17043]
  },
  {
    'Name':'Herne',
    'Data': [16353, 16723]
  },
  {
    'Name':'Ennepe-Ruhr-Kreis',
    'Data': [23005, 23235]
  },
  {
    'Name':'Hochsauerlandkreis',
    'Data': [20870, 22080]
  },
  {
    'Name':'Märkischer Kreis',
    'Data': [23595, 23597]
  },
  {
    'Name':'Olpe',
    'Data': [24771, 26122]
  },
  {
    'Name':'Siegen-Wittgenstein',
    'Data': [21842, 22294]
  },
  {
    'Name':'Soest',
    'Data': [19202, 20384]
  },
  {
    'Name':'Unna',
    'Data': [18276, 19157]
  }
];*/

var datenKonfessionen = [
  {
    'Name': 'Jahre',
    'Data': ['katholisch', 'evangelisch', 'andere']
  }, {
    'Name': 'Bottrop',
    'Data': [50, 21.9, 28.1]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [33.7, 30.1, 36.3]
  }, {
    'Name': 'Münster',
    'Data': [51.3, 21.5, 27.3]
  }, {
    'Name': 'Borken',
    'Data': [70.5, 13, 16.5]
  }, {
    'Name': 'Coesfeld',
    'Data': [67.1, 16.8, 16.1]
  }, {
    'Name': 'Recklinghausen',
    'Data': [42.2, 28.5, 29.3]
  }, {
    'Name': 'Steinfurt',
    'Data': [57.5, 24.3, 18.2]
  }, {
    'Name': 'Warendorf',
    'Data': [59.1, 18.9, 22.1]
  }, {
    'Name': 'Bielefeld',
    'Data': [16.3, 41.2, 42.5]
  }, {
    'Name': 'Gütersloh',
    'Data': [38.8, 31.4, 29.8]
  }, {
    'Name': 'Herford',
    'Data': [11, 57.7, 31.4]
  }, {
    'Name': 'Höxter',
    'Data': [62.7, 19.5, 17.8]
  }, {
    'Name': 'Lippe',
    'Data': [12.5, 51, 36.5]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [8.3, 60.1, 31.6]
  }, {
    'Name': 'Paderborn',
    'Data': [59.1, 17.7, 23.2]
  }, {
    'Name': 'Bochum',
    'Data': [32.8, 32.6, 34.6]
  }, {
    'Name': 'Dortmund',
    'Data': [28.5, 32.2, 39.3]
  }, {
    'Name': 'Hagen',
    'Data': [29.1, 34.2, 36.7]
  }, {
    'Name': 'Hamm',
    'Data': [37.4, 32.3, 30.3]
  }, {
    'Name': 'Herne',
    'Data': [31.8, 32, 36.1]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [23.6, 41.5, 34.9]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [68, 15.3, 16.7]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [31, 36.5, 32.5]
  }, {
    'Name': 'Olpe',
    'Data': [70.3, 13.5, 16.2]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [21.1, 53.1, 25.8]
  }, {
    'Name': 'Soest',
    'Data': [54.6, 24.9, 20.5]
  }, {
    'Name': 'Unna',
    'Data': [33.4, 37.6, 29]
  }

];

/*var datenKonfessionen = [
  {
    'Name':'Jahre',
    'Data': ['katholisch', 'evangelisch', 'andere']
  },
  {
    'Name':'Bottrop',
    'Data': [53, 22, 25]
  },
  {
    'Name':'Gelsenkirchen',
    'Data': [35, 31, 34]
  },
  {
    'Name':'Münster',
    'Data': [52, 21, 27]
  },
  {
    'Name':'Borken',
    'Data': [72, 14, 14]
  },
  {
    'Name':'Coesfeld',
    'Data': [69, 15, 16]
  },
  {
    'Name':'Recklinghausen',
    'Data': [44, 29, 27]
  },
  {
    'Name':'Steinfurt',
    'Data': [54, 24, 22]
  },
  {
    'Name':'Warendorf',
    'Data': [61, 19, 20]
  },
  {
    'Name':'Bielefeld',
    'Data': [17, 43, 40]
  },
  {
    'Name':'Gütersloh',
    'Data': [40, 33, 27]
  },
  {
    'Name':'Herford',
    'Data': [11, 62, 27]
  },
  {
    'Name':'Höxter',
    'Data': [68, 20, 12]
  },
  {
    'Name':'Lippe',
    'Data': [12, 54, 34]
  },
  {
    'Name':'Minden-Lübbecke',
    'Data': [9, 63, 28]
  },
  {
    'Name':'Paderborn',
    'Data': [61, 16, 23]
  },
  {
    'Name':'Bochum',
    'Data': [36, 37, 27]
  },
  {
    'Name':'Dortmund',
    'Data': [29, 32, 39]
  },
  {
    'Name':'Hagen',
    'Data': [30, 37, 33]
  },
  {
    'Name':'Hamm',
    'Data': [38, 33, 29]
  },
  {
    'Name':'Herne',
    'Data': [33, 33, 34]
  },
  {
    'Name':'Ennepe-Ruhr-Kreis',
    'Data': [25, 43, 32]
  },
  {
    'Name':'Hochsauerlandkreis',
    'Data': [72, 15, 13]
  },
  {
    'Name':'Märkischer Kreis',
    'Data': [33, 38, 29]
  },
  {
    'Name':'Olpe',
    'Data': [71, 12, 17]
  },
  {
    'Name':'Siegen-Wittgenstein',
    'Data': [21, 53, 26]
  },
  {
    'Name':'Soest',
    'Data': [57, 25, 18]
  },
  {
    'Name':'Unna',
    'Data': [35, 39, 26]
  }//alte Daten
];*/

var datenAbschlüsse = [
  {
  'Name': 'Jahre',
  'Data': ['Lehre / Berufsausbildung im dualen System', 'Fachschulabschluss', 'Fachhochschul- / Hochschulabschluss / Promotion', 'kein beruflicher Bildungsabschluss', 'keine Angabe']
  },
  {
    'Name': 'Bottrop',
    'Data': [48.3, 6, 8.6, 26.7, 10.3]
  },
  {
    'Name': 'Gelsenkirchen',
    'Data': [44.2, 5, 4.3, 32.2, 14.3]
  },
  {
    'Name': 'Münster',
    'Data': [31, 6.1, 26.6, 24.2, 12.1]
  },
  {
    'Name': 'Borken',
    'Data': [42.6, 6.6, 7.4, 26.9, 16.5]
  },
  {
    'Name': 'Coesfeld',
    'Data': [46.5, 7.9, 12.1, 20.5, 13]
  },
  {
    'Name': 'Recklinghausen',
    'Data': [44.2, 7, 8.5, 26.3, 14]
  },
  {
    'Name': 'Steinfurt',
    'Data': [44.2, 6, 9, 25.8, 15]
  },
  {
    'Name': 'Warendorf',
    'Data': [46.5, 6.2, 8.8, 22.3, 16.1]
  },
  {
    'Name': 'Bielefeld',
    'Data': [36.6, 5.2, 14, 27.7, 16.5]
  },
  {
    'Name': 'Gütersloh',
    'Data': [47.2, 4.3, 8.8, 23.9, 15.9]
  },
  {
    'Name': 'Herford',
    'Data': [47.4, 7.6, 8.8, 22.9, 13.3]
  },
  {
    'Name': 'Höxter',
    'Data': [47.6, 5.6, 7.7, 25.2, 14]
  },
  {
    'Name': 'Lippe',
    'Data': [47.1, 5.2, 8.4, 25.4, 13.9]
  },
  {
    'Name': 'Minden-Lübbecke',
    'Data': [44.5, 5.2, 9, 26.1, 15.2]
  },
  {
    'Name': 'Paderborn',
    'Data': [43.9, 5.4, 11.5, 24.7, 14.5]
  },
  {
    'Name': 'Bochum',
    'Data': [43.8, 5.5, 13, 25.8, 11.9]
  },
  {
    'Name': 'Dortmund',
    'Data': [41.2, 4.7, 11.2, 29.3, 13.6]
  },
  {
    'Name': 'Hagen',
    'Data': [41.4, 4.8, 10.8, 29.6, 13.4]
  },
  {
    'Name': 'Hamm',
    'Data': [44.9, 4, 8, 27.3, 15.9]
  },
  {
    'Name': 'Herne',
    'Data': [44.2, 5.2, 7.1, 31.2, 12.3]
  },
  {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [44.1, 6.8, 12, 24.4, 12.7]
  },
  {
    'Name': 'Hochsauerlandkreis',
    'Data': [45.6, 6.8, 8, 26.6, 12.9]
  },
  {
    'Name': 'Märkischer Kreis',
    'Data': [43.8, 5, 7.7, 28.9, 14.6]
  },
  {
    'Name': 'Olpe',
    'Data': [44.4, 6.7, 8.1, 25.2, 15.6]
  },
  {
    'Name': 'Siegen-Wittgenstein',
    'Data': [44.7, 6.5, 7.6, 26.2, 14.9]
  },
  {
    'Name': 'Soest',
    'Data': [47, 6.4, 8.1, 24, 14.5]
  },
  {
    'Name': 'Unna',
    'Data': [46.7, 5.4, 9.2, 25.8, 13]
  }
];

var datenArbeitslosenquote = [
  {
    'Name': 'Jahre',
    'Data': [2007, 2009, 2011, 2013, 2015]
  }, {
    'Name': 'Bottrop',
    'Data': [9.6, 8.7, 8.4, 8.6, 7.5]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [15.4, 14.3, 14, 15, 15]
  }, {
    'Name': 'Münster',
    'Data': [6.3, 5.9, 5.8, 5.7, 5.6]
  }, {
    'Name': 'Borken',
    'Data': [4.8, 5.6, 3.8, 4.2, 3.8]
  }, {
    'Name': 'Coesfeld',
    'Data': [4, 4.2, 2.9, 3.3, 2.9]
  }, {
    'Name': 'Recklinghausen',
    'Data': [11.3, 10.9, 10.3, 10.8, 10.2]
  }, {
    'Name': 'Steinfurt',
    'Data': [4.9, 5, 4.2, 4.9, 4.5]
  }, {
    'Name': 'Warendorf',
    'Data': [5.3, 6.2, 5, 5.8, 5.7]
  }, {
    'Name': 'Bielefeld',
    'Data': [9.2, 10.7, 9.2, 9.4, 9.1]
  }, {
    'Name': 'Gütersloh',
    'Data': [4.9, 5.2, 4.3, 5.3, 4.8]
  }, {
    'Name': 'Herford',
    'Data': [6.3, 7.3, 5.9, 6.2, 5.8]
  }, {
    'Name': 'Höxter',
    'Data': [6.2, 6.4, 5.2, 5.4, 4.7]
  }, {
    'Name': 'Lippe',
    'Data': [8, 8.9, 7.1, 7.3, 7]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [6.7, 7.5, 5.6, 5.7, 5.3]
  }, {
    'Name': 'Paderborn',
    'Data': [7.6, 7.4, 6.2, 6.1, 5.7]
  }, {
    'Name': 'Bochum',
    'Data': [10.2, 10.2, 9.4, 10.1, 9.6]
  }, {
    'Name': 'Dortmund',
    'Data': [13.7, 12.7, 12.3, 12.5, 11.8]
  }, {
    'Name': 'Hagen',
    'Data': [10.7, 11.5, 9.8, 10.4, 10.6]
  }, {
    'Name': 'Hamm',
    'Data': [10.5, 10.5, 10.1, 9.9, 9.3]
  }, {
    'Name': 'Herne',
    'Data': [12.4, 12.8, 12.2, 13.4, 12.6]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [8, 8.3, 6.9, 7.3, 6.6]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [5.9, 6.4, 4.5, 5.1, 4.5]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [6.4, 8.6, 6.2, 6.9, 6.5]
  }, {
    'Name': 'Olpe',
    'Data': [4.6, 5.7, 4.1, 4.7, 4]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [6, 7, 5.4, 5.7, 5.2]
  }, {
    'Name': 'Soest',
    'Data': [6.9, 7.7, 5.8, 6.2, 5.8]
  }, {
    'Name': 'Unna',
    'Data': [10.1, 10.1, 8.4, 9.3, 8.4]
  }
];

var datenArbeitslosenquote25 = [
  {
    'Name': 'Jahre',
    'Data': [2007, 2009, 2011, 2013, 2015]
  }, {
    'Name': 'Bottrop',
    'Data': [10.1, 10.1, 8.2, 9.5, 6.7]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [13.8, 13.8, 11.3, 11.9, 11.9]
  }, {
    'Name': 'Münster',
    'Data': [4.7, 4.6, 4.2, 4, 3.6]
  }, {
    'Name': 'Borken',
    'Data': [4.2, 4.7, 2.7, 3.1, 3]
  }, {
    'Name': 'Coesfeld',
    'Data': [3.8, 3.7, 2.6, 3, 2.5]
  }, {
    'Name': 'Recklinghausen',
    'Data': [10.1, 9.9, 8.9, 9.9, 8.5]
  }, {
    'Name': 'Steinfurt',
    'Data': [4.5, 4, 4.2, 4.7, 4.4]
  }, {
    'Name': 'Warendorf',
    'Data': [4.2, 5.9, 3.9, 5, 4.7]
  }, {
    'Name': 'Bielefeld',
    'Data': [8.9, 10.9, 8.1, 9.4, 7.3]
  }, {
    'Name': 'Gütersloh',
    'Data': [4.8, 5.3, 3.8, 4.5, 4.2]
  }, {
    'Name': 'Herford',
    'Data': [6, 6, 5.5, 5.9, 5.4]
  }, {
    'Name': 'Höxter',
    'Data': [4.9, 6.2, 4.2, 5.4, 3.6]
  }, {
    'Name': 'Lippe',
    'Data': [7.2, 7.8, 6, 7, 6.3]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [6.7, 4.9, 4.6, 5.4, 5.5]
  }, {
    'Name': 'Paderborn',
    'Data': [6.6, 6.5, 4.7, 5.4, 4.8]
  }, {
    'Name': 'Bochum',
    'Data': [7.9, 8.6, 7.7, 8.5, 7.3]
  }, {
    'Name': 'Dortmund',
    'Data': [12.1, 11, 10, 11.1, 10]
  }, {
    'Name': 'Hagen',
    'Data': [8.9, 9.3, 8.2, 9.3, 10.1]
  }, {
    'Name': 'Hamm',
    'Data': [9.7, 7.7, 6, 8.4, 7.3]
  }, {
    'Name': 'Herne',
    'Data': [10.1, 11.5, 9.9, 12.3, 10.9]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [7, 6.5, 4.5, 5.3, 3.9]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [4.9, 5.2, 3.3, 4, 3.4]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [5.3, 7.3, 4, 5.7, 5.2]
  }, {
    'Name': 'Olpe',
    'Data': [4.3, 6.1, 3.3, 4.1, 3.2]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [5.8, 6.7, 4.7, 5.2, 4.4]
  }, {
    'Name': 'Soest',
    'Data': [5, 6.2, 4.3, 4.8, 4.8]
  }, {
    'Name': 'Unna',
    'Data': [9, 9, 5.9, 6.4, 5.5]
  }
];

var datenArbeitslosenquote55 = [
  {
    'Name': 'Jahre',
    'Data': [2007, 2009, 2011, 2013, 2015]
  }, {
    'Name': 'Bottrop',
    'Data': [9.9, 7.3, 8.2, 8.5, 7]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [9.5, 13.3, 12.9, 14.3, 14.4]
  }, {
    'Name': 'Münster',
    'Data': [8.4, 6.3, 6.7, 6.8, 6.9]
  }, {
    'Name': 'Borken',
    'Data': [12.6, 7.4, 6, 5.8, 5]
  }, {
    'Name': 'Coesfeld',
    'Data': [12.7, 5.5, 4.4, 4.2, 3.6]
  }, {
    'Name': 'Recklinghausen',
    'Data': [10.9, 10.8, 10.9, 12.1, 10.3]
  }, {
    'Name': 'Steinfurt',
    'Data': [11.9, 6.1, 5.4, 5.6, 4.6]
  }, {
    'Name': 'Warendorf',
    'Data': [10.1, 6.3, 6.5, 6.9, 6.2]
  }, {
    'Name': 'Bielefeld',
    'Data': [9.5, 9.1, 9.3, 8.3, 8.2]
  }, {
    'Name': 'Gütersloh',
    'Data': [10.8, 5, 5.4, 6.1, 5.2]
  }, {
    'Name': 'Herford',
    'Data': [10.4, 8.3, 7.3, 7.2, 6.7]
  }, {
    'Name': 'Höxter',
    'Data': [11.7, 8.1, 7.2, 6.7, 6.1]
  }, {
    'Name': 'Lippe',
    'Data': [10.5, 8.5, 8.8, 7.3, 6.8]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [12.6, 9.2, 6.9, 6.2, 5.6]
  }, {
    'Name': 'Paderborn',
    'Data': [9.3, 7.7, 7.8, 7.2, 7.1]
  }, {
    'Name': 'Bochum',
    'Data': [11.4, 10.4, 9.5, 10.6, 9.8]
  }, {
    'Name': 'Dortmund',
    'Data': [10.5, 11.9, 14, 12.9, 11.4]
  }, {
    'Name': 'Hagen',
    'Data': [11.6, 9.9, 9.9, 9.2, 9]
  }, {
    'Name': 'Hamm',
    'Data': [11.2, 12, 13.6, 10.5, 8.9]
  }, {
    'Name': 'Herne',
    'Data': [9.1, 11.9, 11.5, 12.5, 10.3]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [13.8, 8.9, 8.6, 8.2, 7.3]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [12.5, 7.5, 6.1, 6.2, 5.1]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [11, 8.6, 8.1, 7.9, 7.5]
  }, {
    'Name': 'Olpe',
    'Data': [10.8, 6, 5.5, 5, 4.9]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [11.8, 7.6, 6.8, 6.8, 6]
  }, {
    'Name': 'Soest',
    'Data': [13, 7.9, 7.9, 7.9, 6.4]
  }, {
    'Name': 'Unna',
    'Data': [10, 9.2, 9.7, 10.2, 8.6]
  }
];

var datenArbeitslosenquoteND = [
  {
    'Name': 'Jahre',
    'Data': [2007, 2009, 2011, 2013, 2015]
  }, {
    'Name': 'Bottrop',
    'Data': [27.8, 23.2, 23.3, 21.8, 21.6]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [33.3, 28, 27.4, 29.5, 33.1]
  }, {
    'Name': 'Münster',
    'Data': [17.4, 14.4, 14.7, 13.4, 16.2]
  }, {
    'Name': 'Borken',
    'Data': [14.8, 16.8, 12.4, 14.8, 15.5]
  }, {
    'Name': 'Coesfeld',
    'Data': [15.7, 16.8, 11.4, 12.2, 11.9]
  }, {
    'Name': 'Recklinghausen',
    'Data': [32.2, 28.5, 26.8, 33.4, 28.3]
  }, {
    'Name': 'Steinfurt',
    'Data': [19, 17.1, 16.2, 17.8, 20.1]
  }, {
    'Name': 'Warendorf',
    'Data': [18.4, 19.9, 17.4, 19.6, 21.1]
  }, {
    'Name': 'Bielefeld',
    'Data': [22.5, 24.1, 21.3, 22.4, 25.1]
  }, {
    'Name': 'Gütersloh',
    'Data': [14, 13.3, 11.9, 15.2, 15.4]
  }, {
    'Name': 'Herford',
    'Data': [18.1, 19.4, 16.8, 18.5, 19.2]
  }, {
    'Name': 'Höxter',
    'Data': [17.2, 15.2, 14.7, 13.1, 14.6]
  }, {
    'Name': 'Lippe',
    'Data': [26, 24.2, 20.7, 21.8, 27.6]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [23.9, 20.1, 16, 15.8, 19.4]
  }, {
    'Name': 'Paderborn',
    'Data': [22.6, 19.9, 17.2, 16.2, 17.7]
  }, {
    'Name': 'Bochum',
    'Data': [25.1, 23.2, 22.3, 24.6, 26.6]
  }, {
    'Name': 'Dortmund',
    'Data': [31.6, 26, 25.7, 27.2, 27.8]
  }, {
    'Name': 'Hagen',
    'Data': [24, 22.3, 19.6, 21.1, 26.1]
  }, {
    'Name': 'Hamm',
    'Data': [24, 24.3, 23.8, 22.9, 23.7]
  }, {
    'Name': 'Herne',
    'Data': [27.4, 27, 25.5, 28.5, 28.8]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [20.1, 19.1, 16.2, 17.4, 18.2]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [14.4, 14.7, 10.5, 12.1, 12.5]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [13.5, 17, 12, 13.9, 14.2]
  }, {
    'Name': 'Olpe',
    'Data': [12.6, 14.2, 11.6, 13.7, 11.7]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [16, 17.3, 12.8, 14.7, 15.5]
  }, {
    'Name': 'Soest',
    'Data': [19.1, 18.4, 14.4, 15.6, 17]
  }, {
    'Name': 'Unna',
    'Data': [28.6, 24.4, 20.9, 23.3, 23.2]
  }
];

var datenErwerbstätige = [
  {
    'Name': 'Jahre',
    'Data': [2007, 2009, 2011, 2013, 2014]
  }, {
    'Name': 'Bottrop',
    'Data': [40.5, 41.7, 41.8, 41.9, 40.9]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [40.7, 42.5, 43.7, 43.6, 43.6]
  }, {
    'Name': 'Münster',
    'Data': [71.2, 72.1, 70.5, 70.9, 71.5]
  }, {
    'Name': 'Borken',
    'Data': [48.8, 49.7, 52.3, 54.3, 54.8]
  }, {
    'Name': 'Coesfeld',
    'Data': [41.2, 41.4, 43.1, 43.8, 44.4]
  }, {
    'Name': 'Recklinghausen',
    'Data': [37.1, 37.6, 38.8, 39.4, 39.9]
  }, {
    'Name': 'Steinfurt',
    'Data': [45, 46, 48.1, 48.7, 49]
  }, {
    'Name': 'Warendorf',
    'Data': [43.9, 44.8, 45.8, 46.5, 46.7]
  }, {
    'Name': 'Bielefeld',
    'Data': [56.4, 57, 57.7, 58.8, 59.5]
  }, {
    'Name': 'Gütersloh',
    'Data': [54.2, 55, 56.6, 58.4, 58.5]
  }, {
    'Name': 'Herford',
    'Data': [47.4, 47.4, 48.5, 50.1, 50.1]
  }, {
    'Name': 'Höxter',
    'Data': [42.2, 42.1, 43.3, 44.3, 44.5]
  }, {
    'Name': 'Lippe',
    'Data': [43.4, 43.4, 44.8, 45.6, 45.8]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [50, 50.4, 52.4, 53.2, 53.5]
  }, {
    'Name': 'Paderborn',
    'Data': [49.5, 50.6, 52.6, 52.9, 53]
  }, {
    'Name': 'Bochum',
    'Data': [47.7, 47.9, 50.5, 51.4, 51.6]
  }, {
    'Name': 'Dortmund',
    'Data': [50.5, 52.6, 54.4, 54.7, 54.4]
  }, {
    'Name': 'Hagen',
    'Data': [51.3, 51.6, 53.1, 52.6, 52.2]
  }, {
    'Name': 'Hamm',
    'Data': [42.4, 43.7, 44.9, 45.3, 45.2]
  }, {
    'Name': 'Herne',
    'Data': [39.5, 40.3, 42.2, 41.4, 40.3]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [42.3, 42.9, 43.9, 44.6, 44.9]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [50.9, 51.8, 53.7, 54.9, 55.5]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [48.1, 48, 49.8, 51, 51.9]
  }, {
    'Name': 'Olpe',
    'Data': [53.3, 52.8, 56, 57.4, 57.2]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [51.9, 52.7, 55.1, 55.5, 55.5]
  }, {
    'Name': 'Soest',
    'Data': [46.1, 47.3, 50.1, 51.4, 51.6]
  }, {
    'Name': 'Unna',
    'Data': [38, 38.6, 43.1, 43.5, 44.1]
  }
];

var datenBIP = [
  {
    'Name': 'Jahre',
    'Data': [2007, 2009, 2011, 2013, 2014]
  }, {
    'Name': 'Bottrop',
    'Data': [42756, 44762, 47316, 48440, 48884]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [66571, 61506, 66804, 67958, 68113]
  }, {
    'Name': 'Münster',
    'Data': [80534, 72913, 72386, 74822, 76608]
  }, {
    'Name': 'Borken',
    'Data': [53029, 53103, 57489, 57733, 58894]
  }, {
    'Name': 'Coesfeld',
    'Data': [54173, 51755, 55149, 56180, 56878]
  }, {
    'Name': 'Recklinghausen',
    'Data': [53024, 55496, 60669, 60622, 62279]
  }, {
    'Name': 'Steinfurt',
    'Data': [53841, 50818, 55714, 56617, 58361]
  }, {
    'Name': 'Warendorf',
    'Data': [56701, 55310, 59184, 61649, 61984]
  }, {
    'Name': 'Bielefeld',
    'Data': [56590, 55663, 58677, 60696, 62220]
  }, {
    'Name': 'Gütersloh',
    'Data': [67901, 65701, 72222, 74166, 75658]
  }, {
    'Name': 'Herford',
    'Data': [57899, 56509, 58365, 61051, 62895]
  }, {
    'Name': 'Höxter',
    'Data': [51434, 50694, 53912, 54989, 56260]
  }, {
    'Name': 'Lippe',
    'Data': [55911, 52809, 57298, 59434, 61587]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [61686, 60887, 66414, 68030, 69863]
  }, {
    'Name': 'Paderborn',
    'Data': [58623, 55718, 56919, 59625, 62726]
  }, {
    'Name': 'Bochum',
    'Data': [55209, 54012, 57454, 59187, 62522]
  }, {
    'Name': 'Dortmund',
    'Data': [59951, 57828, 60868, 62753, 64284]
  }, {
    'Name': 'Hagen',
    'Data': [59618, 54902, 60739, 60834, 62721]
  }, {
    'Name': 'Hamm',
    'Data': [54869, 55842, 59103, 59755, 61380]
  }, {
    'Name': 'Herne',
    'Data': [45886, 47990, 54131, 54569, 55923]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [58582, 56709, 62196, 63360, 65005]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [53044, 51966, 56961, 56695, 58642]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [59080, 56590, 62551, 65399, 66125]
  }, {
    'Name': 'Olpe',
    'Data': [55753, 53473, 58292, 61725, 63897]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [61897, 59221, 64218, 64802, 66495]
  }, {
    'Name': 'Soest',
    'Data': [56019, 57826, 62099, 60742, 61640]
  }, {
    'Name': 'Unna',
    'Data': [60506, 60541, 60369, 61791, 64412]
  }
];

var datenPflegeheimPersonal = [
  {
    'Name': 'Jahre',
    'Data': ['']
  }, {
    'Name': 'Bottrop',
    'Data': [18.6]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [8.2]
  }, {
    'Name': 'Münster',
    'Data': [3.6]
  }, {
    'Name': 'Borken',
    'Data': [12.5]
  }, {
    'Name': 'Coesfeld',
    'Data': [19]
  }, {
    'Name': 'Recklinghausen',
    'Data': [19.7, ]
  }, {
    'Name': 'Steinfurt',
    'Data': [16.7]
  }, {
    'Name': 'Warendorf',
    'Data': [36.8]
  }, {
    'Name': 'Bielefeld',
    'Data': [4.5]
  }, {
    'Name': 'Gütersloh',
    'Data': [15.5]
  }, {
    'Name': 'Herford',
    'Data': [20.9]
  }, {
    'Name': 'Höxter',
    'Data': [18.2]
  }, {
    'Name': 'Lippe',
    'Data': [7.9]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [20.7]
  }, {
    'Name': 'Paderborn',
    'Data': [16.5]
  }, {
    'Name': 'Bochum',
    'Data': [3]
  }, {
    'Name': 'Dortmund',
    'Data': [23.5]
  }, {
    'Name': 'Hagen',
    'Data': [19.1]
  }, {
    'Name': 'Hamm',
    'Data': [35.6]
  }, {
    'Name': 'Herne',
    'Data': [13.6]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [15.2]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [10.5]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [21.7]
  }, {
    'Name': 'Olpe',
    'Data': [43.4]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [22.8]
  }, {
    'Name': 'Soest',
    'Data': [15.5]
  }, {
    'Name': 'Unna',
    'Data': [21.7]
  }
];



var datenPendlersaldo = [
  {
    'Name': 'Jahre',
    'Data': [2011, 2013, 2014]
  }, {
    'Name': 'Bottrop',
    'Data': [-7303, -7111, -8037]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [1656, 3340, 2972]
  }, {
    'Name': 'Münster',
    'Data': [53978, 54303, 55285]
  }, {
    'Name': 'Borken',
    'Data': [-8639, -7394, -6943]
  }, {
    'Name': 'Coesfeld',
    'Data': [-25448, -24686, -24505]
  }, {
    'Name': 'Recklinghausen',
    'Data': [-56898, -57742, -57298]
  }, {
    'Name': 'Steinfurt',
    'Data': [-28692, -29399, -28285]
  }, {
    'Name': 'Warendorf',
    'Data': [-21301, -21902, -21715]
  }, {
    'Name': 'Bielefeld',
    'Data': [31631, 31661, 32654]
  }, {
    'Name': 'Gütersloh',
    'Data': [11349, 13433, 15207]
  }, {
    'Name': 'Herford',
    'Data': [-5873, -6604, -6281]
  }, {
    'Name': 'Höxter',
    'Data': [-10932, -11240, -11252]
  }, {
    'Name': 'Lippe',
    'Data': [-18993, -18343, -18984]
  }, {
    'Name': 'Minden-Lübbecke',
    'Data': [2920, 2842, 3120]
  }, {
    'Name': 'Paderborn',
    'Data': [-1323, -2443, -1745]
  }, {
    'Name': 'Bochum',
    'Data': [10038, 10262, 10404]
  }, {
    'Name': 'Dortmund',
    'Data': [44849, 42615, 39702]
  }, {
    'Name': 'Hagen',
    'Data': [9474, 7057, 7001]
  }, {
    'Name': 'Hamm',
    'Data': [-5095, -2839, -3868]
  }, {
    'Name': 'Herne',
    'Data': [-4898, -6216, -7184]
  }, {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [-20929, -21716, -22004]
  }, {
    'Name': 'Hochsauerlandkreis',
    'Data': [-2821, -2019, -861]
  }, {
    'Name': 'Märkischer Kreis',
    'Data': [-5265, -4039, -3293]
  }, {
    'Name': 'Olpe',
    'Data': [-534, 133, -376]
  }, {
    'Name': 'Siegen-Wittgenstein',
    'Data': [4492, 3640, 4106]
  }, {
    'Name': 'Soest',
    'Data': [-9082, -9565, -9219]
  }, {
    'Name': 'Unna',
    'Data': [-23160, -26577, -23829]
  }
];

var datenBeschäftigte = [{
  'Name': 'Jahre',
  'Data': ['Land- und Forstwirtschaft, Fischerei', 'Produzierendes Gewerbe', 'Handel, Gastgewerbe, Verkehr', 'Sonstige Dienstleistungen']
}, {
  'Name': 'Bottrop',
  'Data': [139, 10352, 6995, 14903]
}, {
  'Name': 'Gelsenkirchen',
  'Data': [47, 20692, 14318, 41089]
}, {
  'Name': 'Münster',
  'Data': [640, 20460, 28300, 103947]
}, {
  'Name': 'Borken',
  'Data': [1574, 55000, 28567, 45939]
}, {
  'Name': 'Coesfeld',
  'Data': [1250, 18941, 14880, 26700]
}, {
  'Name': 'Recklinghausen',
  'Data': [749, 38677, 34453, 81130]
}, {
  'Name': 'Steinfurt',
  'Data': [1340, 48496, 37114, 55692]
}, {
  'Name': 'Warendorf',
  'Data': [1058, 36163, 15799, 31973]
}, {
  'Name': 'Bielefeld',
  'Data': [233, 32006, 32678, 75924]
}, {
  'Name': 'Gütersloh',
  'Data': [945, 68706, 32877, 51190]
}, {
  'Name': 'Herford',
  'Data': [382, 37010, 20337, 30073]
}, {
  'Name': 'Höxter',
  'Data': [408, 15282, 8985, 17491]
}, {
  'Name': 'Lippe',
  'Data': [797, 39147, 20616, 45842]
}, {
  'Name': 'Minden-Lübbecke',
  'Data': [615, 41614, 24659, 52581]
}, {
  'Name': 'Paderborn',
  'Data': [787, 36275, 22184, 50426]
}, {
  'Name': 'Bochum',
  'Data': [37, 27910, 28804, 71407]
}, {
  'Name': 'Dortmund',
  'Data': [106, 40790, 50487, 121232]
}, {
  'Name': 'Hagen',
  'Data': [133, 19680, 16216, 31929]
}, {
  'Name': 'Hamm',
  'Data': [79, 13876, 14199, 25812]
}, {
  'Name': 'Herne',
  'Data': [25, 11178, 9602, 22601]
}, {
  'Name': 'Ennepe-Ruhr-Kreis',
  'Data': [246, 39740, 20370, 40395]
}, {
  'Name': 'Hochsauerlandkreis',
  'Data': [797, 40972, 17878, 37721]
}, {
  'Name': 'Märkischer Kreis',
  'Data': [378, 79604, 23616, 50387]
}, {
  'Name': 'Olpe',
  'Data': [273, 29856, 7282, 16387]
}, {
  'Name': 'Siegen-Wittgenstein',
  'Data': [301, 47193, 21402, 39753]
}, {
  'Name': 'Soest',
  'Data': [1580, 40776, 21314, 40874]
}, {
  'Name': 'Unna',
  'Data': [423, 33885, 34168, 47811]
},];

var datenNatuerlicheBevoelkerungsentwicklung = [{
    'Name': 'Jahre',
    'Data': ['2007', '2009', '2011', '2013', '2015']
  },
  {
    'Name': 'Bottrop',
    'Data': [-3.5, -4.8, -4.4, -5.3, -4.9]
  },
  {
    'Name': 'Gelsenkirchen',
    'Data': [-4.4, -4.8, -5.7, -5.4, -3.8]
  },
  {
    'Name': 'Münster',
    'Data': [0.8, 0.4, 0.9, 1.2, 1.6]
  },
  {
    'Name': 'Borken',
    'Data': [0.6, -0.1, -0.5, -0.7, -0.5]
  },
  {
    'Name': 'Coesfeld',
    'Data': [-0.7, -1.2, -2, -2.4, -1.5]
  },
  {
    'Name': 'Recklinghausen',
    'Data': [-3.9, -4.8, -4.9, -5.1, -4.6]
  },
  {
    'Name': 'Steinfurt',
    'Data': [-0.1, -0.9, -1.2, -1.5, -1.4]
  },
  {
    'Name': 'Warendorf',
    'Data': [-0.1, -1.4, -1.8, -2.5, -1.1]
  },
  {
    'Name': 'Bielefeld',
    'Data': [-1, -1.9, -0.9, -1.7, -0.9]
  },
  {
    'Name': 'Gütersloh',
    'Data': [0.2, -0.6, -0.1, -1.1, -0.5]
  },
  {
    'Name': 'Herford',
    'Data': [-2.3, -3, -3.1, -3.7, -3.2]
  },
  {
    'Name': 'Höxter',
    'Data': [-1.9, -3.5, -3.9, -5, -4.2]
  },
  {
    'Name': 'Lippe',
    'Data': [-2.2, -2.9, -3.6, -3.6, -3.4]
  },
  {
    'Name': 'Minden-Lübbecke',
    'Data': [-2.3, -3.1, -3.5, -3.7, -3.1]
  },
  {
    'Name': 'Paderborn',
    'Data': [1.5, 1.2, 0.9, 0.4, 1]
  },
  {
    'Name': 'Bochum',
    'Data': [-3.8, -4.5, -4.8, -4.8, -4.5]
  },
  {
    'Name': 'Dortmund',
    'Data': [-3.1, -3.4, -3.6, -3.5, -2.9]
  },
  {
    'Name': 'Hagen',
    'Data': [-3.8, -4.6, -5.2, -5.2, -4.2]
  },
  {
    'Name': 'Hamm',
    'Data': [-2.1, -2.7, -3.3, -2.6, -2.8]
  },
  {
    'Name': 'Herne',
    'Data': [-4.6, -5.3, -5.6, -6, -5.3]
  },
  {
    'Name': 'Ennepe-Ruhr-Kreis',
    'Data': [-4.8, -5.2, -5.5, -6, -5.6]
  },
  {
    'Name': 'Hochsauerlandkreis',
    'Data': [-2.4, -3.2, -4.1, -4.3, -4.8]
  },
  {
    'Name': 'Märkischer Kreis',
    'Data': [-2, -3.1, -3, -4.1, -3.6]
  },
  {
    'Name': 'Olpe',
    'Data': [-0.7, -1.7, -2.4, -2.9, -1.7]
  },
  {
    'Name': 'Siegen-Wittgenstein',
    'Data': [-2.6, -3.1, -3.2, -3.8, -2.8]
  },
  {
    'Name': 'Soest',
    'Data': [-2, -2.5, -3, -4.3, -3.2]
  },
  {
    'Name': 'Unna',
    'Data': [-2.5, -3.5, -4.2, -4.7, -4.7]
  },
];

var datenEinwohnerKommunen = [
  {
    'Name': 'Jahre',
    'Data': [1990, 2015, 2040]
  }, {
    'Name': 'Bottrop',
    'Data': [118936, 117143, 105875]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [293714, 260368, 248100]
  }, {
    'Name': 'Münster',
    'Data': [259438, 310039, 349353]
  }, {
    'Name': 'Ahaus',
    'Data': [31202, 39277, 38092]
  }, {
    'Name': 'Bocholt',
    'Data': [68936, 71443, 61647]
  }, {
    'Name': 'Borken',
    'Data': [36049, 42272, 35688]
  }, {
    'Name': 'Gescher',
    'Data': [15002, 17118, 15410]
  }, {
    'Name': 'Gronau',
    'Data': [40687, 47010, 46274]
  }, {
    'Name': 'Heek',
    'Data': [7120, 8505, 9334]
  }, {
    'Name': 'Heiden',
    'Data': [6888, 8152, 7068]
  }, {
    'Name': 'Isselburg',
    'Data': [10084, 10736, 9665]
  }, {
    'Name': 'Legden',
    'Data': [5621, 7254, 7103]
  }, {
    'Name': 'Raesfeld',
    'Data': [9323, 11378, 10094]
  }, {
    'Name': 'Reken',
    'Data': [11689, 14532, 13453]
  }, {
    'Name': 'Rhede',
    'Data': [16952, 19284, 16841]
  }, {
    'Name': 'Schöppingen',
    'Data': [5732, 7280, 8062]
  }, {
    'Name': 'Stadtlohn',
    'Data': [17713, 20411, 18920]
  }, {
    'Name': 'Südlohn',
    'Data': [7787, 9134, 7953]
  }, {
    'Name': 'Velen',
    'Data': [10374, 13192, 11848]
  }, {
    'Name': 'Vreden',
    'Data': [19421, 22688, 22147]
  }, {
    'Name': 'Ascheberg',
    'Data': [12778, 15253, 15633]
  }, {
    'Name': 'Billerbeck',
    'Data': [9991, 11593, 10569]
  }, {
    'Name': 'Coesfeld',
    'Data': [32739, 36116, 33041]
  }, {
    'Name': 'Dülmen',
    'Data': [40496, 46613, 41699]
  }, {
    'Name': 'Havixbeck',
    'Data': [10212, 11689, 12254]
  }, {
    'Name': 'Lüdinghausen',
    'Data': [20152, 24263, 23229]
  }, {
    'Name': 'Nordkirchen',
    'Data': [8359, 9781, 7935]
  }, {
    'Name': 'Nottuln',
    'Data': [15748, 19436, 18597]
  }, {
    'Name': 'Olfen',
    'Data': [8732, 12490, 12952]
  }, {
    'Name': 'Rosendahl',
    'Data': [9693, 10712, 9991]
  }, {
    'Name': 'Senden',
    'Data': [15341, 20455, 22709]
  }, {
    'Name': 'Castrop-Rauxel',
    'Data': [79037, 74220, 67695]
  }, {
    'Name': 'Datteln',
    'Data': [36876, 34521, 29655]
  }, {
    'Name': 'Dorsten',
    'Data': [78035, 75431, 66960]
  }, {
    'Name': 'Gladbeck',
    'Data': [80267, 75455, 74777]
  }, {
    'Name': 'Haltern am See',
    'Data': [34025, 38020, 34290]
  }, {
    'Name': 'Herten',
    'Data': [69245, 61163, 52746]
  }, {
    'Name': 'Marl',
    'Data': [91467, 83926, 71633]
  }, {
    'Name': 'Oer-Erkenschwick',
    'Data': [28222, 31387, 31153]
  }, {
    'Name': 'Recklinghausen',
    'Data': [125060, 114330, 106742]
  }, {
    'Name': 'Waltrop',
    'Data': [29354, 29354, 27209]
  }, {
    'Name': 'Altenberge',
    'Data': [7852, 10315, 11822]
  }, {
    'Name': 'Emsdetten',
    'Data': [31930, 36320, 33097]
  }, {
    'Name': 'Greven',
    'Data': [31010, 36674, 40845]
  }, {
    'Name': 'Hörstel',
    'Data': [15772, 19995, 17835]
  }, {
    'Name': 'Hopsten',
    'Data': [6059, 7642, 7509]
  }, {
    'Name': 'Horstmar',
    'Data': [6040, 6447, 5747]
  }, {
    'Name': 'Ibbenbüren',
    'Data': [44643, 50935, 50562]
  }, {
    'Name': 'Ladbergen',
    'Data': [5797, 6694, 6002]
  }, {
    'Name': 'Laer',
    'Data': [5300, 6721, 7668]
  }, {
    'Name': 'Lengerich',
    'Data': [21045, 22461, 20370]
  }, {
    'Name': 'Lienen',
    'Data': [8194, 8559, 7813]
  }, {
    'Name': 'Lotte',
    'Data': [10593, 14175, 17420]
  }, {
    'Name': 'Metelen',
    'Data': [5904, 6461, 6823]
  }, {
    'Name': 'Mettingen',
    'Data': [10776, 11815, 10319]
  }, {
    'Name': 'Neuenkirchen',
    'Data': [11773, 13743, 11735]
  }, {
    'Name': 'Nordwalde',
    'Data': [8612, 9388, 9312]
  }, {
    'Name': 'Ochtrup',
    'Data': [17460, 19599, 19741]
  }, {
    'Name': 'Recke',
    'Data': [10026, 11363, 8711]
  }, {
    'Name': 'Rheine',
    'Data': [70452, 74852, 72184]
  }, {
    'Name': 'Saerbeck',
    'Data': [5124, 7191, 7582]
  }, {
    'Name': 'Steinfurt',
    'Data': [31484, 33682, 30455]
  }, {
    'Name': 'Tecklenburg',
    'Data': [8980, 9062, 8040]
  }, {
    'Name': 'Westerkappeln',
    'Data': [9317, 11178, 9979]
  }, {
    'Name': 'Wettringen',
    'Data': [6802, 8102, 8622]
  }, {
    'Name': 'Ahlen',
    'Data': [54169, 52287, 48264]
  }, {
    'Name': 'Beckum',
    'Data': [36772, 36560, 31674]
  }, {
    'Name': 'Beelen',
    'Data': [5156, 6380, 5627]
  }, {
    'Name': 'Drensteinfurt',
    'Data': [12127, 15542, 18554]
  }, {
    'Name': 'Ennigerloh',
    'Data': [19534, 20037, 17231]
  }, {
    'Name': 'Everswinkel',
    'Data': [7976, 9583, 10960]
  }, {
    'Name': 'Oelde',
    'Data': [27759, 29299, 28912]
  }, {
    'Name': 'Ostbevern',
    'Data': [7341, 10873, 11879]
  }, {
    'Name': 'Sassenberg',
    'Data': [10214, 14403, 13914]
  }, {
    'Name': 'Sendenhorst',
    'Data': [11409, 13218, 13765]
  }, {
    'Name': 'Telgte',
    'Data': [17358, 19557, 19755]
  }, {
    'Name': 'Wadersloh',
    'Data': [12121, 12443, 11088]
  }, {
    'Name': 'Warendorf',
    'Data': [35092, 37249, 32875]
  }, {
    'Name': 'Bielefeld',
    'Data': [319037, 333090, 336623]
  }, {
    'Name': 'Borgholzhausen',
    'Data': [7872, 8801, 7905]
  }, {
    'Name': 'Gütersloh',
    'Data': [86807, 97586, 99216]
  }, {
    'Name': 'Halle (Westf.)',
    'Data': [18841, 21709, 20083]
  }, {
    'Name': 'Harsewinkel',
    'Data': [20135, 24769, 25616]
  }, {
    'Name': 'Herzebrock-Clarholz',
    'Data': [13351, 15965, 16355]
  }, {
    'Name': 'Langenberg',
    'Data': [7026, 8375, 7303]
  }, {
    'Name': 'Rheda-Wiedenbrück',
    'Data': [38327, 48000, 50655]
  }, {
    'Name': 'Rietberg',
    'Data': [24138, 29436, 30534]
  }, {
    'Name': 'Schloß Holte-Stukenbrock',
    'Data': [21402, 27092, 25206]
  }, {
    'Name': 'Steinhagen',
    'Data': [17303, 20749, 19869]
  }, {
    'Name': 'Verl',
    'Data': [19771, 25512, 27115]
  }, {
    'Name': 'Versmold',
    'Data': [18231, 21230, 19354]
  }, {
    'Name': 'Werther (Westf.)',
    'Data': [10625, 11418, 11787]
  }, {
    'Name': 'Bünde',
    'Data': [40524, 45615, 43096]
  }, {
    'Name': 'Enger',
    'Data': [17194, 20658, 21358]
  }, {
    'Name': 'Herford',
    'Data': [63893, 66521, 63359]
  }, {
    'Name': 'Hiddenhausen',
    'Data': [19945, 19758, 16466]
  }, {
    'Name': 'Kirchlengern',
    'Data': [14849, 16085, 13664]
  }, {
    'Name': 'Löhne',
    'Data': [38557, 40086, 36141]
  }, {
    'Name': 'Rödinghausen',
    'Data': [8700, 9717, 7294]
  }, {
    'Name': 'Spenge',
    'Data': [14977, 14768, 12336]
  }, {
    'Name': 'Vlotho',
    'Data': [19592, 18914, 16294]
  }, {
    'Name': 'Bad Driburg',
    'Data': [17525, 18699, 14627]
  }, {
    'Name': 'Beverungen',
    'Data': [15240, 13442, 11004]
  }, {
    'Name': 'Borgentreich',
    'Data': [9376, 9497, 7372]
  }, {
    'Name': 'Brakel',
    'Data': [15743, 16586, 13116]
  }, {
    'Name': 'Höxter',
    'Data': [33079, 29589, 25898]
  }, {
    'Name': 'Marienmünster',
    'Data': [5145, 5125, 3742]
  }, {
    'Name': 'Nieheim',
    'Data': [6725, 6254, 6138]
  }, {
    'Name': 'Steinheim',
    'Data': [12609, 12922, 10486]
  }, {
    'Name': 'Warburg',
    'Data': [22562, 23629, 20761]
  }, {
    'Name': 'Willebadessen',
    'Data': [8234, 8267, 6876]
  }, {
    'Name': 'Augustdorf',
    'Data': [8464, 9828, 10261]
  }, {
    'Name': 'Bad Salzuflen',
    'Data': [53771, 53341, 48545]
  }, {
    'Name': 'Barntrup',
    'Data': [8989, 8846, 7111]
  }, {
    'Name': 'Blomberg',
    'Data': [15158, 15370, 12896]
  }, {
    'Name': 'Detmold',
    'Data': [70074, 74817, 66816]
  }, {
    'Name': 'Dörentrup',
    'Data': [8226, 7970, 6605]
  }, {
    'Name': 'Extertal',
    'Data': [12606, 11522, 8421]
  }, {
    'Name': 'Horn-Bad Meinberg',
    'Data': [17409, 17126, 14493]
  }, {
    'Name': 'Kalletal',
    'Data': [14522, 13914, 10698]
  }, {
    'Name': 'Lage',
    'Data': [34317, 35120, 32939]
  }, {
    'Name': 'Lemgo',
    'Data': [39485, 41276, 34789]
  }, {
    'Name': 'Leopoldshöhe',
    'Data': [13744, 16401, 17885]
  }, {
    'Name': 'Lügde',
    'Data': [11248, 9751, 6141]
  }, {
    'Name': 'Oerlinghausen',
    'Data': [15689, 17616, 15843]
  }, {
    'Name': 'Schieder-Schwalenberg',
    'Data': [8865, 8708, 6834]
  }, {
    'Name': 'Schlangen',
    'Data': [7635, 9144, 9454]
  }, {
    'Name': 'Bad Oeynhausen',
    'Data': [46475, 48990, 45844]
  }, {
    'Name': 'Espelkamp',
    'Data': [26101, 24921, 23402]
  }, {
    'Name': 'Hille',
    'Data': [14727, 15916, 14339]
  }, {
    'Name': 'Hüllhorst',
    'Data': [11747, 13271, 12219]
  }, {
    'Name': 'Lübbecke',
    'Data': [23695, 25462, 23883]
  }, {
    'Name': 'Minden',
    'Data': [78145, 81598, 74985]
  }, {
    'Name': 'Petershagen',
    'Data': [24543, 25663, 20921]
  }, {
    'Name': 'Porta Westfalica',
    'Data': [35061, 35430, 32590]
  }, {
    'Name': 'Preußisch Oldendorf',
    'Data': [10974, 12647, 11198]
  }, {
    'Name': 'Rahden',
    'Data': [14109, 15581, 12511]
  }, {
    'Name': 'Stemwede',
    'Data': [13194, 13571, 10146]
  }, {
    'Name': 'Altenbeken',
    'Data': [7632, 9294, 6485]
  }, {
    'Name': 'Bad Lippspringe',
    'Data': [12860, 15572, 12406]
  }, {
    'Name': 'Borchen',
    'Data': [11071, 13447, 12671]
  }, {
    'Name': 'Büren',
    'Data': [18748, 21772, 21081]
  }, {
    'Name': 'Delbrück',
    'Data': [24247, 31964, 34509]
  }, {
    'Name': 'Hövelhof',
    'Data': [13346, 16080, 16915]
  }, {
    'Name': 'Lichtenau',
    'Data': [9791, 10589, 10240]
  }, {
    'Name': 'Paderborn',
    'Data': [120680, 148126, 155467]
  }, {
    'Name': 'Salzkotten',
    'Data': [20495, 25186, 21791]
  }, {
    'Name': 'Wünnenberg',
    'Data': [10226, 12302, 12518]
  }, {
    'Name': 'Bochum',
    'Data': [396486, 364742, 345390]
  }, {
    'Name': 'Dortmund',
    'Data': [599055, 586181, 605141]
  }, {
    'Name': 'Hagen',
    'Data': [214449, 189044, 168006]
  }, {
    'Name': 'Hamm',
    'Data': [179639, 179397, 175202]
  }, {
    'Name': 'Herne',
    'Data': [178132, 155851, 148620]
  }, {
    'Name': 'Breckerfeld',
    'Data': [8318, 9004, 8110]
  }, {
    'Name': 'Ennepetal',
    'Data': [34270, 29926, 25259]
  }, {
    'Name': 'Gevelsberg',
    'Data': [33217, 31315, 27129]
  }, {
    'Name': 'Hattingen',
    'Data': [58241, 54834, 54260]
  }, {
    'Name': 'Herdecke',
    'Data': [26184, 22818, 18576]
  }, {
    'Name': 'Schwelm',
    'Data': [30394, 28330, 23185]
  }, {
    'Name': 'Sprockhövel',
    'Data': [24505, 25205, 23741]
  }, {
    'Name': 'Wetter (Ruhr)',
    'Data': [28880, 27822, 25435]
  }, {
    'Name': 'Witten',
    'Data': [105403, 96700, 91344]
  }, {
    'Name': 'Arnsberg',
    'Data': [75864, 73784, 62711]
  }, {
    'Name': 'Bestwig',
    'Data': [11571, 11170, 10441]
  }, {
    'Name': 'Brilon',
    'Data': [25303, 26232, 20785]
  }, {
    'Name': 'Eslohe (Sauerland)',
    'Data': [8862, 8942, 8538]
  }, {
    'Name': 'Hallenberg',
    'Data': [4845, 4541, 3524]
  }, {
    'Name': 'Marsberg',
    'Data': [21124, 19968, 15310]
  }, {
    'Name': 'Medebach',
    'Data': [7560, 7938, 6498]
  }, {
    'Name': 'Meschede',
    'Data': [31715, 30119, 23114]
  }, {
    'Name': 'Olsberg',
    'Data': [15227, 14874, 11884]
  }, {
    'Name': 'Schmallenberg',
    'Data': [25077, 25230, 22064]
  }, {
    'Name': 'Sundern (Sauerland)',
    'Data': [27250, 28166, 25198]
  }, {
    'Name': 'Winterberg',
    'Data': [14229, 12798, 10056]
  }, {
    'Name': 'Altena',
    'Data': [24053, 17375, 12051]
  }, {
    'Name': 'Balve',
    'Data': [11416, 11602, 9018]
  }, {
    'Name': 'Halver',
    'Data': [16260, 16117, 12852]
  }, {
    'Name': 'Hemer',
    'Data': [34412, 33535, 31437]
  }, {
    'Name': 'Herscheid',
    'Data': [7141, 7217, 4940]
  }, {
    'Name': 'Iserlohn',
    'Data': [96314, 93537, 77914]
  }, {
    'Name': 'Kierspe',
    'Data': [16257, 16300, 13236]
  }, {
    'Name': 'Lüdenscheid',
    'Data': [79401, 73354, 59797]
  }, {
    'Name': 'Meinerzhagen',
    'Data': [19907, 20670, 16833]
  }, {
    'Name': 'Menden (Sauerland)',
    'Data': [56527, 53485, 40392]
  }, {
    'Name': 'Nachrodt-Wiblingwerde',
    'Data': [6469, 6644, 4823]
  }, {
    'Name': 'Neuenrade',
    'Data': [11679, 12024, 10463]
  }, {
    'Name': 'Plettenberg',
    'Data': [29083, 25781, 19696]
  }, {
    'Name': 'Schalksmühle',
    'Data': [12232, 10528, 8343]
  }, {
    'Name': 'Werdohl',
    'Data': [21875, 18002, 15384]
  }, {
    'Name': 'Attendorn',
    'Data': [22736, 24676, 22540]
  }, {
    'Name': 'Drolshagen',
    'Data': [11095, 11874, 10872]
  }, {
    'Name': 'Finnentrop',
    'Data': [17253, 17258, 14182]
  }, {
    'Name': 'Kirchhundem',
    'Data': [12202, 11854, 10140]
  }, {
    'Name': 'Lennestadt',
    'Data': [26468, 26073, 21123]
  }, {
    'Name': 'Olpe',
    'Data': [23785, 24757, 22898]
  }, {
    'Name': 'Wenden',
    'Data': [16932, 19873, 18520]
  }, {
    'Name': 'Bad Berleburg',
    'Data': [20471, 19774, 16094]
  }, {
    'Name': 'Burbach',
    'Data': [14017, 14969, 13673]
  }, {
    'Name': 'Erndtebrück',
    'Data': [8001, 7206, 6291]
  }, {
    'Name': 'Freudenberg',
    'Data': [17079, 17929, 15671]
  }, {
    'Name': 'Hilchenbach',
    'Data': [15905, 15169, 12035]
  }, {
    'Name': 'Kreuztal',
    'Data': [30885, 31500, 30815]
  }, {
    'Name': 'Bad Laasphe',
    'Data': [15139, 14276, 11267]
  }, {
    'Name': 'Netphen',
    'Data': [23293, 23393, 20421]
  }, {
    'Name': 'Neunkirchen',
    'Data': [14461, 13717, 11545]
  }, {
    'Name': 'Siegen',
    'Data': [109174, 102355, 99478]
  }, {
    'Name': 'Wilnsdorf',
    'Data': [20497, 20512, 17986]
  }, {
    'Name': 'Anröchte',
    'Data': [9587, 10557, 9606]
  }, {
    'Name': 'Bad Sassendorf',
    'Data': [10147, 11931, 10964]
  }, {
    'Name': 'Ense',
    'Data': [10040, 12442, 12318]
  }, {
    'Name': 'Erwitte',
    'Data': [13849, 16128, 13932]
  }, {
    'Name': 'Geseke',
    'Data': [17733, 21070, 20174]
  }, {
    'Name': 'Lippetal',
    'Data': [11155, 12027, 10852]
  }, {
    'Name': 'Lippstadt',
    'Data': [62345, 67233, 65832]
  }, {
    'Name': 'Möhnesee',
    'Data': [9104, 11608, 10624]
  }, {
    'Name': 'Rüthen',
    'Data': [11253, 11095, 7685]
  }, {
    'Name': 'Soest',
    'Data': [42602, 47974, 46741]
  }, {
    'Name': 'Warstein',
    'Data': [28363, 25407, 19576]
  }, {
    'Name': 'Welver',
    'Data': [10772, 12140, 11046]
  }, {
    'Name': 'Werl',
    'Data': [28554, 30638, 27269]
  }, {
    'Name': 'Wickede (Ruhr)',
    'Data': [11829, 12745, 10073]
  }, {
    'Name': 'Bergkamen',
    'Data': [49761, 47803, 43443]
  }, {
    'Name': 'Bönen',
    'Data': [18391, 18059, 15638]
  }, {
    'Name': 'Fröndenberg/Ruhr',
    'Data': [21252, 20961, 18693]
  }, {
    'Name': 'Holzwickede',
    'Data': [16402, 17085, 16619]
  }, {
    'Name': 'Kamen',
    'Data': [46160, 43868, 38806]
  }, {
    'Name': 'Lünen',
    'Data': [87845, 85867, 80395]
  }, {
    'Name': 'Schwerte',
    'Data': [50696, 46723, 44237]
  }, {
    'Name': 'Selm',
    'Data': [24891, 26603, 22996]
  }, {
    'Name': 'Unna',
    'Data': [61552, 59111, 51571]
  }, {
    'Name': 'Werne',
    'Data': [29484, 29955, 23906]
  }

];



var datenEinwohnerEntwicklungKommunen = [
  {
    'Name': 'Jahre',
    'Data': ['1990 - 2015', '2015 - 2040']
  }, {
    'Name': 'Bottrop',
    'Data': [-1.5, -9.6]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [-11.4, -4.7]
  }, {
    'Name': 'Münster',
    'Data': [19.5, 12.7]
  }, {
    'Name': 'Ahaus',
    'Data': [25.9, -3]
  }, {
    'Name': 'Bocholt',
    'Data': [3.6, -13.7]
  }, {
    'Name': 'Borken',
    'Data': [17.3, -15.6]
  }, {
    'Name': 'Gescher',
    'Data': [14.1, -10]
  }, {
    'Name': 'Gronau',
    'Data': [15.5, -1.6]
  }, {
    'Name': 'Heek',
    'Data': [19.5, 9.7]
  }, {
    'Name': 'Heiden',
    'Data': [18.4, -13.3]
  }, {
    'Name': 'Isselburg',
    'Data': [6.5, -10]
  }, {
    'Name': 'Legden',
    'Data': [29.1, -2.1]
  }, {
    'Name': 'Raesfeld',
    'Data': [22, -11.3]
  }, {
    'Name': 'Reken',
    'Data': [24.3, -7.4]
  }, {
    'Name': 'Rhede',
    'Data': [13.8, -12.7]
  }, {
    'Name': 'Schöppingen',
    'Data': [27, 10.7]
  }, {
    'Name': 'Stadtlohn',
    'Data': [15.2, -7.3]
  }, {
    'Name': 'Südlohn',
    'Data': [17.3, -12.9]
  }, {
    'Name': 'Velen',
    'Data': [27.2, -10.2]
  }, {
    'Name': 'Vreden',
    'Data': [16.8, -2.4]
  }, {
    'Name': 'Ascheberg',
    'Data': [19.4, 2.5]
  }, {
    'Name': 'Billerbeck',
    'Data': [16, -8.8]
  }, {
    'Name': 'Coesfeld',
    'Data': [10.3, -8.5]
  }, {
    'Name': 'Dülmen',
    'Data': [15.1, -10.5]
  }, {
    'Name': 'Havixbeck',
    'Data': [14.5, 4.8]
  }, {
    'Name': 'Lüdinghausen',
    'Data': [20.4, -4.3]
  }, {
    'Name': 'Nordkirchen',
    'Data': [17, -18.9]
  }, {
    'Name': 'Nottuln',
    'Data': [23.4, -4.3]
  }, {
    'Name': 'Olfen',
    'Data': [43, 3.7]
  }, {
    'Name': 'Rosendahl',
    'Data': [10.5, -6.7]
  }, {
    'Name': 'Senden',
    'Data': [33.3, 11]
  }, {
    'Name': 'Castrop-Rauxel',
    'Data': [-6.1, -8.8]
  }, {
    'Name': 'Datteln',
    'Data': [-6.4, -14.1]
  }, {
    'Name': 'Dorsten',
    'Data': [-3.3, -11.2]
  }, {
    'Name': 'Gladbeck',
    'Data': [-6, -0.9]
  }, {
    'Name': 'Haltern am See',
    'Data': [11.7, -9.8]
  }, {
    'Name': 'Herten',
    'Data': [-11.7, -13.8]
  }, {
    'Name': 'Marl',
    'Data': [-8.2, -14.6]
  }, {
    'Name': 'Oer-Erkenschwick',
    'Data': [11.2, -0.7]
  }, {
    'Name': 'Recklinghausen',
    'Data': [-8.6, -6.6]
  }, {
    'Name': 'Waltrop',
    'Data': [0, -7.3]
  }, {
    'Name': 'Altenberge',
    'Data': [31.4, 14.6]
  }, {
    'Name': 'Emsdetten',
    'Data': [13.7, -8.9]
  }, {
    'Name': 'Greven',
    'Data': [18.3, 11.4]
  }, {
    'Name': 'Hörstel',
    'Data': [26.8, -10.8]
  }, {
    'Name': 'Hopsten',
    'Data': [26.1, -1.7]
  }, {
    'Name': 'Horstmar',
    'Data': [6.7, -10.9]
  }, {
    'Name': 'Ibbenbüren',
    'Data': [14.1, -0.7]
  }, {
    'Name': 'Ladbergen',
    'Data': [15.5, -10.3]
  }, {
    'Name': 'Laer',
    'Data': [26.8, 14.1]
  }, {
    'Name': 'Lengerich',
    'Data': [6.7, -9.3]
  }, {
    'Name': 'Lienen',
    'Data': [4.5, -8.7]
  }, {
    'Name': 'Lotte',
    'Data': [33.8, 22.9]
  }, {
    'Name': 'Metelen',
    'Data': [9.4, 5.6]
  }, {
    'Name': 'Mettingen',
    'Data': [9.6, -12.7]
  }, {
    'Name': 'Neuenkirchen',
    'Data': [16.7, -14.6]
  }, {
    'Name': 'Nordwalde',
    'Data': [9, -0.8]
  }, {
    'Name': 'Ochtrup',
    'Data': [12.3, 0.7]
  }, {
    'Name': 'Recke',
    'Data': [13.3, -23.3]
  }, {
    'Name': 'Rheine',
    'Data': [6.2, -3.6]
  }, {
    'Name': 'Saerbeck',
    'Data': [40.3, 5.4]
  }, {
    'Name': 'Steinfurt',
    'Data': [7, -9.6]
  }, {
    'Name': 'Tecklenburg',
    'Data': [0.9, -11.3]
  }, {
    'Name': 'Westerkappeln',
    'Data': [20, -10.7]
  }, {
    'Name': 'Wettringen',
    'Data': [19.1, 6.4]
  }, {
    'Name': 'Ahlen',
    'Data': [-3.5, -7.7]
  }, {
    'Name': 'Beckum',
    'Data': [-0.6, -13.4]
  }, {
    'Name': 'Beelen',
    'Data': [23.7, -11.8]
  }, {
    'Name': 'Drensteinfurt',
    'Data': [28.2, 19.4]
  }, {
    'Name': 'Ennigerloh',
    'Data': [2.6, -14]
  }, {
    'Name': 'Everswinkel',
    'Data': [20.1, 14.4]
  }, {
    'Name': 'Oelde',
    'Data': [5.5, -1.3]
  }, {
    'Name': 'Ostbevern',
    'Data': [48.1, 9.3]
  }, {
    'Name': 'Sassenberg',
    'Data': [41, -3.4]
  }, {
    'Name': 'Sendenhorst',
    'Data': [15.9, 4.1]
  }, {
    'Name': 'Telgte',
    'Data': [12.7, 1]
  }, {
    'Name': 'Wadersloh',
    'Data': [2.7, -10.9]
  }, {
    'Name': 'Warendorf',
    'Data': [6.1, -11.7]
  }, {
    'Name': 'Bielefeld',
    'Data': [4.4, 1.1]
  }, {
    'Name': 'Borgholzhausen',
    'Data': [11.8, -10.2]
  }, {
    'Name': 'Gütersloh',
    'Data': [12.4, 1.7]
  }, {
    'Name': 'Halle (Westf.)',
    'Data': [15.2, -7.5]
  }, {
    'Name': 'Harsewinkel',
    'Data': [23, 3.4]
  }, {
    'Name': 'Herzebrock-Clarholz',
    'Data': [19.6, 2.4]
  }, {
    'Name': 'Langenberg',
    'Data': [19.2, -12.8]
  }, {
    'Name': 'Rheda-Wiedenbrück',
    'Data': [25.2, 5.5]
  }, {
    'Name': 'Rietberg',
    'Data': [21.9, 3.7]
  }, {
    'Name': 'Schloß Holte-Stukenbrock',
    'Data': [26.6, -7]
  }, {
    'Name': 'Steinhagen',
    'Data': [19.9, -4.2]
  }, {
    'Name': 'Verl',
    'Data': [29, 6.3]
  }, {
    'Name': 'Versmold',
    'Data': [16.5, -8.8]
  }, {
    'Name': 'Werther (Westf.)',
    'Data': [7.5, 3.2]
  }, {
    'Name': 'Bünde',
    'Data': [12.6, -5.5]
  }, {
    'Name': 'Enger',
    'Data': [20.1, 3.4]
  }, {
    'Name': 'Herford',
    'Data': [4.1, -4.8]
  }, {
    'Name': 'Hiddenhausen',
    'Data': [-0.9, -16.7]
  }, {
    'Name': 'Kirchlengern',
    'Data': [8.3, -15.1]
  }, {
    'Name': 'Löhne',
    'Data': [4, -9.8]
  }, {
    'Name': 'Rödinghausen',
    'Data': [11.7, -24.9]
  }, {
    'Name': 'Spenge',
    'Data': [-1.4, -16.5]
  }, {
    'Name': 'Vlotho',
    'Data': [-3.5, -13.9]
  }, {
    'Name': 'Bad Driburg',
    'Data': [6.7, -21.8]
  }, {
    'Name': 'Beverungen',
    'Data': [-11.8, -18.1]
  }, {
    'Name': 'Borgentreich',
    'Data': [1.3, -22.4]
  }, {
    'Name': 'Brakel',
    'Data': [5.4, -20.9]
  }, {
    'Name': 'Höxter',
    'Data': [-10.6, -12.5]
  }, {
    'Name': 'Marienmünster',
    'Data': [-0.4, -27]
  }, {
    'Name': 'Nieheim',
    'Data': [-7, -1.9]
  }, {
    'Name': 'Steinheim',
    'Data': [2.5, -18.9]
  }, {
    'Name': 'Warburg',
    'Data': [4.7, -12.1]
  }, {
    'Name': 'Willebadessen',
    'Data': [0.4, -16.8]
  }, {
    'Name': 'Augustdorf',
    'Data': [16.1, 4.4]
  }, {
    'Name': 'Bad Salzuflen',
    'Data': [-0.8, -9]
  }, {
    'Name': 'Barntrup',
    'Data': [-1.6, -19.6]
  }, {
    'Name': 'Blomberg',
    'Data': [1.4, -16.1]
  }, {
    'Name': 'Detmold',
    'Data': [6.8, -10.7]
  }, {
    'Name': 'Dörentrup',
    'Data': [-3.1, -17.1]
  }, {
    'Name': 'Extertal',
    'Data': [-8.6, -26.9]
  }, {
    'Name': 'Horn-Bad Meinberg',
    'Data': [-1.6, -15.4]
  }, {
    'Name': 'Kalletal',
    'Data': [-4.2, -23.1]
  }, {
    'Name': 'Lage',
    'Data': [2.3, -6.2]
  }, {
    'Name': 'Lemgo',
    'Data': [4.5, -15.7]
  }, {
    'Name': 'Leopoldshöhe',
    'Data': [19.3, 9]
  }, {
    'Name': 'Lügde',
    'Data': [-13.3, -37]
  }, {
    'Name': 'Oerlinghausen',
    'Data': [12.3, -10.1]
  }, {
    'Name': 'Schieder-Schwalenberg',
    'Data': [-1.8, -21.5]
  }, {
    'Name': 'Schlangen',
    'Data': [19.8, 3.4]
  }, {
    'Name': 'Bad Oeynhausen',
    'Data': [5.4, -6.4]
  }, {
    'Name': 'Espelkamp',
    'Data': [-4.5, -6.1]
  }, {
    'Name': 'Hille',
    'Data': [8.1, -9.9]
  }, {
    'Name': 'Hüllhorst',
    'Data': [13, -7.9]
  }, {
    'Name': 'Lübbecke',
    'Data': [7.5, -6.2]
  }, {
    'Name': 'Minden',
    'Data': [4.4, -8.1]
  }, {
    'Name': 'Petershagen',
    'Data': [4.6, -18.5]
  }, {
    'Name': 'Porta Westfalica',
    'Data': [1.1, -8]
  }, {
    'Name': 'Preußisch Oldendorf',
    'Data': [15.2, -11.5]
  }, {
    'Name': 'Rahden',
    'Data': [10.4, -19.7]
  }, {
    'Name': 'Stemwede',
    'Data': [2.9, -25.2]
  }, {
    'Name': 'Altenbeken',
    'Data': [21.8, -30.2]
  }, {
    'Name': 'Bad Lippspringe',
    'Data': [21.1, -20.3]
  }, {
    'Name': 'Borchen',
    'Data': [21.5, -5.8]
  }, {
    'Name': 'Büren',
    'Data': [16.1, -3.2]
  }, {
    'Name': 'Delbrück',
    'Data': [31.8, 8]
  }, {
    'Name': 'Hövelhof',
    'Data': [20.5, 5.2]
  }, {
    'Name': 'Lichtenau',
    'Data': [8.2, -3.3]
  }, {
    'Name': 'Paderborn',
    'Data': [22.7, 5]
  }, {
    'Name': 'Salzkotten',
    'Data': [22.9, -13.5]
  }, {
    'Name': 'Wünnenberg',
    'Data': [20.3, 1.8]
  }, {
    'Name': 'Bochum',
    'Data': [-8, -5.3]
  }, {
    'Name': 'Dortmund',
    'Data': [-2.1, 3.2]
  }, {
    'Name': 'Hagen',
    'Data': [-11.8, -11.1]
  }, {
    'Name': 'Hamm',
    'Data': [-0.1, -2.3]
  }, {
    'Name': 'Herne',
    'Data': [-12.5, -4.6]
  }, {
    'Name': 'Breckerfeld',
    'Data': [8.2, -9.9]
  }, {
    'Name': 'Ennepetal',
    'Data': [-12.7, -15.6]
  }, {
    'Name': 'Gevelsberg',
    'Data': [-5.7, -13.4]
  }, {
    'Name': 'Hattingen',
    'Data': [-5.8, -1]
  }, {
    'Name': 'Herdecke',
    'Data': [-12.9, -18.6]
  }, {
    'Name': 'Schwelm',
    'Data': [-6.8, -18.2]
  }, {
    'Name': 'Sprockhövel',
    'Data': [2.9, -5.8]
  }, {
    'Name': 'Wetter (Ruhr)',
    'Data': [-3.7, -8.6]
  }, {
    'Name': 'Witten',
    'Data': [-8.3, -5.5]
  }, {
    'Name': 'Arnsberg',
    'Data': [-2.7, -15]
  }, {
    'Name': 'Bestwig',
    'Data': [-3.5, -6.5]
  }, {
    'Name': 'Brilon',
    'Data': [3.7, -20.8]
  }, {
    'Name': 'Eslohe (Sauerland)',
    'Data': [0.9, -4.5]
  }, {
    'Name': 'Hallenberg',
    'Data': [-6.3, -22.4]
  }, {
    'Name': 'Marsberg',
    'Data': [-5.5, -23.3]
  }, {
    'Name': 'Medebach',
    'Data': [5, -18.1]
  }, {
    'Name': 'Meschede',
    'Data': [-5, -23.3]
  }, {
    'Name': 'Olsberg',
    'Data': [-2.3, -20.1]
  }, {
    'Name': 'Schmallenberg',
    'Data': [0.6, -12.5]
  }, {
    'Name': 'Sundern (Sauerland)',
    'Data': [3.4, -10.5]
  }, {
    'Name': 'Winterberg',
    'Data': [-10.1, -21.4]
  }, {
    'Name': 'Altena',
    'Data': [-27.8, -30.6]
  }, {
    'Name': 'Balve',
    'Data': [1.6, -22.3]
  }, {
    'Name': 'Halver',
    'Data': [-0.9, -20.3]
  }, {
    'Name': 'Hemer',
    'Data': [-2.5, -6.3]
  }, {
    'Name': 'Herscheid',
    'Data': [1.1, -31.6]
  }, {
    'Name': 'Iserlohn',
    'Data': [-2.9, -16.7]
  }, {
    'Name': 'Kierspe',
    'Data': [0.3, -18.8]
  }, {
    'Name': 'Lüdenscheid',
    'Data': [-7.6, -18.5]
  }, {
    'Name': 'Meinerzhagen',
    'Data': [3.8, -18.6]
  }, {
    'Name': 'Menden (Sauerland)',
    'Data': [-5.4, -24.5]
  }, {
    'Name': 'Nachrodt-Wiblingwerde',
    'Data': [2.7, -27.4]
  }, {
    'Name': 'Neuenrade',
    'Data': [3, -13]
  }, {
    'Name': 'Plettenberg',
    'Data': [-11.4, -23.6]
  }, {
    'Name': 'Schalksmühle',
    'Data': [-13.9, -20.8]
  }, {
    'Name': 'Werdohl',
    'Data': [-17.7, -14.5]
  }, {
    'Name': 'Attendorn',
    'Data': [8.5, -8.7]
  }, {
    'Name': 'Drolshagen',
    'Data': [7, -8.4]
  }, {
    'Name': 'Finnentrop',
    'Data': [0, -17.8]
  }, {
    'Name': 'Kirchhundem',
    'Data': [-2.9, -14.5]
  }, {
    'Name': 'Lennestadt',
    'Data': [-1.5, -19]
  }, {
    'Name': 'Olpe',
    'Data': [4.1, -7.5]
  }, {
    'Name': 'Wenden',
    'Data': [17.4, -6.8]
  }, {
    'Name': 'Bad Berleburg',
    'Data': [-3.4, -18.6]
  }, {
    'Name': 'Burbach',
    'Data': [6.8, -8.7]
  }, {
    'Name': 'Erndtebrück',
    'Data': [-9.9, -12.7]
  }, {
    'Name': 'Freudenberg',
    'Data': [5, -12.6]
  }, {
    'Name': 'Hilchenbach',
    'Data': [-4.6, -20.7]
  }, {
    'Name': 'Kreuztal',
    'Data': [2, -2.2]
  }, {
    'Name': 'Bad Laasphe',
    'Data': [-5.7, -21.1]
  }, {
    'Name': 'Netphen',
    'Data': [0.4, -12.7]
  }, {
    'Name': 'Neunkirchen',
    'Data': [-5.1, -15.8]
  }, {
    'Name': 'Siegen',
    'Data': [-6.2, -2.8]
  }, {
    'Name': 'Wilnsdorf',
    'Data': [0.1, -12.3]
  }, {
    'Name': 'Anröchte',
    'Data': [10.1, -9]
  }, {
    'Name': 'Bad Sassendorf',
    'Data': [17.6, -8.1]
  }, {
    'Name': 'Ense',
    'Data': [23.9, -1]
  }, {
    'Name': 'Erwitte',
    'Data': [16.5, -13.6]
  }, {
    'Name': 'Geseke',
    'Data': [18.8, -4.3]
  }, {
    'Name': 'Lippetal',
    'Data': [7.8, -9.8]
  }, {
    'Name': 'Lippstadt',
    'Data': [7.8, -2.1]
  }, {
    'Name': 'Möhnesee',
    'Data': [27.5, -8.5]
  }, {
    'Name': 'Rüthen',
    'Data': [-1.4, -30.7]
  }, {
    'Name': 'Soest',
    'Data': [12.6, -2.6]
  }, {
    'Name': 'Warstein',
    'Data': [-10.4, -23]
  }, {
    'Name': 'Welver',
    'Data': [12.7, -9]
  }, {
    'Name': 'Werl',
    'Data': [7.3, -11]
  }, {
    'Name': 'Wickede (Ruhr)',
    'Data': [7.7, -21]
  }, {
    'Name': 'Bergkamen',
    'Data': [-3.9, -9.1]
  }, {
    'Name': 'Bönen',
    'Data': [-1.8, -13.4]
  }, {
    'Name': 'Fröndenberg/Ruhr',
    'Data': [-1.4, 9 - 10.8]
  }, {
    'Name': 'Holzwickede',
    'Data': [4.2, -2.7]
  }, {
    'Name': 'Kamen',
    'Data': [-5, -11.5]
  }, {
    'Name': 'Lünen',
    'Data': [-2.3, -6.4]
  }, {
    'Name': 'Schwerte',
    'Data': [-7.8, -5.3]
  }, {
    'Name': 'Selm',
    'Data': [6.9, -13.6]
  }, {
    'Name': 'Unna',
    'Data': [-4, -12.8]
  }, {
    'Name': 'Werne',
    'Data': [1.6, -20.2]
  }

];

var datenBevoelkerungsdichteKommunen = [
  {
    'Name':'Jahre',
    'Data': ['2015']
  },
  {
    'Name': 'Bottrop',
    'Data': [1146]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [2442]
  }, {
    'Name': 'Münster',
    'Data': [983]
  }, {
    'Name': 'Ahaus',
    'Data': [260]
  }, {
    'Name': 'Bocholt',
    'Data': [608]
  }, {
    'Name': 'Borken',
    'Data': [267]
  }, {
    'Name': 'Gescher',
    'Data': [212]
  }, {
    'Name': 'Gronau',
    'Data': [595]
  }, {
    'Name': 'Heek',
    'Data': [122]
  }, {
    'Name': 'Heiden',
    'Data': [151]
  }, {
    'Name': 'Isselburg',
    'Data': [255]
  }, {
    'Name': 'Legden',
    'Data': [120]
  }, {
    'Name': 'Raesfeld',
    'Data': [188]
  }, {
    'Name': 'Reken',
    'Data': [180]
  }, {
    'Name': 'Rhede',
    'Data': [245]
  }, {
    'Name': 'Schöppingen',
    'Data': [129]
  }, {
    'Name': 'Stadtlohn',
    'Data': [257]
  }, {
    'Name': 'Südlohn',
    'Data': [199]
  }, {
    'Name': 'Velen',
    'Data': [182]
  }, {
    'Name': 'Vreden',
    'Data': [166]
  }, {
    'Name': 'Ascheberg',
    'Data': [140]
  }, {
    'Name': 'Billerbeck',
    'Data': [125]
  }, {
    'Name': 'Coesfeld',
    'Data': [256]
  }, {
    'Name': 'Dülmen',
    'Data': [250]
  }, {
    'Name': 'Havixbeck',
    'Data': [222]
  }, {
    'Name': 'Lüdinghausen',
    'Data': [172]
  }, {
    'Name': 'Nordkirchen',
    'Data': [191]
  }, {
    'Name': 'Nottuln',
    'Data': [233]
  }, {
    'Name': 'Olfen',
    'Data': [234]
  }, {
    'Name': 'Rosendahl',
    'Data': [116]
  }, {
    'Name': 'Senden',
    'Data': [190]
  }, {
    'Name': 'Castrop-Rauxel',
    'Data': [1439]
  }, {
    'Name': 'Datteln',
    'Data': [534]
  }, {
    'Name': 'Dorsten',
    'Data': [440]
  }, {
    'Name': 'Gladbeck',
    'Data': [2094]
  }, {
    'Name': 'Haltern am See',
    'Data': [237]
  }, {
    'Name': 'Herten',
    'Data': [1635]
  }, {
    'Name': 'Marl',
    'Data': [983]
  }, {
    'Name': 'Oer-Erkenschwick',
    'Data': [772]
  }, {
    'Name': 'Recklinghausen',
    'Data': [1766]
  }, {
    'Name': 'Waltrop',
    'Data': [626]
  }, {
    'Name': 'Altenberge',
    'Data': [162]
  }, {
    'Name': 'Emsdetten',
    'Data': [493]
  }, {
    'Name': 'Greven',
    'Data': [262]
  }, {
    'Name': 'Hörstel',
    'Data': [183]
  }, {
    'Name': 'Hopsten',
    'Data': [75]
  }, {
    'Name': 'Horstmar',
    'Data': [142]
  }, {
    'Name': 'Ibbenbüren',
    'Data': [471]
  }, {
    'Name': 'Ladbergen',
    'Data': [123]
  }, {
    'Name': 'Laer',
    'Data': [179]
  }, {
    'Name': 'Lengerich',
    'Data': [246]
  }, {
    'Name': 'Lienen',
    'Data': [116]
  }, {
    'Name': 'Lotte',
    'Data': [376]
  }, {
    'Name': 'Metelen',
    'Data': [157]
  }, {
    'Name': 'Mettingen',
    'Data': [293]
  }, {
    'Name': 'Neuenkirchen',
    'Data': [279]
  }, {
    'Name': 'Nordwalde',
    'Data': [180]
  }, {
    'Name': 'Ochtrup',
    'Data': [185]
  }, {
    'Name': 'Recke',
    'Data': [209]
  }, {
    'Name': 'Rheine',
    'Data': [532]
  }, {
    'Name': 'Saerbeck',
    'Data': [121]
  }, {
    'Name': 'Steinfurt',
    'Data': [300]
  }, {
    'Name': 'Tecklenburg',
    'Data': [129]
  }, {
    'Name': 'Westerkappeln',
    'Data': [130]
  }, {
    'Name': 'Wettringen',
    'Data': [140]
  }, {
    'Name': 'Ahlen',
    'Data': [429]
  }, {
    'Name': 'Beckum',
    'Data': [327]
  }, {
    'Name': 'Beelen',
    'Data': [199]
  }, {
    'Name': 'Drensteinfurt',
    'Data': [145]
  }, {
    'Name': 'Ennigerloh',
    'Data': [155]
  }, {
    'Name': 'Everswinkel',
    'Data': [136]
  }, {
    'Name': 'Oelde',
    'Data': [286]
  }, {
    'Name': 'Ostbevern',
    'Data': [117]
  }, {
    'Name': 'Sassenberg',
    'Data': [181]
  }, {
    'Name': 'Sendenhorst',
    'Data': [137]
  }, {
    'Name': 'Telgte',
    'Data': [212]
  }, {
    'Name': 'Wadersloh',
    'Data': [107]
  }, {
    'Name': 'Warendorf',
    'Data': [215]
  }, {
    'Name': 'Bielefeld',
    'Data': [1256]
  }, {
    'Name': 'Borgholzhausen',
    'Data': [152]
  }, {
    'Name': 'Gütersloh',
    'Data': [875]
  }, {
    'Name': 'Halle (Westf.)',
    'Data': [303]
  }, {
    'Name': 'Harsewinkel',
    'Data': [240]
  }, {
    'Name': 'Herzebrock-Clarholz',
    'Data': [202]
  }, {
    'Name': 'Langenberg',
    'Data': [209]
  }, {
    'Name': 'Rheda-Wiedenbrück',
    'Data': [550]
  }, {
    'Name': 'Rietberg',
    'Data': [263]
  }, {
    'Name': 'Schloß Holte-Stukenbrock',
    'Data': [387]
  }, {
    'Name': 'Steinhagen',
    'Data': [353]
  }, {
    'Name': 'Verl',
    'Data': [353]
  }, {
    'Name': 'Versmold',
    'Data': [244]
  }, {
    'Name': 'Werther (Westf.)',
    'Data': [322]
  }, {
    'Name': 'Bünde',
    'Data': [748]
  }, {
    'Name': 'Enger',
    'Data': [480]
  }, {
    'Name': 'Herford',
    'Data': [810]
  }, {
    'Name': 'Hiddenhausen',
    'Data': [823]
  }, {
    'Name': 'Kirchlengern',
    'Data': [469]
  }, {
    'Name': 'Löhne',
    'Data': [671]
  }, {
    'Name': 'Rödinghausen',
    'Data': [265]
  }, {
    'Name': 'Spenge',
    'Data': [361]
  }, {
    'Name': 'Vlotho',
    'Data': [246]
  }, {
    'Name': 'Bad Driburg',
    'Data': [161]
  }, {
    'Name': 'Beverungen',
    'Data': [138]
  }, {
    'Name': 'Borgentreich',
    'Data': [64]
  }, {
    'Name': 'Brakel',
    'Data': [95]
  }, {
    'Name': 'Höxter',
    'Data': [192]
  }, {
    'Name': 'Marienmünster',
    'Data': [79]
  }, {
    'Name': 'Nieheim',
    'Data': [81]
  }, {
    'Name': 'Steinheim',
    'Data': [170]
  }, {
    'Name': 'Warburg',
    'Data': [137]
  }, {
    'Name': 'Willebadessen',
    'Data': [65]
  }, {
    'Name': 'Augustdorf',
    'Data': [225]
  }, {
    'Name': 'Bad Salzuflen',
    'Data': [536]
  }, {
    'Name': 'Barntrup',
    'Data': [145]
  }, {
    'Name': 'Blomberg',
    'Data': [158]
  }, {
    'Name': 'Detmold',
    'Data': [559]
  }, {
    'Name': 'Dörentrup',
    'Data': [159]
  }, {
    'Name': 'Extertal',
    'Data': [126]
  }, {
    'Name': 'Horn-Bad Meinberg',
    'Data': [194]
  }, {
    'Name': 'Kalletal',
    'Data': [125]
  }, {
    'Name': 'Lage',
    'Data': [459]
  }, {
    'Name': 'Lemgo',
    'Data': [406]
  }, {
    'Name': 'Leopoldshöhe',
    'Data': [440]
  }, {
    'Name': 'Lügde',
    'Data': [112]
  }, {
    'Name': 'Oerlinghausen',
    'Data': [503]
  }, {
    'Name': 'Schieder-Schwalenberg',
    'Data': [142]
  }, {
    'Name': 'Schlangen',
    'Data': [116]
  }, {
    'Name': 'Bad Oeynhausen',
    'Data': [740]
  }, {
    'Name': 'Espelkamp',
    'Data': [297]
  }, {
    'Name': 'Hille',
    'Data': [153]
  }, {
    'Name': 'Hüllhorst',
    'Data': [294]
  }, {
    'Name': 'Lübbecke',
    'Data': [394]
  }, {
    'Name': 'Minden',
    'Data': [810]
  }, {
    'Name': 'Petershagen',
    'Data': [118]
  }, {
    'Name': 'Porta Westfalica',
    'Data': [331]
  }, {
    'Name': 'Preußisch Oldendorf',
    'Data': [183]
  }, {
    'Name': 'Rahden',
    'Data': [112]
  }, {
    'Name': 'Stemwede',
    'Data': [80]
  }, {
    'Name': 'Altenbeken',
    'Data': [119]
  }, {
    'Name': 'Bad Lippspringe',
    'Data': [303]
  }, {
    'Name': 'Borchen',
    'Data': [174]
  }, {
    'Name': 'Büren',
    'Data': [124]
  }, {
    'Name': 'Delbrück',
    'Data': [193]
  }, {
    'Name': 'Hövelhof',
    'Data': [229]
  }, {
    'Name': 'Lichtenau',
    'Data': [57]
  }, {
    'Name': 'Paderborn',
    'Data': [824]
  }, {
    'Name': 'Salzkotten',
    'Data': [227]
  }, {
    'Name': 'Wünnenberg',
    'Data': [76]
  }, {
    'Name': 'Bochum',
    'Data': [2560]
  }, {
    'Name': 'Dortmund',
    'Data': [2086]
  }, {
    'Name': 'Hagen',
    'Data': [1160]
  }, {
    'Name': 'Hamm',
    'Data': [802]
  }, {
    'Name': 'Herne',
    'Data': [3185]
  }, {
    'Name': 'Breckerfeld',
    'Data': [155]
  }, {
    'Name': 'Ennepetal',
    'Data': [520]
  }, {
    'Name': 'Gevelsberg',
    'Data': [1186]
  }, {
    'Name': 'Hattingen',
    'Data': [777]
  }, {
    'Name': 'Herdecke',
    'Data': [1071]
  }, {
    'Name': 'Schwelm',
    'Data': [1366]
  }, {
    'Name': 'Sprockhövel',
    'Data': [520]
  }, {
    'Name': 'Wetter (Ruhr)',
    'Data': [881]
  }, {
    'Name': 'Witten',
    'Data': [1343]
  }, {
    'Name': 'Arnsberg',
    'Data': [377]
  }, {
    'Name': 'Bestwig',
    'Data': [159]
  }, {
    'Name': 'Brilon',
    'Data': [113]
  }, {
    'Name': 'Eslohe (Sauerland)',
    'Data': [79]
  }, {
    'Name': 'Hallenberg',
    'Data': [66]
  }, {
    'Name': 'Marsberg',
    'Data': [111]
  }, {
    'Name': 'Medebach',
    'Data': [62]
  }, {
    'Name': 'Meschede',
    'Data': [138]
  }, {
    'Name': 'Olsberg',
    'Data': [125]
  }, {
    'Name': 'Schmallenberg',
    'Data': [82]
  }, {
    'Name': 'Sundern (Sauerland)',
    'Data': [145]
  }, {
    'Name': 'Winterberg',
    'Data': [90]
  }, {
    'Name': 'Altena',
    'Data': [394]
  }, {
    'Name': 'Balve',
    'Data': [155]
  }, {
    'Name': 'Halver',
    'Data': [212]
  }, {
    'Name': 'Hemer',
    'Data': [545]
  }, {
    'Name': 'Herscheid',
    'Data': [119]
  }, {
    'Name': 'Iserlohn',
    'Data': [743]
  }, {
    'Name': 'Kierspe',
    'Data': [236]
  }, {
    'Name': 'Lüdenscheid',
    'Data': [857]
  }, {
    'Name': 'Meinerzhagen',
    'Data': [177]
  }, {
    'Name': 'Menden (Sauerland)',
    'Data': [629]
  }, {
    'Name': 'Nachrodt-Wiblingwerde',
    'Data': [224]
  }, {
    'Name': 'Neuenrade',
    'Data': [221]
  }, {
    'Name': 'Plettenberg',
    'Data': [265]
  }, {
    'Name': 'Schalksmühle',
    'Data': [284]
  }, {
    'Name': 'Werdohl',
    'Data': [545]
  }, {
    'Name': 'Attendorn',
    'Data': [251]
  }, {
    'Name': 'Drolshagen',
    'Data': [180]
  }, {
    'Name': 'Finnentrop',
    'Data': [166]
  }, {
    'Name': 'Kirchhundem',
    'Data': [80]
  }, {
    'Name': 'Lennestadt',
    'Data': [195]
  }, {
    'Name': 'Olpe',
    'Data': [293]
  }, {
    'Name': 'Wenden',
    'Data': [272]
  }, {
    'Name': 'Bad Berleburg',
    'Data': [70]
  }, {
    'Name': 'Burbach',
    'Data': [179]
  }, {
    'Name': 'Erndtebrück',
    'Data': [100]
  }, {
    'Name': 'Freudenberg',
    'Data': [333]
  }, {
    'Name': 'Hilchenbach',
    'Data': [186]
  }, {
    'Name': 'Kreuztal',
    'Data': [438]
  }, {
    'Name': 'Bad Laasphe',
    'Data': [104]
  }, {
    'Name': 'Netphen',
    'Data': [173]
  }, {
    'Name': 'Neunkirchen',
    'Data': [337]
  }, {
    'Name': 'Siegen',
    'Data': [902]
  }, {
    'Name': 'Wilnsdorf',
    'Data': [284]
  }, {
    'Name': 'Anröchte',
    'Data': [141]
  }, {
    'Name': 'Bad Sassendorf',
    'Data': [187]
  }, {
    'Name': 'Ense',
    'Data': [245]
  }, {
    'Name': 'Erwitte',
    'Data': [176]
  }, {
    'Name': 'Geseke',
    'Data': [210]
  }, {
    'Name': 'Lippetal',
    'Data': [95]
  }, {
    'Name': 'Lippstadt',
    'Data': [593]
  }, {
    'Name': 'Möhnesee',
    'Data': [90]
  }, {
    'Name': 'Rüthen',
    'Data': [64]
  }, {
    'Name': 'Soest',
    'Data': [566]
  }, {
    'Name': 'Warstein',
    'Data': [167]
  }, {
    'Name': 'Welver',
    'Data': [142]
  }, {
    'Name': 'Werl',
    'Data': [413]
  }, {
    'Name': 'Wickede (Ruhr)',
    'Data': [463]
  }, {
    'Name': 'Bergkamen',
    'Data': [1104]
  }, {
    'Name': 'Bönen',
    'Data': [482]
  }, {
    'Name': 'Fröndenberg/Ruhr',
    'Data': [384]
  }, {
    'Name': 'Holzwickede',
    'Data': [763]
  }, {
    'Name': 'Kamen',
    'Data': [1065]
  }, {
    'Name': 'Lünen',
    'Data': [1452]
  }, {
    'Name': 'Schwerte',
    'Data': [847]
  }, {
    'Name': 'Selm',
    'Data': [438]
  }, {
    'Name': 'Unna',
    'Data': [744]
  }, {
    'Name': 'Werne',
    'Data': [390]
  }
];

var datenAltersgruppenKommunen = [
  {
    'Name': 'Jahre',
    'Data': ['0 - 17', '18 - 29', '30 - 64', '> 65']
  }, {
    'Name': 'Bottrop',
    'Data': [15.5, 13.6, 49.3, 21.6]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [16.8, 15, 47.7, 20.6]
  }, {
    'Name': 'Münster',
    'Data': [15, 22.7, 45.6, 16.8]
  }, {
    'Name': 'Ahaus',
    'Data': [20.3, 15.8, 47.8, 16.2]
  }, {
    'Name': 'Bocholt',
    'Data': [17.5, 14.6, 47.6, 20.3]
  }, {
    'Name': 'Borken',
    'Data': [18.5, 14.4, 48.5, 18.6]
  }, {
    'Name': 'Gescher',
    'Data': [18.6, 14.8, 48.8, 17.8]
  }, {
    'Name': 'Gronau',
    'Data': [19.5, 15.3, 47.2, 17.9]
  }, {
    'Name': 'Heek',
    'Data': [21.7, 14.5, 47.9, 15.8]
  }, {
    'Name': 'Heiden',
    'Data': [18.7, 14.8, 48, 18.5]
  }, {
    'Name': 'Isselburg',
    'Data': [18.2, 13.5, 48.8, 19.5]
  }, {
    'Name': 'Legden',
    'Data': [20, 15.5, 48.9, 15.6]
  }, {
    'Name': 'Raesfeld',
    'Data': [17.7, 14.1, 50.5, 17.7]
  }, {
    'Name': 'Reken',
    'Data': [17.1, 14.8, 49.2, 18.9]
  }, {
    'Name': 'Rhede',
    'Data': [18.1, 14.8, 49, 18.1]
  }, {
    'Name': 'Schöppingen',
    'Data': [19.4, 17.8, 47.3, 15.5]
  }, {
    'Name': 'Stadtlohn',
    'Data': [20.2, 14.9, 47.7, 17.2]
  }, {
    'Name': 'Südlohn',
    'Data': [19.3, 14.1, 48.3, 18.2]
  }, {
    'Name': 'Velen',
    'Data': [19.2, 15.5, 48.9, 16.5]
  }, {
    'Name': 'Vreden',
    'Data': [19.6, 14.8, 48.7, 16.8]
  }, {
    'Name': 'Ascheberg',
    'Data': [18.6, 13.6, 49.8, 18]
  }, {
    'Name': 'Billerbeck',
    'Data': [18.6, 12.8, 49, 19.6]
  }, {
    'Name': 'Coesfeld',
    'Data': [17.6, 13.9, 48.2, 20.3]
  }, {
    'Name': 'Dülmen',
    'Data': [17.3, 13.8, 49.2, 19.7]
  }, {
    'Name': 'Havixbeck',
    'Data': [18.3, 11.9, 48.8, 21]
  }, {
    'Name': 'Lüdinghausen',
    'Data': [17.4, 13.3, 49.4, 19.9]
  }, {
    'Name': 'Nordkirchen',
    'Data': [17.5, 12.3, 49.7, 20.5]
  }, {
    'Name': 'Nottuln',
    'Data': [18.6, 13.2, 50.5, 17.7]
  }, {
    'Name': 'Olfen',
    'Data': [15.8, 12.4, 50.5, 21.3]
  }, {
    'Name': 'Rosendahl',
    'Data': [18.7, 14.4, 48.4, 18.4]
  }, {
    'Name': 'Senden',
    'Data': [18.7, 13.2, 49.5, 18.6]
  }, {
    'Name': 'Castrop-Rauxel',
    'Data': [15.2, 13.4, 49.4, 22]
  }, {
    'Name': 'Datteln',
    'Data': [15.7, 13, 50, 21.3]
  }, {
    'Name': 'Dorsten',
    'Data': [15.9, 12.8, 49.1, 22.1]
  }, {
    'Name': 'Gladbeck',
    'Data': [17.4, 13.8, 47.4, 21.5]
  }, {
    'Name': 'Haltern am See',
    'Data': [16.7, 12.1, 49.8, 21.5]
  }, {
    'Name': 'Herten',
    'Data': [15.5, 13.1, 48, 23.3]
  }, {
    'Name': 'Marl',
    'Data': [15, 13.2, 49.3, 22.4]
  }, {
    'Name': 'Oer-Erkenschwick',
    'Data': [15.7, 13.9, 49.6, 20.7]
  }, {
    'Name': 'Recklinghausen',
    'Data': [15.7, 13.2, 49, 22.1]
  }, {
    'Name': 'Waltrop',
    'Data': [14.6, 12.5, 50.7, 22.2]
  }, {
    'Name': 'Altenberge',
    'Data': [19.7, 13.4, 49.8, 17.2]
  }, {
    'Name': 'Emsdetten',
    'Data': [17.5, 15.2, 48.5, 18.8]
  }, {
    'Name': 'Greven',
    'Data': [18.5, 13.2, 49.3, 19.1]
  }, {
    'Name': 'Hörstel',
    'Data': [19.8, 15, 48.6, 16.7]
  }, {
    'Name': 'Hopsten',
    'Data': [21.5, 14.7, 48, 15.8]
  }, {
    'Name': 'Horstmar',
    'Data': [17.8, 14.6, 46.5, 21.1]
  }, {
    'Name': 'Ibbenbüren',
    'Data': [18.1, 14, 48.1, 19.8]
  }, {
    'Name': 'Ladbergen',
    'Data': [16.8, 12.9, 49, 21.3]
  }, {
    'Name': 'Laer',
    'Data': [20.5, 12.7, 48.7, 18.1]
  }, {
    'Name': 'Lengerich',
    'Data': [17.1, 13.9, 47.2, 21.8]
  }, {
    'Name': 'Lienen',
    'Data': [17.2, 12.9, 49.7, 20.2]
  }, {
    'Name': 'Lotte',
    'Data': [18.4, 14.1, 49.5, 18.1]
  }, {
    'Name': 'Metelen',
    'Data': [18.9, 14.8, 47.5, 18.8]
  }, {
    'Name': 'Mettingen',
    'Data': [18.2, 14.2, 48.5, 19]
  }, {
    'Name': 'Neuenkirchen',
    'Data': [19, 14.3, 48.4, 18.4]
  }, {
    'Name': 'Nordwalde',
    'Data': [18.5, 14, 47, 20.5]
  }, {
    'Name': 'Ochtrup',
    'Data': [20.5, 15.1, 47.2, 17.2]
  }, {
    'Name': 'Recke',
    'Data': [19.7, 14.6, 48.5, 17.2]
  }, {
    'Name': 'Rheine',
    'Data': [17.6, 14.6, 47.6, 20.2]
  }, {
    'Name': 'Saerbeck',
    'Data': [20.6, 14.1, 49.4, 15.9]
  }, {
    'Name': 'Steinfurt',
    'Data': [18.1, 14.8, 47.2, 19.8]
  }, {
    'Name': 'Tecklenburg',
    'Data': [16.7, 11.7, 49.6, 22]
  }, {
    'Name': 'Westerkappeln',
    'Data': [18, 13.6, 49.7, 18.7]
  }, {
    'Name': 'Wettringen',
    'Data': [21.1, 14, 48.2, 16.7]
  }, {
    'Name': 'Ahlen',
    'Data': [18.3, 14.2, 46.3, 21.1]
  }, {
    'Name': 'Beckum',
    'Data': [17, 13.8, 47.7, 21.5]
  }, {
    'Name': 'Beelen',
    'Data': [19.2, 15.3, 49.5, 16]
  }, {
    'Name': 'Drensteinfurt',
    'Data': [19.3, 12.1, 50.8, 17.8]
  }, {
    'Name': 'Ennigerloh',
    'Data': [16.6, 13.5, 48.6, 21.3]
  }, {
    'Name': 'Everswinkel',
    'Data': [18.3, 13.3, 49.1, 19.3]
  }, {
    'Name': 'Oelde',
    'Data': [17.2, 13.5, 47.9, 21.4]
  }, {
    'Name': 'Ostbevern',
    'Data': [20.6, 14.9, 48.2, 16.2]
  }, {
    'Name': 'Sassenberg',
    'Data': [19.8, 14.6, 49.1, 16.4]
  }, {
    'Name': 'Sendenhorst',
    'Data': [18.9, 13.4, 47.9, 19.8]
  }, {
    'Name': 'Telgte',
    'Data': [18.5, 11.9, 48.2, 21.4]
  }, {
    'Name': 'Wadersloh',
    'Data': [17.1, 13.2, 48.6, 21.2]
  }, {
    'Name': 'Warendorf',
    'Data': [18.1, 12.9, 48.5, 20.6]
  }, {
    'Name': 'Bielefeld',
    'Data': [16.9, 16.9, 46.3, 19.9]
  }, {
    'Name': 'Borgholzhausen',
    'Data': [18.2, 13.5, 48.7, 19.6]
  }, {
    'Name': 'Gütersloh',
    'Data': [17.5, 14.2, 48.6, 19.8]
  }, {
    'Name': 'Halle (Westf.)',
    'Data': [17.9, 13.4, 47.6, 21.1]
  }, {
    'Name': 'Harsewinkel',
    'Data': [20.5, 15.7, 46.2, 17.6]
  }, {
    'Name': 'Herzebrock-Clarholz',
    'Data': [18.6, 13.8, 49.6, 18]
  }, {
    'Name': 'Langenberg',
    'Data': [18, 14.4, 50.1, 17.6]
  }, {
    'Name': 'Rheda-Wiedenbrück',
    'Data': [17.3, 15, 48.6, 19.1]
  }, {
    'Name': 'Rietberg',
    'Data': [19.1, 15.1, 48.2, 17.6]
  }, {
    'Name': 'Schloß Holte-Stukenbrock',
    'Data': [19.2, 14.6, 47.7, 18.5]
  }, {
    'Name': 'Steinhagen',
    'Data': [17.9, 13.3, 48.6, 20.1]
  }, {
    'Name': 'Verl',
    'Data': [18.5, 15.5, 48.9, 17]
  }, {
    'Name': 'Versmold',
    'Data': [18, 14.6, 48.2, 19.2]
  }, {
    'Name': 'Werther (Westf.)',
    'Data': [17.2, 13.1, 48.2, 21.5]
  }, {
    'Name': 'Bünde',
    'Data': [16.9, 13.6, 47.7, 21.8]
  }, {
    'Name': 'Enger',
    'Data': [17.8, 13.2, 48.9, 20.1]
  }, {
    'Name': 'Herford',
    'Data': [17.5, 14.7, 46.6, 21.1]
  }, {
    'Name': 'Hiddenhausen',
    'Data': [16.1, 12.8, 47.7, 23.5]
  }, {
    'Name': 'Kirchlengern',
    'Data': [17, 13.2, 48.4, 21.4]
  }, {
    'Name': 'Löhne',
    'Data': [16.7, 13.4, 48.3, 21.6]
  }, {
    'Name': 'Rödinghausen',
    'Data': [17.1, 12.5, 50.1, 20.3]
  }, {
    'Name': 'Spenge',
    'Data': [16.5, 12.7, 47.3, 23.6]
  }, {
    'Name': 'Vlotho',
    'Data': [16.4, 12.2, 48.6, 22.8]
  }, {
    'Name': 'Bad Driburg',
    'Data': [16.8, 12.9, 47.7, 22.7]
  }, {
    'Name': 'Beverungen',
    'Data': [16, 12.3, 47.9, 23.8]
  }, {
    'Name': 'Borgentreich',
    'Data': [18.2, 14.7, 47.8, 19.3]
  }, {
    'Name': 'Brakel',
    'Data': [18.1, 15.2, 46.6, 20.1]
  }, {
    'Name': 'Höxter',
    'Data': [15.9, 14.1, 46.7, 23.3]
  }, {
    'Name': 'Marienmünster',
    'Data': [17.3, 13.3, 49.7, 19.7]
  }, {
    'Name': 'Nieheim',
    'Data': [17.8, 12.7, 48.3, 21.2]
  }, {
    'Name': 'Steinheim',
    'Data': [17.5, 14.6, 47.4, 20.4]
  }, {
    'Name': 'Warburg',
    'Data': [17.1, 14.2, 48.2, 20.4]
  }, {
    'Name': 'Willebadessen',
    'Data': [20.1, 13.5, 46.8, 19.5]
  }, {
    'Name': 'Augustdorf',
    'Data': [22.2, 20.3, 42.9, 14.6]
  }, {
    'Name': 'Bad Salzuflen',
    'Data': [16.5, 12.7, 45.5, 25.3]
  }, {
    'Name': 'Barntrup',
    'Data': [17.6, 14.7, 46.7, 21]
  }, {
    'Name': 'Blomberg',
    'Data': [18.3, 13.5, 47, 21.1]
  }, {
    'Name': 'Detmold',
    'Data': [18.1, 14.8, 45.7, 21.4]
  }, {
    'Name': 'Dörentrup',
    'Data': [17, 13, 49.3, 20.7]
  }, {
    'Name': 'Extertal',
    'Data': [16.2, 11.8, 48.4, 23.6]
  }, {
    'Name': 'Horn-Bad Meinberg',
    'Data': [17, 11.8, 47.3, 24]
  }, {
    'Name': 'Kalletal',
    'Data': [17.2, 13.8, 46.4, 22.6]
  }, {
    'Name': 'Lage',
    'Data': [19.8, 14, 45.5, 20.7]
  }, {
    'Name': 'Lemgo',
    'Data': [16.8, 15.8, 45.9, 21.5]
  }, {
    'Name': 'Leopoldshöhe',
    'Data': [19.2, 12.9, 47.6, 20.3]
  }, {
    'Name': 'Lügde',
    'Data': [16, 13.3, 48.3, 22.4]
  }, {
    'Name': 'Oerlinghausen',
    'Data': [18.2, 13.3, 47.1, 21.4]
  }, {
    'Name': 'Schieder-Schwalenberg',
    'Data': [18.3, 13.8, 46.1, 21.8]
  }, {
    'Name': 'Schlangen',
    'Data': [18.4, 13.2, 49.4, 19.1]
  }, {
    'Name': 'Bad Oeynhausen',
    'Data': [16.6, 13.5, 47.3, 22.6]
  }, {
    'Name': 'Espelkamp',
    'Data': [20.5, 15.7, 44.1, 19.6]
  }, {
    'Name': 'Hille',
    'Data': [16.8, 12.7, 50, 20.5]
  }, {
    'Name': 'Hüllhorst',
    'Data': [18.6, 14.7, 48.5, 18.2]
  }, {
    'Name': 'Lübbecke',
    'Data': [17.7, 13.2, 47.8, 21.2]
  }, {
    'Name': 'Minden',
    'Data': [17.5, 14.3, 46.6, 21.7]
  }, {
    'Name': 'Petershagen',
    'Data': [16.5, 13.1, 48.5, 22]
  }, {
    'Name': 'Porta Westfalica',
    'Data': [17.3, 12.5, 47.6, 22.6]
  }, {
    'Name': 'Preußisch Oldendorf',
    'Data': [17.8, 14.3, 47.8, 20.2]
  }, {
    'Name': 'Rahden',
    'Data': [17.7, 14.2, 47.3, 20.8]
  }, {
    'Name': 'Stemwede',
    'Data': [16.7, 13.6, 48.1, 21.6]
  }, {
    'Name': 'Altenbeken',
    'Data': [18.5, 14.5, 47.7, 19.3]
  }, {
    'Name': 'Bad Lippspringe',
    'Data': [16.2, 14.3, 46.9, 22.6]
  }, {
    'Name': 'Borchen',
    'Data': [19.6, 14.1, 48.8, 17.5]
  }, {
    'Name': 'Büren',
    'Data': [18.6, 14.9, 48.8, 17.8]
  }, {
    'Name': 'Delbrück',
    'Data': [19.5, 15.3, 49, 16.2]
  }, {
    'Name': 'Hövelhof',
    'Data': [18.9, 14.4, 48.9, 17.7]
  }, {
    'Name': 'Lichtenau',
    'Data': [18.5, 13.7, 49.8, 18]
  }, {
    'Name': 'Paderborn',
    'Data': [17.1, 19.4, 47, 16.5]
  }, {
    'Name': 'Salzkotten',
    'Data': [20.6, 13.3, 48.6, 17.4]
  }, {
    'Name': 'Wünnenberg',
    'Data': [19.1, 15.2, 48.9, 16.9]
  }, {
    'Name': 'Bochum',
    'Data': [14.3, 16.6, 47.2, 21.8]
  }, {
    'Name': 'Dortmund',
    'Data': [15.9, 16.4, 47.5, 20.3]
  }, {
    'Name': 'Hagen',
    'Data': [16.6, 14.1, 46.9, 22.3]
  }, {
    'Name': 'Hamm',
    'Data': [17.6, 14.9, 47.2, 20.3]
  }, {
    'Name': 'Herne',
    'Data': [15.9, 14.3, 48, 21.9]
  }, {
    'Name': 'Breckerfeld',
    'Data': [16.9, 11.7, 49.5, 21.8]
  }, {
    'Name': 'Ennepetal',
    'Data': [15.4, 12.7, 48.7, 23.1]
  }, {
    'Name': 'Gevelsberg',
    'Data': [15.2, 13.6, 48.4, 22.8]
  }, {
    'Name': 'Hattingen',
    'Data': [14.7, 12.2, 49.2, 23.9]
  }, {
    'Name': 'Herdecke',
    'Data': [14.4, 11.7, 48.3, 25.6]
  }, {
    'Name': 'Schwelm',
    'Data': [15.8, 13.4, 47, 23.9]
  }, {
    'Name': 'Sprockhövel',
    'Data': [14.9, 11.4, 50, 23.7]
  }, {
    'Name': 'Wetter (Ruhr)',
    'Data': [15.5, 14.1, 48.6, 21.8]
  }, {
    'Name': 'Witten',
    'Data': [15.1, 14.1, 48.2, 22.6]
  }, {
    'Name': 'Arnsberg',
    'Data': [16.5, 13.2, 48.2, 22]
  }, {
    'Name': 'Bestwig',
    'Data': [17.1, 14.5, 48, 20.4]
  }, {
    'Name': 'Brilon',
    'Data': [17.2, 13.8, 48.1, 20.9]
  }, {
    'Name': 'Eslohe (Sauerland)',
    'Data': [18.8, 13.7, 47.8, 19.7]
  }, {
    'Name': 'Hallenberg',
    'Data': [16.8, 13.3, 49.7, 20.1]
  }, {
    'Name': 'Marsberg',
    'Data': [15.3, 13.6, 48.9, 22.2]
  }, {
    'Name': 'Medebach',
    'Data': [17.4, 13.5, 47.9, 21.2]
  }, {
    'Name': 'Meschede',
    'Data': [17.4, 13.8, 46.5, 22.2]
  }, {
    'Name': 'Olsberg',
    'Data': [16.7, 15.5, 46.9, 21]
  }, {
    'Name': 'Schmallenberg',
    'Data': [17.3, 14.6, 48, 20]
  }, {
    'Name': 'Sundern (Sauerland)',
    'Data': [17.1, 13.4, 48.9, 20.6]
  }, {
    'Name': 'Winterberg',
    'Data': [15.6, 13, 48.2, 23.2]
  }, {
    'Name': 'Altena',
    'Data': [15, 13.3, 47.8, 23.9]
  }, {
    'Name': 'Balve',
    'Data': [17.7, 12.5, 49.9, 20]
  }, {
    'Name': 'Halver',
    'Data': [17, 12.8, 49.2, 21]
  }, {
    'Name': 'Hemer',
    'Data': [16.6, 12.6, 49.5, 21.4]
  }, {
    'Name': 'Herscheid',
    'Data': [15, 11.7, 50, 23.3]
  }, {
    'Name': 'Iserlohn',
    'Data': [16.3, 14.1, 47.8, 21.9]
  }, {
    'Name': 'Kierspe',
    'Data': [19.4, 14.8, 46.2, 19.6]
  }, {
    'Name': 'Lüdenscheid',
    'Data': [16.5, 13.9, 48, 21.6]
  }, {
    'Name': 'Meinerzhagen',
    'Data': [18.2, 14.1, 47.3, 20.4]
  }, {
    'Name': 'Menden (Sauerland)',
    'Data': [16, 13.4, 48.5, 22.1]
  }, {
    'Name': 'Nachrodt-Wiblingwerde',
    'Data': [17.6, 13.1, 48.3, 21]
  }, {
    'Name': 'Neuenrade',
    'Data': [18, 13.8, 48.2, 20]
  }, {
    'Name': 'Plettenberg',
    'Data': [16.4, 14, 48.3, 21.3]
  }, {
    'Name': 'Schalksmühle',
    'Data': [15.7, 12.6, 50, 21.7]
  }, {
    'Name': 'Werdohl',
    'Data': [17.9, 15.2, 46.4, 20.5]
  }, {
    'Name': 'Attendorn',
    'Data': [17.8, 14.4, 48.9, 18.9]
  }, {
    'Name': 'Drolshagen',
    'Data': [17.9, 14.1, 50.1, 17.8]
  }, {
    'Name': 'Finnentrop',
    'Data': [18.4, 14.7, 48.1, 18.8]
  }, {
    'Name': 'Kirchhundem',
    'Data': [17.6, 14.2, 49, 19.2]
  }, {
    'Name': 'Lennestadt',
    'Data': [17, 14.3, 48.4, 20.4]
  }, {
    'Name': 'Olpe',
    'Data': [17.4, 13.3, 48.1, 21.2]
  }, {
    'Name': 'Wenden',
    'Data': [18.1, 14.1, 50.1, 17.6]
  }, {
    'Name': 'Bad Berleburg',
    'Data': [16.9, 13.2, 48.8, 21]
  }, {
    'Name': 'Burbach',
    'Data': [18, 15.1, 47.2, 19.7]
  }, {
    'Name': 'Erndtebrück',
    'Data': [16, 13.9, 49, 21.1]
  }, {
    'Name': 'Freudenberg',
    'Data': [16.8, 12.9, 49.3, 21]
  }, {
    'Name': 'Hilchenbach',
    'Data': [15.9, 13.9, 47.5, 22.6]
  }, {
    'Name': 'Kreuztal',
    'Data': [17.5, 14.6, 47.2, 20.8]
  }, {
    'Name': 'Bad Laasphe',
    'Data': [16.5, 14, 47.4, 22.1]
  }, {
    'Name': 'Netphen',
    'Data': [16, 14.4, 49.3, 20.3]
  }, {
    'Name': 'Neunkirchen',
    'Data': [16.3, 14.6, 47.5, 21.5]
  }, {
    'Name': 'Siegen',
    'Data': [15.3, 19.2, 45.3, 20.3]
  }, {
    'Name': 'Wilnsdorf',
    'Data': [16, 13.5, 48.6, 21.8]
  }, {
    'Name': 'Anröchte',
    'Data': [19.6, 13.4, 49.1, 17.9]
  }, {
    'Name': 'Bad Sassendorf',
    'Data': [14.6, 11.2, 43.3, 31]
  }, {
    'Name': 'Ense',
    'Data': [18.4, 12.8, 49.4, 19.5]
  }, {
    'Name': 'Erwitte',
    'Data': [16.8, 12.6, 48.4, 22.2]
  }, {
    'Name': 'Geseke',
    'Data': [19.8, 14.7, 47.5, 18]
  }, {
    'Name': 'Lippetal',
    'Data': [17.8, 14.2, 49.3, 18.7]
  }, {
    'Name': 'Lippstadt',
    'Data': [17.1, 13.8, 49, 20.2]
  }, {
    'Name': 'Möhnesee',
    'Data': [17.1, 12.6, 48.9, 21.4]
  }, {
    'Name': 'Rüthen',
    'Data': [17.4, 14.9, 47.6, 20.2]
  }, {
    'Name': 'Soest',
    'Data': [17.2, 15.5, 48.1, 19.2]
  }, {
    'Name': 'Warstein',
    'Data': [15.9, 11.9, 48.8, 23.4]
  }, {
    'Name': 'Welver',
    'Data': [16.7, 13.4, 49.2, 20.7]
  }, {
    'Name': 'Werl',
    'Data': [17.9, 13.6, 49.6, 18.8]
  }, {
    'Name': 'Wickede (Ruhr)',
    'Data': [17, 16.7, 46.2, 20.1]
  }, {
    'Name': 'Bergkamen',
    'Data': [17, 13.7, 49.4, 19.9]
  }, {
    'Name': 'Bönen',
    'Data': [17.7, 13.1, 47.3, 21.9]
  }, {
    'Name': 'Fröndenberg/Ruhr',
    'Data': [16.1, 11.7, 49, 23.2]
  }, {
    'Name': 'Holzwickede',
    'Data': [15.8, 12.4, 47.3, 24.5]
  }, {
    'Name': 'Kamen',
    'Data': [15.2, 13.6, 48.6, 22.6]
  }, {
    'Name': 'Lünen',
    'Data': [16.4, 14.2, 47.9, 21.5]
  }, {
    'Name': 'Schwerte',
    'Data': [15.2, 12.7, 49.1, 23.1]
  }, {
    'Name': 'Selm',
    'Data': [17, 13.6, 49.5, 19.9]
  }, {
    'Name': 'Unna',
    'Data': [15.9, 12.8, 48.9, 22.4]
  }, {
    'Name': 'Werne',
    'Data': [15.9, 12.5, 49.1, 22.5]
  }
];

var datenGeburtenrateKommunen = [
  {
    'Name': 'Jahre',
    'Data': ['2007', '2009', '2011', '2013', '2015']
  }, {
    'Name': 'Bottrop',
    'Data': [7.5, 7.5, 7, 7, 8]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [8.5, 8.5, 7.6, 7.9, 9.5]
  }, {
    'Name': 'Münster',
    'Data': [9.2, 9.2, 9.3, 9.5, 10.1]
  }, {
    'Name': 'Ahaus',
    'Data': [10, 9.1, 9.7, 9.4, 9.7]
  }, {
    'Name': 'Bocholt',
    'Data': [8.4, 8.8, 8.7, 8.4, 8.6]
  }, {
    'Name': 'Borken',
    'Data': [9.1, 8.5, 8.2, 8.3, 10.1]
  }, {
    'Name': 'Gescher',
    'Data': [9.3, 8.9, 8.1, 9.1, 9.3]
  }, {
    'Name': 'Gronau',
    'Data': [10.4, 8.8, 9.4, 10, 10.5]
  }, {
    'Name': 'Heek',
    'Data': [13.2, 11.8, 9.9, 8.9, 8.9]
  }, {
    'Name': 'Heiden',
    'Data': [7.7, 8.1, 8.3, 8.2, 8.2]
  }, {
    'Name': 'Isselburg',
    'Data': [6.9, 8.9, 8.7, 8.8, 8.2]
  }, {
    'Name': 'Legden',
    'Data': [12.4, 9.6, 9.9, 10.4, 12.5]
  }, {
    'Name': 'Raesfeld',
    'Data': [9.9, 6.8, 9.4, 9.7, 9.7]
  }, {
    'Name': 'Reken',
    'Data': [7.6, 6.8, 8.2, 7.8, 7.1]
  }, {
    'Name': 'Rhede',
    'Data': [9.8, 9.2, 8.7, 7.7, 8.1]
  }, {
    'Name': 'Schöppingen',
    'Data': [8.7, 8.1, 8.5, 8.4, 7.8]
  }, {
    'Name': 'Stadtlohn',
    'Data': [9.3, 9.4, 9.2, 7.2, 10]
  }, {
    'Name': 'Südlohn',
    'Data': [9.5, 9, 9, 10.5, 10.8]
  }, {
    'Name': 'Velen',
    'Data': [9.2, 8.3, 8.7, 8.1, 10]
  }, {
    'Name': 'Vreden',
    'Data': [9.2, 8.6, 8.3, 8.3, 10.5]
  }, {
    'Name': 'Ascheberg',
    'Data': [9.2, 8, 7.3, 8.7, 9.4]
  }, {
    'Name': 'Billerbeck',
    'Data': [8.9, 7.7, 6.6, 6.1, 8.4]
  }, {
    'Name': 'Coesfeld',
    'Data': [7.9, 7.5, 7.7, 8.6, 10.1]
  }, {
    'Name': 'Dülmen',
    'Data': [8.6, 7.9, 7.3, 7.2, 8.8]
  }, {
    'Name': 'Havixbeck',
    'Data': [7.2, 6.9, 6.9, 7.2, 5.3]
  }, {
    'Name': 'Lüdinghausen',
    'Data': [7.6, 7.1, 7.4, 7.3, 7.7]
  }, {
    'Name': 'Nordkirchen',
    'Data': [6, 6.4, 6.3, 6.7, 7.5]
  }, {
    'Name': 'Nottuln',
    'Data': [9.3, 8.2, 8, 8.7, 8.3]
  }, {
    'Name': 'Olfen',
    'Data': [5.9, 6, 5.5, 6.2, 8.1]
  }, {
    'Name': 'Rosendahl',
    'Data': [9.3, 10, 9.1, 7.7, 7.6]
  }, {
    'Name': 'Senden',
    'Data': [8.9, 8.5, 8.6, 8.6, 9.3]
  }, {
    'Name': 'Castrop-Rauxel',
    'Data': [7.5, 7.1, 6.5, 7.1, 8.1]
  }, {
    'Name': 'Datteln',
    'Data': [7.4, 7.5, 7.7, 7.5, 8.1]
  }, {
    'Name': 'Dorsten',
    'Data': [7.6, 7.7, 7.2, 7.5, 7.7]
  }, {
    'Name': 'Gladbeck',
    'Data': [7.9, 7.2, 8.2, 8.3, 8.7]
  }, {
    'Name': 'Haltern am See',
    'Data': [7.8, 7.3, 7.2, 6.9, 7.4]
  }, {
    'Name': 'Herten',
    'Data': [7, 6.7, 6.9, 7.8, 7.5]
  }, {
    'Name': 'Marl',
    'Data': [7.5, 7, 7.6, 7, 7.9]
  }, {
    'Name': 'Oer-Erkenschwick',
    'Data': [7.5, 8.1, 7.1, 7, 7.3]
  }, {
    'Name': 'Recklinghausen',
    'Data': [8, 7.5, 7.3, 8.4, 8.8]
  }, {
    'Name': 'Waltrop',
    'Data': [6.9, 5.8, 6.9, 6.6, 7.3]
  }, {
    'Name': 'Altenberge',
    'Data': [8.4, 9.5, 8.9, 8.2, 9.6]
  }, {
    'Name': 'Emsdetten',
    'Data': [7.9, 8.1, 7.4, 7.6, 8.9]
  }, {
    'Name': 'Greven',
    'Data': [9.4, 7.8, 8, 8.8, 10]
  }, {
    'Name': 'Hörstel',
    'Data': [8.4, 8.7, 9.1, 7.8, 9.2]
  }, {
    'Name': 'Hopsten',
    'Data': [10, 9, 8.7, 8.8, 7.7]
  }, {
    'Name': 'Horstmar',
    'Data': [7.7, 7.2, 6.5, 4.4, 8.5]
  }, {
    'Name': 'Ibbenbüren',
    'Data': [8.5, 8.5, 8.2, 8.2, 8.8]
  }, {
    'Name': 'Ladbergen',
    'Data': [7, 6.9, 8.3, 7.8, 5.8]
  }, {
    'Name': 'Laer',
    'Data': [10, 11.8, 7.6, 9.1, 9.4]
  }, {
    'Name': 'Lengerich',
    'Data': [8.8, 7.9, 8, 7.9, 8.5]
  }, {
    'Name': 'Lienen',
    'Data': [8.8, 7.3, 7, 7.8, 6.8]
  }, {
    'Name': 'Lotte',
    'Data': [8.4, 8.6, 7.8, 9, 9]
  }, {
    'Name': 'Metelen',
    'Data': [8.4, 11.5, 9.5, 8.4, 5.3]
  }, {
    'Name': 'Mettingen',
    'Data': [7.4, 6.3, 7.9, 7.5, 7.4]
  }, {
    'Name': 'Neuenkirchen',
    'Data': [8.6, 6.9, 7.8, 10.2, 8.2]
  }, {
    'Name': 'Nordwalde',
    'Data': [7.2, 8.1, 7.8, 10, 9.4]
  }, {
    'Name': 'Ochtrup',
    'Data': [9.8, 10.8, 10.4, 9.5, 10.4]
  }, {
    'Name': 'Recke',
    'Data': [8.1, 8.5, 7.1, 6, 8.1]
  }, {
    'Name': 'Rheine',
    'Data': [8.5, 8.1, 9.1, 8.6, 9.1]
  }, {
    'Name': 'Saerbeck',
    'Data': [8.5, 8, 6.6, 9.4, 7.8]
  }, {
    'Name': 'Steinfurt',
    'Data': [8.7, 7.8, 6.9, 8.3, 8.5]
  }, {
    'Name': 'Tecklenburg',
    'Data': [7.3, 7.6, 7.5, 7.1, 8.1]
  }, {
    'Name': 'Westerkappeln',
    'Data': [7.9, 7.5, 8.9, 7.3, 7.7]
  }, {
    'Name': 'Wettringen',
    'Data': [11.2, 11.6, 10.6, 9.6, 10]
  }, {
    'Name': 'Ahlen',
    'Data': [9.2, 8.4, 8.4, 7.9, 9]
  }, {
    'Name': 'Beckum',
    'Data': [8.4, 7.7, 7.7, 7.2, 7.7]
  }, {
    'Name': 'Beelen',
    'Data': [8.3, 9.1, 10.5, 7.1, 9.1]
  }, {
    'Name': 'Drensteinfurt',
    'Data': [7.7, 8.9, 7.9, 8.1, 10]
  }, {
    'Name': 'Ennigerloh',
    'Data': [8.2, 7.6, 6.9, 7.9, 8.8]
  }, {
    'Name': 'Everswinkel',
    'Data': [9.1, 8.4, 7.5, 7.6, 8]
  }, {
    'Name': 'Oelde',
    'Data': [9.5, 7.3, 7.2, 8.1, 9.3]
  }, {
    'Name': 'Ostbevern',
    'Data': [10.1, 10.2, 8.4, 8.4, 9.4]
  }, {
    'Name': 'Sassenberg',
    'Data': [9, 8.7, 7.3, 7.3, 9]
  }, {
    'Name': 'Sendenhorst',
    'Data': [6.9, 7.6, 8.8, 8.7, 8.7]
  }, {
    'Name': 'Telgte',
    'Data': [8.3, 7.3, 7.4, 8.6, 9.2]
  }, {
    'Name': 'Wadersloh',
    'Data': [7.8, 6.8, 7.8, 7.5, 7.4]
  }, {
    'Name': 'Warendorf',
    'Data': [9.7, 8.2, 8.5, 8.9, 8.5]
  }, {
    'Name': 'Bielefeld',
    'Data': [9.4, 9, 9.2, 9.2, 9.8]
  }, {
    'Name': 'Borgholzhausen',
    'Data': [8.9, 8.6, 6.7, 9.4, 7.8]
  }, {
    'Name': 'Gütersloh',
    'Data': [9, 8.3, 9.4, 9.7, 10.1]
  }, {
    'Name': 'Halle (Westf.)',
    'Data': [8, 8.3, 7.6, 8.5, 8.5]
  }, {
    'Name': 'Harsewinkel',
    'Data': [12.1, 10.3, 10.3, 9.8, 10.1]
  }, {
    'Name': 'Herzebrock-Clarholz',
    'Data': [8.4, 9, 9.2, 6.5, 8.6]
  }, {
    'Name': 'Langenberg',
    'Data': [8.1, 6.7, 6, 7, 7.8]
  }, {
    'Name': 'Rheda-Wiedenbrück',
    'Data': [8.3, 8.8, 8.2, 7.7, 8.4]
  }, {
    'Name': 'Rietberg',
    'Data': [8.9, 9.2, 8.8, 8.7, 8.9]
  }, {
    'Name': 'Schloß Holte-Stukenbrock',
    'Data': [9.3, 8.5, 9.6, 9.8, 9.6]
  }, {
    'Name': 'Steinhagen',
    'Data': [8, 8.4, 7.4, 7.6, 8]
  }, {
    'Name': 'Verl',
    'Data': [8.8, 8.1, 9.6, 9.1, 10.3]
  }, {
    'Name': 'Versmold',
    'Data': [9.1, 8.4, 6.3, 7, 7.9]
  }, {
    'Name': 'Werther (Westf.)',
    'Data': [9.3, 6.6, 7.6, 7.5, 8.5]
  }, {
    'Name': 'Bünde',
    'Data': [8.6, 8, 8.1, 8.1, 8.8]
  }, {
    'Name': 'Enger',
    'Data': [8.6, 8.7, 7.7, 8.9, 8.6]
  }, {
    'Name': 'Herford',
    'Data': [10.3, 9.6, 9.2, 8.7, 9.8]
  }, {
    'Name': 'Hiddenhausen',
    'Data': [7.1, 7.5, 6.9, 7.7, 7.5]
  }, {
    'Name': 'Kirchlengern',
    'Data': [9.3, 7.3, 5.9, 7.4, 8.1]
  }, {
    'Name': 'Löhne',
    'Data': [7.7, 7.7, 7.4, 7.6, 8.8]
  }, {
    'Name': 'Rödinghausen',
    'Data': [8.5, 6.3, 8.1, 6.2, 7.9]
  }, {
    'Name': 'Spenge',
    'Data': [6.3, 8.1, 6.8, 7.3, 8.5]
  }, {
    'Name': 'Vlotho',
    'Data': [8.1, 7.2, 6.6, 7.6, 7.7]
  }, {
    'Name': 'Bad Driburg',
    'Data': [7.5, 7.7, 6.8, 7.2, 8.1]
  }, {
    'Name': 'Beverungen',
    'Data': [7, 6.7, 6.6, 5.7, 6.7]
  }, {
    'Name': 'Borgentreich',
    'Data': [8.6, 8.1, 6.9, 6.2, 9.2]
  }, {
    'Name': 'Brakel',
    'Data': [9.1, 9, 9.2, 8.6, 9.2]
  }, {
    'Name': 'Höxter',
    'Data': [7.8, 7.5, 5.5, 7.5, 6.9]
  }, {
    'Name': 'Marienmünster',
    'Data': [10.1, 6.4, 5.1, 6.4, 6.2]
  }, {
    'Name': 'Nieheim',
    'Data': [7.5, 7.7, 7.7, 6.6, 5.3]
  }, {
    'Name': 'Steinheim',
    'Data': [8.3, 8.7, 8.8, 7.2, 8]
  }, {
    'Name': 'Warburg',
    'Data': [7.9, 7.3, 7.2, 8.5, 7.2]
  }, {
    'Name': 'Willebadessen',
    'Data': [12, 9.9, 9.3, 9.7, 10.3]
  }, {
    'Name': 'Augustdorf',
    'Data': [12.2, 11.3, 11.5, 12.4, 10.7]
  }, {
    'Name': 'Bad Salzuflen',
    'Data': [8.1, 7.8, 7.2, 7.8, 8.2]
  }, {
    'Name': 'Barntrup',
    'Data': [8.2, 8.2, 7.2, 6.3, 8.1]
  }, {
    'Name': 'Blomberg',
    'Data': [8.5, 8.1, 7.4, 7.2, 8.4]
  }, {
    'Name': 'Detmold',
    'Data': [9.9, 9.2, 8.8, 8.6, 9.5]
  }, {
    'Name': 'Dörentrup',
    'Data': [7.3, 7, 6.4, 7.1, 6.9]
  }, {
    'Name': 'Extertal',
    'Data': [6.9, 6.3, 6.4, 7.1, 7.3]
  }, {
    'Name': 'Horn-Bad Meinberg',
    'Data': [9.1, 6.6, 7.9, 7.8, 8.3]
  }, {
    'Name': 'Kalletal',
    'Data': [8.7, 7.5, 7.1, 8.1, 8.5]
  }, {
    'Name': 'Lage',
    'Data': [10.8, 10.8, 9.6, 10.5, 10.5]
  }, {
    'Name': 'Lemgo',
    'Data': [8.2, 8, 8.1, 8.9, 9.3]
  }, {
    'Name': 'Leopoldshöhe',
    'Data': [7.6, 8.4, 6.7, 9, 8.9]
  }, {
    'Name': 'Lügde',
    'Data': [6.7, 5.8, 6.6, 5.5, 7.6]
  }, {
    'Name': 'Oerlinghausen',
    'Data': [8.5, 8.2, 8.1, 7.7, 8.5]
  }, {
    'Name': 'Schieder-Schwalenberg',
    'Data': [8.6, 8.9, 6.7, 8.4, 8.6]
  }, {
    'Name': 'Schlangen',
    'Data': [8.7, 7.7, 8.6, 8, 8.9]
  }, {
    'Name': 'Bad Oeynhausen',
    'Data': [8.1, 8.1, 7.6, 8.1, 8.3]
  }, {
    'Name': 'Espelkamp',
    'Data': [10.4, 9.4, 10.2, 11.1, 11.4]
  }, {
    'Name': 'Hille',
    'Data': [7.8, 7.3, 7.6, 6.3, 7.4]
  }, {
    'Name': 'Hüllhorst',
    'Data': [9.8, 10.3, 8.2, 8.9, 8.9]
  }, {
    'Name': 'Lübbecke',
    'Data': [9.4, 8.6, 8.7, 8, 8.2]
  }, {
    'Name': 'Minden',
    'Data': [8.7, 8.6, 9.3, 9.1, 9.5]
  }, {
    'Name': 'Petershagen',
    'Data': [6.8, 7.1, 6.9, 5.8, 7.5]
  }, {
    'Name': 'Porta Westfalica',
    'Data': [7.9, 7.4, 7.6, 7.8, 7.5]
  }, {
    'Name': 'Preußisch Oldendorf',
    'Data': [9.7, 8.4, 7.8, 8, 7.5]
  }, {
    'Name': 'Rahden',
    'Data': [9.4, 9.4, 6.9, 7.2, 8.5]
  }, {
    'Name': 'Stemwede',
    'Data': [8.2, 7.4, 6.7, 5.6, 6.5]
  }, {
    'Name': 'Altenbeken',
    'Data': [8.3, 8.4, 6.8, 7.4, 11.5]
  }, {
    'Name': 'Bad Lippspringe',
    'Data': [9.2, 7.9, 9.4, 9.5, 9.1]
  }, {
    'Name': 'Borchen',
    'Data': [9.1, 8.4, 9.6, 8.2, 9.3]
  }, {
    'Name': 'Büren',
    'Data': [10.4, 9.7, 8.1, 8.7, 8.6]
  }, {
    'Name': 'Delbrück',
    'Data': [10, 9.6, 9.1, 8.8, 9]
  }, {
    'Name': 'Hövelhof',
    'Data': [8.1, 10.3, 9.6, 8.7, 10.2]
  }, {
    'Name': 'Lichtenau',
    'Data': [8.8, 10.1, 8.7, 7.7, 8.9]
  }, {
    'Name': 'Paderborn',
    'Data': [10, 9.9, 10, 9.8, 11.1]
  }, {
    'Name': 'Salzkotten',
    'Data': [10, 9.3, 10.1, 10.2, 9.8]
  }, {
    'Name': 'Wünnenberg',
    'Data': [9.5, 7.6, 6.6, 10.2, 9.9]
  }, {
    'Name': 'Bochum',
    'Data': [7.4, 7.2, 7.4, 7.8, 8.3]
  }, {
    'Name': 'Dortmund',
    'Data': [8.3, 8.2, 8.2, 8.6, 9.4]
  }, {
    'Name': 'Hagen',
    'Data': [8.2, 7.6, 7.6, 8.1, 9.3]
  }, {
    'Name': 'Hamm',
    'Data': [8.6, 8.4, 8, 8.9, 9.1]
  }, {
    'Name': 'Herne',
    'Data': [7.4, 7.2, 7.7, 7.8, 8.4]
  }, {
    'Name': 'Breckerfeld',
    'Data': [7.3, 6.3, 6.9, 6.1, 6.7]
  }, {
    'Name': 'Ennepetal',
    'Data': [7.3, 6.9, 6.6, 7.2, 8.1]
  }, {
    'Name': 'Gevelsberg',
    'Data': [6.8, 6.8, 6.3, 6.9, 7.9]
  }, {
    'Name': 'Hattingen',
    'Data': [7.3, 7, 7, 8.2, 8.2]
  }, {
    'Name': 'Herdecke',
    'Data': [6.3, 4.9, 5.9, 6.2, 7.1]
  }, {
    'Name': 'Schwelm',
    'Data': [8.7, 7.8, 8, 7.7, 9.2]
  }, {
    'Name': 'Sprockhövel',
    'Data': [6, 6.5, 6.3, 6, 6.3]
  }, {
    'Name': 'Wetter (Ruhr)',
    'Data': [7.4, 7.3, 7, 7.7, 7.2]
  }, {
    'Name': 'Witten',
    'Data': [7.7, 7.5, 7.5, 7.5, 8.2]
  }, {
    'Name': 'Arnsberg',
    'Data': [7.9, 7.8, 7.6, 7.5, 8.6]
  }, {
    'Name': 'Bestwig',
    'Data': [8.8, 8.3, 7.2, 6.3, 5.9]
  }, {
    'Name': 'Brilon',
    'Data': [8.2, 6.8, 7.4, 6.9, 8.7]
  }, {
    'Name': 'Eslohe (Sauerland)',
    'Data': [10.1, 7.2, 8.4, 9.6, 6.2]
  }, {
    'Name': 'Hallenberg',
    'Data': [8.4, 6.8, 8.2, 7.3, 9.9]
  }, {
    'Name': 'Marsberg',
    'Data': [7.2, 6.9, 6.9, 7, 6.2]
  }, {
    'Name': 'Medebach',
    'Data': [8.7, 9.7, 7.8, 6.9, 6.6]
  }, {
    'Name': 'Meschede',
    'Data': [8.5, 8.1, 7.5, 8, 7.7]
  }, {
    'Name': 'Olsberg',
    'Data': [8.1, 6.9, 6.2, 8.5, 8.3]
  }, {
    'Name': 'Schmallenberg',
    'Data': [10.2, 9.1, 6.9, 7.6, 6.7]
  }, {
    'Name': 'Sundern (Sauerland)',
    'Data': [8, 8.4, 6.6, 7, 8.2]
  }, {
    'Name': 'Winterberg',
    'Data': [7.3, 6.7, 5.6, 8.1, 6.6]
  }, {
    'Name': 'Altena',
    'Data': [7.3, 5.9, 5.6, 6.5, 8.5]
  }, {
    'Name': 'Balve',
    'Data': [7.9, 7.1, 5.7, 7.5, 7.9]
  }, {
    'Name': 'Halver',
    'Data': [6.7, 8.4, 8.2, 9, 8.5]
  }, {
    'Name': 'Hemer',
    'Data': [9.1, 10, 9.1, 10.1, 9.7]
  }, {
    'Name': 'Herscheid',
    'Data': [6.8, 4.7, 7, 8.7, 7.1]
  }, {
    'Name': 'Iserlohn',
    'Data': [8, 7.6, 7.7, 7.3, 8.6]
  }, {
    'Name': 'Kierspe',
    'Data': [10.6, 8, 10.8, 10.7, 10.1]
  }, {
    'Name': 'Lüdenscheid',
    'Data': [8.6, 8.9, 8.4, 8, 9.6]
  }, {
    'Name': 'Meinerzhagen',
    'Data': [9.2, 8.5, 8.9, 8.3, 9]
  }, {
    'Name': 'Menden (Sauerland)',
    'Data': [7.7, 7.2, 7.2, 6.9, 6.7]
  }, {
    'Name': 'Nachrodt-Wiblingwerde',
    'Data': [8, 6, 6.9, 9.4, 9.8]
  }, {
    'Name': 'Neuenrade',
    'Data': [9.8, 8.2, 8.8, 6.8, 9.1]
  }, {
    'Name': 'Plettenberg',
    'Data': [8.9, 8.1, 6.4, 7.6, 7.5]
  }, {
    'Name': 'Schalksmühle',
    'Data': [6.6, 5.9, 6.3, 7.9, 8.3]
  }, {
    'Name': 'Werdohl',
    'Data': [9.8, 8.2, 8.8, 8, 9.1]
  }, {
    'Name': 'Attendorn',
    'Data': [8.5, 7, 8.3, 7.8, 9.5]
  }, {
    'Name': 'Drolshagen',
    'Data': [8.4, 8, 8, 7.6, 9.3]
  }, {
    'Name': 'Finnentrop',
    'Data': [8.6, 8.8, 8.6, 7.8, 8.6]
  }, {
    'Name': 'Kirchhundem',
    'Data': [7.5, 7.4, 8.7, 7, 8.4]
  }, {
    'Name': 'Lennestadt',
    'Data': [8, 7.9, 7.4, 8.8, 8.7]
  }, {
    'Name': 'Olpe',
    'Data': [9.1, 8.4, 7.8, 8.5, 10.4]
  }, {
    'Name': 'Wenden',
    'Data': [8.9, 7.6, 8.3, 9, 9.5]
  }, {
    'Name': 'Bad Berleburg',
    'Data': [8, 8.4, 8.2, 7, 7.7]
  }, {
    'Name': 'Burbach',
    'Data': [8, 8.6, 8.9, 8.4, 9.6]
  }, {
    'Name': 'Erndtebrück',
    'Data': [7.8, 8.1, 6.9, 7.6, 7.8]
  }, {
    'Name': 'Freudenberg',
    'Data': [7.8, 7.4, 7.7, 6.5, 7.5]
  }, {
    'Name': 'Hilchenbach',
    'Data': [7.9, 5.3, 5.5, 6.5, 7.1]
  }, {
    'Name': 'Kreuztal',
    'Data': [8.8, 8.2, 8.6, 8.4, 9.5]
  }, {
    'Name': 'Bad Laasphe',
    'Data': [6.4, 8.3, 6.6, 8.3, 7.1]
  }, {
    'Name': 'Netphen',
    'Data': [7.4, 7.3, 7, 8.1, 8.2]
  }, {
    'Name': 'Neunkirchen',
    'Data': [7.9, 6.4, 6.9, 6.6, 9.6]
  }, {
    'Name': 'Siegen',
    'Data': [7.9, 7.8, 8.8, 8.4, 9.5]
  }, {
    'Name': 'Wilnsdorf',
    'Data': [7.4, 7.1, 7.2, 7.6, 8.9]
  }, {
    'Name': 'Anröchte',
    'Data': [8, 8.5, 9.2, 8.2, 8.9]
  }, {
    'Name': 'Bad Sassendorf',
    'Data': [7.1, 6.6, 7.1, 8.3, 7.9]
  }, {
    'Name': 'Ense',
    'Data': [8, 7.5, 7.8, 6.4, 8]
  }, {
    'Name': 'Erwitte',
    'Data': [7.9, 7.2, 6.9, 7.9, 8.7]
  }, {
    'Name': 'Geseke',
    'Data': [7.6, 8.9, 7.3, 7.8, 8.6]
  }, {
    'Name': 'Lippetal',
    'Data': [7.9, 7.3, 7, 7.2, 7.8]
  }, {
    'Name': 'Lippstadt',
    'Data': [9.3, 9, 9.2, 8.5, 9.2]
  }, {
    'Name': 'Möhnesee',
    'Data': [8.8, 8.1, 7.6, 6.7, 6]
  }, {
    'Name': 'Rüthen',
    'Data': [8.6, 8, 7.5, 7.7, 10.9]
  }, {
    'Name': 'Soest',
    'Data': [9.8, 9.3, 7.7, 8.4, 8.9]
  }, {
    'Name': 'Warstein',
    'Data': [7.4, 6.6, 6.4, 7.6, 8.2]
  }, {
    'Name': 'Welver',
    'Data': [7.8, 6.6, 7.4, 7.2, 7.8]
  }, {
    'Name': 'Werl',
    'Data': [9.4, 7.7, 9.1, 8.2, 8.1]
  }, {
    'Name': 'Wickede (Ruhr)',
    'Data': [6.7, 7.8, 7, 7.9, 10.4]
  }, {
    'Name': 'Bergkamen',
    'Data': [7.8, 7.4, 8.1, 8.4, 8.3]
  }, {
    'Name': 'Bönen',
    'Data': [7.7, 7.9, 8.6, 6.4, 8.6]
  }, {
    'Name': 'Fröndenberg/Ruhr',
    'Data': [7.2, 5.7, 6, 6.3, 6.2]
  }, {
    'Name': 'Holzwickede',
    'Data': [6.5, 6.3, 6, 7.6, 7.5]
  }, {
    'Name': 'Kamen',
    'Data': [8.2, 7.4, 7.2, 7.6, 7.4]
  }, {
    'Name': 'Lünen',
    'Data': [7.7, 7.7, 7.5, 8.3, 8.8]
  }, {
    'Name': 'Schwerte',
    'Data': [6.8, 7, 7, 7.3, 7.9]
  }, {
    'Name': 'Selm',
    'Data': [8, 7.2, 6.6, 7.2, 8]
  }, {
    'Name': 'Unna',
    'Data': [7.6, 6.5, 6.9, 8, 8.4]
  }, {
    'Name': 'Werne',
    'Data': [7.1, 6.3, 6.3, 7.7, 7.2]
  }
];

/*var datenGeburtenrateKommunen = [
  {
    'Name': 'Jahre',
    'Data': ['2010 - 2013']
  },
  {
    'Name': 'Bottrop',
    'Data': [7.1]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [8]
  }, {
    'Name': 'Münster',
    'Data': [9.4]
  }, {
    'Name': 'Ahaus',
    'Data': [9.2]
  }, {
    'Name': 'Bocholt',
    'Data': [8.3]
  }, {
    'Name': 'Borken',
    'Data': [8.7]
  }, {
    'Name': 'Gescher',
    'Data': [8.6]
  }, {
    'Name': 'Gronau',
    'Data': [9.6]
  }, {
    'Name': 'Heek',
    'Data': [9.7]
  }, {
    'Name': 'Heiden',
    'Data': [8]
  }, {
    'Name': 'Isselburg',
    'Data': [8.4]
  }, {
    'Name': 'Legden',
    'Data': [10.3]
  }, {
    'Name': 'Raesfeld',
    'Data': [9.5]
  }, {
    'Name': 'Reken',
    'Data': [7.4]
  }, {
    'Name': 'Rhede',
    'Data': [8.4]
  }, {
    'Name': 'Schöppingen',
    'Data': [7.6]
  }, {
    'Name': 'Stadtlohn',
    'Data': [8.5]
  }, {
    'Name': 'Südlohn',
    'Data': [9.1]
  }, {
    'Name': 'Velen',
    'Data': [8.9]
  }, {
    'Name': 'Vreden',
    'Data': [8.7]
  }, {
    'Name': 'Ascheberg',
    'Data': [8.3]
  }, {
    'Name': 'Billerbeck',
    'Data': [7.1]
  }, {
    'Name': 'Coesfeld',
    'Data': [8.1]
  }, {
    'Name': 'Dülmen',
    'Data': [7.5]
  }, {
    'Name': 'Havixbeck',
    'Data': [6.7]
  }, {
    'Name': 'Lüdinghausen',
    'Data': [7.3]
  }, {
    'Name': 'Nordkirchen',
    'Data': [6.1]
  }, {
    'Name': 'Nottuln',
    'Data': [7.9]
  }, {
    'Name': 'Olfen',
    'Data': [5.8]
  }, {
    'Name': 'Rosendahl',
    'Data': [8]
  }, {
    'Name': 'Senden',
    'Data': [8.3]
  }, {
    'Name': 'Castrop-Rauxel',
    'Data': [6.7]
  }, {
    'Name': 'Datteln',
    'Data': [7.4]
  }, {
    'Name': 'Dorsten',
    'Data': [7.4]
  }, {
    'Name': 'Gladbeck',
    'Data': [7.9]
  }, {
    'Name': 'Haltern am See',
    'Data': [7.1]
  }, {
    'Name': 'Herten',
    'Data': [7.3]
  }, {
    'Name': 'Marl',
    'Data': [7]
  }, {
    'Name': 'Oer-Erkenschwick',
    'Data': [7]
  }, {
    'Name': 'Recklinghausen',
    'Data': [7.8]
  }, {
    'Name': 'Waltrop',
    'Data': [6.7]
  }, {
    'Name': 'Altenberge',
    'Data': [8.4]
  }, {
    'Name': 'Emsdetten',
    'Data': [7.6]
  }, {
    'Name': 'Greven',
    'Data': [8.7]
  }, {
    'Name': 'Hörstel',
    'Data': [8.2]
  }, {
    'Name': 'Hopsten',
    'Data': [8.8]
  }, {
    'Name': 'Horstmar',
    'Data': [6.8]
  }, {
    'Name': 'Ibbenbüren',
    'Data': [8.5]
  }, {
    'Name': 'Ladbergen',
    'Data': [7.4]
  }, {
    'Name': 'Laer',
    'Data': [9.1]
  }, {
    'Name': 'Lengerich',
    'Data': [7.8]
  }, {
    'Name': 'Lienen',
    'Data': [8]
  }, {
    'Name': 'Lotte',
    'Data': [8.6]
  }, {
    'Name': 'Metelen',
    'Data': [8.8]
  }, {
    'Name': 'Mettingen',
    'Data': [7.5]
  }, {
    'Name': 'Neuenkirchen',
    'Data': [8.4]
  }, {
    'Name': 'Nordwalde',
    'Data': [8.1]
  }, {
    'Name': 'Ochtrup',
    'Data': [9.3]
  }, {
    'Name': 'Recke',
    'Data': [6.7]
  }, {
    'Name': 'Rheine',
    'Data': [8.6]
  }, {
    'Name': 'Saerbeck',
    'Data': [8.1]
  }, {
    'Name': 'Steinfurt',
    'Data': [7.6]
  }, {
    'Name': 'Tecklenburg',
    'Data': [6.9]
  }, {
    'Name': 'Westerkappeln',
    'Data': [7.6]
  }, {
    'Name': 'Wettringen',
    'Data': [9.3]
  }, {
    'Name': 'Ahlen',
    'Data': [8.1]
  }, {
    'Name': 'Beckum',
    'Data': [7.5]
  }, {
    'Name': 'Beelen',
    'Data': [9]
  }, {
    'Name': 'Drensteinfurt',
    'Data': [8.5]
  }, {
    'Name': 'Ennigerloh',
    'Data': [7.4]
  }, {
    'Name': 'Everswinkel',
    'Data': [7.4]
  }, {
    'Name': 'Oelde',
    'Data': [7.5]
  }, {
    'Name': 'Ostbevern',
    'Data': [9.1]
  }, {
    'Name': 'Sassenberg',
    'Data': [7.9]
  }, {
    'Name': 'Sendenhorst',
    'Data': [8.4]
  }, {
    'Name': 'Telgte',
    'Data': [7.7]
  }, {
    'Name': 'Wadersloh',
    'Data': [7.7]
  }, {
    'Name': 'Warendorf',
    'Data': [8.1]
  }, {
    'Name': 'Bielefeld',
    'Data': [9.4]
  }, {
    'Name': 'Borgholzhausen',
    'Data': [8.1]
  }, {
    'Name': 'Gütersloh',
    'Data': [9.1]
  }, {
    'Name': 'Halle (Westf.)',
    'Data': [8.1]
  }, {
    'Name': 'Harsewinkel',
    'Data': [9.6]
  }, {
    'Name': 'Herzebrock-Clarholz',
    'Data': [8]
  }, {
    'Name': 'Langenberg',
    'Data': [6.7]
  }, {
    'Name': 'Rheda-Wiedenbrück',
    'Data': [7.9]
  }, {
    'Name': 'Rietberg',
    'Data': [9]
  }, {
    'Name': 'Schloß Holte-Stukenbrock',
    'Data': [9.6]
  }, {
    'Name': 'Steinhagen',
    'Data': [8.1]
  }, {
    'Name': 'Verl',
    'Data': [9.1]
  }, {
    'Name': 'Versmold',
    'Data': [7.5]
  }, {
    'Name': 'Werther (Westf.)',
    'Data': [7.3]
  }, {
    'Name': 'Bünde',
    'Data': [8.2]
  }, {
    'Name': 'Enger',
    'Data': [8.2]
  }, {
    'Name': 'Herford',
    'Data': [9.3]
  }, {
    'Name': 'Hiddenhausen',
    'Data': [7]
  }, {
    'Name': 'Kirchlengern',
    'Data': [6.9]
  }, {
    'Name': 'Löhne',
    'Data': [7.6]
  }, {
    'Name': 'Rödinghausen',
    'Data': [6.8]
  }, {
    'Name': 'Spenge',
    'Data': [7.2]
  }, {
    'Name': 'Vlotho',
    'Data': [7.3]
  }, {
    'Name': 'Bad Driburg',
    'Data': [6.7]
  }, {
    'Name': 'Beverungen',
    'Data': [6.6]
  }, {
    'Name': 'Borgentreich',
    'Data': [6.5]
  }, {
    'Name': 'Brakel',
    'Data': [9.1]
  }, {
    'Name': 'Höxter',
    'Data': [6.5]
  }, {
    'Name': 'Marienmünster',
    'Data': [6.6]
  }, {
    'Name': 'Nieheim',
    'Data': [7.4]
  }, {
    'Name': 'Steinheim',
    'Data': [7.6]
  }, {
    'Name': 'Warburg',
    'Data': [7.6]
  }, {
    'Name': 'Willebadessen',
    'Data': [9.2]
  }, {
    'Name': 'Augustdorf',
    'Data': [12.3]
  }, {
    'Name': 'Bad Salzuflen',
    'Data': [7.7]
  }, {
    'Name': 'Barntrup',
    'Data': [7.2]
  }, {
    'Name': 'Blomberg',
    'Data': [7.9]
  }, {
    'Name': 'Detmold',
    'Data': [9]
  }, {
    'Name': 'Dörentrup',
    'Data': [6.8]
  }, {
    'Name': 'Extertal',
    'Data': [6.7]
  }, {
    'Name': 'Horn-Bad Meinberg',
    'Data': [7.6]
  }, {
    'Name': 'Kalletal',
    'Data': [7.7]
  }, {
    'Name': 'Lage',
    'Data': [9.9]
  }, {
    'Name': 'Lemgo',
    'Data': [8.2]
  }, {
    'Name': 'Leopoldshöhe',
    'Data': [8]
  }, {
    'Name': 'Lügde',
    'Data': [6.6]
  }, {
    'Name': 'Oerlinghausen',
    'Data': [8.4]
  }, {
    'Name': 'Schieder-Schwalenberg',
    'Data': [8.1]
  }, {
    'Name': 'Schlangen',
    'Data': [8.5]
  }, {
    'Name': 'Bad Oeynhausen',
    'Data': [8.2]
  }, {
    'Name': 'Espelkamp',
    'Data': [10.4]
  }, {
    'Name': 'Hille',
    'Data': [7.1]
  }, {
    'Name': 'Hüllhorst',
    'Data': [8.5]
  }, {
    'Name': 'Lübbecke',
    'Data': [8.2]
  }, {
    'Name': 'Minden',
    'Data': [8.8]
  }, {
    'Name': 'Petershagen',
    'Data': [6.6]
  }, {
    'Name': 'Porta Westfalica',
    'Data': [7.8]
  }, {
    'Name': 'Preußisch Oldendorf',
    'Data': [8.2]
  }, {
    'Name': 'Rahden',
    'Data': [7.9]
  }, {
    'Name': 'Stemwede',
    'Data': [6.3]
  }, {
    'Name': 'Altenbeken',
    'Data': [7.2]
  }, {
    'Name': 'Bad Lippspringe',
    'Data': [8.8]
  }, {
    'Name': 'Borchen',
    'Data': [8.8]
  }, {
    'Name': 'Büren',
    'Data': [8.4]
  }, {
    'Name': 'Delbrück',
    'Data': [9.1]
  }, {
    'Name': 'Hövelhof',
    'Data': [8.8]
  }, {
    'Name': 'Lichtenau',
    'Data': [7.8]
  }, {
    'Name': 'Paderborn',
    'Data': [9.5]
  }, {
    'Name': 'Salzkotten',
    'Data': [9.7]
  }, {
    'Name': 'Wünnenberg',
    'Data': [8.6]
  }, {
    'Name': 'Bochum',
    'Data': [7.4]
  }, {
    'Name': 'Dortmund',
    'Data': [8.3]
  }, {
    'Name': 'Hagen',
    'Data': [7.8]
  }, {
    'Name': 'Hamm',
    'Data': [8.2]
  }, {
    'Name': 'Herne',
    'Data': [7.4]
  }, {
    'Name': 'Breckerfeld',
    'Data': [6.4]
  }, {
    'Name': 'Ennepetal',
    'Data': [7]
  }, {
    'Name': 'Gevelsberg',
    'Data': [6.7]
  }, {
    'Name': 'Hattingen',
    'Data': [7.1]
  }, {
    'Name': 'Herdecke',
    'Data': [6]
  }, {
    'Name': 'Schwelm',
    'Data': [7.6]
  }, {
    'Name': 'Sprockhövel',
    'Data': [6.4]
  }, {
    'Name': 'Wetter (Ruhr)',
    'Data': [7]
  }, {
    'Name': 'Witten',
    'Data': [7.5]
  }, {
    'Name': 'Arnsberg',
    'Data': [7.7]
  }, {
    'Name': 'Bestwig',
    'Data': [7.5]
  }, {
    'Name': 'Brilon',
    'Data': [7.3]
  }, {
    'Name': 'Eslohe (Sauerland)',
    'Data': [8.6]
  }, {
    'Name': 'Hallenberg',
    'Data': [8.2]
  }, {
    'Name': 'Marsberg',
    'Data': [6.5]
  }, {
    'Name': 'Medebach',
    'Data': [7.6]
  }, {
    'Name': 'Meschede',
    'Data': [7.6]
  }, {
    'Name': 'Olsberg',
    'Data': [6.9]
  }, {
    'Name': 'Schmallenberg',
    'Data': [7.5]
  }, {
    'Name': 'Sundern (Sauerland)',
    'Data': [7]
  }, {
    'Name': 'Winterberg',
    'Data': [6.1]
  }, {
    'Name': 'Altena',
    'Data': [6.1]
  }, {
    'Name': 'Balve',
    'Data': [6.7]
  }, {
    'Name': 'Halver',
    'Data': [8.1]
  }, {
    'Name': 'Hemer',
    'Data': [9.9]
  }, {
    'Name': 'Herscheid',
    'Data': [7.2]
  }, {
    'Name': 'Iserlohn',
    'Data': [7.8]
  }, {
    'Name': 'Kierspe',
    'Data': [10.3]
  }, {
    'Name': 'Lüdenscheid',
    'Data': [8]
  }, {
    'Name': 'Meinerzhagen',
    'Data': [8.2]
  }, {
    'Name': 'Menden (Sauerland)',
    'Data': [7]
  }, {
    'Name': 'Nachrodt-Wiblingwerde',
    'Data': [7.9]
  }, {
    'Name': 'Neuenrade',
    'Data': [8.3]
  }, {
    'Name': 'Plettenberg',
    'Data': [7.4]
  }, {
    'Name': 'Schalksmühle',
    'Data': [7.2]
  }, {
    'Name': 'Werdohl',
    'Data': [9.2]
  }, {
    'Name': 'Attendorn',
    'Data': [7.9]
  }, {
    'Name': 'Drolshagen',
    'Data': [7.8]
  }, {
    'Name': 'Finnentrop',
    'Data': [8.1]
  }, {
    'Name': 'Kirchhundem',
    'Data': [7.6]
  }, {
    'Name': 'Lennestadt',
    'Data': [8.2]
  }, {
    'Name': 'Olpe',
    'Data': [8.2]
  }, {
    'Name': 'Wenden',
    'Data': [8.5]
  }, {
    'Name': 'Bad Berleburg',
    'Data': [7.8]
  }, {
    'Name': 'Burbach',
    'Data': [8.3]
  }, {
    'Name': 'Erndtebrück',
    'Data': [7.7]
  }, {
    'Name': 'Freudenberg',
    'Data': [7.1]
  }, {
    'Name': 'Hilchenbach',
    'Data': [5.9]
  }, {
    'Name': 'Kreuztal',
    'Data': [8.3]
  }, {
    'Name': 'Bad Laasphe',
    'Data': [7.1]
  }, {
    'Name': 'Netphen',
    'Data': [7.2]
  }, {
    'Name': 'Neunkirchen',
    'Data': [7.4]
  }, {
    'Name': 'Siegen',
    'Data': [8.3]
  }, {
    'Name': 'Wilnsdorf',
    'Data': [7.5]
  }, {
    'Name': 'Anröchte',
    'Data': [8.4]
  }, {
    'Name': 'Bad Sassendorf',
    'Data': [6.9]
  }, {
    'Name': 'Ense',
    'Data': [7]
  }, {
    'Name': 'Erwitte',
    'Data': [7.4]
  }, {
    'Name': 'Geseke',
    'Data': [7.7]
  }, {
    'Name': 'Lippetal',
    'Data': [7.6]
  }, {
    'Name': 'Lippstadt',
    'Data': [8.6]
  }, {
    'Name': 'Möhnesee',
    'Data': [7.3]
  }, {
    'Name': 'Rüthen',
    'Data': [7.6]
  }, {
    'Name': 'Soest',
    'Data': [8.3]
  }, {
    'Name': 'Warstein',
    'Data': [6.6]
  }, {
    'Name': 'Welver',
    'Data': [6.6]
  }, {
    'Name': 'Werl',
    'Data': [8]
  }, {
    'Name': 'Wickede (Ruhr)',
    'Data': [7.4]
  }, {
    'Name': 'Bergkamen',
    'Data': [7.7]
  }, {
    'Name': 'Bönen',
    'Data': [7.3]
  }, {
    'Name': 'Fröndenberg/Ruhr',
    'Data': [6.3]
  }, {
    'Name': 'Holzwickede',
    'Data': [6.3]
  }, {
    'Name': 'Kamen',
    'Data': [7]
  }, {
    'Name': 'Lünen',
    'Data': [7.6]
  }, {
    'Name': 'Schwerte',
    'Data': [6.8]
  }, {
    'Name': 'Selm',
    'Data': [7.3]
  }, {
    'Name': 'Unna',
    'Data': [6.8]
  }, {
    'Name': 'Werne',
    'Data': [6.8]
  }//alte Daten
];*/

var datenSterberateKommunen = [
  {
    'Name': 'Jahre',
    'Data': ['2007', '2009', '2011', '2013', '2015']
  }, {
    'Name': 'Bottrop',
    'Data': [11, 12.3, 11.3, 12.4, 12.9]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [12.9, 13.4, 13.3, 13.3, 13.2]
  }, {
    'Name': 'Münster',
    'Data': [8.4, 8.8, 8.4, 8.3, 8.5]
  }, {
    'Name': 'Ahaus',
    'Data': [7.7, 8.1, 8.4, 8.6, 8.7]
  }, {
    'Name': 'Bocholt',
    'Data': [9.3, 10, 9.9, 10.6, 10.3]
  }, {
    'Name': 'Borken',
    'Data': [8.3, 8.1, 8.4, 9.3, 10.2]
  }, {
    'Name': 'Gescher',
    'Data': [8.1, 8.8, 11, 8.8, 8.7]
  }, {
    'Name': 'Gronau',
    'Data': [9.9, 9, 9.8, 9.7, 11]
  }, {
    'Name': 'Heek',
    'Data': [7.3, 8.1, 8.3, 7.2, 8]
  }, {
    'Name': 'Heiden',
    'Data': [7.7, 8.5, 8.8, 9.9, 10.3]
  }, {
    'Name': 'Isselburg',
    'Data': [10, 9, 10.1, 11.5, 12.3]
  }, {
    'Name': 'Legden',
    'Data': [8.4, 10.8, 10.5, 9.7, 7.4]
  }, {
    'Name': 'Raesfeld',
    'Data': [9.6, 9.2, 8.2, 7.8, 9.3]
  }, {
    'Name': 'Reken',
    'Data': [9.2, 10.6, 11, 9.5, 9.8]
  }, {
    'Name': 'Rhede',
    'Data': [7.9, 7.4, 8.5, 9, 10.5]
  }, {
    'Name': 'Schöppingen',
    'Data': [8.7, 6.2, 7.3, 8, 10.7]
  }, {
    'Name': 'Stadtlohn',
    'Data': [7.5, 8, 8.7, 8.3, 9.1]
  }, {
    'Name': 'Südlohn',
    'Data': [10.4, 10.3, 12, 10.5, 13.9]
  }, {
    'Name': 'Velen',
    'Data': [7.6, 7.2, 9, 10.3, 8.7]
  }, {
    'Name': 'Vreden',
    'Data': [8.4, 8.7, 9.2, 8.7, 9.1]
  }, {
    'Name': 'Ascheberg',
    'Data': [9.2, 7.6, 8.8, 9, 9.2]
  }, {
    'Name': 'Billerbeck',
    'Data': [10, 10, 9.6, 10.8, 11.6]
  }, {
    'Name': 'Coesfeld',
    'Data': [9.7, 9.2, 10.9, 10.3, 10.9]
  }, {
    'Name': 'Dülmen',
    'Data': [9.5, 10.1, 10, 11.7, 10.7]
  }, {
    'Name': 'Havixbeck',
    'Data': [7.9, 9.5, 9.8, 10.4, 8.7]
  }, {
    'Name': 'Lüdinghausen',
    'Data': [9.3, 9.1, 9.8, 10.5, 10.9]
  }, {
    'Name': 'Nordkirchen',
    'Data': [8.4, 7.9, 7.2, 7.9, 9.2]
  }, {
    'Name': 'Nottuln',
    'Data': [8.9, 7.9, 8.5, 9.3, 10]
  }, {
    'Name': 'Olfen',
    'Data': [9.2, 9.3, 8.9, 10.5, 9.2]
  }, {
    'Name': 'Rosendahl',
    'Data': [7.1, 8.3, 8.7, 9, 9.8]
  }, {
    'Name': 'Senden',
    'Data': [6.8, 7, 8.6, 8.1, 7.2]
  }, {
    'Name': 'Castrop-Rauxel',
    'Data': [12.9, 12.9, 13.4, 14.2, 14.5]
  }, {
    'Name': 'Datteln',
    'Data': [11.1, 12.2, 12, 13, 11.8]
  }, {
    'Name': 'Dorsten',
    'Data': [10.6, 10.5, 11, 11.4, 12]
  }, {
    'Name': 'Gladbeck',
    'Data': [11.3, 11.8, 12.7, 13.2, 12.8]
  }, {
    'Name': 'Haltern am See',
    'Data': [9.9, 9.9, 10.3, 11.2, 11.1]
  }, {
    'Name': 'Herten',
    'Data': [12.8, 13, 13.6, 13.2, 13]
  }, {
    'Name': 'Marl',
    'Data': [11.3, 12, 11.9, 12.8, 12.5]
  }, {
    'Name': 'Oer-Erkenschwick',
    'Data': [10.3, 12.3, 11.2, 11.2, 11.1]
  }, {
    'Name': 'Recklinghausen',
    'Data': [12, 12.7, 12.6, 12.8, 13]
  }, {
    'Name': 'Waltrop',
    'Data': [10.4, 11.4, 11.5, 12.7, 12.4]
  }, {
    'Name': 'Altenberge',
    'Data': [7.4, 9, 7.1, 8.3, 7.3]
  }, {
    'Name': 'Emsdetten',
    'Data': [8.9, 8.6, 9.5, 10, 9.2]
  }, {
    'Name': 'Greven',
    'Data': [8.2, 9.1, 9.4, 10.2, 9.8]
  }, {
    'Name': 'Hörstel',
    'Data': [7.2, 7.4, 7.8, 9.2, 7.6]
  }, {
    'Name': 'Hopsten',
    'Data': [10.3, 8.6, 9.3, 8.8, 9.9]
  }, {
    'Name': 'Horstmar',
    'Data': [11.6, 12.6, 14.9, 9.3, 14.7]
  }, {
    'Name': 'Ibbenbüren',
    'Data': [8.6, 9.3, 9, 10.3, 10.4]
  }, {
    'Name': 'Ladbergen',
    'Data': [11, 10.2, 12.7, 10.9, 10.8]
  }, {
    'Name': 'Laer',
    'Data': [7.6, 6.2, 7.4, 7.8, 5.5]
  }, {
    'Name': 'Lengerich',
    'Data': [11, 11.3, 11.8, 10.2, 11.6]
  }, {
    'Name': 'Lienen',
    'Data': [9.8, 11.4, 9.6, 9.5, 11]
  }, {
    'Name': 'Lotte',
    'Data': [8.1, 7.9, 8.6, 10, 9]
  }, {
    'Name': 'Metelen',
    'Data': [9.7, 8.5, 10.6, 9.2, 12.8]
  }, {
    'Name': 'Mettingen',
    'Data': [8, 9, 7.8, 8.9, 9]
  }, {
    'Name': 'Neuenkirchen',
    'Data': [6, 8.4, 9, 8.4, 10.4]
  }, {
    'Name': 'Nordwalde',
    'Data': [9.5, 11.1, 12.4, 13.7, 12.5]
  }, {
    'Name': 'Ochtrup',
    'Data': [8.4, 7.7, 9.2, 9, 9.4]
  }, {
    'Name': 'Recke',
    'Data': [9.2, 9.5, 9, 9.1, 9.3]
  }, {
    'Name': 'Rheine',
    'Data': [8.6, 9.6, 9.6, 9.8, 11]
  }, {
    'Name': 'Saerbeck',
    'Data': [7.7, 6.4, 6.4, 8.4, 9]
  }, {
    'Name': 'Steinfurt',
    'Data': [9.1, 9.4, 9.3, 10, 10.4]
  }, {
    'Name': 'Tecklenburg',
    'Data': [9.7, 10.4, 9.2, 11.5, 13.6]
  }, {
    'Name': 'Westerkappeln',
    'Data': [8.6, 10.6, 9.6, 9.6, 10.6]
  }, {
    'Name': 'Wettringen',
    'Data': [7.3, 10.6, 9.5, 9.7, 9.5]
  }, {
    'Name': 'Ahlen',
    'Data': [9.6, 10.2, 11.1, 12.3, 10.9]
  }, {
    'Name': 'Beckum',
    'Data': [10, 10.9, 11, 12.1, 11.4]
  }, {
    'Name': 'Beelen',
    'Data': [11, 9.4, 8.9, 10.1, 9.9]
  }, {
    'Name': 'Drensteinfurt',
    'Data': [6.3, 8.2, 9.2, 7.6, 8.8]
  }, {
    'Name': 'Ennigerloh',
    'Data': [9.4, 10.3, 9.6, 10.6, 10.1]
  }, {
    'Name': 'Everswinkel',
    'Data': [6.4, 7.5, 8.4, 9.1, 7.7]
  }, {
    'Name': 'Oelde',
    'Data': [8.2, 9.1, 9.4, 9.7, 8.6]
  }, {
    'Name': 'Ostbevern',
    'Data': [7.3, 6.9, 8, 5.4, 7.4]
  }, {
    'Name': 'Sassenberg',
    'Data': [6.8, 7.6, 8.8, 8.8, 6.9]
  }, {
    'Name': 'Sendenhorst',
    'Data': [10, 9.3, 8.2, 11.3, 9.4]
  }, {
    'Name': 'Telgte',
    'Data': [9.4, 8, 9, 9.1, 9.7]
  }, {
    'Name': 'Wadersloh',
    'Data': [12.4, 13.7, 11.4, 13.7, 12.4]
  }, {
    'Name': 'Warendorf',
    'Data': [8, 8.6, 8.8, 10, 10.3]
  }, {
    'Name': 'Bielefeld',
    'Data': [10.4, 10.9, 10.1, 10.8, 10.7]
  }, {
    'Name': 'Borgholzhausen',
    'Data': [9.7, 8.4, 7.5, 9.3, 9.3]
  }, {
    'Name': 'Gütersloh',
    'Data': [9.7, 9.7, 9.6, 10.7, 11.1]
  }, {
    'Name': 'Halle (Westf.)',
    'Data': [9.7, 9.8, 8.6, 11.7, 9.4]
  }, {
    'Name': 'Harsewinkel',
    'Data': [7.5, 8.2, 7.7, 9.8, 7.6]
  }, {
    'Name': 'Herzebrock-Clarholz',
    'Data': [8.1, 8.7, 8.3, 8.3, 9.7]
  }, {
    'Name': 'Langenberg',
    'Data': [6.7, 9.2, 8.3, 9.2, 8]
  }, {
    'Name': 'Rheda-Wiedenbrück',
    'Data': [8.9, 9, 7.7, 9.4, 10.1]
  }, {
    'Name': 'Rietberg',
    'Data': [8.3, 8.5, 7.5, 8.7, 8.7]
  }, {
    'Name': 'Schloß Holte-Stukenbrock',
    'Data': [7.9, 9.5, 8.9, 9, 8.2]
  }, {
    'Name': 'Steinhagen',
    'Data': [8.5, 9.1, 9.6, 9.5, 10.2]
  }, {
    'Name': 'Verl',
    'Data': [8.1, 7.9, 8.1, 8.6, 7.4]
  }, {
    'Name': 'Versmold',
    'Data': [9, 10.3, 9.6, 11, 11.3]
  }, {
    'Name': 'Werther (Westf.)',
    'Data': [8.6, 8, 10.7, 10, 9.5]
  }, {
    'Name': 'Bünde',
    'Data': [10.7, 10, 10, 10, 11.3]
  }, {
    'Name': 'Enger',
    'Data': [8.2, 8.3, 9.5, 9.7, 9.1]
  }, {
    'Name': 'Herford',
    'Data': [11.1, 11.2, 11.3, 12.6, 12.1]
  }, {
    'Name': 'Hiddenhausen',
    'Data': [10.9, 11.6, 10.9, 10.6, 11.6]
  }, {
    'Name': 'Kirchlengern',
    'Data': [10, 9.2, 9.7, 11.5, 11.5]
  }, {
    'Name': 'Löhne',
    'Data': [11.5, 13.3, 11.9, 13.1, 13.2]
  }, {
    'Name': 'Rödinghausen',
    'Data': [11.8, 12, 11.3, 12.7, 12.9]
  }, {
    'Name': 'Spenge',
    'Data': [13, 13.8, 10.7, 12.9, 12.1]
  }, {
    'Name': 'Vlotho',
    'Data': [11.2, 11.4, 12.2, 11.7, 13.3]
  }, {
    'Name': 'Bad Driburg',
    'Data': [11.4, 11.3, 11.9, 12.8, 12.7]
  }, {
    'Name': 'Beverungen',
    'Data': [10.5, 12.9, 12.6, 12.3, 12.3]
  }, {
    'Name': 'Borgentreich',
    'Data': [10.8, 11.1, 10.9, 11.9, 10.7]
  }, {
    'Name': 'Brakel',
    'Data': [9, 9.7, 10.2, 13, 11.9]
  }, {
    'Name': 'Höxter',
    'Data': [10.5, 11.2, 11.6, 12.2, 12.4]
  }, {
    'Name': 'Marienmünster',
    'Data': [10.7, 14.2, 9.8, 13.7, 16]
  }, {
    'Name': 'Nieheim',
    'Data': [11.2, 14.8, 12.8, 13.1, 11]
  }, {
    'Name': 'Steinheim',
    'Data': [7.5, 9.6, 9.6, 10.2, 10.5]
  }, {
    'Name': 'Warburg',
    'Data': [10.4, 12.2, 10.8, 13.9, 11.2]
  }, {
    'Name': 'Willebadessen',
    'Data': [9.1, 8.3, 9.1, 11.2, 11]
  }, {
    'Name': 'Augustdorf',
    'Data': [7.2, 6.1, 8.3, 8.5, 7.4]
  }, {
    'Name': 'Bad Salzuflen',
    'Data': [13.5, 13.7, 13.7, 14.2, 15.2]
  }, {
    'Name': 'Barntrup',
    'Data': [10.3, 11.4, 10.8, 12.6, 10.9]
  }, {
    'Name': 'Blomberg',
    'Data': [9.1, 10.4, 11.2, 10.7, 11.1]
  }, {
    'Name': 'Detmold',
    'Data': [11.9, 11.5, 11.3, 11.8, 11.3]
  }, {
    'Name': 'Dörentrup',
    'Data': [11, 11.6, 12.6, 11.6, 13.8]
  }, {
    'Name': 'Extertal',
    'Data': [10.8, 12, 12.3, 12.6, 13.6]
  }, {
    'Name': 'Horn-Bad Meinberg',
    'Data': [12.7, 12.6, 15.3, 12.9, 14.7]
  }, {
    'Name': 'Kalletal',
    'Data': [10.5, 11.8, 14.6, 13.9, 14.5]
  }, {
    'Name': 'Lage',
    'Data': [10.5, 10.3, 10, 11.7, 11.5]
  }, {
    'Name': 'Lemgo',
    'Data': [10.3, 10.8, 11.7, 12.1, 12.7]
  }, {
    'Name': 'Leopoldshöhe',
    'Data': [8.9, 9.1, 9.9, 9.2, 9.7]
  }, {
    'Name': 'Lügde',
    'Data': [10, 10.7, 9.6, 14.4, 15.6]
  }, {
    'Name': 'Oerlinghausen',
    'Data': [10.1, 10.7, 9.8, 10.7, 11.8]
  }, {
    'Name': 'Schieder-Schwalenberg',
    'Data': [10.8, 11.5, 12.7, 10.4, 10.1]
  }, {
    'Name': 'Schlangen',
    'Data': [8.5, 9.5, 9.1, 7.8, 9]
  }, {
    'Name': 'Bad Oeynhausen',
    'Data': [12.3, 13.4, 13.5, 13.5, 12.9]
  }, {
    'Name': 'Espelkamp',
    'Data': [10.3, 9.4, 9.2, 11.1, 10.9]
  }, {
    'Name': 'Hille',
    'Data': [9.4, 9.2, 10.8, 9.4, 8.3]
  }, {
    'Name': 'Hüllhorst',
    'Data': [9.8, 9.5, 9.6, 10.1, 11]
  }, {
    'Name': 'Lübbecke',
    'Data': [10.7, 9.7, 10.3, 10.7, 11.8]
  }, {
    'Name': 'Minden',
    'Data': [11.1, 11.7, 12.1, 11.9, 11.7]
  }, {
    'Name': 'Petershagen',
    'Data': [11, 11.6, 11.5, 12.5, 11.9]
  }, {
    'Name': 'Porta Westfalica',
    'Data': [10.9, 11, 10.5, 10.8, 10.3]
  }, {
    'Name': 'Preußisch Oldendorf',
    'Data': [10.1, 9.4, 11.8, 10.7, 9.8]
  }, {
    'Name': 'Rahden',
    'Data': [10.4, 12.5, 12.4, 14.8, 13.8]
  }, {
    'Name': 'Stemwede',
    'Data': [11.6, 14.9, 16.6, 13.5, 14.8]
  }, {
    'Name': 'Altenbeken',
    'Data': [10.7, 12, 11.7, 12.9, 14.3]
  }, {
    'Name': 'Bad Lippspringe',
    'Data': [13.3, 14.6, 15.9, 16.2, 13.6]
  }, {
    'Name': 'Borchen',
    'Data': [8, 7.8, 9.1, 9.5, 10.4]
  }, {
    'Name': 'Büren',
    'Data': [8.8, 8.5, 8.5, 9, 10.9]
  }, {
    'Name': 'Delbrück',
    'Data': [6.7, 6.7, 6.4, 6.6, 7.7]
  }, {
    'Name': 'Hövelhof',
    'Data': [7.9, 7.4, 8.6, 7.5, 7.2]
  }, {
    'Name': 'Lichtenau',
    'Data': [8.4, 9.2, 9.7, 11.4, 10.9]
  }, {
    'Name': 'Paderborn',
    'Data': [8, 7.6, 7.9, 8.3, 8.6]
  }, {
    'Name': 'Salzkotten',
    'Data': [6.9, 9, 6.9, 8.2, 8.5]
  }, {
    'Name': 'Wünnenberg',
    'Data': [9.5, 8.2, 10.8, 11.5, 10.2]
  }, {
    'Name': 'Bochum',
    'Data': [11.2, 11.7, 12.1, 12.6, 12.7]
  }, {
    'Name': 'Dortmund',
    'Data': [11.4, 11.6, 11.8, 12.1, 12.3]
  }, {
    'Name': 'Hagen',
    'Data': [12, 12.2, 12.8, 13.3, 13.5]
  }, {
    'Name': 'Hamm',
    'Data': [10.7, 11.1, 11.2, 11.5, 11.9]
  }, {
    'Name': 'Herne',
    'Data': [12.1, 12.6, 13.3, 13.8, 13.6]
  }, {
    'Name': 'Breckerfeld',
    'Data': [8.7, 10.4, 10.9, 10.9, 11.6]
  }, {
    'Name': 'Ennepetal',
    'Data': [13, 11.7, 12.8, 13.2, 12.6]
  }, {
    'Name': 'Gevelsberg',
    'Data': [13, 13.7, 12.8, 14.8, 15.6]
  }, {
    'Name': 'Hattingen',
    'Data': [11.6, 11.6, 12.1, 13.2, 13.1]
  }, {
    'Name': 'Herdecke',
    'Data': [12.3, 12.7, 13.4, 15.5, 15]
  }, {
    'Name': 'Schwelm',
    'Data': [14, 16.3, 14.7, 15.9, 15.6]
  }, {
    'Name': 'Sprockhövel',
    'Data': [10.8, 9.7, 10, 12.6, 10.8]
  }, {
    'Name': 'Wetter (Ruhr)',
    'Data': [11.8, 11, 11.8, 10.4, 12.5]
  }, {
    'Name': 'Witten',
    'Data': [12.1, 12, 12.8, 13.1, 13.6]
  }, {
    'Name': 'Arnsberg',
    'Data': [11.4, 10.8, 12, 12.3, 12.3]
  }, {
    'Name': 'Bestwig',
    'Data': [11, 10.6, 9.7, 9.2, 13.5]
  }, {
    'Name': 'Brilon',
    'Data': [11, 12.2, 13, 13, 13]
  }, {
    'Name': 'Eslohe (Sauerland)',
    'Data': [11, 10.8, 10.5, 11.1, 12.1]
  }, {
    'Name': 'Hallenberg',
    'Data': [11.1, 12.9, 10.6, 14.4, 13]
  }, {
    'Name': 'Marsberg',
    'Data': [10.8, 11.8, 11.7, 11.6, 12.1]
  }, {
    'Name': 'Medebach',
    'Data': [9, 10.3, 12.6, 12.5, 14.2]
  }, {
    'Name': 'Meschede',
    'Data': [11.2, 11.7, 11.7, 12.6, 13.3]
  }, {
    'Name': 'Olsberg',
    'Data': [9.2, 10.2, 8.6, 10.2, 12.3]
  }, {
    'Name': 'Schmallenberg',
    'Data': [10.4, 12, 11.1, 10.9, 12.2]
  }, {
    'Name': 'Sundern (Sauerland)',
    'Data': [8.3, 8.1, 9.3, 10.2, 11.8]
  }, {
    'Name': 'Winterberg',
    'Data': [13, 12, 12.5, 13, 13.6]
  }, {
    'Name': 'Altena',
    'Data': [10.2, 13.4, 11.9, 13.3, 14.1]
  }, {
    'Name': 'Balve',
    'Data': [9.8, 11, 11.5, 11.9, 12.6]
  }, {
    'Name': 'Halver',
    'Data': [10.1, 10.2, 11.5, 11.7, 13.5]
  }, {
    'Name': 'Hemer',
    'Data': [10.6, 9.4, 9.6, 11.6, 12.5]
  }, {
    'Name': 'Herscheid',
    'Data': [12.1, 10.5, 12, 11.2, 11.8]
  }, {
    'Name': 'Iserlohn',
    'Data': [10.9, 11.5, 11.2, 12.8, 11.8]
  }, {
    'Name': 'Kierspe',
    'Data': [8.1, 9, 10.1, 11.7, 11.7]
  }, {
    'Name': 'Lüdenscheid',
    'Data': [10.9, 11.5, 11.4, 12.4, 12.7]
  }, {
    'Name': 'Meinerzhagen',
    'Data': [9.3, 10.5, 9.7, 10, 11.4]
  }, {
    'Name': 'Menden (Sauerland)',
    'Data': [9.2, 10.3, 10, 10.9, 11.3]
  }, {
    'Name': 'Nachrodt-Wiblingwerde',
    'Data': [10.5, 12.7, 13.7, 16.4, 10.1]
  }, {
    'Name': 'Neuenrade',
    'Data': [11, 9.6, 9.5, 9.2, 12.7]
  }, {
    'Name': 'Plettenberg',
    'Data': [11.2, 13.2, 10.1, 12.8, 11.5]
  }, {
    'Name': 'Schalksmühle',
    'Data': [9.8, 11, 12, 11.8, 13.3]
  }, {
    'Name': 'Werdohl',
    'Data': [10.8, 11.8, 10.9, 12.2, 12.7]
  }, {
    'Name': 'Attendorn',
    'Data': [8.2, 9.5, 10.7, 10.1, 10.8]
  }, {
    'Name': 'Drolshagen',
    'Data': [10.9, 10.4, 10.3, 11.1, 10]
  }, {
    'Name': 'Finnentrop',
    'Data': [9.4, 10, 9.9, 11.1, 11.2]
  }, {
    'Name': 'Kirchhundem',
    'Data': [9.7, 10.3, 11.9, 11.9, 10.3]
  }, {
    'Name': 'Lennestadt',
    'Data': [9.1, 10.6, 11.6, 12.8, 12.5]
  }, {
    'Name': 'Olpe',
    'Data': [9.2, 8.7, 9.7, 11, 11]
  }, {
    'Name': 'Wenden',
    'Data': [8.7, 7.7, 9.3, 9.8, 9.9]
  }, {
    'Name': 'Bad Berleburg',
    'Data': [10, 11.9, 12.2, 13, 13.1]
  }, {
    'Name': 'Burbach',
    'Data': [10.9, 9.7, 11.1, 12.3, 13.2]
  }, {
    'Name': 'Erndtebrück',
    'Data': [9, 10.9, 10.6, 12.5, 11.2]
  }, {
    'Name': 'Freudenberg',
    'Data': [9.5, 9.2, 7.6, 10.4, 10.3]
  }, {
    'Name': 'Hilchenbach',
    'Data': [10.8, 12.5, 11.8, 11.7, 13.3]
  }, {
    'Name': 'Kreuztal',
    'Data': [9.5, 10.4, 10.4, 11.3, 10.6]
  }, {
    'Name': 'Bad Laasphe',
    'Data': [13.6, 14.7, 12.1, 12.4, 13]
  }, {
    'Name': 'Netphen',
    'Data': [9, 9.9, 9.7, 9.5, 10.5]
  }, {
    'Name': 'Neunkirchen',
    'Data': [12.6, 11.1, 11.2, 12.5, 13.3]
  }, {
    'Name': 'Siegen',
    'Data': [10.7, 10.8, 12, 12, 11.3]
  }, {
    'Name': 'Wilnsdorf',
    'Data': [10, 9.5, 11.4, 11.8, 11.4]
  }, {
    'Name': 'Anröchte',
    'Data': [10.2, 9.8, 9.2, 9.3, 10.6]
  }, {
    'Name': 'Bad Sassendorf',
    'Data': [17.8, 14.2, 13, 18.5, 16.3]
  }, {
    'Name': 'Ense',
    'Data': [6.4, 7.1, 10.2, 10.6, 10]
  }, {
    'Name': 'Erwitte',
    'Data': [9.6, 10.4, 10.1, 11.6, 10]
  }, {
    'Name': 'Geseke',
    'Data': [10.3, 11.2, 12, 13, 12.8]
  }, {
    'Name': 'Lippetal',
    'Data': [9.7, 9.9, 9.2, 9.3, 9.3]
  }, {
    'Name': 'Lippstadt',
    'Data': [10.2, 10.4, 10.7, 11.6, 11.6]
  }, {
    'Name': 'Möhnesee',
    'Data': [12.2, 14, 12.4, 18.5, 14.3]
  }, {
    'Name': 'Rüthen',
    'Data': [13.1, 13.3, 13.5, 14, 13]
  }, {
    'Name': 'Soest',
    'Data': [10.8, 10.5, 10.4, 11.2, 11.1]
  }, {
    'Name': 'Warstein',
    'Data': [10.4, 10.3, 11.4, 13.3, 13.4]
  }, {
    'Name': 'Welver',
    'Data': [10.2, 9.7, 11.9, 12.5, 14.4]
  }, {
    'Name': 'Werl',
    'Data': [10.1, 10.3, 10.8, 11, 11.6]
  }, {
    'Name': 'Wickede (Ruhr)',
    'Data': [10.4, 12, 12.1, 13.7, 11]
  }, {
    'Name': 'Bergkamen',
    'Data': [9.8, 10.6, 10.2, 12, 12.4]
  }, {
    'Name': 'Bönen',
    'Data': [10.3, 9.6, 11.4, 12.2, 11.3]
  }, {
    'Name': 'Fröndenberg/Ruhr',
    'Data': [10.6, 11.2, 13.4, 14.1, 15.6]
  }, {
    'Name': 'Holzwickede',
    'Data': [9.4, 10.3, 10.3, 12.3, 11.2]
  }, {
    'Name': 'Kamen',
    'Data': [10.4, 10.5, 10.9, 12.5, 13]
  }, {
    'Name': 'Lünen',
    'Data': [10.1, 11.1, 11.9, 12.6, 12.8]
  }, {
    'Name': 'Schwerte',
    'Data': [10.7, 11.6, 10.7, 12, 12.3]
  }, {
    'Name': 'Selm',
    'Data': [8.4, 8.4, 10.7, 12, 11.7]
  }, {
    'Name': 'Unna',
    'Data': [9.1, 9.4, 11.4, 12.2, 13.2]
  }, {
    'Name': 'Werne',
    'Data': [11.6, 12.8, 12.8, 13.2, 13.7]
  }
];

/*var datenSterberateKommunen = [
  {
    'Name': 'Jahre',
    'Data': ['2010 - 2013']
  },
  {
    'Name': 'Bottrop',
    'Data': [11.9]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [13.3]
  }, {
    'Name': 'Münster',
    'Data': [8.4]
  }, {
    'Name': 'Ahaus',
    'Data': [8.2]
  }, {
    'Name': 'Bocholt',
    'Data': [10]
  }, {
    'Name': 'Borken',
    'Data': [8.9]
  }, {
    'Name': 'Gescher',
    'Data': [8.6]
  }, {
    'Name': 'Gronau',
    'Data': [9.5]
  }, {
    'Name': 'Heek',
    'Data': [7]
  }, {
    'Name': 'Heiden',
    'Data': [9.4]
  }, {
    'Name': 'Isselburg',
    'Data': [10.2]
  }, {
    'Name': 'Legden',
    'Data': [10.8]
  }, {
    'Name': 'Raesfeld',
    'Data': [8.6]
  }, {
    'Name': 'Reken',
    'Data': [10.7]
  }, {
    'Name': 'Rhede',
    'Data': [8.4]
  }, {
    'Name': 'Schöppingen',
    'Data': [6.8]
  }, {
    'Name': 'Stadtlohn',
    'Data': [8.3]
  }, {
    'Name': 'Südlohn',
    'Data': [10.8]
  }, {
    'Name': 'Velen',
    'Data': [9.1]
  }, {
    'Name': 'Vreden',
    'Data': [9]
  }, {
    'Name': 'Ascheberg',
    'Data': [8.5]
  }, {
    'Name': 'Billerbeck',
    'Data': [9.3]
  }, {
    'Name': 'Coesfeld',
    'Data': [10.4]
  }, {
    'Name': 'Dülmen',
    'Data': [10.5]
  }, {
    'Name': 'Havixbeck',
    'Data': [9.6]
  }, {
    'Name': 'Lüdinghausen',
    'Data': [9.9]
  }, {
    'Name': 'Nordkirchen',
    'Data': [7.6]
  }, {
    'Name': 'Nottuln',
    'Data': [8.6]
  }, {
    'Name': 'Olfen',
    'Data': [9.1]
  }, {
    'Name': 'Rosendahl',
    'Data': [8.2]
  }, {
    'Name': 'Senden',
    'Data': [7.5]
  }, {
    'Name': 'Castrop-Rauxel',
    'Data': [13.1]
  }, {
    'Name': 'Datteln',
    'Data': [12.1]
  }, {
    'Name': 'Dorsten',
    'Data': [10.9]
  }, {
    'Name': 'Gladbeck',
    'Data': [12.9]
  }, {
    'Name': 'Haltern am See',
    'Data': [10.4]
  }, {
    'Name': 'Herten',
    'Data': [12.9]
  }, {
    'Name': 'Marl',
    'Data': [11.8]
  }, {
    'Name': 'Oer-Erkenschwick',
    'Data': [11.9]
  }, {
    'Name': 'Recklinghausen',
    'Data': [12.7]
  }, {
    'Name': 'Waltrop',
    'Data': [11.9]
  }, {
    'Name': 'Altenberge',
    'Data': [8.3]
  }, {
    'Name': 'Emsdetten',
    'Data': [9.7]
  }, {
    'Name': 'Greven',
    'Data': [9.3]
  }, {
    'Name': 'Hörstel',
    'Data': [8.5]
  }, {
    'Name': 'Hopsten',
    'Data': [9.4]
  }, {
    'Name': 'Horstmar',
    'Data': [12.3]
  }, {
    'Name': 'Ibbenbüren',
    'Data': [9.8]
  }, {
    'Name': 'Ladbergen',
    'Data': [11.5]
  }, {
    'Name': 'Laer',
    'Data': [7.1]
  }, {
    'Name': 'Lengerich',
    'Data': [11.1]
  }, {
    'Name': 'Lienen',
    'Data': [9.5]
  }, {
    'Name': 'Lotte',
    'Data': [8.6]
  }, {
    'Name': 'Metelen',
    'Data': [10]
  }, {
    'Name': 'Mettingen',
    'Data': [8.3]
  }, {
    'Name': 'Neuenkirchen',
    'Data': [8.9]
  }, {
    'Name': 'Nordwalde',
    'Data': [11.3]
  }, {
    'Name': 'Ochtrup',
    'Data': [9.2]
  }, {
    'Name': 'Recke',
    'Data': [8.6]
  }, {
    'Name': 'Rheine',
    'Data': [9.4]
  }, {
    'Name': 'Saerbeck',
    'Data': [7.7]
  }, {
    'Name': 'Steinfurt',
    'Data': [9.7]
  }, {
    'Name': 'Tecklenburg',
    'Data': [9.9]
  }, {
    'Name': 'Westerkappeln',
    'Data': [10.1]
  }, {
    'Name': 'Wettringen',
    'Data': [8.8]
  }, {
    'Name': 'Ahlen',
    'Data': [10.8]
  }, {
    'Name': 'Beckum',
    'Data': [11.1]
  }, {
    'Name': 'Beelen',
    'Data': [10]
  }, {
    'Name': 'Drensteinfurt',
    'Data': [7.8]
  }, {
    'Name': 'Ennigerloh',
    'Data': [9.9]
  }, {
    'Name': 'Everswinkel',
    'Data': [8.3]
  }, {
    'Name': 'Oelde',
    'Data': [9.6]
  }, {
    'Name': 'Ostbevern',
    'Data': [7.3]
  }, {
    'Name': 'Sassenberg',
    'Data': [8.3]
  }, {
    'Name': 'Sendenhorst',
    'Data': [9.2]
  }, {
    'Name': 'Telgte',
    'Data': [9.1]
  }, {
    'Name': 'Wadersloh',
    'Data': [12.7]
  }, {
    'Name': 'Warendorf',
    'Data': [9.3]
  }, {
    'Name': 'Bielefeld',
    'Data': [10.6]
  }, {
    'Name': 'Borgholzhausen',
    'Data': [9.1]
  }, {
    'Name': 'Gütersloh',
    'Data': [9.9]
  }, {
    'Name': 'Halle (Westf.)',
    'Data': [10.3]
  }, {
    'Name': 'Harsewinkel',
    'Data': [8.7]
  }, {
    'Name': 'Herzebrock-Clarholz',
    'Data': [8.2]
  }, {
    'Name': 'Langenberg',
    'Data': [9.6]
  }, {
    'Name': 'Rheda-Wiedenbrück',
    'Data': [8.8]
  }, {
    'Name': 'Rietberg',
    'Data': [8.4]
  }, {
    'Name': 'Schloß Holte-Stukenbrock',
    'Data': [9.2]
  }, {
    'Name': 'Steinhagen',
    'Data': [9.9]
  }, {
    'Name': 'Verl',
    'Data': [8.2]
  }, {
    'Name': 'Versmold',
    'Data': [10.1]
  }, {
    'Name': 'Werther (Westf.)',
    'Data': [10.6]
  }, {
    'Name': 'Bünde',
    'Data': [10.2]
  }, {
    'Name': 'Enger',
    'Data': [10]
  }, {
    'Name': 'Herford',
    'Data': [12.3]
  }, {
    'Name': 'Hiddenhausen',
    'Data': [10.9]
  }, {
    'Name': 'Kirchlengern',
    'Data': [10.1]
  }, {
    'Name': 'Löhne',
    'Data': [12.4]
  }, {
    'Name': 'Rödinghausen',
    'Data': [12.6]
  }, {
    'Name': 'Spenge',
    'Data': [12.3]
  }, {
    'Name': 'Vlotho',
    'Data': [11.9]
  }, {
    'Name': 'Bad Driburg',
    'Data': [12.2]
  }, {
    'Name': 'Beverungen',
    'Data': [12.3]
  }, {
    'Name': 'Borgentreich',
    'Data': [11.5]
  }, {
    'Name': 'Brakel',
    'Data': [12]
  }, {
    'Name': 'Höxter',
    'Data': [11.5]
  }, {
    'Name': 'Marienmünster',
    'Data': [13.1]
  }, {
    'Name': 'Nieheim',
    'Data': [13]
  }, {
    'Name': 'Steinheim',
    'Data': [9.9]
  }, {
    'Name': 'Warburg',
    'Data': [12.3]
  }, {
    'Name': 'Willebadessen',
    'Data': [10.1]
  }, {
    'Name': 'Augustdorf',
    'Data': [8.5]
  }, {
    'Name': 'Bad Salzuflen',
    'Data': [13.5]
  }, {
    'Name': 'Barntrup',
    'Data': [11.6]
  }, {
    'Name': 'Blomberg',
    'Data': [10.1]
  }, {
    'Name': 'Detmold',
    'Data': [11.5]
  }, {
    'Name': 'Dörentrup',
    'Data': [12.4]
  }, {
    'Name': 'Extertal',
    'Data': [12.4]
  }, {
    'Name': 'Horn-Bad Meinberg',
    'Data': [13.1]
  }, {
    'Name': 'Kalletal',
    'Data': [12.9]
  }, {
    'Name': 'Lage',
    'Data': [10.8]
  }, {
    'Name': 'Lemgo',
    'Data': [11.6]
  }, {
    'Name': 'Leopoldshöhe',
    'Data': [9.3]
  }, {
    'Name': 'Lügde',
    'Data': [12.2]
  }, {
    'Name': 'Oerlinghausen',
    'Data': [10]
  }, {
    'Name': 'Schieder-Schwalenberg',
    'Data': [11.3]
  }, {
    'Name': 'Schlangen',
    'Data': [8.4]
  }, {
    'Name': 'Bad Oeynhausen',
    'Data': [13.3]
  }, {
    'Name': 'Espelkamp',
    'Data': [10.3]
  }, {
    'Name': 'Hille',
    'Data': [10.2]
  }, {
    'Name': 'Hüllhorst',
    'Data': [9.5]
  }, {
    'Name': 'Lübbecke',
    'Data': [10.1]
  }, {
    'Name': 'Minden',
    'Data': [11.9]
  }, {
    'Name': 'Petershagen',
    'Data': [12.1]
  }, {
    'Name': 'Porta Westfalica',
    'Data': [11.2]
  }, {
    'Name': 'Preußisch Oldendorf',
    'Data': [11.3]
  }, {
    'Name': 'Rahden',
    'Data': [13.5]
  }, {
    'Name': 'Stemwede',
    'Data': [13.8]
  }, {
    'Name': 'Altenbeken',
    'Data': [12.4]
  }, {
    'Name': 'Bad Lippspringe',
    'Data': [15]
  }, {
    'Name': 'Borchen',
    'Data': [9]
  }, {
    'Name': 'Büren',
    'Data': [8.9]
  }, {
    'Name': 'Delbrück',
    'Data': [6.6]
  }, {
    'Name': 'Hövelhof',
    'Data': [7.6]
  }, {
    'Name': 'Lichtenau',
    'Data': [9.8]
  }, {
    'Name': 'Paderborn',
    'Data': [7.9]
  }, {
    'Name': 'Salzkotten',
    'Data': [7.3]
  }, {
    'Name': 'Wünnenberg',
    'Data': [10.7]
  }, {
    'Name': 'Bochum',
    'Data': [11.9]
  }, {
    'Name': 'Dortmund',
    'Data': [11.7]
  }, {
    'Name': 'Hagen',
    'Data': [12.9]
  }, {
    'Name': 'Hamm',
    'Data': [10.9]
  }, {
    'Name': 'Herne',
    'Data': [12.9]
  }, {
    'Name': 'Breckerfeld',
    'Data': [10.1]
  }, {
    'Name': 'Ennepetal',
    'Data': [13.2]
  }, {
    'Name': 'Gevelsberg',
    'Data': [13.1]
  }, {
    'Name': 'Hattingen',
    'Data': [12.3]
  }, {
    'Name': 'Herdecke',
    'Data': [12.8]
  }, {
    'Name': 'Schwelm',
    'Data': [15.4]
  }, {
    'Name': 'Sprockhövel',
    'Data': [11.4]
  }, {
    'Name': 'Wetter (Ruhr)',
    'Data': [11.4]
  }, {
    'Name': 'Witten',
    'Data': [12.6]
  }, {
    'Name': 'Arnsberg',
    'Data': [11.7]
  }, {
    'Name': 'Bestwig',
    'Data': [10.7]
  }, {
    'Name': 'Brilon',
    'Data': [12]
  }, {
    'Name': 'Eslohe (Sauerland)',
    'Data': [10.9]
  }, {
    'Name': 'Hallenberg',
    'Data': [12.1]
  }, {
    'Name': 'Marsberg',
    'Data': [11.5]
  }, {
    'Name': 'Medebach',
    'Data': [13]
  }, {
    'Name': 'Meschede',
    'Data': [11.5]
  }, {
    'Name': 'Olsberg',
    'Data': [9.7]
  }, {
    'Name': 'Schmallenberg',
    'Data': [10.8]
  }, {
    'Name': 'Sundern (Sauerland)',
    'Data': [9.4]
  }, {
    'Name': 'Winterberg',
    'Data': [12.1]
  }, {
    'Name': 'Altena',
    'Data': [13]
  }, {
    'Name': 'Balve',
    'Data': [11.2]
  }, {
    'Name': 'Halver',
    'Data': [11.2]
  }, {
    'Name': 'Hemer',
    'Data': [10.1]
  }, {
    'Name': 'Herscheid',
    'Data': [12.9]
  }, {
    'Name': 'Iserlohn',
    'Data': [11.9]
  }, {
    'Name': 'Kierspe',
    'Data': [10.3]
  }, {
    'Name': 'Lüdenscheid',
    'Data': [11.6]
  }, {
    'Name': 'Meinerzhagen',
    'Data': [9.7]
  }, {
    'Name': 'Menden (Sauerland)',
    'Data': [10.3]
  }, {
    'Name': 'Nachrodt-Wiblingwerde',
    'Data': [14.6]
  }, {
    'Name': 'Neuenrade',
    'Data': [9.7]
  }, {
    'Name': 'Plettenberg',
    'Data': [11.6]
  }, {
    'Name': 'Schalksmühle',
    'Data': [11.4]
  }, {
    'Name': 'Werdohl',
    'Data': [11.4]
  }, {
    'Name': 'Attendorn',
    'Data': [10.4]
  }, {
    'Name': 'Drolshagen',
    'Data': [11.3]
  }, {
    'Name': 'Finnentrop',
    'Data': [9.7]
  }, {
    'Name': 'Kirchhundem',
    'Data': [11]
  }, {
    'Name': 'Lennestadt',
    'Data': [11.4]
  }, {
    'Name': 'Olpe',
    'Data': [10]
  }, {
    'Name': 'Wenden',
    'Data': [9.2]
  }, {
    'Name': 'Bad Berleburg',
    'Data': [12.5]
  }, {
    'Name': 'Burbach',
    'Data': [11.9]
  }, {
    'Name': 'Erndtebrück',
    'Data': [11.1]
  }, {
    'Name': 'Freudenberg',
    'Data': [9.1]
  }, {
    'Name': 'Hilchenbach',
    'Data': [12]
  }, {
    'Name': 'Kreuztal',
    'Data': [11]
  }, {
    'Name': 'Bad Laasphe',
    'Data': [12.4]
  }, {
    'Name': 'Netphen',
    'Data': [9.9]
  }, {
    'Name': 'Neunkirchen',
    'Data': [12]
  }, {
    'Name': 'Siegen',
    'Data': [11.1]
  }, {
    'Name': 'Wilnsdorf',
    'Data': [11.3]
  }, {
    'Name': 'Anröchte',
    'Data': [9.2]
  }, {
    'Name': 'Bad Sassendorf',
    'Data': [15.8]
  }, {
    'Name': 'Ense',
    'Data': [9.5]
  }, {
    'Name': 'Erwitte',
    'Data': [11.1]
  }, {
    'Name': 'Geseke',
    'Data': [11.9]
  }, {
    'Name': 'Lippetal',
    'Data': [9.1]
  }, {
    'Name': 'Lippstadt',
    'Data': [11]
  }, {
    'Name': 'Möhnesee',
    'Data': [14.3]
  }, {
    'Name': 'Rüthen',
    'Data': [13.6]
  }, {
    'Name': 'Soest',
    'Data': [10.2]
  }, {
    'Name': 'Warstein',
    'Data': [11.4]
  }, {
    'Name': 'Welver',
    'Data': [11.1]
  }, {
    'Name': 'Werl',
    'Data': [10.2]
  }, {
    'Name': 'Wickede (Ruhr)',
    'Data': [11.9]
  }, {
    'Name': 'Bergkamen',
    'Data': [11]
  }, {
    'Name': 'Bönen',
    'Data': [11.5]
  }, {
    'Name': 'Fröndenberg/Ruhr',
    'Data': [13.2]
  }, {
    'Name': 'Holzwickede',
    'Data': [11.1]
  }, {
    'Name': 'Kamen',
    'Data': [11.8]
  }, {
    'Name': 'Lünen',
    'Data': [12]
  }, {
    'Name': 'Schwerte',
    'Data': [11.4]
  }, {
    'Name': 'Selm',
    'Data': [10.9]
  }, {
    'Name': 'Unna',
    'Data': [10.7]
  }, {
    'Name': 'Werne',
    'Data': [12.6]
  } //alte Daten
];*/

var datenMigrationenGesamtKommunen = [
  {
    'Name':'Jahre',
    'Data': ['2007', '2009', '2011', '2013', '2015']
  },
  {
    'Name': 'Bottrop',
    'Data': [0.3, 0.5, 0.9, 1.6, 14.5]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [-3.2, -4.1, 0.6, 5.5, 13.9]
  }, {
    'Name': 'Münster',
    'Data': [2.3, 5.6, 39.9, 8.9, 22.9]
  }, {
    'Name': 'Ahaus',
    'Data': [2.1, 0.5, -0.4, 3.5, 7.7]
  }, {
    'Name': 'Bocholt',
    'Data': [-0.2, -0.4, -0.4, -1.2, 10]
  }, {
    'Name': 'Borken',
    'Data': [2, 0.5, -6.5, -0.8, 18.6]
  }, {
    'Name': 'Gescher',
    'Data': [1.5, -1.2, -3, -0.4, 14.5]
  }, {
    'Name': 'Gronau',
    'Data': [2.5, -1.8, 0.3, 8.3, 15.8]
  }, {
    'Name': 'Heek',
    'Data': [-5.5, -11.4, 1.9, -1.3, 6.9]
  }, {
    'Name': 'Heiden',
    'Data': [-0.1, -3.6, -4.1, 4.1, 6.6]
  }, {
    'Name': 'Isselburg',
    'Data': [0.9, -4.4, 0.3, -8.5, 5.9]
  }, {
    'Name': 'Legden',
    'Data': [-5.9, 5.5, -6.5, -1.2, 27.4]
  }, {
    'Name': 'Raesfeld',
    'Data': [-8.8, 1.5, -7.7, -3.7, 20.4]
  }, {
    'Name': 'Reken',
    'Data': [-1.5, -2.1, 1.3, 8.2, 12.3]
  }, {
    'Name': 'Rhede',
    'Data': [3.4, -0.5, -0.4, 1.3, 14.6]
  }, {
    'Name': 'Schöppingen',
    'Data': [21.8, -11.7, 33.5, 40.3, -17.6]
  }, {
    'Name': 'Stadtlohn',
    'Data': [-2, -1.8, -5.9, -2.2, 12.1]
  }, {
    'Name': 'Südlohn',
    'Data': [8.7, -2.7, 4.8, 4.7, 22.3]
  }, {
    'Name': 'Velen',
    'Data': [4.1, -5.8, -2, -1.9, 14.2]
  }, {
    'Name': 'Vreden',
    'Data': [1.5, -5.9, 1.2, 0.4, 8.3]
  }, {
    'Name': 'Ascheberg',
    'Data': [1.3, -0.1, -4.7, 0.9, 13.4]
  }, {
    'Name': 'Billerbeck',
    'Data': [8, -0.2, 0.3, 0.5, 15.9]
  }, {
    'Name': 'Coesfeld',
    'Data': [-0.7, -0.5, -1, 4.7, 5.5]
  }, {
    'Name': 'Dülmen',
    'Data': [-1.6, -3, -4.3, 0.1, 17.1]
  }, {
    'Name': 'Havixbeck',
    'Data': [-3.8, 2.3, 6.5, 4.6, 12.6]
  }, {
    'Name': 'Lüdinghausen',
    'Data': [-2.4, 2.6, 0.3, 7.6, 16.9]
  }, {
    'Name': 'Nordkirchen',
    'Data': [11.7, 4.4, -0.7, -11.9, 12.2]
  }, {
    'Name': 'Nottuln',
    'Data': [0.7, -1.7, -0.8, 0.5, 4.1]
  }, {
    'Name': 'Olfen',
    'Data': [1.8, 1.6, -1.6, 7.9, 18.6]
  }, {
    'Name': 'Rosendahl',
    'Data': [-3.7, -3.4, -9.1, -7.3, 6.4]
  }, {
    'Name': 'Senden',
    'Data': [0.9, -2.6, -6.1, 4.7, 11.9]
  }, {
    'Name': 'Castrop-Rauxel',
    'Data': [0.3, -1, 0.5, 1.8, 15.7]
  }, {
    'Name': 'Datteln',
    'Data': [-4.2, 2.1, 4.2, -0.3, 8.5]
  }, {
    'Name': 'Dorsten',
    'Data': [-4.5, -5.9, -3.4, -2.5, 3.9]
  }, {
    'Name': 'Gladbeck',
    'Data': [-1.6, 0.7, 4.3, 4.5, 22]
  }, {
    'Name': 'Haltern am See',
    'Data': [3.8, 0.8, -1.8, 4.7, 16.6]
  }, {
    'Name': 'Herten',
    'Data': [-4, -1.6, -3.1, -1.6, 12.6]
  }, {
    'Name': 'Marl',
    'Data': [-0.4, -1.9, 0.3, 0.5, 9.1]
  }, {
    'Name': 'Oer-Erkenschwick',
    'Data': [3.5, 10.8, -5.7, 5.3, 21.6]
  }, {
    'Name': 'Recklinghausen',
    'Data': [-4.1, -3.4, -0.7, 3.3, 5.5]
  }, {
    'Name': 'Waltrop',
    'Data': [1.5, 3.3, 0.2, 4.5, 18.1]
  }, {
    'Name': 'Altenberge',
    'Data': [-1.4, -1.4, -0.3, 3.5, 12.5]
  }, {
    'Name': 'Emsdetten',
    'Data': [3.3, -4, -2, 2.4, 15.5]
  }, {
    'Name': 'Greven',
    'Data': [4.4, 4.8, 3.4, 11.5, 22.1]
  }, {
    'Name': 'Hörstel',
    'Data': [-1.5, -1.9, -5.1, -4.8, 19.3]
  }, {
    'Name': 'Hopsten',
    'Data': [0.8, -5, -7.5, 4, 13.3]
  }, {
    'Name': 'Horstmar',
    'Data': [-8.2, -2.3, -5.4, -2.2, 21.3]
  }, {
    'Name': 'Ibbenbüren',
    'Data': [4.2, -1.2, -0.1, -0.2, 6.8]
  }, {
    'Name': 'Ladbergen',
    'Data': [-1.3, 1.9, 5.6, 11.6, 32]
  }, {
    'Name': 'Laer',
    'Data': [-4.4, -11.8, 0.6, 5.7, 8.9]
  }, {
    'Name': 'Lengerich',
    'Data': [5, 1.6, 1, 7.3, 21.2]
  }, {
    'Name': 'Lienen',
    'Data': [-3.2, -0.8, -1.8, -2.1, 10]
  }, {
    'Name': 'Lotte',
    'Data': [-2.9, 22.9, 5.2, 8.3, 12.5]
  }, {
    'Name': 'Metelen',
    'Data': [-1.6, -3.2, 1.7, 6.3, 8.8]
  }, {
    'Name': 'Mettingen',
    'Data': [-1.4, -1.5, -4.3, -3.9, 11.5]
  }, {
    'Name': 'Neuenkirchen',
    'Data': [1.4, -7.6, -3.9, -10.3, 12.9]
  }, {
    'Name': 'Nordwalde',
    'Data': [3.5, -6.5, -2.7, 0.5, 13.1]
  }, {
    'Name': 'Ochtrup',
    'Data': [-0.2, -1, -0.5, -1.2, 19]
  }, {
    'Name': 'Recke',
    'Data': [-0.4, -5.5, -10.6, -16.5, 11.4]
  }, {
    'Name': 'Rheine',
    'Data': [1.6, 2.3, 1, 3.4, 13.7]
  }, {
    'Name': 'Saerbeck',
    'Data': [9.7, -2.9, -8.5, -1.3, 16.4]
  }, {
    'Name': 'Steinfurt',
    'Data': [-0.4, -3.8, -3.1, -4.5, 14.5]
  }, {
    'Name': 'Tecklenburg',
    'Data': [2.9, -14.6, -7, -1.4, 32.2]
  }, {
    'Name': 'Westerkappeln',
    'Data': [2.6, -3.6, -4, 2.9, 22.2]
  }, {
    'Name': 'Wettringen',
    'Data': [2.9, -4.4, -5.5, 10.2, 16.8]
  }, {
    'Name': 'Ahlen',
    'Data': [-6.9, -5, -3.4, 2.4, 5.5]
  }, {
    'Name': 'Beckum',
    'Data': [-1.3, -2.2, -0.7, 0.6, 15.1]
  }, {
    'Name': 'Beelen',
    'Data': [-5.5, -6.2, -4, -9, 17.9]
  }, {
    'Name': 'Drensteinfurt',
    'Data': [7, -2.6, -0.5, 6.9, 16.9]
  }, {
    'Name': 'Ennigerloh',
    'Data': [-4.4, -8.7, -2.7, 0.6, 26.9]
  }, {
    'Name': 'Everswinkel',
    'Data': [-9.2, 6.9, -10.8, 8.3, 15.1]
  }, {
    'Name': 'Oelde',
    'Data': [3, -2.3, 0, 2.6, 17.1]
  }, {
    'Name': 'Ostbevern',
    'Data': [5.4, -4.7, -6.8, 1.3, 19.2]
  }, {
    'Name': 'Sassenberg',
    'Data': [-6.5, -0.9, -7, -0.8, 24.6]
  }, {
    'Name': 'Sendenhorst',
    'Data': [-2.6, 2.8, 0.9, 4.5, 23]
  }, {
    'Name': 'Telgte',
    'Data': [-8.1, 1.4, -1.6, 6.7, 17.6]
  }, {
    'Name': 'Wadersloh',
    'Data': [-6.4, -3.9, 4.3, -0.7, 27.2]
  }, {
    'Name': 'Warendorf',
    'Data': [-7.8, -1.4, -2, -2.7, 8.8]
  }, {
    'Name': 'Bielefeld',
    'Data': [-1.9, 0.2, 1.3, 3.2, 10.5]
  }, {
    'Name': 'Borgholzhausen',
    'Data': [-6, -1.8, -3.2, 1.5, 16.6]
  }, {
    'Name': 'Gütersloh',
    'Data': [1.7, 1.1, 3.9, 6.4, 15.7]
  }, {
    'Name': 'Halle (Westf.)',
    'Data': [-5.5, 1.2, 3.6, -0.2, 26.2]
  }, {
    'Name': 'Harsewinkel',
    'Data': [-6.4, -4.4, 1.3, -2.9, 21.1]
  }, {
    'Name': 'Herzebrock-Clarholz',
    'Data': [-3.9, -4.8, 0, -0.1, 1.1]
  }, {
    'Name': 'Langenberg',
    'Data': [4.5, -14.1, 6.2, 3.8, 21.5]
  }, {
    'Name': 'Rheda-Wiedenbrück',
    'Data': [2.4, 1.1, 4.4, 1.9, 18.6]
  }, {
    'Name': 'Rietberg',
    'Data': [-4.1, -0.8, -0.7, 3.9, 14.9]
  }, {
    'Name': 'Schloß Holte-Stukenbrock',
    'Data': [3.9, -0.8, -0.9, -1.4, 24.5]
  }, {
    'Name': 'Steinhagen',
    'Data': [-1, -3.2, 3.9, 6.9, 19.8]
  }, {
    'Name': 'Verl',
    'Data': [3.2, 2.2, 5.4, 1.3, 17.1]
  }, {
    'Name': 'Versmold',
    'Data': [6.7, -0.2, 1.3, 1.1, 16.5]
  }, {
    'Name': 'Werther (Westf.)',
    'Data': [0.9, -2.9, -1.7, 10.1, 10.8]
  }, {
    'Name': 'Bünde',
    'Data': [-1, 3.3, -2.8, 1.5, 13.2]
  }, {
    'Name': 'Enger',
    'Data': [1, 0.2, -1.7, -2, 13.6]
  }, {
    'Name': 'Herford',
    'Data': [0.1, -4.4, -2.6, 6.7, 16.7]
  }, {
    'Name': 'Hiddenhausen',
    'Data': [-2.6, -6, -0.8, 3.4, 12.4]
  }, {
    'Name': 'Kirchlengern',
    'Data': [-0.1, -4.1, -2.7, -5.5, 11.5]
  }, {
    'Name': 'Löhne',
    'Data': [-2.9, -4.2, 1.5, 6.1, 16.2]
  }, {
    'Name': 'Rödinghausen',
    'Data': [0.9, 0.7, -4.7, -4.4, 11]
  }, {
    'Name': 'Spenge',
    'Data': [-2.2, -3.1, -1.6, 1.5, 16.4]
  }, {
    'Name': 'Vlotho',
    'Data': [-0.4, -2.8, -5.3, 0.6, 11.7]
  }, {
    'Name': 'Bad Driburg',
    'Data': [1.1, -5.9, -3.5, 0.3, 14.2]
  }, {
    'Name': 'Beverungen',
    'Data': [-8, -5.1, -15.1, -6, 14.2]
  }, {
    'Name': 'Borgentreich',
    'Data': [-7, -11, -5.3, 5.2, 8.5]
  }, {
    'Name': 'Brakel',
    'Data': [-9.9, -6.2, -10, -7.2, 11.3]
  }, {
    'Name': 'Höxter',
    'Data': [-8.7, -3, 2.7, -5.4, 12.1]
  }, {
    'Name': 'Marienmünster',
    'Data': [1.3, -10.1, -9.6, -2.9, 8]
  }, {
    'Name': 'Nieheim',
    'Data': [-21.7, -0.6, -8.8, 24.4, 9]
  }, {
    'Name': 'Steinheim',
    'Data': [-7.7, -14.2, -8.8, -1.7, 15.2]
  }, {
    'Name': 'Warburg',
    'Data': [-4.7, 0, 0.3, 1.5, 18.2]
  }, {
    'Name': 'Willebadessen',
    'Data': [-11.2, -7.3, -8.3, -11.9, 8.3]
  }, {
    'Name': 'Augustdorf',
    'Data': [-7.7, -6.7, -5.8, -2.6, 15]
  }, {
    'Name': 'Bad Salzuflen',
    'Data': [3.3, 4.5, 5, 4.8, 26.5]
  }, {
    'Name': 'Barntrup',
    'Data': [-5, -7.9, -10.4, -4.6, 9.2]
  }, {
    'Name': 'Blomberg',
    'Data': [-9.3, -11.6, -9, -11.5, 11.8]
  }, {
    'Name': 'Detmold',
    'Data': [0.2, -2.7, 0.9, 0.7, 18.2]
  }, {
    'Name': 'Dörentrup',
    'Data': [-5.9, -5.2, -10.8, -4, 10.3]
  }, {
    'Name': 'Extertal',
    'Data': [-2.9, -8.1, -2.7, -10.1, 19.5]
  }, {
    'Name': 'Horn-Bad Meinberg',
    'Data': [-3.9, -5.8, 2.3, 4.8, 6]
  }, {
    'Name': 'Kalletal',
    'Data': [-11.2, -2.7, -12.9, -5.6, 14.4]
  }, {
    'Name': 'Lage',
    'Data': [-2.9, -7.1, -4, 1.8, 12.3]
  }, {
    'Name': 'Lemgo',
    'Data': [-0.1, -1.8, -2.3, 0.7, 16.9]
  }, {
    'Name': 'Leopoldshöhe',
    'Data': [4.2, 3.2, -1.5, 6.7, 19.5]
  }, {
    'Name': 'Lügde',
    'Data': [-7.1, -10, -14.4, -13.1, 17.7]
  }, {
    'Name': 'Oerlinghausen',
    'Data': [-8, -5.4, -2.2, -2.2, 64.1]
  }, {
    'Name': 'Schieder-Schwalenberg',
    'Data': [-8.1, -13.1, -5.1, -9.9, 13.7]
  }, {
    'Name': 'Schlangen',
    'Data': [-11.5, 0.3, 0.3, 3, 14.1]
  }, {
    'Name': 'Bad Oeynhausen',
    'Data': [2.6, -1.9, 0, 4, 17.5]
  }, {
    'Name': 'Espelkamp',
    'Data': [-10.5, -6.6, -6.2, 0.4, 8.5]
  }, {
    'Name': 'Hille',
    'Data': [2.1, -6, -6, -4.4, 10.8]
  }, {
    'Name': 'Hüllhorst',
    'Data': [-5, -7.8, -6.5, -4.5, 20]
  }, {
    'Name': 'Lübbecke',
    'Data': [-4.3, -3.1, -4.7, -0.3, 3.5]
  }, {
    'Name': 'Minden',
    'Data': [1.5, -1.9, 0.1, 4.3, 18.9]
  }, {
    'Name': 'Petershagen',
    'Data': [-3.6, -2, -6.3, -1.8, 17.1]
  }, {
    'Name': 'Porta Westfalica',
    'Data': [-6.6, 0.8, -2.9, 3.4, 9.2]
  }, {
    'Name': 'Preußisch Oldendorf',
    'Data': [-6, -5.7, -7.1, -1.8, 19.4]
  }, {
    'Name': 'Rahden',
    'Data': [0.9, -2.8, -0.6, 3.6, 19]
  }, {
    'Name': 'Stemwede',
    'Data': [-7.9, -4.9, -4.2, -3.9, 22.8]
  }, {
    'Name': 'Altenbeken',
    'Data': [-4.1, -4.3, -1.8, -0.8, 21.1]
  }, {
    'Name': 'Bad Lippspringe',
    'Data': [-2.7, 9.2, 15.2, 14.9, 18.6]
  }, {
    'Name': 'Borchen',
    'Data': [1.3, -7.3, -10.8, 5.4, 12.6]
  }, {
    'Name': 'Büren',
    'Data': [-11.2, -3.4, -7, -1.2, 12.1]
  }, {
    'Name': 'Delbrück',
    'Data': [0.1, -2.3, -2.5, 7.1, 23.2]
  }, {
    'Name': 'Hövelhof',
    'Data': [-1.4, 2.1, 9.4, 5.4, 6.7]
  }, {
    'Name': 'Lichtenau',
    'Data': [-4.4, -4.3, -9.4, 10.5, -1.1]
  }, {
    'Name': 'Paderborn',
    'Data': [-2.5, 1.3, 7.8, -1.1, 17.1]
  }, {
    'Name': 'Salzkotten',
    'Data': [0.3, -4.2, -0.2, -5.3, 18.3]
  }, {
    'Name': 'Wünnenberg',
    'Data': [0.1, -5.1, 1.7, 2.7, 11.6]
  }, {
    'Name': 'Bochum',
    'Data': [-1.9, -1.6, 2.6, 2.6, 11.9]
  }, {
    'Name': 'Dortmund',
    'Data': [1.9, -2, 4.5, 8.8, 11.1]
  }, {
    'Name': 'Hagen',
    'Data': [-6.1, -6.1, -0.6, 3.2, 15.9]
  }, {
    'Name': 'Hamm',
    'Data': [-1.2, -1.2, 5.2, 0.3, 18]
  }, {
    'Name': 'Herne',
    'Data': [-4.5, -2.5, 2.2, 5.1, 13.2]
  }, {
    'Name': 'Breckerfeld',
    'Data': [3.8, 6.7, -2.7, 1.2, 11.4]
  }, {
    'Name': 'Ennepetal',
    'Data': [-7.5, -6, -1.3, 2.2, 12.1]
  }, {
    'Name': 'Gevelsberg',
    'Data': [-2.3, -2.6, 0.8, 3.6, 12.8]
  }, {
    'Name': 'Hattingen',
    'Data': [2.7, -0.8, 2.9, 6.1, 12.6]
  }, {
    'Name': 'Herdecke',
    'Data': [-0.7, -2.6, -2, 1.2, 19.9]
  }, {
    'Name': 'Schwelm',
    'Data': [0, 0.3, -2.8, -0.6, 24.9]
  }, {
    'Name': 'Sprockhövel',
    'Data': [-4.3, 1.8, -2.2, -3.2, 11.6]
  }, {
    'Name': 'Wetter (Ruhr)',
    'Data': [0, -4.3, 2.1, -2.1, 18.6]
  }, {
    'Name': 'Witten',
    'Data': [-2.2, -0.9, 1, 0.1, 13.3]
  }, {
    'Name': 'Arnsberg',
    'Data': [0.3, -3.4, -2.3, -0.8, 7.7]
  }, {
    'Name': 'Bestwig',
    'Data': [-6.9, 1.1, -7.3, -5.5, -14.7]
  }, {
    'Name': 'Brilon',
    'Data': [-2.7, -1.6, -5.6, 0.2, 33.5]
  }, {
    'Name': 'Eslohe (Sauerland)',
    'Data': [-3.7, -1.2, -4.7, -3.4, 16.7]
  }, {
    'Name': 'Hallenberg',
    'Data': [-6.7, -0.2, 9.1, -5.5, 21.6]
  }, {
    'Name': 'Marsberg',
    'Data': [-5.9, -2.9, -9.3, -5.3, 15.7]
  }, {
    'Name': 'Medebach',
    'Data': [-7.6, -7, -7.7, 3.6, 21.2]
  }, {
    'Name': 'Meschede',
    'Data': [-2.7, -7.5, -3.2, -4, 9.3]
  }, {
    'Name': 'Olsberg',
    'Data': [-7.3, -8.1, -9.1, -2.7, 12.7]
  }, {
    'Name': 'Schmallenberg',
    'Data': [-4.5, -1.4, -3.9, -3.1, 17.3]
  }, {
    'Name': 'Sundern (Sauerland)',
    'Data': [-6, -6.3, -9, -2.1, 10.4]
  }, {
    'Name': 'Winterberg',
    'Data': [-6, -7.1, -1.5, -4.8, 13]
  }, {
    'Name': 'Altena',
    'Data': [-14.4, -18.4, -9, -8.4, 11.3]
  }, {
    'Name': 'Balve',
    'Data': [-2.6, -5.3, -7.1, -3.7, 12.5]
  }, {
    'Name': 'Halver',
    'Data': [-2.8, -5, -4.9, -2, 6.5]
  }, {
    'Name': 'Hemer',
    'Data': [-4.4, 0.3, 5.9, -21.8, -4.7]
  }, {
    'Name': 'Herscheid',
    'Data': [-5.5, -8.9, -4.9, 3.7, 11.6]
  }, {
    'Name': 'Iserlohn',
    'Data': [-1.7, 0.1, -0.9, -2.1, 9.7]
  }, {
    'Name': 'Kierspe',
    'Data': [-13.8, -12, -11.1, -0.7, 12.5]
  }, {
    'Name': 'Lüdenscheid',
    'Data': [-6.3, -5.9, -0.5, -1.3, 8.9]
  }, {
    'Name': 'Meinerzhagen',
    'Data': [-9.6, -9.4, -5.4, -4.5, 7.8]
  }, {
    'Name': 'Menden (Sauerland)',
    'Data': [-5.3, -6.6, -4.5, -6, 12.7]
  }, {
    'Name': 'Nachrodt-Wiblingwerde',
    'Data': [1.6, -2.1, -6.8, -8.3, 13.5]
  }, {
    'Name': 'Neuenrade',
    'Data': [-8.4, -5.6, -6.9, 2.8, 5.9]
  }, {
    'Name': 'Plettenberg',
    'Data': [-7.7, -8.5, -3.6, -5.8, 12.3]
  }, {
    'Name': 'Schalksmühle',
    'Data': [-2.3, -8.5, -7.7, -6.9, 11.4]
  }, {
    'Name': 'Werdohl',
    'Data': [-7.6, -11.9, -9.8, -9, 4.4]
  }, {
    'Name': 'Attendorn',
    'Data': [2.7, 0.1, 0.2, -0.8, 17.2]
  }, {
    'Name': 'Drolshagen',
    'Data': [-1.6, -1.2, 1.4, 8.8, 7.5]
  }, {
    'Name': 'Finnentrop',
    'Data': [-8.6, -12.3, -4.8, -0.8, 17.4]
  }, {
    'Name': 'Kirchhundem',
    'Data': [-5, -5.1, -1.6, -9, 15.9]
  }, {
    'Name': 'Lennestadt',
    'Data': [-1.3, -3, -4.6, -4.9, 14.3]
  }, {
    'Name': 'Olpe',
    'Data': [-1.1, -4.3, -1.7, -0.3, 5.3]
  }, {
    'Name': 'Wenden',
    'Data': [2.3, -5.1, 0.4, -1.5, 16]
  }, {
    'Name': 'Bad Berleburg',
    'Data': [-6.2, -1, -6.5, -6.2, 20.4]
  }, {
    'Name': 'Burbach',
    'Data': [-1.2, -9.5, -6.5, 1.5, 43]
  }, {
    'Name': 'Erndtebrück',
    'Data': [-3.6, -13, -4.7, 2.4, 8.6]
  }, {
    'Name': 'Freudenberg',
    'Data': [0.1, -7.1, -2.6, -0.7, 10]
  }, {
    'Name': 'Hilchenbach',
    'Data': [-5, -5.1, -2, -7.8, 20.6]
  }, {
    'Name': 'Kreuztal',
    'Data': [-2.8, -4.8, 3.1, 5, 14.5]
  }, {
    'Name': 'Bad Laasphe',
    'Data': [0.4, -5.7, -3.1, -0.4, 35.8]
  }, {
    'Name': 'Netphen',
    'Data': [-1.2, -2.2, -3.3, -4.9, 15.6]
  }, {
    'Name': 'Neunkirchen',
    'Data': [8.4, -8.7, -4, -0.6, 11.6]
  }, {
    'Name': 'Siegen',
    'Data': [-3.3, -1.3, 2.5, 4.4, 21.4]
  }, {
    'Name': 'Wilnsdorf',
    'Data': [-1.5, 0, -2.5, 1.6, 21.1]
  }, {
    'Name': 'Anröchte',
    'Data': [-2, -10.7, 0.8, -3.4, 23.5]
  }, {
    'Name': 'Bad Sassendorf',
    'Data': [10.5, 10.4, 8.4, 17.9, 31.8]
  }, {
    'Name': 'Ense',
    'Data': [-6, -0.5, -3.4, -2.1, 12.3]
  }, {
    'Name': 'Erwitte',
    'Data': [0.8, 1.3, 3.4, 2.6, 19.7]
  }, {
    'Name': 'Geseke',
    'Data': [10.1, -2.4, 4.2, 1.3, 25.9]
  }, {
    'Name': 'Lippetal',
    'Data': [-5, -6.7, -2.9, -7.1, 20]
  }, {
    'Name': 'Lippstadt',
    'Data': [-1.2, 1.8, 0.9, 6.1, 12.6]
  }, {
    'Name': 'Möhnesee',
    'Data': [0.4, 11.7, 1, 6.3, 68.6]
  }, {
    'Name': 'Rüthen',
    'Data': [-7, -4.2, -6.8, -5.8, 41.3]
  }, {
    'Name': 'Soest',
    'Data': [2.7, 2.2, 1.8, 3.4, 23.7]
  }, {
    'Name': 'Warstein',
    'Data': [-2.7, -10, -5.7, -4.4, 16.5]
  }, {
    'Name': 'Welver',
    'Data': [-6.2, -1, -4.9, -1.9, 15.3]
  }, {
    'Name': 'Werl',
    'Data': [1.6, -3.6, 13.7, -10, 29.6]
  }, {
    'Name': 'Wickede (Ruhr)',
    'Data': [-6.9, -4.4, -2.7, -5, 75.5]
  }, {
    'Name': 'Bergkamen',
    'Data': [-5.6, -0.3, -4.5, -3.3, -4.7]
  }, {
    'Name': 'Bönen',
    'Data': [-2.6, -3, -2.3, 3.2, 9.7]
  }, {
    'Name': 'Fröndenberg/Ruhr',
    'Data': [-7.1, -0.4, -2.4, 8.3, 21.4]
  }, {
    'Name': 'Holzwickede',
    'Data': [-5.1, 3.1, -0.4, 4.5, 24.7]
  }, {
    'Name': 'Kamen',
    'Data': [-4.9, -3.6, -0.3, -2.5, 20.8]
  }, {
    'Name': 'Lünen',
    'Data': [-4.6, -2.4, -1, 4.1, 16.2]
  }, {
    'Name': 'Schwerte',
    'Data': [0, -1.1, -2.2, 0.9, 14.1]
  }, {
    'Name': 'Selm',
    'Data': [-1.8, -3.3, -5.7, -0.7, 43.1]
  }, {
    'Name': 'Unna',
    'Data': [1.2, -7.5, -0.6, 1.2, 10.7]
  }, {
    'Name': 'Werne',
    'Data': [3.6, -3.6, 2.7, 0.8, 15.7]
  }
];

var datenMigrationenNichtdeutscheKommunen = [
  {
    'Name': 'Jahre',
    'Data': ['2007', '2009', '2011', '2013', '2015']
  }, {
    'Name': 'Bottrop',
    'Data': [1.1, -0.3, 2.4, 3.2, 14.2]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [1.5, 0.5, 3.8, 10.8, 18.6]
  }, {
    'Name': 'Münster',
    'Data': [0.4, 0.7, 5.2, 5.1, 13.3]
  }, {
    'Name': 'Ahaus',
    'Data': [2.5, 2.8, 3.5, 3.4, 12.3]
  }, {
    'Name': 'Bocholt',
    'Data': [1.2, 0.7, 2.4, 2.9, 13.7]
  }, {
    'Name': 'Borken',
    'Data': [3.9, 1.2, 0.6, 4.5, 17.1]
  }, {
    'Name': 'Gescher',
    'Data': [0.8, 1.5, -0.6, 1.4, 12.5]
  }, {
    'Name': 'Gronau',
    'Data': [5.9, 1.1, 5.7, 9.9, 21.8]
  }, {
    'Name': 'Heek',
    'Data': [-1.9, 0.5, 5.6, 9, 13.1]
  }, {
    'Name': 'Heiden',
    'Data': [0, -0.9, 1.1, 1.4, 16.3]
  }, {
    'Name': 'Isselburg',
    'Data': [2.8, 0.5, 4.9, 2, 10.1]
  }, {
    'Name': 'Legden',
    'Data': [5.6, 0.7, 4.3, 3.3, 21.5]
  }, {
    'Name': 'Raesfeld',
    'Data': [-0.1, 0.5, 0.1, -0.4, 14.4]
  }, {
    'Name': 'Reken',
    'Data': [-0.2, 0.1, 0.1, 1.8, 10.8]
  }, {
    'Name': 'Rhede',
    'Data': [0.8, 1.5, -0.6, 1, 13.7]
  }, {
    'Name': 'Schöppingen',
    'Data': [27.1, 0, 45.5, 47, -26.1]
  }, {
    'Name': 'Stadtlohn',
    'Data': [1.4, 0.6, 0.2, 5.3, 18]
  }, {
    'Name': 'Südlohn',
    'Data': [3.2, -0.7, 3.9, 3.5, 12.9]
  }, {
    'Name': 'Velen',
    'Data': [0.9, -0.9, 1.8, 2.6, 18.8]
  }, {
    'Name': 'Vreden',
    'Data': [2.6, -1.5, 4.9, 1.5, 12.1]
  }, {
    'Name': 'Ascheberg',
    'Data': [-0.5, -0.5, 0.8, 3.6, 14.6]
  }, {
    'Name': 'Billerbeck',
    'Data': [0.7, 3.6, 0.9, 2.5, 16.6]
  }, {
    'Name': 'Coesfeld',
    'Data': [-0.9, 0.9, 2.4, 5.4, 10.3]
  }, {
    'Name': 'Dülmen',
    'Data': [0.2, 0.3, 3.7, 1.9, 15.4]
  }, {
    'Name': 'Havixbeck',
    'Data': [0.4, 0.6, 1.1, 0.5, 16.5]
  }, {
    'Name': 'Lüdinghausen',
    'Data': [0.1, 0.7, 2.9, 4.4, 9.9]
  }, {
    'Name': 'Nordkirchen',
    'Data': [13.9, 10.3, -0.2, -6.4, 9.6]
  }, {
    'Name': 'Nottuln',
    'Data': [0.4, 2.7, 1.8, 3.1, 8.1]
  }, {
    'Name': 'Olfen',
    'Data': [-0.9, -1, 0.2, 2.1, 11.8]
  }, {
    'Name': 'Rosendahl',
    'Data': [-0.1, 2.7, 0.3, 2.8, 13.3]
  }, {
    'Name': 'Senden',
    'Data': [1, 1, 1.2, 4.1, 17.7]
  }, {
    'Name': 'Castrop-Rauxel',
    'Data': [0, 0.5, 2.3, 3.6, 15.1]
  }, {
    'Name': 'Datteln',
    'Data': [-1, 3.4, 3.2, 0.7, 8.9]
  }, {
    'Name': 'Dorsten',
    'Data': [-0.8, -0.4, 1.9, 2.2, 6]
  }, {
    'Name': 'Gladbeck',
    'Data': [0.7, 1, 3.6, 4.4, 21.3]
  }, {
    'Name': 'Haltern am See',
    'Data': [0, 0.8, 0, 2.6, 11.4]
  }, {
    'Name': 'Herten',
    'Data': [-1, -0.4, 1.4, 2.4, 13]
  }, {
    'Name': 'Marl',
    'Data': [-0.3, 0.4, 1.9, 2.9, 9.2]
  }, {
    'Name': 'Oer-Erkenschwick',
    'Data': [-0.7, 12.5, -0.7, 7, 20.1]
  }, {
    'Name': 'Recklinghausen',
    'Data': [-0.5, -3.1, 1.2, 4.1, 11.9]
  }, {
    'Name': 'Waltrop',
    'Data': [-0.6, 1.6, 1.9, 1.8, 14]
  }, {
    'Name': 'Altenberge',
    'Data': [-1, 0.2, 5, 3.8, 11.9]
  }, {
    'Name': 'Emsdetten',
    'Data': [0.7, -1.7, 1.3, 3.5, 16.7]
  }, {
    'Name': 'Greven',
    'Data': [0, 1.1, 3.2, 7.4, 20.4]
  }, {
    'Name': 'Hörstel',
    'Data': [0.8, -0.1, 0.1, -1.5, 18.3]
  }, {
    'Name': 'Hopsten',
    'Data': [-1.3, -0.4, 4.3, 0.9, 24.3]
  }, {
    'Name': 'Horstmar',
    'Data': [-3.8, 1.4, 1.4, 1.4, 16.9]
  }, {
    'Name': 'Ibbenbüren',
    'Data': [1.2, -0.8, 2.2, 0.8, 7.6]
  }, {
    'Name': 'Ladbergen',
    'Data': [3.3, -0.5, 2.2, 5.9, 35.7]
  }, {
    'Name': 'Laer',
    'Data': [-1.4, -7.3, 5.2, 5.1, 16.4]
  }, {
    'Name': 'Lengerich',
    'Data': [2.1, 0.3, 2.5, 7.4, 25.3]
  }, {
    'Name': 'Lienen',
    'Data': [2.5, 3.1, 1.5, 2.1, 19]
  }, {
    'Name': 'Lotte',
    'Data': [0.3, 9.3, 5.7, 9.5, 15.1]
  }, {
    'Name': 'Metelen',
    'Data': [-3.3, 1.3, 2, 5.5, 14.7]
  }, {
    'Name': 'Mettingen',
    'Data': [-0.4, 1.6, 1.8, 3, 14.5]
  }, {
    'Name': 'Neuenkirchen',
    'Data': [1.2, -1.5, 1.5, -5.7, 15.4]
  }, {
    'Name': 'Nordwalde',
    'Data': [-1.1, 1.7, 2.2, 1.5, 17.1]
  }, {
    'Name': 'Ochtrup',
    'Data': [1.3, 1.9, 3.6, 4.7, 22.3]
  }, {
    'Name': 'Recke',
    'Data': [-0.9, 0.6, 1, -12.5, 18.7]
  }, {
    'Name': 'Rheine',
    'Data': [2.1, 1.9, 4.6, 6.5, 14.5]
  }, {
    'Name': 'Saerbeck',
    'Data': [1.4, -0.6, 1.3, 3, 18.9]
  }, {
    'Name': 'Steinfurt',
    'Data': [1.8, -0.1, 0.6, 2.4, 16.8]
  }, {
    'Name': 'Tecklenburg',
    'Data': [1.6, -3.3, -0.3, -0.7, 27.9]
  }, {
    'Name': 'Westerkappeln',
    'Data': [1.4, -0.9, 0.6, 4.5, 20.4]
  }, {
    'Name': 'Wettringen',
    'Data': [2.1, -0.8, 2.2, 4, 13]
  }, {
    'Name': 'Ahlen',
    'Data': [-1, -0.6, 3.5, 4.7, 11.5]
  }, {
    'Name': 'Beckum',
    'Data': [1, -1, 4.4, 3, 18.2]
  }, {
    'Name': 'Beelen',
    'Data': [2.4, -0.2, 1.6, 0.3, 19.9]
  }, {
    'Name': 'Drensteinfurt',
    'Data': [0.5, -0.3, 1.1, 2.2, 16.3]
  }, {
    'Name': 'Ennigerloh',
    'Data': [0.3, -1.2, 2.6, 3.4, 27.1]
  }, {
    'Name': 'Everswinkel',
    'Data': [-0.3, 4, 3, 8, 21.3]
  }, {
    'Name': 'Oelde',
    'Data': [2.9, 1.3, 5.3, 6.8, 21.8]
  }, {
    'Name': 'Ostbevern',
    'Data': [1.7, -0.1, 1.1, 5.3, 24.8]
  }, {
    'Name': 'Sassenberg',
    'Data': [-2.2, -0.4, 1.9, 2.3, 24]
  }, {
    'Name': 'Sendenhorst',
    'Data': [0.2, 1.2, 4.7, 2.3, 22.9]
  }, {
    'Name': 'Telgte',
    'Data': [0.5, 2.6, 1.3, 4.9, 18.8]
  }, {
    'Name': 'Wadersloh',
    'Data': [-2.7, -1.5, 7.8, 0.1, 25.1]
  }, {
    'Name': 'Warendorf',
    'Data': [-5.9, 1.2, 0.7, 2, 10.3]
  }, {
    'Name': 'Bielefeld',
    'Data': [1.4, 2.1, 2.9, 4.1, 13.3]
  }, {
    'Name': 'Borgholzhausen',
    'Data': [-0.8, 0.7, 3.2, 2.5, 17]
  }, {
    'Name': 'Gütersloh',
    'Data': [2, 2.6, 5.1, 7.9, 15.9]
  }, {
    'Name': 'Halle (Westf.)',
    'Data': [-1.6, 0.3, 2.8, 1.7, 18.6]
  }, {
    'Name': 'Harsewinkel',
    'Data': [1, -0.1, 7.9, 2.1, 23.8]
  }, {
    'Name': 'Herzebrock-Clarholz',
    'Data': [-1, 2.1, 5.1, 7.2, 6.3]
  }, {
    'Name': 'Langenberg',
    'Data': [1.5, -3.8, 8.3, 6.6, 23]
  }, {
    'Name': 'Rheda-Wiedenbrück',
    'Data': [3.4, 3.7, 9.6, 5.9, 21.5]
  }, {
    'Name': 'Rietberg',
    'Data': [-0.9, -1.2, 0.8, 4.5, 20.3]
  }, {
    'Name': 'Schloß Holte-Stukenbrock',
    'Data': [-0.3, -1.8, 2.4, 1.6, 25.9]
  }, {
    'Name': 'Steinhagen',
    'Data': [0.7, -0.3, 0.9, 3, 20.2]
  }, {
    'Name': 'Verl',
    'Data': [-0.9, 0.1, 5.5, 1.1, 19.6]
  }, {
    'Name': 'Versmold',
    'Data': [1.4, -0.1, 6.1, 6, 20]
  }, {
    'Name': 'Werther (Westf.)',
    'Data': [-1.9, -2.4, 3.5, 5.9, 21.5]
  }, {
    'Name': 'Bünde',
    'Data': [0.1, 0.5, 1.3, 2.9, 14.4]
  }, {
    'Name': 'Enger',
    'Data': [0, -0.7, 3.6, 1.6, 14.3]
  }, {
    'Name': 'Herford',
    'Data': [-0.3, -0.4, 1.7, 5.8, 18.3]
  }, {
    'Name': 'Hiddenhausen',
    'Data': [0.3, -0.2, 1.1, 4.6, 18]
  }, {
    'Name': 'Kirchlengern',
    'Data': [0.3, -1, 1.2, 0.7, 15]
  }, {
    'Name': 'Löhne',
    'Data': [0, 0, 1.4, 4.8, 17.7]
  }, {
    'Name': 'Rödinghausen',
    'Data': [-0.7, 0.2, 1, 0.2, 8.9]
  }, {
    'Name': 'Spenge',
    'Data': [-0.4, -1.5, 2.6, 3.4, 18.9]
  }, {
    'Name': 'Vlotho',
    'Data': [-0.4, 0.3, 1.9, 7.7, 15.8]
  }, {
    'Name': 'Bad Driburg',
    'Data': [-0.8, -0.3, 1.2, 4.3, 14.2]
  }, {
    'Name': 'Beverungen',
    'Data': [1.6, -0.2, 0.9, 2.4, 17.2]
  }, {
    'Name': 'Borgentreich',
    'Data': [0.6, 0.4, 0.7, 1.9, 15]
  }, {
    'Name': 'Brakel',
    'Data': [-0.2, 0, 1, 1.3, 17.4]
  }, {
    'Name': 'Höxter',
    'Data': [-2.1, 0.4, 4.5, 2.9, 17.9]
  }, {
    'Name': 'Marienmünster',
    'Data': [-0.9, -0.2, 2.4, 0.4, 11.9]
  }, {
    'Name': 'Nieheim',
    'Data': [-1.3, 1.5, 0.6, 39.2, 13.6]
  }, {
    'Name': 'Steinheim',
    'Data': [-1.4, -1.2, 0.4, 2.9, 18.7]
  }, {
    'Name': 'Warburg',
    'Data': [-1.2, 0.4, 0.8, 2.7, 20.1]
  }, {
    'Name': 'Willebadessen',
    'Data': [-0.7, -0.2, 1, -1.2, 20.2]
  }, {
    'Name': 'Augustdorf',
    'Data': [0.2, 2, -0.7, 3.6, 25.8]
  }, {
    'Name': 'Bad Salzuflen',
    'Data': [0.3, 1.7, 3.6, 4.6, 23.1]
  }, {
    'Name': 'Barntrup',
    'Data': [-1.9, -1.1, 1.7, 2, 17.5]
  }, {
    'Name': 'Blomberg',
    'Data': [-1.6, -0.9, 0.4, 1.6, 16.9]
  }, {
    'Name': 'Detmold',
    'Data': [0.9, 0.8, 2.5, 3.5, 23.4]
  }, {
    'Name': 'Dörentrup',
    'Data': [0.1, 0.7, 0.6, 1.2, 14.8]
  }, {
    'Name': 'Extertal',
    'Data': [-0.2, -1.3, 0.7, 0.3, 16.3]
  }, {
    'Name': 'Horn-Bad Meinberg',
    'Data': [-0.9, -0.2, 0.9, 4.8, 6.1]
  }, {
    'Name': 'Kalletal',
    'Data': [-0.7, 1, 1.8, 1.9, 17.3]
  }, {
    'Name': 'Lage',
    'Data': [0.9, -2.2, 0.6, 3.3, 14.9]
  }, {
    'Name': 'Lemgo',
    'Data': [0.8, -0.2, 0.4, 3, 16.4]
  }, {
    'Name': 'Leopoldshöhe',
    'Data': [0.9, 0.9, 0.3, 3.6, 16.9]
  }, {
    'Name': 'Lügde',
    'Data': [-0.6, -1.4, -2, -1, 17.5]
  }, {
    'Name': 'Oerlinghausen',
    'Data': [-1.2, -1.1, 1.1, -1.3, 57.7]
  }, {
    'Name': 'Schieder-Schwalenberg',
    'Data': [0.2, -0.4, 0.6, 0, 17.9]
  }, {
    'Name': 'Schlangen',
    'Data': [-0.7, 0.3, 0.6, 2.8, 15.4]
  }, {
    'Name': 'Bad Oeynhausen',
    'Data': [1.7, -0.1, 3.4, 5.2, 18]
  }, {
    'Name': 'Espelkamp',
    'Data': [-0.3, 0.5, 1.4, 4.4, 17.3]
  }, {
    'Name': 'Hille',
    'Data': [4.9, -0.3, 2.4, 1.4, 17.4]
  }, {
    'Name': 'Hüllhorst',
    'Data': [-1, -0.7, 2.1, 1.5, 16]
  }, {
    'Name': 'Lübbecke',
    'Data': [-0.6, 0.2, 1.5, 5.7, 6.1]
  }, {
    'Name': 'Minden',
    'Data': [3.6, 1.3, 2.1, 5.1, 22.1]
  }, {
    'Name': 'Petershagen',
    'Data': [0, 0.6, 0.9, 2.3, 20.3]
  }, {
    'Name': 'Porta Westfalica',
    'Data': [-0.3, 0.7, 1.5, 4.4, 10]
  }, {
    'Name': 'Preußisch Oldendorf',
    'Data': [-1.3, 2.2, 1.7, 2.2, 21.3]
  }, {
    'Name': 'Rahden',
    'Data': [1.7, 0.4, 1.1, 4.2, 18.7]
  }, {
    'Name': 'Stemwede',
    'Data': [-1, -0.3, 1.4, 1.3, 18.6]
  }, {
    'Name': 'Altenbeken',
    'Data': [-0.4, 1.8, 0.1, 1.5, 21.3]
  }, {
    'Name': 'Bad Lippspringe',
    'Data': [-0.7, -0.6, 6.2, 5.9, 12.7]
  }, {
    'Name': 'Borchen',
    'Data': [0.1, -1.3, -1, 3.3, 16.6]
  }, {
    'Name': 'Büren',
    'Data': [-0.4, 1.6, 2.5, 7.2, 22]
  }, {
    'Name': 'Delbrück',
    'Data': [0.2, 0.6, 3.7, 6.6, 22.8]
  }, {
    'Name': 'Hövelhof',
    'Data': [0.1, 1.4, 8.5, 2.3, 6.5]
  }, {
    'Name': 'Lichtenau',
    'Data': [0.4, 0.7, 0.7, 9.4, 6.7]
  }, {
    'Name': 'Paderborn',
    'Data': [-1.2, 1.6, 4.8, 3.4, 15.4]
  }, {
    'Name': 'Salzkotten',
    'Data': [0.4, -1.4, 1.3, 0.3, 19.3]
  }, {
    'Name': 'Wünnenberg',
    'Data': [0.1, 1.2, 3.1, 5.3, 13.6]
  }, {
    'Name': 'Bochum',
    'Data': [1, 0.6, 4, 4.3, 15]
  }, {
    'Name': 'Dortmund',
    'Data': [3.9, -0.5, 4, 7.4, 13]
  }, {
    'Name': 'Hagen',
    'Data': [-0.9, -0.4, 3, 6.2, 22.6]
  }, {
    'Name': 'Hamm',
    'Data': [1.1, 0.9, 7.2, 2.5, 20.1]
  }, {
    'Name': 'Herne',
    'Data': [-0.6, 0.6, 4.5, 6.6, 14.5]
  }, {
    'Name': 'Breckerfeld',
    'Data': [0, 1.4, -0.8, -0.3, 14.5]
  }, {
    'Name': 'Ennepetal',
    'Data': [-1.2, -1.7, 0, 3.3, 10.9]
  }, {
    'Name': 'Gevelsberg',
    'Data': [-2.4, -1.3, 2.9, 4.7, 17.4]
  }, {
    'Name': 'Hattingen',
    'Data': [1.4, -0.2, 1.9, 3, 12.1]
  }, {
    'Name': 'Herdecke',
    'Data': [-0.6, 0.2, 2, 1.6, 17.7]
  }, {
    'Name': 'Schwelm',
    'Data': [-0.2, -0.8, -0.1, 0.9, 17.7]
  }, {
    'Name': 'Sprockhövel',
    'Data': [0, 0.4, 2.1, 1.4, 11.8]
  }, {
    'Name': 'Wetter (Ruhr)',
    'Data': [-1.2, -1.3, -0.6, 0.8, 16.9]
  }, {
    'Name': 'Witten',
    'Data': [1, -0.3, 2.1, 3, 13.9]
  }, {
    'Name': 'Arnsberg',
    'Data': [0.8, -0.4, 1.9, 2.8, 10.6]
  }, {
    'Name': 'Bestwig',
    'Data': [4.7, 4.6, -5, 4.2, -9.3]
  }, {
    'Name': 'Brilon',
    'Data': [-0.9, -0.5, 2.5, 2.5, 36.2]
  }, {
    'Name': 'Eslohe (Sauerland)',
    'Data': [0.7, 0.3, -0.7, 1.6, 20.1]
  }, {
    'Name': 'Hallenberg',
    'Data': [-1.8, 1.4, 3.3, 3.4, 28]
  }, {
    'Name': 'Marsberg',
    'Data': [-0.2, 0.2, -0.4, 1.5, 17.9]
  }, {
    'Name': 'Medebach',
    'Data': [-1, -0.6, 1.6, 4.1, 17.4]
  }, {
    'Name': 'Meschede',
    'Data': [-0.9, -2.5, 1.5, 2.4, 9.9]
  }, {
    'Name': 'Olsberg',
    'Data': [-1.2, 0.1, 1.3, 2.2, 15.9]
  }, {
    'Name': 'Schmallenberg',
    'Data': [1.5, -0.5, 3.7, 0.4, 20.2]
  }, {
    'Name': 'Sundern (Sauerland)',
    'Data': [-0.4, -0.7, 0.5, 3.9, 12.8]
  }, {
    'Name': 'Winterberg',
    'Data': [0.4, 0.1, 3.1, 2.8, 18.6]
  }, {
    'Name': 'Altena',
    'Data': [-1.4, -3.7, 1.2, 0.2, 18.7]
  }, {
    'Name': 'Balve',
    'Data': [0.6, -1.3, 0.7, 2.7, 17.8]
  }, {
    'Name': 'Halver',
    'Data': [-0.3, -1.4, 3, 3, 8.3]
  }, {
    'Name': 'Hemer',
    'Data': [0.6, 5.3, 9.9, -15.7, -5.6]
  }, {
    'Name': 'Herscheid',
    'Data': [1.1, -1.2, -0.8, 0.3, 16.9]
  }, {
    'Name': 'Iserlohn',
    'Data': [0.3, -0.1, 1.9, 2.6, 15]
  }, {
    'Name': 'Kierspe',
    'Data': [-1.1, 0.1, -0.4, 2.9, 17.5]
  }, {
    'Name': 'Lüdenscheid',
    'Data': [-0.4, -1, 3.2, 5.1, 14.6]
  }, {
    'Name': 'Meinerzhagen',
    'Data': [-0.5, -0.2, 0, 1.7, 12.9]
  }, {
    'Name': 'Menden (Sauerland)',
    'Data': [-1.3, -1.2, 1.9, 2, 17.5]
  }, {
    'Name': 'Nachrodt-Wiblingwerde',
    'Data': [3.9, -2.1, 0.5, 0.2, 13.4]
  }, {
    'Name': 'Neuenrade',
    'Data': [3.3, -0.7, 1.3, 2.3, 12.9]
  }, {
    'Name': 'Plettenberg',
    'Data': [-2, -2.9, 3.2, 2, 19.6]
  }, {
    'Name': 'Schalksmühle',
    'Data': [-1.5, -4.3, 1.2, 5.2, 16.2]
  }, {
    'Name': 'Werdohl',
    'Data': [-1.5, -2.1, 1.6, 1.8, 15.2]
  }, {
    'Name': 'Attendorn',
    'Data': [-1, -0.5, 3.6, 4, 20.6]
  }, {
    'Name': 'Drolshagen',
    'Data': [-1.8, -1.4, 2.5, 4.6, 9.9]
  }, {
    'Name': 'Finnentrop',
    'Data': [0.3, -2.5, 0.2, 5.4, 25.2]
  }, {
    'Name': 'Kirchhundem',
    'Data': [-1.3, 1.2, 3.7, 2.3, 19.9]
  }, {
    'Name': 'Lennestadt',
    'Data': [3.1, 0.7, 2.5, 2.6, 18.2]
  }, {
    'Name': 'Olpe',
    'Data': [0.2, 0.7, 3.7, 2.2, 10.8]
  }, {
    'Name': 'Wenden',
    'Data': [0.2, -0.3, 2, 1.4, 16.9]
  }, {
    'Name': 'Bad Berleburg',
    'Data': [-0.6, -0.7, 0.1, 1.5, 23.3]
  }, {
    'Name': 'Burbach',
    'Data': [1, -1.4, -0.5, 3.3, 49.7]
  }, {
    'Name': 'Erndtebrück',
    'Data': [0.7, -0.8, 1.1, 5.7, 19.7]
  }, {
    'Name': 'Freudenberg',
    'Data': [-0.1, -1.6, -0.1, 2, 15.7]
  }, {
    'Name': 'Hilchenbach',
    'Data': [0.9, -2.9, 1, 1.8, 20.1]
  }, {
    'Name': 'Kreuztal',
    'Data': [3.1, 2.9, 5.9, 6.1, 19.6]
  }, {
    'Name': 'Bad Laasphe',
    'Data': [1.3, -1.8, 3.1, 3.1, 37.5]
  }, {
    'Name': 'Netphen',
    'Data': [0.2, -0.3, 1.5, 3.5, 21.2]
  }, {
    'Name': 'Neunkirchen',
    'Data': [5.5, -6.4, 2.4, 3.2, 20.3]
  }, {
    'Name': 'Siegen',
    'Data': [0.9, 1.7, 4.1, 4.7, 19.2]
  }, {
    'Name': 'Wilnsdorf',
    'Data': [-0.6, 1.2, 0.7, 3.2, 18.1]
  }, {
    'Name': 'Anröchte',
    'Data': [0.8, -0.5, 2.6, 2.2, 25.2]
  }, {
    'Name': 'Bad Sassendorf',
    'Data': [0.3, 0.3, 3.4, 5, 21.1]
  }, {
    'Name': 'Ense',
    'Data': [-0.7, 0.9, -0.9, 2.6, 16.6]
  }, {
    'Name': 'Erwitte',
    'Data': [0.6, 2.2, 1.7, 2.1, 20.3]
  }, {
    'Name': 'Geseke',
    'Data': [2.9, -0.2, 0.2, 2.3, 21.8]
  }, {
    'Name': 'Lippetal',
    'Data': [-0.6, -0.3, 2.7, 0.8, 20.2]
  }, {
    'Name': 'Lippstadt',
    'Data': [-1.4, -0.6, 3.2, 4.5, 13.1]
  }, {
    'Name': 'Möhnesee',
    'Data': [0.4, 1.7, -1.5, 2, 64.6]
  }, {
    'Name': 'Rüthen',
    'Data': [-0.7, 0.2, 0.6, 5.4, 39.7]
  }, {
    'Name': 'Soest',
    'Data': [0.7, 1.3, 3.5, 5.1, 20.6]
  }, {
    'Name': 'Warstein',
    'Data': [0, -0.4, 1.7, 3.1, 22.1]
  }, {
    'Name': 'Welver',
    'Data': [1, 1.5, -1.2, 1.1, 18.9]
  }, {
    'Name': 'Werl',
    'Data': [-0.5, 0.6, 16.7, -5, 18.7]
  }, {
    'Name': 'Wickede (Ruhr)',
    'Data': [-2, 0.5, 1, -0.7, 48.3]
  }, {
    'Name': 'Bergkamen',
    'Data': [0.2, 0.8, 0.1, 1, 7.8]
  }, {
    'Name': 'Bönen',
    'Data': [1.5, 0.6, 1.7, 1.2, 10.2]
  }, {
    'Name': 'Fröndenberg/Ruhr',
    'Data': [-1.6, -1.2, 0, 3.5, 18.2]
  }, {
    'Name': 'Holzwickede',
    'Data': [-0.3, 0.5, 1.6, 2.8, 20.8]
  }, {
    'Name': 'Kamen',
    'Data': [0.5, 0, 2.9, 0.9, 19.1]
  }, {
    'Name': 'Lünen',
    'Data': [-0.9, 0, 1.3, 3.3, 15.6]
  }, {
    'Name': 'Schwerte',
    'Data': [0, -1.6, 1.5, 2.6, 16.4]
  }, {
    'Name': 'Selm',
    'Data': [-1.3, 1.3, 0.2, 1.6, 45.8]
  }, {
    'Name': 'Unna',
    'Data': [1.2, -3.2, 2.1, 3.2, 11.3]
  }, {
    'Name': 'Werne',
    'Data': [0.4, -1.7, 1.9, 0.5, 10.2]
  }

];

/*var datenMigrationenNichtdeutscheKommunen = [
  {
    'Name': 'Jahre',
    'Data': ['2010 - 2013']
  }, {
    'Name': 'Bottrop',
    'Data': [2.4]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [5.9]
  }, {
    'Name': 'Münster',
    'Data': [4.5]
  }, {
    'Name': 'Ahaus',
    'Data': [3.4]
  }, {
    'Name': 'Bocholt',
    'Data': [2]
  }, {
    'Name': 'Borken',
    'Data': [2.1]
  }, {
    'Name': 'Gescher',
    'Data': [1]
  }, {
    'Name': 'Gronau',
    'Data': [6.4]
  }, {
    'Name': 'Heek',
    'Data': [4.5]
  }, {
    'Name': 'Heiden',
    'Data': [0.2]
  }, {
    'Name': 'Isselburg',
    'Data': [1.9]
  }, {
    'Name': 'Legden',
    'Data': [6]
  }, {
    'Name': 'Raesfeld',
    'Data': [1.2]
  }, {
    'Name': 'Reken',
    'Data': [0.7]
  }, {
    'Name': 'Rhede',
    'Data': [0.8]
  }, {
    'Name': 'Schöppingen',
    'Data': [28.3]
  }, {
    'Name': 'Stadtlohn',
    'Data': [3.2]
  }, {
    'Name': 'Südlohn',
    'Data': [3]
  }, {
    'Name': 'Velen',
    'Data': [1.8]
  }, {
    'Name': 'Vreden',
    'Data': [2.5]
  }, {
    'Name': 'Ascheberg',
    'Data': [1.9]
  }, {
    'Name': 'Billerbeck',
    'Data': [1.5]
  }, {
    'Name': 'Coesfeld',
    'Data': [3]
  }, {
    'Name': 'Dülmen',
    'Data': [2.1]
  }, {
    'Name': 'Havixbeck',
    'Data': [1.1]
  }, {
    'Name': 'Lüdinghausen',
    'Data': [2.5]
  }, {
    'Name': 'Nordkirchen',
    'Data': [-10.7]
  }, {
    'Name': 'Nottuln',
    'Data': [2]
  }, {
    'Name': 'Olfen',
    'Data': [0.7]
  }, {
    'Name': 'Rosendahl',
    'Data': [7.1]
  }, {
    'Name': 'Senden',
    'Data': [2.5]
  }, {
    'Name': 'Castrop-Rauxel',
    'Data': [2.4]
  }, {
    'Name': 'Datteln',
    'Data': [1.8]
  }, {
    'Name': 'Dorsten',
    'Data': [1.7]
  }, {
    'Name': 'Gladbeck',
    'Data': [3.1]
  }, {
    'Name': 'Haltern am See',
    'Data': [1.5]
  }, {
    'Name': 'Herten',
    'Data': [1.5]
  }, {
    'Name': 'Marl',
    'Data': [1.4]
  }, {
    'Name': 'Oer-Erkenschwick',
    'Data': [4]
  }, {
    'Name': 'Recklinghausen',
    'Data': [2]
  }, {
    'Name': 'Waltrop',
    'Data': [1.6]
  }, {
    'Name': 'Altenberge',
    'Data': [3.2]
  }, {
    'Name': 'Emsdetten',
    'Data': [3.4]
  }, {
    'Name': 'Greven',
    'Data': [3.9]
  }, {
    'Name': 'Hörstel',
    'Data': [0.7]
  }, {
    'Name': 'Hopsten',
    'Data': [1.7]
  }, {
    'Name': 'Horstmar',
    'Data': [0.8]
  }, {
    'Name': 'Ibbenbüren',
    'Data': [1.8]
  }, {
    'Name': 'Ladbergen',
    'Data': [2.8]
  }, {
    'Name': 'Laer',
    'Data': [4.1]
  }, {
    'Name': 'Lengerich',
    'Data': [4.2]
  }, {
    'Name': 'Lienen',
    'Data': [1.4]
  }, {
    'Name': 'Lotte',
    'Data': [7.2]
  }, {
    'Name': 'Metelen',
    'Data': [2.5]
  }, {
    'Name': 'Mettingen',
    'Data': [1.3]
  }, {
    'Name': 'Neuenkirchen',
    'Data': [-1.6]
  }, {
    'Name': 'Nordwalde',
    'Data': [2.9]
  }, {
    'Name': 'Ochtrup',
    'Data': [3.5]
  }, {
    'Name': 'Recke',
    'Data': [-2]
  }, {
    'Name': 'Rheine',
    'Data': [4.1]
  }, {
    'Name': 'Saerbeck',
    'Data': [1.7]
  }, {
    'Name': 'Steinfurt',
    'Data': [1.6]
  }, {
    'Name': 'Tecklenburg',
    'Data': [2.5]
  }, {
    'Name': 'Westerkappeln',
    'Data': [2.2]
  }, {
    'Name': 'Wettringen',
    'Data': [3.4]
  }, {
    'Name': 'Ahlen',
    'Data': [3.6]
  }, {
    'Name': 'Beckum',
    'Data': [4]
  }, {
    'Name': 'Beelen',
    'Data': [3.5]
  }, {
    'Name': 'Drensteinfurt',
    'Data': [1]
  }, {
    'Name': 'Ennigerloh',
    'Data': [2.1]
  }, {
    'Name': 'Everswinkel',
    'Data': [4.6]
  }, {
    'Name': 'Oelde',
    'Data': [5.1]
  }, {
    'Name': 'Ostbevern',
    'Data': [2.2]
  }, {
    'Name': 'Sassenberg',
    'Data': [3.1]
  }, {
    'Name': 'Sendenhorst',
    'Data': [1.9]
  }, {
    'Name': 'Telgte',
    'Data': [2.3]
  }, {
    'Name': 'Wadersloh',
    'Data': [3.8]
  }, {
    'Name': 'Warendorf',
    'Data': [1.8]
  }, {
    'Name': 'Bielefeld',
    'Data': [3.7]
  }, {
    'Name': 'Borgholzhausen',
    'Data': [2.8]
  }, {
    'Name': 'Gütersloh',
    'Data': [6]
  }, {
    'Name': 'Halle (Westf.)',
    'Data': [3]
  }, {
    'Name': 'Harsewinkel',
    'Data': [4.8]
  }, {
    'Name': 'Herzebrock-Clarholz',
    'Data': [7.6]
  }, {
    'Name': 'Langenberg',
    'Data': [5.5]
  }, {
    'Name': 'Rheda-Wiedenbrück',
    'Data': [8.8]
  }, {
    'Name': 'Rietberg',
    'Data': [3.6]
  }, {
    'Name': 'Schloß Holte-Stukenbrock',
    'Data': [1.8]
  }, {
    'Name': 'Steinhagen',
    'Data': [2.3]
  }, {
    'Name': 'Verl',
    'Data': [2.5]
  }, {
    'Name': 'Versmold',
    'Data': [4.8]
  }, {
    'Name': 'Werther (Westf.)',
    'Data': [3.7]
  }, {
    'Name': 'Bünde',
    'Data': [1.7]
  }, {
    'Name': 'Enger',
    'Data': [2.5]
  }, {
    'Name': 'Herford',
    'Data': [3.5]
  }, {
    'Name': 'Hiddenhausen',
    'Data': [1.9]
  }, {
    'Name': 'Kirchlengern',
    'Data': [1.2]
  }, {
    'Name': 'Löhne',
    'Data': [2.4]
  }, {
    'Name': 'Rödinghausen',
    'Data': [0.3]
  }, {
    'Name': 'Spenge',
    'Data': [1.4]
  }, {
    'Name': 'Vlotho',
    'Data': [3.3]
  }, {
    'Name': 'Bad Driburg',
    'Data': [2]
  }, {
    'Name': 'Beverungen',
    'Data': [1.]
  }, {
    'Name': 'Borgentreich',
    'Data': [1.3]
  }, {
    'Name': 'Brakel',
    'Data': [0.7]
  }, {
    'Name': 'Höxter',
    'Data': [1.5]
  }, {
    'Name': 'Marienmünster',
    'Data': [0.3]
  }, {
    'Name': 'Nieheim',
    'Data': [10.4]
  }, {
    'Name': 'Steinheim',
    'Data': [1]
  }, {
    'Name': 'Warburg',
    'Data': [1.6]
  }, {
    'Name': 'Willebadessen',
    'Data': [0.7]
  }, {
    'Name': 'Augustdorf',
    'Data': [1.2]
  }, {
    'Name': 'Bad Salzuflen',
    'Data': [3.3]
  }, {
    'Name': 'Barntrup',
    'Data': [1.1]
  }, {
    'Name': 'Blomberg',
    'Data': [1.4]
  }, {
    'Name': 'Detmold',
    'Data': [2.8]
  }, {
    'Name': 'Dörentrup',
    'Data': [1]
  }, {
    'Name': 'Extertal',
    'Data': [1]
  }, {
    'Name': 'Horn-Bad Meinberg',
    'Data': [1.4]
  }, {
    'Name': 'Kalletal',
    'Data': [1.2]
  }, {
    'Name': 'Lage',
    'Data': [2]
  }, {
    'Name': 'Lemgo',
    'Data': [1]
  }, {
    'Name': 'Leopoldshöhe',
    'Data': [1.2]
  }, {
    'Name': 'Lügde',
    'Data': [-0.4]
  }, {
    'Name': 'Oerlinghausen',
    'Data': [0.5]
  }, {
    'Name': 'Schieder-Schwalenberg',
    'Data': [0.1]
  }, {
    'Name': 'Schlangen',
    'Data': [1]
  }, {
    'Name': 'Bad Oeynhausen',
    'Data': [4.1]
  }, {
    'Name': 'Espelkamp',
    'Data': [2.7]
  }, {
    'Name': 'Hille',
    'Data': [1.3]
  }, {
    'Name': 'Hüllhorst',
    'Data': [1.2]
  }, {
    'Name': 'Lübbecke',
    'Data': [3.9]
  }, {
    'Name': 'Minden',
    'Data': [3.2]
  }, {
    'Name': 'Petershagen',
    'Data': [1]
  }, {
    'Name': 'Porta Westfalica',
    'Data': [1.8]
  }, {
    'Name': 'Preußisch Oldendorf',
    'Data': [1.4]
  }, {
    'Name': 'Rahden',
    'Data': [2.1]
  }, {
    'Name': 'Stemwede',
    'Data': [1]
  }, {
    'Name': 'Altenbeken',
    'Data': [0.3]
  }, {
    'Name': 'Bad Lippspringe',
    'Data': [5]
  }, {
    'Name': 'Borchen',
    'Data': [1.2]
  }, {
    'Name': 'Büren',
    'Data': [2.9]
  }, {
    'Name': 'Delbrück',
    'Data': [3.9]
  }, {
    'Name': 'Hövelhof',
    'Data': [2.7]
  }, {
    'Name': 'Lichtenau',
    'Data': [3.2]
  }, {
    'Name': 'Paderborn',
    'Data': [3.5]
  }, {
    'Name': 'Salzkotten',
    'Data': [1.5]
  }, {
    'Name': 'Wünnenberg',
    'Data': [5.4]
  }, {
    'Name': 'Bochum',
    'Data': [3.6]
  }, {
    'Name': 'Dortmund',
    'Data': [4.5]
  }, {
    'Name': 'Hagen',
    'Data': [3.4]
  }, {
    'Name': 'Hamm',
    'Data': [4.7]
  }, {
    'Name': 'Herne',
    'Data': [4.5]
  }, {
    'Name': 'Breckerfeld',
    'Data': [0.1]
  }, {
    'Name': 'Ennepetal',
    'Data': [1.1]
  }, {
    'Name': 'Gevelsberg',
    'Data': [3.2]
  }, {
    'Name': 'Hattingen',
    'Data': [1.9]
  }, {
    'Name': 'Herdecke',
    'Data': [1.2]
  }, {
    'Name': 'Schwelm',
    'Data': [1.3]
  }, {
    'Name': 'Sprockhövel',
    'Data': [0.9]
  }, {
    'Name': 'Wetter (Ruhr)',
    'Data': [0.4]
  }, {
    'Name': 'Witten',
    'Data': [2.4]
  }, {
    'Name': 'Arnsberg',
    'Data': [2.2]
  }, {
    'Name': 'Bestwig',
    'Data': [1.6]
  }, {
    'Name': 'Brilon',
    'Data': [2.3]
  }, {
    'Name': 'Eslohe (Sauerland)',
    'Data': [0.6]
  }, {
    'Name': 'Hallenberg',
    'Data': [2.2]
  }, {
    'Name': 'Marsberg',
    'Data': [0.7]
  }, {
    'Name': 'Medebach',
    'Data': [2.9]
  }, {
    'Name': 'Meschede',
    'Data': [0.7]
  }, {
    'Name': 'Olsberg',
    'Data': [1.2]
  }, {
    'Name': 'Schmallenberg',
    'Data': [1]
  }, {
    'Name': 'Sundern (Sauerland)',
    'Data': [1.7]
  }, {
    'Name': 'Winterberg',
    'Data': [3.4]
  }, {
    'Name': 'Altena',
    'Data': [-0.8]
  }, {
    'Name': 'Balve',
    'Data': [1.3]
  }, {
    'Name': 'Halver',
    'Data': [2]
  }, {
    'Name': 'Hemer',
    'Data': [0.1]
  }, {
    'Name': 'Herscheid',
    'Data': [0.3]
  }, {
    'Name': 'Iserlohn',
    'Data': [1.9]
  }, {
    'Name': 'Kierspe',
    'Data': [1]
  }, {
    'Name': 'Lüdenscheid',
    'Data': [3.7]
  }, {
    'Name': 'Meinerzhagen',
    'Data': [1]
  }, {
    'Name': 'Menden (Sauerland)',
    'Data': [1.5]
  }, {
    'Name': 'Nachrodt-Wiblingwerde',
    'Data': [0.3]
  }, {
    'Name': 'Neuenrade',
    'Data': [1.1]
  }, {
    'Name': 'Plettenberg',
    'Data': [1.6]
  }, {
    'Name': 'Schalksmühle',
    'Data': [3.1]
  }, {
    'Name': 'Werdohl',
    'Data': [0.8]
  }, {
    'Name': 'Attendorn',
    'Data': [2.8]
  }, {
    'Name': 'Drolshagen',
    'Data': [2.5]
  }, {
    'Name': 'Finnentrop',
    'Data': [2.3]
  }, {
    'Name': 'Kirchhundem',
    'Data': [2.2]
  }, {
    'Name': 'Lennestadt',
    'Data': [1.4]
  }, {
    'Name': 'Olpe',
    'Data': [2.2]
  }, {
    'Name': 'Wenden',
    'Data': [1.1]
  }, {
    'Name': 'Bad Berleburg',
    'Data': [1.2]
  }, {
    'Name': 'Burbach',
    'Data': [2.2]
  }, {
    'Name': 'Erndtebrück',
    'Data': [2.3]
  }, {
    'Name': 'Freudenberg',
    'Data': [0.8]
  }, {
    'Name': 'Hilchenbach',
    'Data': [0.8]
  }, {
    'Name': 'Kreuztal',
    'Data': [4.9]
  }, {
    'Name': 'Bad Laasphe',
    'Data': [1.6]
  }, {
    'Name': 'Netphen',
    'Data': [2]
  }, {
    'Name': 'Neunkirchen',
    'Data': [2.9]
  }, {
    'Name': 'Siegen',
    'Data': [3.2]
  }, {
    'Name': 'Wilnsdorf',
    'Data': [1.5]
  }, {
    'Name': 'Anröchte',
    'Data': [2.3]
  }, {
    'Name': 'Bad Sassendorf',
    'Data': [3.5]
  }, {
    'Name': 'Ense',
    'Data': [0.7]
  }, {
    'Name': 'Erwitte',
    'Data': [1.5]
  }, {
    'Name': 'Geseke',
    'Data': [1.9]
  }, {
    'Name': 'Lippetal',
    'Data': [1.7]
  }, {
    'Name': 'Lippstadt',
    'Data': [3.4]
  }, {
    'Name': 'Möhnesee',
    'Data': [0.1]
  }, {
    'Name': 'Rüthen',
    'Data': [2]
  }, {
    'Name': 'Soest',
    'Data': [3]
  }, {
    'Name': 'Warstein',
    'Data': [1.8]
  }, {
    'Name': 'Welver',
    'Data': [-0.1]
  }, {
    'Name': 'Werl',
    'Data': [3.7]
  }, {
    'Name': 'Wickede (Ruhr)',
    'Data': [0.4]
  }, {
    'Name': 'Bergkamen',
    'Data': [0.2]
  }, {
    'Name': 'Bönen',
    'Data': [2.3]
  }, {
    'Name': 'Fröndenberg/Ruhr',
    'Data': [1.3]
  }, {
    'Name': 'Holzwickede',
    'Data': [2.2]
  }, {
    'Name': 'Kamen',
    'Data': [1.2]
  }, {
    'Name': 'Lünen',
    'Data': [1.7]
  }, {
    'Name': 'Schwerte',
    'Data': [1.5]
  }, {
    'Name': 'Selm',
    'Data': [0.7]
  }, {
    'Name': 'Unna',
    'Data': [2.2]
  }, {
    'Name': 'Werne',
    'Data': [0.6]
  } //alte daten
];*/

var datenNichtdeutscheKommunen = [
  {
    'Name': 'Jahre',
    'Data': [2007, 2009, 2011, 2013, 2015]
  }, {
    'Name': 'Bottrop',
    'Data': [9.4, 9.1, 7.7, 8.1, 9.7]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [13.8, 13.9, 13.4, 14.7, 17]
  }, {
    'Name': 'Münster',
    'Data': [7, 6.7, 7.4, 8, 9.5]
  }, {
    'Name': 'Ahaus',
    'Data': [5.9, 6.1, 5.6, 6.3, 8]
  }, {
    'Name': 'Bocholt',
    'Data': [7.4, 7.2, 6, 6.2, 7.9]
  }, {
    'Name': 'Borken',
    'Data': [5.4, 5.4, 3.8, 4.4, 6.5]
  }, {
    'Name': 'Gescher',
    'Data': [4, 4.1, 3.1, 3.4, 5.1]
  }, {
    'Name': 'Gronau',
    'Data': [11.5, 12.1, 12.5, 13.8, 16.6]
  }, {
    'Name': 'Heek',
    'Data': [3.9, 4.2, 4.3, 5.3, 6.3]
  }, {
    'Name': 'Heiden',
    'Data': [3.9, 3.4, 2.4, 2.4, 4.2]
  }, {
    'Name': 'Isselburg',
    'Data': [9.8, 9.9, 10.5, 10.7, 11.8]
  }, {
    'Name': 'Legden',
    'Data': [3.8, 3.6, 5.1, 6, 8.9]
  }, {
    'Name': 'Raesfeld',
    'Data': [5.9, 5.8, 4, 4.2, 5.7]
  }, {
    'Name': 'Reken',
    'Data': [3.5, 3.4, 3.2, 3.4, 4.8]
  }, {
    'Name': 'Rhede',
    'Data': [4.7, 4.6, 3.9, 4, 5.7]
  }, {
    'Name': 'Schöppingen',
    'Data': [24.2, 26.5, 15, 19.9, 18.5]
  }, {
    'Name': 'Stadtlohn',
    'Data': [5, 5.3, 4.4, 5.5, 7.9]
  }, {
    'Name': 'Südlohn',
    'Data': [6.7, 6.5, 6.3, 6.6, 7.5]
  }, {
    'Name': 'Velen',
    'Data': [2.7, 2.6, 3.1, 3.4, 5.7]
  }, {
    'Name': 'Vreden',
    'Data': [5.2, 5.2, 5.3, 5.6, 6.8]
  }, {
    'Name': 'Ascheberg',
    'Data': [3.1, 2.9, 3.1, 3.5, 5.2]
  }, {
    'Name': 'Billerbeck',
    'Data': [3, 3.4, 2.4, 2.7, 4.7]
  }, {
    'Name': 'Coesfeld',
    'Data': [3.5, 3.4, 3.1, 3.9, 5.4]
  }, {
    'Name': 'Dülmen',
    'Data': [4, 4, 4.1, 4.3, 6.2]
  }, {
    'Name': 'Havixbeck',
    'Data': [4.2, 4.1, 2.9, 3.2, 5.1]
  }, {
    'Name': 'Lüdinghausen',
    'Data': [5, 5, 3.7, 4.3, 5.5]
  }, {
    'Name': 'Nordkirchen',
    'Data': [7.8, 8.6, 4.1, 2.4, 3.9]
  }, {
    'Name': 'Nottuln',
    'Data': [4.2, 4.2, 3.1, 3.8, 5]
  }, {
    'Name': 'Olfen',
    'Data': [3, 2.7, 1.7, 2, 3.5]
  }, {
    'Name': 'Rosendahl',
    'Data': [3.6, 4, 2.7, 5.1, 7.3]
  }, {
    'Name': 'Senden',
    'Data': [3.7, 3.4, 2.8, 3.4, 5.9]
  }, {
    'Name': 'Castrop-Rauxel',
    'Data': [8.2, 8, 6.7, 7, 8.8]
  }, {
    'Name': 'Datteln',
    'Data': [9, 9.2, 7.9, 8, 9]
  }, {
    'Name': 'Dorsten',
    'Data': [5.3, 5.1, 4.4, 4.7, 5.6]
  }, {
    'Name': 'Gladbeck',
    'Data': [11.3, 11.1, 10.4, 10.6, 12.7]
  }, {
    'Name': 'Haltern am See',
    'Data': [3, 3, 2.3, 2.8, 4.2]
  }, {
    'Name': 'Herten',
    'Data': [11.1, 11, 11, 11.2, 12.7]
  }, {
    'Name': 'Marl',
    'Data': [9.2, 8.9, 8, 8.3, 9.6]
  }, {
    'Name': 'Oer-Erkenschwick',
    'Data': [9.9, 11, 9.6, 10.7, 13.6]
  }, {
    'Name': 'Recklinghausen',
    'Data': [10.8, 10.4, 9.1, 9.6, 10.9]
  }, {
    'Name': 'Waltrop',
    'Data': [6.3, 6.5, 4.6, 4.8, 6.1]
  }, {
    'Name': 'Altenberge',
    'Data': [4.5, 4.4, 3.6, 4, 5.8]
  }, {
    'Name': 'Emsdetten',
    'Data': [6.1, 5.8, 5.6, 6.4, 8.7]
  }, {
    'Name': 'Greven',
    'Data': [6.2, 6.1, 5.6, 6.5, 9.2]
  }, {
    'Name': 'Hörstel',
    'Data': [3.3, 3.2, 2.8, 2.9, 5.3]
  }, {
    'Name': 'Hopsten',
    'Data': [3.4, 3.2, 2.9, 3, 6.1]
  }, {
    'Name': 'Horstmar',
    'Data': [4.3, 4.2, 3.8, 4, 6]
  }, {
    'Name': 'Ibbenbüren',
    'Data': [5.3, 5.1, 4.5, 4.8, 6]
  }, {
    'Name': 'Ladbergen',
    'Data': [3.4, 3.3, 2.8, 3.5, 7.4]
  }, {
    'Name': 'Laer',
    'Data': [5.2, 4.7, 4.8, 5.6, 8.1]
  }, {
    'Name': 'Lengerich',
    'Data': [8.5, 8.3, 7.7, 8.6, 11.7]
  }, {
    'Name': 'Lienen',
    'Data': [2.8, 3.1, 3.2, 3.7, 6]
  }, {
    'Name': 'Lotte',
    'Data': [6.8, 7.2, 6.1, 7.8, 10]
  }, {
    'Name': 'Metelen',
    'Data': [5.1, 5.3, 5, 5.7, 7.9]
  }, {
    'Name': 'Mettingen',
    'Data': [2.6, 2.7, 2.8, 3.1, 5.1]
  }, {
    'Name': 'Neuenkirchen',
    'Data': [5.6, 5.4, 4.7, 4.6, 6.6]
  }, {
    'Name': 'Nordwalde',
    'Data': [4.4, 4.4, 4.5, 5, 6.9]
  }, {
    'Name': 'Ochtrup',
    'Data': [6.4, 6.5, 6.1, 7.1, 9.8]
  }, {
    'Name': 'Recke',
    'Data': [2.7, 2.8, 2.6, 3.3, 5.9]
  }, {
    'Name': 'Rheine',
    'Data': [7, 7.2, 5.8, 6.7, 8.8]
  }, {
    'Name': 'Saerbeck',
    'Data': [3.9, 3.9, 4.2, 4.5, 6.6]
  }, {
    'Name': 'Steinfurt',
    'Data': [6.7, 6.2, 5.4, 5.9, 8.1]
  }, {
    'Name': 'Tecklenburg',
    'Data': [6.6, 6.6, 3.6, 4.7, 7.7]
  }, {
    'Name': 'Westerkappeln',
    'Data': [4.5, 4.2, 3.1, 3.8, 6.2]
  }, {
    'Name': 'Wettringen',
    'Data': [4.3, 4.5, 3.2, 4.2, 6.1]
  }, {
    'Name': 'Ahlen',
    'Data': [12.3, 12, 11.1, 11.4, 13.3]
  }, {
    'Name': 'Beckum',
    'Data': [8.2, 8, 7.3, 7.9, 10.2]
  }, {
    'Name': 'Beelen',
    'Data': [6, 5.8, 5.8, 6.7, 9.2]
  }, {
    'Name': 'Drensteinfurt',
    'Data': [2.8, 2.6, 2.2, 2.4, 4.3]
  }, {
    'Name': 'Ennigerloh',
    'Data': [5.6, 5.3, 3.9, 4.7, 7.9]
  }, {
    'Name': 'Everswinkel',
    'Data': [3.4, 3.6, 3.3, 4.7, 6.9]
  }, {
    'Name': 'Oelde',
    'Data': [8.1, 8.3, 7.3, 8.6, 10.6]
  }, {
    'Name': 'Ostbevern',
    'Data': [3.3, 3.2, 3, 3.6, 6.5]
  }, {
    'Name': 'Sassenberg',
    'Data': [5.1, 4.9, 4.3, 5.1, 8.3]
  }, {
    'Name': 'Sendenhorst',
    'Data': [4, 4.1, 4.1, 4.4, 7.4]
  }, {
    'Name': 'Telgte',
    'Data': [5.3, 5.1, 3.6, 4.2, 6.5]
  }, {
    'Name': 'Wadersloh',
    'Data': [3.7, 3.4, 3.6, 4.1, 6.5]
  }, {
    'Name': 'Warendorf',
    'Data': [6.2, 6.3, 4.8, 5.1, 6.3]
  }, {
    'Name': 'Bielefeld',
    'Data': [12, 11.9, 11.3, 11.7, 13.1]
  }, {
    'Name': 'Borgholzhausen',
    'Data': [4.4, 4.5, 5.1, 5.5, 7.3]
  }, {
    'Name': 'Gütersloh',
    'Data': [9.4, 9.6, 9.3, 10.6, 12.7]
  }, {
    'Name': 'Halle (Westf.)',
    'Data': [7.6, 7.2, 6.8, 7.1, 8.8]
  }, {
    'Name': 'Harsewinkel',
    'Data': [8.6, 8.5, 8.1, 8.7, 12]
  }, {
    'Name': 'Herzebrock-Clarholz',
    'Data': [7.1, 7.5, 5.2, 7.2, 8.9]
  }, {
    'Name': 'Langenberg',
    'Data': [3.4, 3.4, 4.4, 5, 7.7]
  }, {
    'Name': 'Rheda-Wiedenbrück',
    'Data': [11.9, 12.4, 12.4, 13.8, 16.8]
  }, {
    'Name': 'Rietberg',
    'Data': [8.2, 7.7, 6.1, 6.9, 9.7]
  }, {
    'Name': 'Schloß Holte-Stukenbrock',
    'Data': [5, 4.6, 5, 5, 7.4]
  }, {
    'Name': 'Steinhagen',
    'Data': [5.4, 4.9, 6.1, 6.4, 8.6]
  }, {
    'Name': 'Verl',
    'Data': [9.9, 9.5, 8.6, 8.5, 10.5]
  }, {
    'Name': 'Versmold',
    'Data': [8.8, 8.5, 7.2, 8.2, 11.2]
  }, {
    'Name': 'Werther (Westf.)',
    'Data': [6.4, 6.2, 6.3, 6.9, 9.2]
  }, {
    'Name': 'Bünde',
    'Data': [6.4, 6.4, 6.6, 6.7, 8.3]
  }, {
    'Name': 'Enger',
    'Data': [3.6, 3.5, 3.9, 4.4, 6.3]
  }, {
    'Name': 'Herford',
    'Data': [8.5, 8.4, 8.2, 9, 11]
  }, {
    'Name': 'Hiddenhausen',
    'Data': [3.8, 3.6, 3.6, 4.1, 6.1]
  }, {
    'Name': 'Kirchlengern',
    'Data': [3.8, 3.6, 3.2, 3.5, 5.2]
  }, {
    'Name': 'Löhne',
    'Data': [7.1, 7, 6.1, 6.6, 8.9]
  }, {
    'Name': 'Rödinghausen',
    'Data': [2.8, 2.7, 2.6, 2.7, 3.9]
  }, {
    'Name': 'Spenge',
    'Data': [3.9, 3.6, 4.1, 4.2, 6.3]
  }, {
    'Name': 'Vlotho',
    'Data': [5.8, 5.6, 5, 6, 7.5]
  }, {
    'Name': 'Bad Driburg',
    'Data': [4.5, 4.5, 3.5, 3.9, 6.4]
  }, {
    'Name': 'Beverungen',
    'Data': [5.5, 5.4, 3, 3.4, 5.4]
  }, {
    'Name': 'Borgentreich',
    'Data': [2.8, 2.8, 1.3, 1.7, 8.8]
  }, {
    'Name': 'Brakel',
    'Data': [6.9, 6.8, 5, 5, 6.7]
  }, {
    'Name': 'Höxter',
    'Data': [5.9, 5.8, 3.2, 3.2, 5.2]
  }, {
    'Name': 'Marienmünster',
    'Data': [2.5, 2.2, 1.6, 1.6, 3.1]
  }, {
    'Name': 'Nieheim',
    'Data': [2.2, 2.3, 1.7, 5.3, 4.1]
  }, {
    'Name': 'Steinheim',
    'Data': [4.6, 4.4, 3.4, 3.6, 5.6]
  }, {
    'Name': 'Warburg',
    'Data': [2.9, 2.8, 2.7, 3.2, 5.3]
  }, {
    'Name': 'Willebadessen',
    'Data': [5.2, 5.2, 1.6, 1.8, 4.4]
  }, {
    'Name': 'Augustdorf',
    'Data': [7.2, 7, 6.2, 6.5, 9.8]
  }, {
    'Name': 'Bad Salzuflen',
    'Data': [8.4, 8.3, 7.5, 8.2, 10.9]
  }, {
    'Name': 'Barntrup',
    'Data': [3.2, 3.1, 3.1, 3.4, 5.3]
  }, {
    'Name': 'Blomberg',
    'Data': [5.4, 5.2, 3.6, 4, 5.9]
  }, {
    'Name': 'Detmold',
    'Data': [7.3, 7.2, 5.7, 6, 8.7]
  }, {
    'Name': 'Dörentrup',
    'Data': [2.5, 2.2, 1.8, 2.3, 4.1]
  }, {
    'Name': 'Extertal',
    'Data': [4.7, 4.5, 3.2, 3.3, 5.5]
  }, {
    'Name': 'Horn-Bad Meinberg',
    'Data': [9.2, 9.1, 7.2, 7.5, 8.4]
  }, {
    'Name': 'Kalletal',
    'Data': [3.3, 3.2, 2.3, 2.6, 4.5]
  }, {
    'Name': 'Lage',
    'Data': [4.7, 4.5, 4.8, 5.2, 7.3]
  }, {
    'Name': 'Lemgo',
    'Data': [6, 5.8, 5, 5.4, 7.3]
  }, {
    'Name': 'Leopoldshöhe',
    'Data': [4.3, 4.3, 3.2, 3.6, 5.6]
  }, {
    'Name': 'Lügde',
    'Data': [4.1, 3.8, 4.3, 4.2, 6.2]
  }, {
    'Name': 'Oerlinghausen',
    'Data': [4.5, 4.1, 4.7, 5.2, 11.2]
  }, {
    'Name': 'Schieder-Schwalenberg',
    'Data': [3, 2.8, 2.7, 2.9, 4.9]
  }, {
    'Name': 'Schlangen',
    'Data': [4.3, 4.2, 3.6, 3.9, 5.7]
  }, {
    'Name': 'Bad Oeynhausen',
    'Data': [5.4, 5.3, 6.2, 6.9, 9.1]
  }, {
    'Name': 'Espelkamp',
    'Data': [6.6, 6.3, 5.8, 6.3, 8.2]
  }, {
    'Name': 'Hille',
    'Data': [2.5, 2.4, 1.6, 1.7, 3.9]
  }, {
    'Name': 'Hüllhorst',
    'Data': [2.9, 2.7, 2.4, 2.6, 4.5]
  }, {
    'Name': 'Lübbecke',
    'Data': [5.4, 5.5, 4.4, 5.5, 6.8]
  }, {
    'Name': 'Minden',
    'Data': [8.2, 8.1, 6.1, 6.8, 9.5]
  }, {
    'Name': 'Petershagen',
    'Data': [2, 2, 1.9, 2.2, 4.4]
  }, {
    'Name': 'Porta Westfalica',
    'Data': [2, 2.1, 2.5, 3, 4.1]
  }, {
    'Name': 'Preußisch Oldendorf',
    'Data': [3, 3, 2.9, 3.3, 5.3]
  }, {
    'Name': 'Rahden',
    'Data': [2.4, 2.3, 2.6, 3.1, 5.2]
  }, {
    'Name': 'Stemwede',
    'Data': [3, 3.1, 3.4, 3.5, 5.7]
  }, {
    'Name': 'Altenbeken',
    'Data': [2.6, 2.7, 2, 2.2, 4.8]
  }, {
    'Name': 'Bad Lippspringe',
    'Data': [11.3, 11.1, 9.3, 10.1, 11.7]
  }, {
    'Name': 'Borchen',
    'Data': [2.6, 2.7, 2.4, 2.9, 5.1]
  }, {
    'Name': 'Büren',
    'Data': [7.4, 7.4, 3.1, 3.9, 6.6]
  }, {
    'Name': 'Delbrück',
    'Data': [3.2, 3.2, 3.8, 4.6, 7.7]
  }, {
    'Name': 'Hövelhof',
    'Data': [3.9, 3.9, 4.4, 4.4, 4.7]
  }, {
    'Name': 'Lichtenau',
    'Data': [3.9, 3.9, 2, 3, 4.4]
  }, {
    'Name': 'Paderborn',
    'Data': [9.2, 9, 7.8, 8.3, 10.4]
  }, {
    'Name': 'Salzkotten',
    'Data': [3.4, 3.2, 2.8, 3, 5.2]
  }, {
    'Name': 'Wünnenberg',
    'Data': [3.2, 2.9, 2.1, 4, 6.5]
  }, {
    'Name': 'Bochum',
    'Data': [11.4, 11.2, 8.3, 9, 10.8]
  }, {
    'Name': 'Dortmund',
    'Data': [16, 15.7, 12.3, 13.2, 15.7]
  }, {
    'Name': 'Hagen',
    'Data': [13.1, 12.9, 12.6, 13.1, 15.9]
  }, {
    'Name': 'Hamm',
    'Data': [13.6, 13.7, 10.8, 11.2, 13.5]
  }, {
    'Name': 'Herne',
    'Data': [15, 15.1, 11.7, 12.6, 14.4]
  }, {
    'Name': 'Breckerfeld',
    'Data': [3.9, 4.1, 3.3, 3.4, 5.1]
  }, {
    'Name': 'Ennepetal',
    'Data': [8.8, 8.4, 8.4, 8.8, 10.1]
  }, {
    'Name': 'Gevelsberg',
    'Data': [9.5, 9.2, 9.6, 10.3, 12.5]
  }, {
    'Name': 'Hattingen',
    'Data': [7.9, 7.7, 6.5, 6.8, 8.3]
  }, {
    'Name': 'Herdecke',
    'Data': [5.5, 5.4, 4.8, 5.1, 6.9]
  }, {
    'Name': 'Schwelm',
    'Data': [11, 10.7, 9.6, 9.8, 11.8]
  }, {
    'Name': 'Sprockhövel',
    'Data': [4.8, 4.6, 3.6, 3.8, 5.3]
  }, {
    'Name': 'Wetter (Ruhr)',
    'Data': [8.3, 8.1, 7, 7.1, 8.9]
  }, {
    'Name': 'Witten',
    'Data': [8.6, 8.5, 7.8, 8.2, 10]
  }, {
    'Name': 'Arnsberg',
    'Data': [7.1, 7, 6.4, 6.8, 8.3]
  }, {
    'Name': 'Bestwig',
    'Data': [12, 12, 10.3, 11.3, 11.8]
  }, {
    'Name': 'Brilon',
    'Data': [5.3, 5.1, 3.8, 4.2, 8]
  }, {
    'Name': 'Eslohe (Sauerland)',
    'Data': [4.1, 3.9, 3.2, 3.6, 6.2]
  }, {
    'Name': 'Hallenberg',
    'Data': [4.6, 4.5, 2.9, 3.3, 7.5]
  }, {
    'Name': 'Marsberg',
    'Data': [6, 6, 3.4, 3.6, 5.7]
  }, {
    'Name': 'Medebach',
    'Data': [4.1, 3.9, 3.5, 4.2, 6.6]
  }, {
    'Name': 'Meschede',
    'Data': [8.5, 8.3, 7.5, 7.7, 8.9]
  }, {
    'Name': 'Olsberg',
    'Data': [4.1, 4.3, 3.7, 4, 5.9]
  }, {
    'Name': 'Schmallenberg',
    'Data': [5.3, 5.1, 4.5, 4.6, 6.9]
  }, {
    'Name': 'Sundern (Sauerland)',
    'Data': [9.2, 9, 7.5, 8.1, 9.7]
  }, {
    'Name': 'Winterberg',
    'Data': [5.4, 5.4, 3.6, 4.6, 7.3]
  }, {
    'Name': 'Altena',
    'Data': [9.4, 8.8, 8.4, 8.3, 10.5]
  }, {
    'Name': 'Balve',
    'Data': [5.5, 5.5, 4.7, 5, 7.1]
  }, {
    'Name': 'Halver',
    'Data': [9.7, 9.2, 8.4, 9, 10.2]
  }, {
    'Name': 'Hemer',
    'Data': [14.2, 15, 10.7, 9, 7.2]
  }, {
    'Name': 'Herscheid',
    'Data': [6, 5.8, 5.3, 5.2, 7]
  }, {
    'Name': 'Iserlohn',
    'Data': [10.5, 10.4, 9.4, 9.7, 11.5]
  }, {
    'Name': 'Kierspe',
    'Data': [11, 11, 6.2, 6.3, 8.2]
  }, {
    'Name': 'Lüdenscheid',
    'Data': [15.2, 15, 13.7, 14.4, 16.2]
  }, {
    'Name': 'Meinerzhagen',
    'Data': [9.5, 9.3, 8.7, 8.8, 10.1]
  }, {
    'Name': 'Menden (Sauerland)',
    'Data': [8.8, 8.6, 7.2, 7.5, 9.7]
  }, {
    'Name': 'Nachrodt-Wiblingwerde',
    'Data': [9.6, 9, 8.5, 8.3, 10.2]
  }, {
    'Name': 'Neuenrade',
    'Data': [11.6, 11.3, 10.7, 10.9, 12.2]
  }, {
    'Name': 'Plettenberg',
    'Data': [14.3, 13.8, 13.6, 13.9, 16.2]
  }, {
    'Name': 'Schalksmühle',
    'Data': [7.5, 7.1, 6.2, 7.2, 9.3]
  }, {
    'Name': 'Werdohl',
    'Data': [20.2, 19.6, 18, 18.1, 20.3]
  }, {
    'Name': 'Attendorn',
    'Data': [12.1, 11.7, 9.6, 10.1, 12.2]
  }, {
    'Name': 'Drolshagen',
    'Data': [4.8, 4.5, 4.6, 5.1, 6.2]
  }, {
    'Name': 'Finnentrop',
    'Data': [8.8, 8.7, 6.6, 7.3, 10.6]
  }, {
    'Name': 'Kirchhundem',
    'Data': [5.8, 5.9, 4, 4.4, 6.5]
  }, {
    'Name': 'Lennestadt',
    'Data': [9.9, 9.9, 6.4, 6.6, 8.7]
  }, {
    'Name': 'Olpe',
    'Data': [8.7, 8.8, 8.4, 8.4, 9.4]
  }, {
    'Name': 'Wenden',
    'Data': [4.1, 4.4, 4, 4.1, 6.1]
  }, {
    'Name': 'Bad Berleburg',
    'Data': [4.6, 4.6, 2.5, 2.9, 7.6]
  }, {
    'Name': 'Burbach',
    'Data': [8.2, 8.3, 7.3, 7.7, 12.6]
  }, {
    'Name': 'Erndtebrück',
    'Data': [2.9, 2.6, 2.9, 3.5, 5.5]
  }, {
    'Name': 'Freudenberg',
    'Data': [5, 4.6, 3.3, 3.4, 5.3]
  }, {
    'Name': 'Hilchenbach',
    'Data': [7.2, 6.5, 5.4, 5.7, 8]
  }, {
    'Name': 'Kreuztal',
    'Data': [10.6, 10.7, 8.3, 9.2, 12.1]
  }, {
    'Name': 'Bad Laasphe',
    'Data': [5.3, 4.7, 3.9, 4.2, 8]
  }, {
    'Name': 'Netphen',
    'Data': [6.6, 6.5, 5, 5.6, 8]
  }, {
    'Name': 'Neunkirchen',
    'Data': [12.2, 11.4, 9.8, 10.2, 12.8]
  }, {
    'Name': 'Siegen',
    'Data': [11.7, 11.8, 8.8, 9.5, 11.6]
  }, {
    'Name': 'Wilnsdorf',
    'Data': [3.6, 3.5, 2.8, 3.2, 5.2]
  }, {
    'Name': 'Anröchte',
    'Data': [2.5, 2.5, 2.5, 3, 5.8]
  }, {
    'Name': 'Bad Sassendorf',
    'Data': [5.6, 5.5, 4.8, 4.9, 7.2]
  }, {
    'Name': 'Ense',
    'Data': [5.2, 5.2, 2.8, 3.1, 5]
  }, {
    'Name': 'Erwitte',
    'Data': [4, 4.2, 3.5, 3.8, 6.3]
  }, {
    'Name': 'Geseke',
    'Data': [5, 5.1, 5.1, 5.6, 7.9]
  }, {
    'Name': 'Lippetal',
    'Data': [4.9, 4.8, 2.2, 2.3, 4.8]
  }, {
    'Name': 'Lippstadt',
    'Data': [9.9, 9.5, 8.8, 9.4, 10.9]
  }, {
    'Name': 'Möhnesee',
    'Data': [5.6, 5.5, 3.3, 3.2, 9.7]
  }, {
    'Name': 'Rüthen',
    'Data': [3.4, 3.2, 2.7, 3.4, 11.2]
  }, {
    'Name': 'Soest',
    'Data': [7.6, 7.5, 6, 6.5, 8.9]
  }, {
    'Name': 'Warstein',
    'Data': [5, 4.9, 3.4, 4.1, 6.8]
  }, {
    'Name': 'Welver',
    'Data': [2.7, 2.8, 1.8, 1.8, 4.2]
  }, {
    'Name': 'Werl',
    'Data': [10.2, 10.2, 9.1, 8.8, 10.6]
  }, {
    'Name': 'Wickede (Ruhr)',
    'Data': [10.3, 10.2, 6.9, 6.8, 17.7]
  }, {
    'Name': 'Bergkamen',
    'Data': [13, 13.1, 8.8, 8.8, 10.1]
  }, {
    'Name': 'Bönen',
    'Data': [11, 10.8, 8.9, 9.2, 10.3]
  }, {
    'Name': 'Fröndenberg/Ruhr',
    'Data': [7.2, 6.7, 4.9, 5.3, 7.5]
  }, {
    'Name': 'Holzwickede',
    'Data': [6, 5.9, 5.4, 5.8, 7.9]
  }, {
    'Name': 'Kamen',
    'Data': [7, 6.8, 6, 6.1, 8.2]
  }, {
    'Name': 'Lünen',
    'Data': [11.6, 11.4, 10, 9.9, 11.6]
  }, {
    'Name': 'Schwerte',
    'Data': [9.4, 9.2, 6.3, 6.6, 8.5]
  }, {
    'Name': 'Selm',
    'Data': [4.8, 4.8, 3.1, 3.4, 8]
  }, {
    'Name': 'Unna',
    'Data': [7.1, 6.3, 6, 6.4, 7.5]
  }, {
    'Name': 'Werne',
    'Data': [5.7, 5.5, 4.2, 4.2, 5.9]
  }
];

/*var datenNichtdeutscheKommunen = [
  {
    'Name': 'Jahre',
    'Data': [2000, 2013]
  }, {
    'Name': 'Bottrop',
    'Data': [9.5, 9.5]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [13.7, 15.7]
  }, {
    'Name': 'Münster',
    'Data': [7.7, 7.5]
  }, {
    'Name': 'Ahaus',
    'Data': [5.4, 7.1]
  }, {
    'Name': 'Bocholt',
    'Data': [7.3, 7.4]
  }, {
    'Name': 'Borken',
    'Data': [5.2, 6.1]
  }, {
    'Name': 'Gescher',
    'Data': [4.6, 4.4]
  }, {
    'Name': 'Gronau',
    'Data': [10.3, 14.3]
  }, {
    'Name': 'Heek',
    'Data': [3.7, 5.9]
  }, {
    'Name': 'Heiden',
    'Data': [4.5, 3.4]
  }, {
    'Name': 'Isselburg',
    'Data': [7.7, 10.4]
  }, {
    'Name': 'Legden',
    'Data': [2.5, 5.8]
  }, {
    'Name': 'Raesfeld',
    'Data': [6.5, 6.2]
  }, {
    'Name': 'Reken',
    'Data': [4.1, 3.5]
  }, {
    'Name': 'Rhede',
    'Data': [6.2, 4.7]
  }, {
    'Name': 'Schöppingen',
    'Data': [21.5, 34.7]
  }, {
    'Name': 'Stadtlohn',
    'Data': [5.8, 6.4]
  }, {
    'Name': 'Südlohn',
    'Data': [5.1, 7.5]
  }, {
    'Name': 'Velen',
    'Data': [3.5, 3.1]
  }, {
    'Name': 'Vreden',
    'Data': [4.4, 5.9]
  }, {
    'Name': 'Ascheberg',
    'Data': [3.9, 3.6]
  }, {
    'Name': 'Billerbeck',
    'Data': [3.7, 3.9]
  }, {
    'Name': 'Coesfeld',
    'Data': [3.6, 4.4]
  }, {
    'Name': 'Dülmen',
    'Data': [4.4, 4.7]
  }, {
    'Name': 'Havixbeck',
    'Data': [4.7, 4.3]
  }, {
    'Name': 'Lüdinghausen',
    'Data': [5.5, 5.7]
  }, {
    'Name': 'Nordkirchen',
    'Data': [4.4, 4.7]
  }, {
    'Name': 'Nottuln',
    'Data': [4.5, 4.9]
  }, {
    'Name': 'Olfen',
    'Data': [3.4, 2.7]
  }, {
    'Name': 'Rosendahl',
    'Data': [3.9, 6.8]
  }, {
    'Name': 'Senden',
    'Data': [4.4, 4.2]
  }, {
    'Name': 'Castrop-Rauxel',
    'Data': [9.1, 8.4]
  }, {
    'Name': 'Datteln',
    'Data': [10.2, 9.5]
  }, {
    'Name': 'Dorsten',
    'Data': [6.5, 5.6]
  }, {
    'Name': 'Gladbeck',
    'Data': [12.2, 11.3]
  }, {
    'Name': 'Haltern am See',
    'Data': [3.6, 3.7]
  }, {
    'Name': 'Herten',
    'Data': [12.2, 11.5]
  }, {
    'Name': 'Marl',
    'Data': [10.3, 9]
  }, {
    'Name': 'Oer-Erkenschwick',
    'Data': [10.3, 12.1]
  }, {
    'Name': 'Recklinghausen',
    'Data': [11.2, 10.8]
  }, {
    'Name': 'Waltrop',
    'Data': [6.4, 6.8]
  }, {
    'Name': 'Altenberge',
    'Data': [4.5, 5.3]
  }, {
    'Name': 'Emsdetten',
    'Data': [6.5, 6.9]
  }, {
    'Name': 'Greven',
    'Data': [6.8, 7.4]
  }, {
    'Name': 'Hörstel',
    'Data': [3.9, 3.5]
  }, {
    'Name': 'Hopsten',
    'Data': [3.9, 3.9]
  }, {
    'Name': 'Horstmar',
    'Data': [4.9, 4.7]
  }, {
    'Name': 'Ibbenbüren',
    'Data': [4.8, 5.5]
  }, {
    'Name': 'Ladbergen',
    'Data': [4.1, 4.1]
  }, {
    'Name': 'Laer',
    'Data': [6.5, 6.3]
  }, {
    'Name': 'Lengerich',
    'Data': [9.3, 9.3]
  }, {
    'Name': 'Lienen',
    'Data': [3.2, 3.6]
  }, {
    'Name': 'Lotte',
    'Data': [7.5, 9.5]
  }, {
    'Name': 'Metelen',
    'Data': [4.4, 6.3]
  }, {
    'Name': 'Mettingen',
    'Data': [3.3, 3.1]
  }, {
    'Name': 'Neuenkirchen',
    'Data': [5.5, 4.8]
  }, {
    'Name': 'Nordwalde',
    'Data': [5.3, 5.4]
  }, {
    'Name': 'Ochtrup',
    'Data': [6.4, 7.7]
  }, {
    'Name': 'Recke',
    'Data': [3.5, 2]
  }, {
    'Name': 'Rheine',
    'Data': [6.9, 8.4]
  }, {
    'Name': 'Saerbeck',
    'Data': [3.8, 4.5]
  }, {
    'Name': 'Steinfurt',
    'Data': [7.1, 6.7]
  }, {
    'Name': 'Tecklenburg',
    'Data': [6.5, 7.7]
  }, {
    'Name': 'Westerkappeln',
    'Data': [3.8, 5]
  }, {
    'Name': 'Wettringen',
    'Data': [4.5, 5.9]
  }, {
    'Name': 'Ahlen',
    'Data': [14.4, 12.6]
  }, {
    'Name': 'Beckum',
    'Data': [8.7, 9.3]
  }, {
    'Name': 'Beelen',
    'Data': [5.5, 7.2]
  }, {
    'Name': 'Drensteinfurt',
    'Data': [3.2, 2.9]
  }, {
    'Name': 'Ennigerloh',
    'Data': [6.2, 6.1]
  }, {
    'Name': 'Everswinkel',
    'Data': [4, 5.4]
  }, {
    'Name': 'Oelde',
    'Data': [8.6, 9.7]
  }, {
    'Name': 'Ostbevern',
    'Data': [2.9, 3.9]
  }, {
    'Name': 'Sassenberg',
    'Data': [5.9, 6]
  }, {
    'Name': 'Sendenhorst',
    'Data': [4.9, 4.7]
  }, {
    'Name': 'Telgte',
    'Data': [5.9, 5.6]
  }, {
    'Name': 'Wadersloh',
    'Data': [4.3, 4.8]
  }, {
    'Name': 'Warendorf',
    'Data': [7.4, 6.6]
  }, {
    'Name': 'Bielefeld',
    'Data': [12.8, 12.4]
  }, {
    'Name': 'Borgholzhausen',
    'Data': [5.1, 5.3]
  }, {
    'Name': 'Gütersloh',
    'Data': [9.8, 11.3]
  }, {
    'Name': 'Halle (Westf.)',
    'Data': [8.9, 7.6]
  }, {
    'Name': 'Harsewinkel',
    'Data': [10.6, 9.8]
  }, {
    'Name': 'Herzebrock-Clarholz',
    'Data': [6.3, 10.2]
  }, {
    'Name': 'Langenberg',
    'Data': [5, 5.5]
  }, {
    'Name': 'Rheda-Wiedenbrück',
    'Data': [10.9, 15.3]
  }, {
    'Name': 'Rietberg',
    'Data': [8, 8.5]
  }, {
    'Name': 'Schloß Holte-Stukenbrock',
    'Data': [6.7, 4.6]
  }, {
    'Name': 'Steinhagen',
    'Data': [6.6, 5.2]
  }, {
    'Name': 'Verl',
    'Data': [8.3, 9.9]
  }, {
    'Name': 'Versmold',
    'Data': [9, 10.1]
  }, {
    'Name': 'Werther (Westf.)',
    'Data': [8.3, 7.3]
  }, {
    'Name': 'Bünde',
    'Data': [7.4, 6.7]
  }, {
    'Name': 'Enger',
    'Data': [5, 4.3]
  }, {
    'Name': 'Herford',
    'Data': [10.1, 9.2]
  }, {
    'Name': 'Hiddenhausen',
    'Data': [4.6, 4.2]
  }, {
    'Name': 'Kirchlengern',
    'Data': [4.3, 3.9]
  }, {
    'Name': 'Löhne',
    'Data': [7.8, 7.6]
  }, {
    'Name': 'Rödinghausen',
    'Data': [3, 2.8]
  }, {
    'Name': 'Spenge',
    'Data': [4.6, 4.1]
  }, {
    'Name': 'Vlotho',
    'Data': [7.2, 6.8]
  }, {
    'Name': 'Bad Driburg',
    'Data': [4.7, 5.1]
  }, {
    'Name': 'Beverungen',
    'Data': [5.5, 6]
  }, {
    'Name': 'Borgentreich',
    'Data': [2.7, 3.4]
  }, {
    'Name': 'Brakel',
    'Data': [6.9, 6.9]
  }, {
    'Name': 'Höxter',
    'Data': [6.1, 6.3]
  }, {
    'Name': 'Marienmünster',
    'Data': [2.9, 2.4]
  }, {
    'Name': 'Nieheim',
    'Data': [2.5, 6]
  }, {
    'Name': 'Steinheim',
    'Data': [6.4, 4.5]
  }, {
    'Name': 'Warburg',
    'Data': [3.4, 3.3]
  }, {
    'Name': 'Willebadessen',
    'Data': [5.6, 5.6]
  }, {
    'Name': 'Augustdorf',
    'Data': [8.9, 7.2]
  }, {
    'Name': 'Bad Salzuflen',
    'Data': [8.8, 9.2]
  }, {
    'Name': 'Barntrup',
    'Data': [4.5, 3.6]
  }, {
    'Name': 'Blomberg',
    'Data': [6.6, 5.7]
  }, {
    'Name': 'Detmold',
    'Data': [8.1, 7.8]
  }, {
    'Name': 'Dörentrup',
    'Data': [3.5, 2.6]
  }, {
    'Name': 'Extertal',
    'Data': [5.6, 4.9]
  }, {
    'Name': 'Horn-Bad Meinberg',
    'Data': [10.2, 9.2]
  }, {
    'Name': 'Kalletal',
    'Data': [3.7, 3.7]
  }, {
    'Name': 'Lage',
    'Data': [5.3, 5.1]
  }, {
    'Name': 'Lemgo',
    'Data': [5.9, 5.9]
  }, {
    'Name': 'Leopoldshöhe',
    'Data': [5.1, 4.5]
  }, {
    'Name': 'Lügde',
    'Data': [5.2, 3.6]
  }, {
    'Name': 'Oerlinghausen',
    'Data': [5.7, 4.1]
  }, {
    'Name': 'Schieder-Schwalenberg',
    'Data': [4.3, 2.9]
  }, {
    'Name': 'Schlangen',
    'Data': [4.8, 4.4]
  }, {
    'Name': 'Bad Oeynhausen',
    'Data': [6.7, 6.4]
  }, {
    'Name': 'Espelkamp',
    'Data': [7.2, 7]
  }, {
    'Name': 'Hille',
    'Data': [2.5, 2.8]
  }, {
    'Name': 'Hüllhorst',
    'Data': [3.5, 3.2]
  }, {
    'Name': 'Lübbecke',
    'Data': [6.2, 6.7]
  }, {
    'Name': 'Minden',
    'Data': [8.3, 8.9]
  }, {
    'Name': 'Petershagen',
    'Data': [2.4, 2.3]
  }, {
    'Name': 'Porta Westfalica',
    'Data': [3.1, 2.5]
  }, {
    'Name': 'Preußisch Oldendorf',
    'Data': [4, 3.6]
  }, {
    'Name': 'Rahden',
    'Data': [2.8, 3]
  }, {
    'Name': 'Stemwede',
    'Data': [3.6, 3.5]
  }, {
    'Name': 'Altenbeken',
    'Data': [2.3, 2.7]
  }, {
    'Name': 'Bad Lippspringe',
    'Data': [11.6, 12.3]
  }, {
    'Name': 'Borchen',
    'Data': [2.1, 3]
  }, {
    'Name': 'Büren',
    'Data': [7.5, 8.4]
  }, {
    'Name': 'Delbrück',
    'Data': [4.3, 4.2]
  }, {
    'Name': 'Hövelhof',
    'Data': [5.3, 4.8]
  }, {
    'Name': 'Lichtenau',
    'Data': [4.2, 5]
  }, {
    'Name': 'Paderborn',
    'Data': [9.2, 9.8]
  }, {
    'Name': 'Salzkotten',
    'Data': [3.2, 3.6]
  }, {
    'Name': 'Wünnenberg',
    'Data': [3.2, 5]
  }, {
    'Name': 'Bochum',
    'Data': [11.6, 12.2]
  }, {
    'Name': 'Dortmund',
    'Data': [16.1, 16.8]
  }, {
    'Name': 'Hagen',
    'Data': [14, 13.4]
  }, {
    'Name': 'Hamm',
    'Data': [12.5, 14.9]
  }, {
    'Name': 'Herne',
    'Data': [15, 16.2]
  }, {
    'Name': 'Breckerfeld',
    'Data': [4.2, 3.9]
  }, {
    'Name': 'Ennepetal',
    'Data': [10.2, 8.7]
  }, {
    'Name': 'Gevelsberg',
    'Data': [10.5, 10.3]
  }, {
    'Name': 'Hattingen',
    'Data': [8.2, 8.1]
  }, {
    'Name': 'Herdecke',
    'Data': [5.6, 5.8]
  }, {
    'Name': 'Schwelm',
    'Data': [11.5, 11]
  }, {
    'Name': 'Sprockhövel',
    'Data': [5, 4.9]
  }, {
    'Name': 'Wetter (Ruhr)',
    'Data': [9.6, 8]
  }, {
    'Name': 'Witten',
    'Data': [8.8, 9.1]
  }, {
    'Name': 'Arnsberg',
    'Data': [7.7, 7.6]
  }, {
    'Name': 'Bestwig',
    'Data': [12.3, 12.4]
  }, {
    'Name': 'Brilon',
    'Data': [6.1, 5.9]
  }, {
    'Name': 'Eslohe (Sauerland)',
    'Data': [5.2, 4.2]
  }, {
    'Name': 'Hallenberg',
    'Data': [5.1, 5.5]
  }, {
    'Name': 'Marsberg',
    'Data': [6.4, 6.3]
  }, {
    'Name': 'Medebach',
    'Data': [3.9, 5.1]
  }, {
    'Name': 'Meschede',
    'Data': [9.2, 8.5]
  }, {
    'Name': 'Olsberg',
    'Data': [5.1, 4.7]
  }, {
    'Name': 'Schmallenberg',
    'Data': [5.9, 5.4]
  }, {
    'Name': 'Sundern (Sauerland)',
    'Data': [10.8, 9.7]
  }, {
    'Name': 'Winterberg',
    'Data': [5.6, 6.9]
  }, {
    'Name': 'Altena',
    'Data': [11.6, 8.7]
  }, {
    'Name': 'Balve',
    'Data': [6.6, 6]
  }, {
    'Name': 'Halver',
    'Data': [11.6, 10]
  }, {
    'Name': 'Hemer',
    'Data': [12.6, 15.6]
  }, {
    'Name': 'Herscheid',
    'Data': [7.4, 5.7]
  }, {
    'Name': 'Iserlohn',
    'Data': [11.8, 10.8]
  }, {
    'Name': 'Kierspe',
    'Data': [10.4, 11.2]
  }, {
    'Name': 'Lüdenscheid',
    'Data': [16.2, 15.9]
  }, {
    'Name': 'Meinerzhagen',
    'Data': [11, 9.2]
  }, {
    'Name': 'Menden (Sauerland)',
    'Data': [9.9, 9]
  }, {
    'Name': 'Nachrodt-Wiblingwerde',
    'Data': [10.4, 8.7]
  }, {
    'Name': 'Neuenrade',
    'Data': [12.7, 11.3]
  }, {
    'Name': 'Plettenberg',
    'Data': [16.6, 14.2]
  }, {
    'Name': 'Schalksmühle',
    'Data': [8.7, 8.3]
  }, {
    'Name': 'Werdohl',
    'Data': [22.9, 19.6]
  }, {
    'Name': 'Attendorn',
    'Data': [13.2, 12.4]
  }, {
    'Name': 'Drolshagen',
    'Data': [5.9, 5.1]
  }, {
    'Name': 'Finnentrop',
    'Data': [9.8, 9.3]
  }, {
    'Name': 'Kirchhundem',
    'Data': [7, 6.8]
  }, {
    'Name': 'Lennestadt',
    'Data': [9.4, 10.4]
  }, {
    'Name': 'Olpe',
    'Data': [9.6, 9]
  }, {
    'Name': 'Wenden',
    'Data': [5, 4.6]
  }, {
    'Name': 'Bad Berleburg',
    'Data': [5, 5]
  }, {
    'Name': 'Burbach',
    'Data': [8.4, 8.7]
  }, {
    'Name': 'Erndtebrück',
    'Data': [3.5, 3.3]
  }, {
    'Name': 'Freudenberg',
    'Data': [5.2, 4.8]
  }, {
    'Name': 'Hilchenbach',
    'Data': [7.8, 6.6]
  }, {
    'Name': 'Kreuztal',
    'Data': [10.3, 12]
  }, {
    'Name': 'Bad Laasphe',
    'Data': [5.4, 5.2]
  }, {
    'Name': 'Netphen',
    'Data': [6.6, 7.2]
  }, {
    'Name': 'Neunkirchen',
    'Data': [11.5, 12.1]
  }, {
    'Name': 'Siegen',
    'Data': [11.6, 12.4]
  }, {
    'Name': 'Wilnsdorf',
    'Data': [4.2, 3.8]
  }, {
    'Name': 'Anröchte',
    'Data': [2.3, 3.3]
  }, {
    'Name': 'Bad Sassendorf',
    'Data': [5.3, 6.6]
  }, {
    'Name': 'Ense',
    'Data': [5.1, 5.5]
  }, {
    'Name': 'Erwitte',
    'Data': [4.9, 4.6]
  }, {
    'Name': 'Geseke',
    'Data': [5.3, 5.6]
  }, {
    'Name': 'Lippetal',
    'Data': [4.7, 5.5]
  }, {
    'Name': 'Lippstadt',
    'Data': [10.6, 10.3]
  }, {
    'Name': 'Möhnesee',
    'Data': [5.4, 5.4]
  }, {
    'Name': 'Rüthen',
    'Data': [4.3, 4]
  }, {
    'Name': 'Soest',
    'Data': [7.6, 8.3]
  }, {
    'Name': 'Warstein',
    'Data': [5.5, 5.6]
  }, {
    'Name': 'Welver',
    'Data': [3.1, 2.8]
  }, {
    'Name': 'Werl',
    'Data': [11.6, 11.1]
  }, {
    'Name': 'Wickede (Ruhr)',
    'Data': [11.9, 10.2]
  }, {
    'Name': 'Bergkamen',
    'Data': [13.2, 13]
  }, {
    'Name': 'Bönen',
    'Data': [11, 11.4]
  }, {
    'Name': 'Fröndenberg/Ruhr',
    'Data': [7.7, 7.1]
  }, {
    'Name': 'Holzwickede',
    'Data': [6.2, 6.5]
  }, {
    'Name': 'Kamen',
    'Data': [7.9, 7.1]
  }, {
    'Name': 'Lünen',
    'Data': [12.4, 11.5]
  }, {
    'Name': 'Schwerte',
    'Data': [10, 9.5]
  }, {
    'Name': 'Selm',
    'Data': [4.4, 5.1]
  }, {
    'Name': 'Unna',
    'Data': [8.8, 6.9]
  }, {
    'Name': 'Werne',
    'Data': [6.2, 5.6]
  }//alte Daten
];*/

var datenEinkommenKommunen =[
  {
    'Name': 'Jahre',
    'Data': [2007, 2009, 2011, 2013]
  },
  {
    'Name': 'Bottrop',
    'Data': [16437, 16962, 18076, 18862]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [14550, 14786, 15410, 15904]
  }, {
    'Name': 'Münster',
    'Data': [20506, 20668, 21927, 22095]
  }, {
    'Name': 'Ahaus',
    'Data': [18421, 18075, 20016, 20779]
  }, {
    'Name': 'Bocholt',
    'Data': [17463, 17723, 19477, 20339]
  }, {
    'Name': 'Borken',
    'Data': [18075, 18523, 20795, 21943]
  }, {
    'Name': 'Gescher',
    'Data': [15610, 16276, 17536, 18324]
  }, {
    'Name': 'Gronau',
    'Data': [15327, 15385, 16663, 17378]
  }, {
    'Name': 'Heek',
    'Data': [16463, 16869, 19184, 19890]
  }, {
    'Name': 'Heiden',
    'Data': [16721, 18064, 20502, 21225]
  }, {
    'Name': 'Isselburg',
    'Data': [16100, 16509, 18025, 19068]
  }, {
    'Name': 'Legden',
    'Data': [17466, 17851, 19144, 19691]
  }, {
    'Name': 'Raesfeld',
    'Data': [18357, 19047, 21288, 22229]
  }, {
    'Name': 'Reken',
    'Data': [18804, 17779, 18586, 19332]
  }, {
    'Name': 'Rhede',
    'Data': [17200, 17995, 19864, 20855]
  }, {
    'Name': 'Schöppingen',
    'Data': [16082, 15909, 17066, 17300]
  }, {
    'Name': 'Stadtlohn',
    'Data': [17817, 17893, 19567, 20305]
  }, {
    'Name': 'Südlohn',
    'Data': [17209, 17562, 19109, 19960]
  }, {
    'Name': 'Velen',
    'Data': [17075, 17036, 18546, 19245]
  }, {
    'Name': 'Vreden',
    'Data': [17184, 17592, 19404, 20144]
  }, {
    'Name': 'Ascheberg',
    'Data': [18626, 19115, 20877, 21814]
  }, {
    'Name': 'Billerbeck',
    'Data': [18323, 19373, 21396, 22236]
  }, {
    'Name': 'Coesfeld',
    'Data': [17320, 18708, 21360, 22262]
  }, {
    'Name': 'Dülmen',
    'Data': [17018, 17447, 19062, 19991]
  }, {
    'Name': 'Havixbeck',
    'Data': [17339, 18741, 19801, 20745]
  }, {
    'Name': 'Lüdinghausen',
    'Data': [18982, 20533, 23972, 24689]
  }, {
    'Name': 'Nordkirchen',
    'Data': [18016, 18631, 20861, 22274]
  }, {
    'Name': 'Nottuln',
    'Data': [18704, 18637, 20299, 21061]
  }, {
    'Name': 'Olfen',
    'Data': [16780, 17557, 19348, 20015]
  }, {
    'Name': 'Rosendahl',
    'Data': [16386, 17115, 18605, 19151]
  }, {
    'Name': 'Senden',
    'Data': [17217, 17968, 19896, 20940]
  }, {
    'Name': 'Castrop-Rauxel',
    'Data': [16237, 16652, 17760, 18521]
  }, {
    'Name': 'Datteln',
    'Data': [16020, 16278, 17386, 18047]
  }, {
    'Name': 'Dorsten',
    'Data': [18306, 18077, 19465, 20491]
  }, {
    'Name': 'Gladbeck',
    'Data': [15227, 15590, 16367, 16988]
  }, {
    'Name': 'Haltern am See',
    'Data': [18544, 18976, 20512, 21488]
  }, {
    'Name': 'Herten',
    'Data': [15546, 16159, 17275, 18064]
  }, {
    'Name': 'Marl',
    'Data': [15760, 16299, 17414, 18312]
  }, {
    'Name': 'Oer-Erkenschwick',
    'Data': [14800, 15152, 16142, 17115]
  }, {
    'Name': 'Recklinghausen',
    'Data': [16402, 16938, 18263, 18893]
  }, {
    'Name': 'Waltrop',
    'Data': [16720, 17113, 18555, 19532]
  }, {
    'Name': 'Altenberge',
    'Data': [20362, 19922, 21427, 22444]
  }, {
    'Name': 'Emsdetten',
    'Data': [21931, 19437, 20746, 21453]
  }, {
    'Name': 'Greven',
    'Data': [18711, 18999, 20951, 21612]
  }, {
    'Name': 'Hörstel',
    'Data': [17296, 17985, 19785, 20520]
  }, {
    'Name': 'Hopsten',
    'Data': [17181, 18326, 20652, 21523]
  }, {
    'Name': 'Horstmar',
    'Data': [15942, 17173, 18561, 19520]
  }, {
    'Name': 'Ibbenbüren',
    'Data': [15134, 15767, 17054, 18063]
  }, {
    'Name': 'Ladbergen',
    'Data': [17637, 17936, 19120, 19911]
  }, {
    'Name': 'Laer',
    'Data': [17897, 18747, 20630, 21465]
  }, {
    'Name': 'Lengerich',
    'Data': [20135, 19125, 20788, 21670]
  }, {
    'Name': 'Lienen',
    'Data': [18458, 18348, 19613, 20502]
  }, {
    'Name': 'Lotte',
    'Data': [15493, 16727, 17557, 18029]
  }, {
    'Name': 'Metelen',
    'Data': [14282, 15505, 16385, 17572]
  }, {
    'Name': 'Mettingen',
    'Data': [15658, 16274, 17607, 18489]
  }, {
    'Name': 'Neuenkirchen',
    'Data': [16771, 17072, 18551, 19578]
  }, {
    'Name': 'Nordwalde',
    'Data': [16496, 17412, 18873, 19971]
  }, {
    'Name': 'Ochtrup',
    'Data': [15569, 16583, 18308, 19103]
  }, {
    'Name': 'Recke',
    'Data': [15218, 16135, 17530, 18276]
  }, {
    'Name': 'Rheine',
    'Data': [16074, 16645, 18048, 18786]
  }, {
    'Name': 'Saerbeck',
    'Data': [15493, 16523, 17628, 18880]
  }, {
    'Name': 'Steinfurt',
    'Data': [16003, 16634, 18092, 19189]
  }, {
    'Name': 'Tecklenburg',
    'Data': [19493, 20945, 24549, 25415]
  }, {
    'Name': 'Westerkappeln',
    'Data': [17051, 17248, 18792, 19529]
  }, {
    'Name': 'Wettringen',
    'Data': [16021, 16859, 18424, 18850]
  }, {
    'Name': 'Ahlen',
    'Data': [17890, 18071, 20254, 21126]
  }, {
    'Name': 'Beckum',
    'Data': [19131, 18478, 19749, 20512]
  }, {
    'Name': 'Beelen',
    'Data': [16058, 17133, 18687, 19411]
  }, {
    'Name': 'Drensteinfurt',
    'Data': [19208, 19834, 21520, 22627]
  }, {
    'Name': 'Ennigerloh',
    'Data': [17345, 17827, 19474, 20427]
  }, {
    'Name': 'Everswinkel',
    'Data': [18923, 19429, 21128, 22081]
  }, {
    'Name': 'Oelde',
    'Data': [23411, 21145, 22629, 23374]
  }, {
    'Name': 'Ostbevern',
    'Data': [17158, 18064, 20048, 20859]
  }, {
    'Name': 'Sassenberg',
    'Data': [15695, 16320, 17804, 18554]
  }, {
    'Name': 'Sendenhorst',
    'Data': [17874, 19120, 21644, 22591]
  }, {
    'Name': 'Telgte',
    'Data': [20746, 21360, 23703, 24530]
  }, {
    'Name': 'Wadersloh',
    'Data': [16943, 17753, 19042, 19751]
  }, {
    'Name': 'Warendorf',
    'Data': [18774, 18896, 20598, 21463]
  }, {
    'Name': 'Bielefeld',
    'Data': [18455, 18756, 20616, 21288]
  }, {
    'Name': 'Borgholzhausen',
    'Data': [18197, 19116, 20823, 22050]
  }, {
    'Name': 'Gütersloh',
    'Data': [21094, 20345, 21728, 22397]
  }, {
    'Name': 'Halle (Westf.)',
    'Data': [18751, 20510, 23191, 24128]
  }, {
    'Name': 'Harsewinkel',
    'Data': [18691, 18504, 20019, 20823]
  }, {
    'Name': 'Herzebrock-Clarholz',
    'Data': [19641, 19440, 20935, 21750]
  }, {
    'Name': 'Langenberg',
    'Data': [18816, 19353, 21496, 22348]
  }, {
    'Name': 'Rheda-Wiedenbrück',
    'Data': [21332, 20049, 21629, 22270]
  }, {
    'Name': 'Rietberg',
    'Data': [20281, 20190, 22176, 23036]
  }, {
    'Name': 'Schloß Holte-Stukenbrock',
    'Data': [22999, 21810, 23782, 24725]
  }, {
    'Name': 'Steinhagen',
    'Data': [21519, 20667, 21964, 22825]
  }, {
    'Name': 'Verl',
    'Data': [24606, 22550, 24846, 25710]
  }, {
    'Name': 'Versmold',
    'Data': [22343, 20936, 22749, 23536]
  }, {
    'Name': 'Werther (Westf.)',
    'Data': [18781, 19303, 20838, 22016]
  }, {
    'Name': 'Bünde',
    'Data': [19289, 19583, 21169, 22289]
  }, {
    'Name': 'Enger',
    'Data': [17981, 18555, 20034, 21152]
  }, {
    'Name': 'Herford',
    'Data': [19098, 18950, 20821, 21575]
  }, {
    'Name': 'Hiddenhausen',
    'Data': [19299, 19501, 20998, 22099]
  }, {
    'Name': 'Kirchlengern',
    'Data': [18238, 17847, 18906, 19961]
  }, {
    'Name': 'Löhne',
    'Data': [18177, 18452, 19786, 20626]
  }, {
    'Name': 'Rödinghausen',
    'Data': [25607, 28670, 37273, 38818]
  }, {
    'Name': 'Spenge',
    'Data': [18000, 18590, 20049, 21122]
  }, {
    'Name': 'Vlotho',
    'Data': [19076, 19175, 20873, 21849]
  }, {
    'Name': 'Bad Driburg',
    'Data': [17464, 17148, 18044, 18463]
  }, {
    'Name': 'Beverungen',
    'Data': [15685, 16531, 17941, 19066]
  }, {
    'Name': 'Borgentreich',
    'Data': [16257, 17714, 19501, 20409]
  }, {
    'Name': 'Brakel',
    'Data': [16983, 17158, 18796, 19687]
  }, {
    'Name': 'Höxter',
    'Data': [16686, 17228, 18810, 19780]
  }, {
    'Name': 'Marienmünster',
    'Data': [15635, 17268, 19570, 20835]
  }, {
    'Name': 'Nieheim',
    'Data': [15529, 16820, 18506, 19541]
  }, {
    'Name': 'Steinheim',
    'Data': [16481, 17191, 18736, 19809]
  }, {
    'Name': 'Warburg',
    'Data': [16616, 17682, 19097, 19949]
  }, {
    'Name': 'Willebadessen',
    'Data': [14231, 15329, 16410, 17166]
  }, {
    'Name': 'Augustdorf',
    'Data': [13745, 14125, 14920, 15642]
  }, {
    'Name': 'Bad Salzuflen',
    'Data': [20741, 20995, 23215, 24015]
  }, {
    'Name': 'Barntrup',
    'Data': [17990, 18469, 20624, 21591]
  }, {
    'Name': 'Blomberg',
    'Data': [31323, 31528, 38945, 40794]
  }, {
    'Name': 'Detmold',
    'Data': [20249, 20819, 23096, 23769]
  }, {
    'Name': 'Dörentrup',
    'Data': [14418, 14731, 16526, 19078]
  }, {
    'Name': 'Extertal',
    'Data': [17771, 17531, 18820, 19945]
  }, {
    'Name': 'Horn-Bad Meinberg',
    'Data': [16719, 17672, 18914, 19850]
  }, {
    'Name': 'Kalletal',
    'Data': [18514, 18700, 20571, 21584]
  }, {
    'Name': 'Lage',
    'Data': [15797, 16425, 17456, 18406]
  }, {
    'Name': 'Lemgo',
    'Data': [17067, 17629, 18995, 19726]
  }, {
    'Name': 'Leopoldshöhe',
    'Data': [17046, 17455, 18457, 19428]
  }, {
    'Name': 'Lügde',
    'Data': [15913, 16653, 18135, 19204]
  }, {
    'Name': 'Oerlinghausen',
    'Data': [20951, 21252, 23518, 24800]
  }, {
    'Name': 'Schieder-Schwalenberg',
    'Data': [15644, 16742, 18090, 19066]
  }, {
    'Name': 'Schlangen',
    'Data': [16074, 17428, 18972, 19574]
  }, {
    'Name': 'Bad Oeynhausen',
    'Data': [19758, 20204, 22291, 23050]
  }, {
    'Name': 'Espelkamp',
    'Data': [18981, 19500, 22577, 23567]
  }, {
    'Name': 'Hille',
    'Data': [18442, 18615, 20068, 21139]
  }, {
    'Name': 'Hüllhorst',
    'Data': [18752, 18845, 20516, 21430]
  }, {
    'Name': 'Lübbecke',
    'Data': [19840, 19446, 21276, 22124]
  }, {
    'Name': 'Minden',
    'Data': [16934, 17147, 18307, 19048]
  }, {
    'Name': 'Petershagen',
    'Data': [16302, 17276, 18778, 19912]
  }, {
    'Name': 'Porta Westfalica',
    'Data': [19409, 19472, 21056, 22114]
  }, {
    'Name': 'Preußisch Oldendorf',
    'Data': [19377, 19131, 20639, 21534]
  }, {
    'Name': 'Rahden',
    'Data': [17721, 18379, 20052, 20775]
  }, {
    'Name': 'Stemwede',
    'Data': [18415, 19518, 21697, 22904]
  }, {
    'Name': 'Altenbeken',
    'Data': [16358, 17044, 18062, 19042]
  }, {
    'Name': 'Bad Lippspringe',
    'Data': [16245, 16796, 17896, 18481]
  }, {
    'Name': 'Borchen',
    'Data': [16159, 17489, 19247, 20080]
  }, {
    'Name': 'Büren',
    'Data': [15969, 16993, 18393, 19246]
  }, {
    'Name': 'Delbrück',
    'Data': [19288, 20813, 24394, 24976]
  }, {
    'Name': 'Hövelhof',
    'Data': [18884, 17881, 19394, 20544]
  }, {
    'Name': 'Lichtenau',
    'Data': [17540, 17631, 19393, 20351]
  }, {
    'Name': 'Paderborn',
    'Data': [16431, 16895, 17780, 18153]
  }, {
    'Name': 'Salzkotten',
    'Data': [14801, 14983, 17348, 19406]
  }, {
    'Name': 'Wünnenberg',
    'Data': [14927, 16170, 17793, 18942]
  }, {
    'Name': 'Bochum',
    'Data': [16744, 16910, 17815, 18484]
  }, {
    'Name': 'Dortmund',
    'Data': [16081, 16454, 17217, 17714]
  }, {
    'Name': 'Hagen',
    'Data': [17674, 17716, 18886, 19732]
  }, {
    'Name': 'Hamm',
    'Data': [14892, 15276, 16165, 16901]
  }, {
    'Name': 'Herne',
    'Data': [14859, 15174, 15889, 16419]
  }, {
    'Name': 'Breckerfeld',
    'Data': [20237, 19988, 21447, 22760]
  }, {
    'Name': 'Ennepetal',
    'Data': [27743, 24905, 27219, 28526]
  }, {
    'Name': 'Gevelsberg',
    'Data': [18826, 19253, 20692, 21559]
  }, {
    'Name': 'Hattingen',
    'Data': [18218, 18530, 19799, 20508]
  }, {
    'Name': 'Herdecke',
    'Data': [25626, 24247, 27419, 28564]
  }, {
    'Name': 'Schwelm',
    'Data': [21918, 21685, 24130, 25312]
  }, {
    'Name': 'Sprockhövel',
    'Data': [25424, 25227, 28516, 29903]
  }, {
    'Name': 'Wetter (Ruhr)',
    'Data': [23972, 22208, 24054, 25155]
  }, {
    'Name': 'Witten',
    'Data': [18204, 18486, 19926, 20744]
  }, {
    'Name': 'Arnsberg',
    'Data': [19260, 19461, 21572, 22561]
  }, {
    'Name': 'Bestwig',
    'Data': [17249, 18373, 20434, 21315]
  }, {
    'Name': 'Brilon',
    'Data': [17227, 17924, 19424, 20353]
  }, {
    'Name': 'Eslohe (Sauerland)',
    'Data': [18005, 18417, 19769, 20882]
  }, {
    'Name': 'Hallenberg',
    'Data': [18912, 18865, 19883, 21107]
  }, {
    'Name': 'Marsberg',
    'Data': [16100, 16785, 18160, 19268]
  }, {
    'Name': 'Medebach',
    'Data': [16729, 18099, 19735, 20651]
  }, {
    'Name': 'Meschede',
    'Data': [19308, 19352, 21309, 22502]
  }, {
    'Name': 'Olsberg',
    'Data': [18604, 19465, 21911, 23210]
  }, {
    'Name': 'Schmallenberg',
    'Data': [17740, 18331, 19912, 20885]
  }, {
    'Name': 'Sundern (Sauerland)',
    'Data': [24835, 24108, 27801, 29208]
  }, {
    'Name': 'Winterberg',
    'Data': [16977, 18471, 19853, 21054]
  }, {
    'Name': 'Altena',
    'Data': [20066, 19543, 21122, 22319]
  }, {
    'Name': 'Balve',
    'Data': [21581, 21319, 23639, 24947]
  }, {
    'Name': 'Halver',
    'Data': [21956, 21054, 22792, 23793]
  }, {
    'Name': 'Hemer',
    'Data': [17756, 17714, 18748, 19672]
  }, {
    'Name': 'Herscheid',
    'Data': [23895, 24703, 28145, 29413]
  }, {
    'Name': 'Iserlohn',
    'Data': [20251, 19856, 21679, 22624]
  }, {
    'Name': 'Kierspe',
    'Data': [17113, 17111, 18061, 18891]
  }, {
    'Name': 'Lüdenscheid',
    'Data': [21247, 20158, 21727, 22745]
  }, {
    'Name': 'Meinerzhagen',
    'Data': [25429, 27634, 35120, 36542]
  }, {
    'Name': 'Menden (Sauerland)',
    'Data': [20728, 20711, 23569, 24802]
  }, {
    'Name': 'Nachrodt-Wiblingwerde',
    'Data': [24570, 23629, 26774, 28477]
  }, {
    'Name': 'Neuenrade',
    'Data': [23954, 22525, 24775, 25935]
  }, {
    'Name': 'Plettenberg',
    'Data': [24390, 22910, 25257, 26422]
  }, {
    'Name': 'Schalksmühle',
    'Data': [42590, 32561, 35641, 37497]
  }, {
    'Name': 'Werdohl',
    'Data': [16672, 17218, 18554, 19449]
  }, {
    'Name': 'Attendorn',
    'Data': [32715, 32185, 40201, 41627]
  }, {
    'Name': 'Drolshagen',
    'Data': [19573, 20063, 21997, 22916]
  }, {
    'Name': 'Finnentrop',
    'Data': [19761, 19585, 21393, 22393]
  }, {
    'Name': 'Kirchhundem',
    'Data': [21312, 21168, 23382, 24542]
  }, {
    'Name': 'Lennestadt',
    'Data': [18686, 18562, 20146, 21293]
  }, {
    'Name': 'Olpe',
    'Data': [24056, 23509, 26969, 28054]
  }, {
    'Name': 'Wenden',
    'Data': [16939, 17782, 19423, 20563]
  }, {
    'Name': 'Bad Berleburg',
    'Data': [19359, 20286, 22439, 23716]
  }, {
    'Name': 'Burbach',
    'Data': [20580, 20153, 21960, 22783]
  }, {
    'Name': 'Erndtebrück',
    'Data': [26141, 23250, 25258, 26700]
  }, {
    'Name': 'Freudenberg',
    'Data': [20748, 19880, 20972, 21870]
  }, {
    'Name': 'Hilchenbach',
    'Data': [19230, 19101, 20580, 22030]
  }, {
    'Name': 'Kreuztal',
    'Data': [25615, 25410, 29594, 30324]
  }, {
    'Name': 'Bad Laasphe',
    'Data': [17675, 18099, 19844, 20983]
  }, {
    'Name': 'Netphen',
    'Data': [17628, 18297, 19796, 20916]
  }, {
    'Name': 'Neunkirchen',
    'Data': [23694, 21362, 23001, 24225]
  }, {
    'Name': 'Siegen',
    'Data': [17700, 18056, 19452, 20135]
  }, {
    'Name': 'Wilnsdorf',
    'Data': [21698, 21399, 23786, 24895]
  }, {
    'Name': 'Anröchte',
    'Data': [17157, 18349, 20163, 20902]
  }, {
    'Name': 'Bad Sassendorf',
    'Data': [18983, 19798, 21355, 21939]
  }, {
    'Name': 'Ense',
    'Data': [17424, 17817, 19208, 20046]
  }, {
    'Name': 'Erwitte',
    'Data': [19958, 20643, 23208, 24054]
  }, {
    'Name': 'Geseke',
    'Data': [16017, 16356, 17582, 18511]
  }, {
    'Name': 'Lippetal',
    'Data': [16532, 17225, 18579, 19560]
  }, {
    'Name': 'Lippstadt',
    'Data': [17893, 17983, 19740, 20507]
  }, {
    'Name': 'Möhnesee',
    'Data': [21202, 22417, 25728, 26907]
  }, {
    'Name': 'Rüthen',
    'Data': [18701, 18926, 20458, 21722]
  }, {
    'Name': 'Soest',
    'Data': [16297, 16580, 17772, 18605]
  }, {
    'Name': 'Warstein',
    'Data': [18352, 18704, 20597, 22436]
  }, {
    'Name': 'Welver',
    'Data': [16681, 17864, 19265, 20301]
  }, {
    'Name': 'Werl',
    'Data': [15501, 16116, 17597, 18337]
  }, {
    'Name': 'Wickede (Ruhr)',
    'Data': [20570, 19667, 21516, 22494]
  }, {
    'Name': 'Bergkamen',
    'Data': [13792, 14424, 15242, 16001]
  }, {
    'Name': 'Bönen',
    'Data': [14269, 14937, 15908, 16836]
  }, {
    'Name': 'Fröndenberg/Ruhr',
    'Data': [19072, 19344, 21069, 22125]
  }, {
    'Name': 'Holzwickede',
    'Data': [21304, 21465, 23721, 24659]
  }, {
    'Name': 'Kamen',
    'Data': [16235, 16684, 17919, 18881]
  }, {
    'Name': 'Lünen',
    'Data': [14819, 15200, 16056, 16926]
  }, {
    'Name': 'Schwerte',
    'Data': [19087, 19279, 20772, 21840]
  }, {
    'Name': 'Selm',
    'Data': [16884, 17609, 19297, 20383]
  }, {
    'Name': 'Unna',
    'Data': [17474, 17583, 18929, 19752]
  }, {
    'Name': 'Werne',
    'Data': [18327, 18473, 20012, 20842]
  }

];

/*var datenEinkommenKommunen = [
  {
    'Name': 'Jahre',
    'Data': [2012]
  }, {
    'Name': 'Bottrop',
    'Data': [18940]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [16309]
  }, {
    'Name': 'Münster',
    'Data': [21932]
  }, {
    'Name': 'Ahaus',
    'Data': [20210]
  }, {
    'Name': 'Bocholt',
    'Data': [20145]
  }, {
    'Name': 'Borken',
    'Data': [21742]
  }, {
    'Name': 'Gescher',
    'Data': [18391]
  }, {
    'Name': 'Gronau',
    'Data': [17388]
  }, {
    'Name': 'Heek',
    'Data': [19926]
  }, {
    'Name': 'Heiden',
    'Data': [21356]
  }, {
    'Name': 'Isselburg',
    'Data': [18822]
  }, {
    'Name': 'Legden',
    'Data': [19909]
  }, {
    'Name': 'Raesfeld',
    'Data': [22050]
  }, {
    'Name': 'Reken',
    'Data': [19721]
  }, {
    'Name': 'Rhede',
    'Data': [20288]
  }, {
    'Name': 'Schöppingen',
    'Data': [17560]
  }, {
    'Name': 'Stadtlohn',
    'Data': [20233]
  }, {
    'Name': 'Südlohn',
    'Data': [20159]
  }, {
    'Name': 'Velen',
    'Data': [19483]
  }, {
    'Name': 'Vreden',
    'Data': [20108]
  }, {
    'Name': 'Ascheberg',
    'Data': [21871]
  }, {
    'Name': 'Billerbeck',
    'Data': [22154]
  }, {
    'Name': 'Coesfeld',
    'Data': [22198]
  }, {
    'Name': 'Dülmen',
    'Data': [20074]
  }, {
    'Name': 'Havixbeck',
    'Data': [20589]
  }, {
    'Name': 'Lüdinghausen',
    'Data': [24636]
  }, {
    'Name': 'Nordkirchen',
    'Data': [22061]
  }, {
    'Name': 'Nottuln',
    'Data': [21205]
  }, {
    'Name': 'Olfen',
    'Data': [20115]
  }, {
    'Name': 'Rosendahl',
    'Data': [19466]
  }, {
    'Name': 'Senden',
    'Data': [20857]
  }, {
    'Name': 'Castrop-Rauxel',
    'Data': [18734]
  }, {
    'Name': 'Datteln',
    'Data': [18225]
  }, {
    'Name': 'Dorsten',
    'Data': [20397]
  }, {
    'Name': 'Gladbeck',
    'Data': [17217]
  }, {
    'Name': 'Haltern am See',
    'Data': [21359]
  }, {
    'Name': 'Herten',
    'Data': [18244]
  }, {
    'Name': 'Marl',
    'Data': [18337]
  }, {
    'Name': 'Oer-Erkenschwick',
    'Data': [17373]
  }, {
    'Name': 'Recklinghausen',
    'Data': [19128]
  }, {
    'Name': 'Waltrop',
    'Data': [19644]
  }, {
    'Name': 'Altenberge',
    'Data': [22000]
  }, {
    'Name': 'Emsdetten',
    'Data': [21355]
  }, {
    'Name': 'Greven',
    'Data': [21731]
  }, {
    'Name': 'Hörstel',
    'Data': [20539]
  }, {
    'Name': 'Hopsten',
    'Data': [21491]
  }, {
    'Name': 'Horstmar',
    'Data': [19751]
  }, {
    'Name': 'Ibbenbüren',
    'Data': [18049]
  }, {
    'Name': 'Ladbergen',
    'Data': [20245]
  }, {
    'Name': 'Laer',
    'Data': [21471]
  }, {
    'Name': 'Lengerich',
    'Data': [21475]
  }, {
    'Name': 'Lienen',
    'Data': [20350]
  }, {
    'Name': 'Lotte',
    'Data': [18390]
  }, {
    'Name': 'Metelen',
    'Data': [17416]
  }, {
    'Name': 'Mettingen',
    'Data': [18615]
  }, {
    'Name': 'Neuenkirchen',
    'Data': [19553]
  }, {
    'Name': 'Nordwalde',
    'Data': [20043]
  }, {
    'Name': 'Ochtrup',
    'Data': [18721]
  }, {
    'Name': 'Recke',
    'Data': [18537]
  }, {
    'Name': 'Rheine',
    'Data': [18705]
  }, {
    'Name': 'Saerbeck',
    'Data': [18838]
  }, {
    'Name': 'Steinfurt',
    'Data': [19155]
  }, {
    'Name': 'Tecklenburg',
    'Data': [25406]
  }, {
    'Name': 'Westerkappeln',
    'Data': [19760]
  }, {
    'Name': 'Wettringen',
    'Data': [19190]
  }, {
    'Name': 'Ahlen',
    'Data': [21039]
  }, {
    'Name': 'Beckum',
    'Data': [20378]
  }, {
    'Name': 'Beelen',
    'Data': [19581]
  }, {
    'Name': 'Drensteinfurt',
    'Data': [22734]
  }, {
    'Name': 'Ennigerloh',
    'Data': [20401]
  }, {
    'Name': 'Everswinkel',
    'Data': [22162]
  }, {
    'Name': 'Oelde',
    'Data': [22926]
  }, {
    'Name': 'Ostbevern',
    'Data': [21006]
  }, {
    'Name': 'Sassenberg',
    'Data': [18896]
  }, {
    'Name': 'Sendenhorst',
    'Data': [21970]
  }, {
    'Name': 'Telgte',
    'Data': [24335]
  }, {
    'Name': 'Wadersloh',
    'Data': [19883]
  }, {
    'Name': 'Warendorf',
    'Data': [21265]
  }, {
    'Name': 'Bielefeld',
    'Data': [21049]
  }, {
    'Name': 'Borgholzhausen',
    'Data': [21717]
  }, {
    'Name': 'Gütersloh',
    'Data': [21936]
  }, {
    'Name': 'Halle (Westf.)',
    'Data': [23565]
  }, {
    'Name': 'Harsewinkel',
    'Data': [20442]
  }, {
    'Name': 'Herzebrock-Clarholz',
    'Data': [21581]
  }, {
    'Name': 'Langenberg',
    'Data': [22431]
  }, {
    'Name': 'Rheda-Wiedenbrück',
    'Data': [21928]
  }, {
    'Name': 'Rietberg',
    'Data': [22724]
  }, {
    'Name': 'Schloß Holte-Stukenbrock',
    'Data': [24408]
  }, {
    'Name': 'Steinhagen',
    'Data': [22451]
  }, {
    'Name': 'Verl',
    'Data': [25153]
  }, {
    'Name': 'Versmold',
    'Data': [23310]
  }, {
    'Name': 'Werther (Westf.)',
    'Data': [21715]
  }, {
    'Name': 'Bünde',
    'Data': [21719]
  }, {
    'Name': 'Enger',
    'Data': [20884]
  }, {
    'Name': 'Herford',
    'Data': [21277]
  }, {
    'Name': 'Hiddenhausen',
    'Data': [21704]
  }, {
    'Name': 'Kirchlengern',
    'Data': [20000]
  }, {
    'Name': 'Löhne',
    'Data': [20354]
  }, {
    'Name': 'Rödinghausen',
    'Data': [37709]
  }, {
    'Name': 'Spenge',
    'Data': [20835]
  }, {
    'Name': 'Vlotho',
    'Data': [21605]
  }, {
    'Name': 'Bad Driburg',
    'Data': [17789]
  }, {
    'Name': 'Beverungen',
    'Data': [18993]
  }, {
    'Name': 'Borgentreich',
    'Data': [20364]
  }, {
    'Name': 'Brakel',
    'Data': [19625]
  }, {
    'Name': 'Höxter',
    'Data': [19756]
  }, {
    'Name': 'Marienmünster',
    'Data': [20685]
  }, {
    'Name': 'Nieheim',
    'Data': [19552]
  }, {
    'Name': 'Steinheim',
    'Data': [19567]
  }, {
    'Name': 'Warburg',
    'Data': [19973]
  }, {
    'Name': 'Willebadessen',
    'Data': [17222]
  }, {
    'Name': 'Augustdorf',
    'Data': [16043]
  }, {
    'Name': 'Bad Salzuflen',
    'Data': [23242]
  }, {
    'Name': 'Barntrup',
    'Data': [21520]
  }, {
    'Name': 'Blomberg',
    'Data': [38852]
  }, {
    'Name': 'Detmold',
    'Data': [23365]
  }, {
    'Name': 'Dörentrup',
    'Data': [18510]
  }, {
    'Name': 'Extertal',
    'Data': [19747]
  }, {
    'Name': 'Horn-Bad Meinberg',
    'Data': [19624]
  }, {
    'Name': 'Kalletal',
    'Data': [21577]
  }, {
    'Name': 'Lage',
    'Data': [18285]
  }, {
    'Name': 'Lemgo',
    'Data': [19707]
  }, {
    'Name': 'Leopoldshöhe',
    'Data': [19482]
  }, {
    'Name': 'Lügde',
    'Data': [19101]
  }, {
    'Name': 'Oerlinghausen',
    'Data': [24011]
  }, {
    'Name': 'Schieder-Schwalenberg',
    'Data': [18986]
  }, {
    'Name': 'Schlangen',
    'Data': [19806]
  }, {
    'Name': 'Bad Oeynhausen',
    'Data': [22643]
  }, {
    'Name': 'Espelkamp',
    'Data': [22225]
  }, {
    'Name': 'Hille',
    'Data': [20999]
  }, {
    'Name': 'Hüllhorst',
    'Data': [21418]
  }, {
    'Name': 'Lübbecke',
    'Data': [21747]
  }, {
    'Name': 'Minden',
    'Data': [19062]
  }, {
    'Name': 'Petershagen',
    'Data': [19801]
  }, {
    'Name': 'Porta Westfalica',
    'Data': [21857]
  }, {
    'Name': 'Preußisch Oldendorf',
    'Data': [20584]
  }, {
    'Name': 'Rahden',
    'Data': [20805]
  }, {
    'Name': 'Stemwede',
    'Data': [22164]
  }, {
    'Name': 'Altenbeken',
    'Data': [19097]
  }, {
    'Name': 'Bad Lippspringe',
    'Data': [18581]
  }, {
    'Name': 'Borchen',
    'Data': [20056]
  }, {
    'Name': 'Büren',
    'Data': [19347]
  }, {
    'Name': 'Delbrück',
    'Data': [24885]
  }, {
    'Name': 'Hövelhof',
    'Data': [20316]
  }, {
    'Name': 'Lichtenau',
    'Data': [20200]
  }, {
    'Name': 'Paderborn',
    'Data': [18292]
  }, {
    'Name': 'Salzkotten',
    'Data': [18843]
  }, {
    'Name': 'Wünnenberg',
    'Data': [18752]
  }, {
    'Name': 'Bochum',
    'Data': [18571]
  }, {
    'Name': 'Dortmund',
    'Data': [17893]
  }, {
    'Name': 'Hagen',
    'Data': [19572]
  }, {
    'Name': 'Hamm',
    'Data': [17043]
  }, {
    'Name': 'Herne',
    'Data': [16723]
  }, {
    'Name': 'Breckerfeld',
    'Data': [22430]
  }, {
    'Name': 'Ennepetal',
    'Data': [27812]
  }, {
    'Name': 'Gevelsberg',
    'Data': [21266]
  }, {
    'Name': 'Hattingen',
    'Data': [20485]
  }, {
    'Name': 'Herdecke',
    'Data': [27771]
  }, {
    'Name': 'Schwelm',
    'Data': [24610]
  }, {
    'Name': 'Sprockhövel',
    'Data': [28892]
  }, {
    'Name': 'Wetter (Ruhr)',
    'Data': [24761]
  }, {
    'Name': 'Witten',
    'Data': [20677]
  }, {
    'Name': 'Arnsberg',
    'Data': [22274]
  }, {
    'Name': 'Bestwig',
    'Data': [21188]
  }, {
    'Name': 'Brilon',
    'Data': [20349]
  }, {
    'Name': 'Eslohe (Sauerland)',
    'Data': [20602]
  }, {
    'Name': 'Hallenberg',
    'Data': [20523]
  }, {
    'Name': 'Marsberg',
    'Data': [19079]
  }, {
    'Name': 'Medebach',
    'Data': [19780]
  }, {
    'Name': 'Meschede',
    'Data': [22082]
  }, {
    'Name': 'Olsberg',
    'Data': [22912]
  }, {
    'Name': 'Schmallenberg',
    'Data': [20613]
  }, {
    'Name': 'Sundern (Sauerland)',
    'Data': [28551]
  }, {
    'Name': 'Winterberg',
    'Data': [20699]
  }, {
    'Name': 'Altena',
    'Data': [22127]
  }, {
    'Name': 'Balve',
    'Data': [24081]
  }, {
    'Name': 'Halver',
    'Data': [23330]
  }, {
    'Name': 'Hemer',
    'Data': [19279]
  }, {
    'Name': 'Herscheid',
    'Data': [28282]
  }, {
    'Name': 'Iserlohn',
    'Data': [22309]
  }, {
    'Name': 'Kierspe',
    'Data': [18617]
  }, {
    'Name': 'Lüdenscheid',
    'Data': [22424]
  }, {
    'Name': 'Meinerzhagen',
    'Data': [35240]
  }, {
    'Name': 'Menden (Sauerland)',
    'Data': [24419]
  }, {
    'Name': 'Nachrodt-Wiblingwerde',
    'Data': [27886]
  }, {
    'Name': 'Neuenrade',
    'Data': [25430]
  }, {
    'Name': 'Plettenberg',
    'Data': [25735]
  }, {
    'Name': 'Schalksmühle',
    'Data': [36081]
  }, {
    'Name': 'Werdohl',
    'Data': [19357]
  }, {
    'Name': 'Attendorn',
    'Data': [40419]
  }, {
    'Name': 'Drolshagen',
    'Data': [22506]
  }, {
    'Name': 'Finnentrop',
    'Data': [22179]
  }, {
    'Name': 'Kirchhundem',
    'Data': [23910]
  }, {
    'Name': 'Lennestadt',
    'Data': [21109]
  }, {
    'Name': 'Olpe',
    'Data': [27548]
  }, {
    'Name': 'Wenden',
    'Data': [20316]
  }, {
    'Name': 'Bad Berleburg',
    'Data': [23197]
  }, {
    'Name': 'Burbach',
    'Data': [21730]
  }, {
    'Name': 'Erndtebrück',
    'Data': [26186]
  }, {
    'Name': 'Freudenberg',
    'Data': [21692]
  }, {
    'Name': 'Hilchenbach',
    'Data': [21567]
  }, {
    'Name': 'Kreuztal',
    'Data': [29883]
  }, {
    'Name': 'Bad Laasphe',
    'Data': [20762]
  }, {
    'Name': 'Netphen',
    'Data': [20689]
  }, {
    'Name': 'Neunkirchen',
    'Data': [23695]
  }, {
    'Name': 'Siegen',
    'Data': [19876]
  }, {
    'Name': 'Wilnsdorf',
    'Data': [24238]
  }, {
    'Name': 'Anröchte',
    'Data': [20906]
  }, {
    'Name': 'Bad Sassendorf',
    'Data': [21307]
  }, {
    'Name': 'Ense',
    'Data': [20164]
  }, {
    'Name': 'Erwitte',
    'Data': [23615]
  }, {
    'Name': 'Geseke',
    'Data': [18482]
  }, {
    'Name': 'Lippetal',
    'Data': [19464]
  }, {
    'Name': 'Lippstadt',
    'Data': [20496]
  }, {
    'Name': 'Möhnesee',
    'Data': [25656]
  }, {
    'Name': 'Rüthen',
    'Data': [21495]
  }, {
    'Name': 'Soest',
    'Data': [18480]
  }, {
    'Name': 'Warstein',
    'Data': [22184]
  }, {
    'Name': 'Welver',
    'Data': [20292]
  }, {
    'Name': 'Werl',
    'Data': [18259]
  }, {
    'Name': 'Wickede (Ruhr)',
    'Data': [22209]
  }, {
    'Name': 'Bergkamen',
    'Data': [16248]
  }, {
    'Name': 'Bönen',
    'Data': [17074]
  }, {
    'Name': 'Fröndenberg/Ruhr',
    'Data': [21940]
  }, {
    'Name': 'Holzwickede',
    'Data': [24378]
  }, {
    'Name': 'Kamen',
    'Data': [18809]
  }, {
    'Name': 'Lünen',
    'Data': [17060]
  }, {
    'Name': 'Schwerte',
    'Data': [21620]
  }, {
    'Name': 'Selm',
    'Data': [20463]
  }, {
    'Name': 'Unna',
    'Data': [19616]
  }, {
    'Name': 'Werne',
    'Data': [20782]
  } //alte Daten
];*/

var datenKonfessionenKommunen = [
  {
    'Name': 'Jahre',
    'Data': ['katholisch', 'evangelisch', 'andere']
  }, {
    'Name': 'Bottrop',
    'Data': [50, 21.9, 28.1]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [33.7, 30.1, 36.3]
  }, {
    'Name': 'Münster',
    'Data': [51.3, 21.5, 27.3]
  }, {
    'Name': 'Ahaus',
    'Data': [73.9, 10.1, 16]
  }, {
    'Name': 'Bocholt',
    'Data': [69.7, 11.6, 18.7]
  }, {
    'Name': 'Borken',
    'Data': [71, 13.7, 15.3]
  }, {
    'Name': 'Gescher',
    'Data': [76.7, 11.6, 11.7]
  }, {
    'Name': 'Gronau',
    'Data': [49.1, 24.3, 26.6]
  }, {
    'Name': 'Heek',
    'Data': [84.8, 6.2, 9]
  }, {
    'Name': 'Heiden',
    'Data': [77.3, 11.5, 11.1]
  }, {
    'Name': 'Isselburg',
    'Data': [58, 23, 19]
  }, {
    'Name': 'Legden',
    'Data': [77.4, 9.3, 13.2]
  }, {
    'Name': 'Raesfeld',
    'Data': [71.4, 14.6, 14]
  }, {
    'Name': 'Reken',
    'Data': [70.7, 15.6, 13.7]
  }, {
    'Name': 'Rhede',
    'Data': [76.9, 9.9, 13.2]
  }, {
    'Name': 'Schöppingen',
    'Data': [73.8, 10.5, 15.7]
  }, {
    'Name': 'Stadtlohn',
    'Data': [79.1, 7.3, 13.6]
  }, {
    'Name': 'Südlohn',
    'Data': [79.4, 8.8, 11.7]
  }, {
    'Name': 'Velen',
    'Data': [75.8, 11.2, 13]
  }, {
    'Name': 'Vreden',
    'Data': [80, 7.8, 12.3]
  }, {
    'Name': 'Ascheberg',
    'Data': [68.6, 16.4, 15.1]
  }, {
    'Name': 'Billerbeck',
    'Data': [75.9, 11.4, 12.7]
  }, {
    'Name': 'Coesfeld',
    'Data': [73.1, 13.4, 13.5]
  }, {
    'Name': 'Dülmen',
    'Data': [66.1, 17.4, 16.5]
  }, {
    'Name': 'Havixbeck',
    'Data': [64.6, 18.2, 17.1]
  }, {
    'Name': 'Lüdinghausen',
    'Data': [63, 18.7, 18.3]
  }, {
    'Name': 'Nordkirchen',
    'Data': [63.3, 19.7, 17]
  }, {
    'Name': 'Nottuln',
    'Data': [65.4, 16.7, 17.9]
  }, {
    'Name': 'Olfen',
    'Data': [57.8, 22.5, 19.8]
  }, {
    'Name': 'Rosendahl',
    'Data': [83.8, 7.4, 8.8]
  }, {
    'Name': 'Senden',
    'Data': [59.3, 21.7, 19]
  }, {
    'Name': 'Castrop-Rauxel',
    'Data': [37.8, 32.8, 29.4]
  }, {
    'Name': 'Datteln',
    'Data': [42.4, 28.6, 29.1]
  }, {
    'Name': 'Dorsten',
    'Data': [50, 27.4, 22.6]
  }, {
    'Name': 'Gladbeck',
    'Data': [38.7, 27.6, 33.7]
  }, {
    'Name': 'Haltern am See',
    'Data': [61.8, 20.2, 18.1]
  }, {
    'Name': 'Herten',
    'Data': [35.8, 31.6, 32.6]
  }, {
    'Name': 'Marl',
    'Data': [39.5, 29, 31.5]
  }, {
    'Name': 'Oer-Erkenschwick',
    'Data': [40.2, 28, 31.9]
  }, {
    'Name': 'Recklinghausen',
    'Data': [40.7, 27.5, 31.8]
  }, {
    'Name': 'Waltrop',
    'Data': [45.4, 29.7, 24.9]
  }, {
    'Name': 'Altenberge',
    'Data': [63.2, 16.6, 20.2]
  }, {
    'Name': 'Emsdetten',
    'Data': [71.5, 11, 17.5]
  }, {
    'Name': 'Greven',
    'Data': [55.8, 18.9, 25.3]
  }, {
    'Name': 'Hörstel',
    'Data': [70.6, 16.5, 12.9]
  }, {
    'Name': 'Hopsten',
    'Data': [68.9, 21.1, 10]
  }, {
    'Name': 'Horstmar',
    'Data': [76.2, 12.3, 11.5]
  }, {
    'Name': 'Ibbenbüren',
    'Data': [53.3, 28.6, 18.1]
  }, {
    'Name': 'Ladbergen',
    'Data': [23, 60.6, 16.4]
  }, {
    'Name': 'Laer',
    'Data': [68.6, 13.5, 17.9]
  }, {
    'Name': 'Lengerich',
    'Data': [16.9, 55.3, 27.8]
  }, {
    'Name': 'Lienen',
    'Data': [19.7, 59, 21.3]
  }, {
    'Name': 'Lotte',
    'Data': [26.9, 48.7, 24.4]
  }, {
    'Name': 'Metelen',
    'Data': [76.7, 10.6, 12.7]
  }, {
    'Name': 'Mettingen',
    'Data': [67, 20.5, 12.5]
  }, {
    'Name': 'Neuenkirchen',
    'Data': [75.2, 10.8, 14]
  }, {
    'Name': 'Nordwalde',
    'Data': [70.3, 13.9, 15.8]
  }, {
    'Name': 'Ochtrup',
    'Data': [75.5, 11.2, 13.2]
  }, {
    'Name': 'Recke',
    'Data': [71.8, 17.3, 10.9]
  }, {
    'Name': 'Rheine',
    'Data': [63.4, 17.7, 18.8]
  }, {
    'Name': 'Saerbeck',
    'Data': [64.8, 17.3, 17.9]
  }, {
    'Name': 'Steinfurt',
    'Data': [55, 26.2, 18.8]
  }, {
    'Name': 'Tecklenburg',
    'Data': [32.9, 49, 18.1]
  }, {
    'Name': 'Westerkappeln',
    'Data': [21.7, 58.8, 19.5]
  }, {
    'Name': 'Wettringen',
    'Data': [76.3, 12.6, 11.2]
  }, {
    'Name': 'Ahlen',
    'Data': [44.8, 23, 32.2]
  }, {
    'Name': 'Beckum',
    'Data': [57.4, 20.6, 22.1]
  }, {
    'Name': 'Beelen',
    'Data': [63.4, 12, 24.6]
  }, {
    'Name': 'Drensteinfurt',
    'Data': [65.7, 18.1, 16.2]
  }, {
    'Name': 'Ennigerloh',
    'Data': [62.8, 19.3, 17.9]
  }, {
    'Name': 'Everswinkel',
    'Data': [62.8, 18.1, 19]
  }, {
    'Name': 'Oelde',
    'Data': [61.7, 17.9, 20.3]
  }, {
    'Name': 'Ostbevern',
    'Data': [63.8, 16.2, 20]
  }, {
    'Name': 'Sassenberg',
    'Data': [60.6, 18.2, 21.2]
  }, {
    'Name': 'Sendenhorst',
    'Data': [68.5, 16.5, 15]
  }, {
    'Name': 'Telgte',
    'Data': [62.8, 17.8, 19.4]
  }, {
    'Name': 'Wadersloh',
    'Data': [72, 15.6, 12.3]
  }, {
    'Name': 'Warendorf',
    'Data': [60.9, 17, 22.1]
  }, {
    'Name': 'Bielefeld',
    'Data': [16.3, 41.2, 42.5]
  }, {
    'Name': 'Borgholzhausen',
    'Data': [14.1, 56.9, 29]
  }, {
    'Name': 'Gütersloh',
    'Data': [33, 32.4, 34.6]
  }, {
    'Name': 'Halle (Westf.)',
    'Data': [14.6, 51.6, 33.8]
  }, {
    'Name': 'Harsewinkel',
    'Data': [50.2, 17.8, 31.9]
  }, {
    'Name': 'Herzebrock-Clarholz',
    'Data': [61.5, 18.3, 20.2]
  }, {
    'Name': 'Langenberg',
    'Data': [63.4, 17.9, 18.6]
  }, {
    'Name': 'Rheda-Wiedenbrück',
    'Data': [49.9, 22.1, 28]
  }, {
    'Name': 'Rietberg',
    'Data': [63.8, 12.8, 23.4]
  }, {
    'Name': 'Schloß Holte-Stukenbrock',
    'Data': [43.4, 25, 31.6]
  }, {
    'Name': 'Steinhagen',
    'Data': [13.2, 54, 32.8]
  }, {
    'Name': 'Verl',
    'Data': [55.6, 19.3, 25.1]
  }, {
    'Name': 'Versmold',
    'Data': [14.8, 58.5, 26.7]
  }, {
    'Name': 'Werther (Westf.)',
    'Data': [12.1, 57.5, 30.3]
  }, {
    'Name': 'Bünde',
    'Data': [10.6, 56.5, 32.9]
  }, {
    'Name': 'Enger',
    'Data': [12.9, 59.7, 27.4]
  }, {
    'Name': 'Herford',
    'Data': [14.2, 48.1, 37.6]
  }, {
    'Name': 'Hiddenhausen',
    'Data': [9.8, 62.5, 27.8]
  }, {
    'Name': 'Kirchlengern',
    'Data': [8.7, 64.2, 27.1]
  }, {
    'Name': 'Löhne',
    'Data': [8.5, 61.7, 29.8]
  }, {
    'Name': 'Rödinghausen',
    'Data': [8.8, 67.6, 23.5]
  }, {
    'Name': 'Spenge',
    'Data': [10.3, 62.7, 27]
  }, {
    'Name': 'Vlotho',
    'Data': [8.6, 62.8, 28.7]
  }, {
    'Name': 'Bad Driburg',
    'Data': [61.1, 19.9, 19]
  }, {
    'Name': 'Beverungen',
    'Data': [62.9, 21.7, 15.4]
  }, {
    'Name': 'Borgentreich',
    'Data': [75.4, 14.7, 9.9]
  }, {
    'Name': 'Brakel',
    'Data': [61.8, 16.5, 21.7]
  }, {
    'Name': 'Höxter',
    'Data': [57.6, 23.6, 18.8]
  }, {
    'Name': 'Marienmünster',
    'Data': [76.5, 14.1, 9.4]
  }, {
    'Name': 'Nieheim',
    'Data': [71.8, 14.9, 13.3]
  }, {
    'Name': 'Steinheim',
    'Data': [57.6, 23.3, 19.1]
  }, {
    'Name': 'Warburg',
    'Data': [62, 19.6, 18.4]
  }, {
    'Name': 'Willebadessen',
    'Data': [66.8, 11.8, 21.4]
  }, {
    'Name': 'Augustdorf',
    'Data': [10.7, 35, 54.3]
  }, {
    'Name': 'Bad Salzuflen',
    'Data': [11.6, 51.3, 37]
  }, {
    'Name': 'Barntrup',
    'Data': [9.9, 59.7, 30.3]
  }, {
    'Name': 'Blomberg',
    'Data': [10, 57.3, 32.7]
  }, {
    'Name': 'Detmold',
    'Data': [13.3, 45.7, 41]
  }, {
    'Name': 'Dörentrup',
    'Data': [7.2, 66.7, 26]
  }, {
    'Name': 'Extertal',
    'Data': [9.2, 62, 28.8]
  }, {
    'Name': 'Horn-Bad Meinberg',
    'Data': [15.7, 49.4, 34.9]
  }, {
    'Name': 'Kalletal',
    'Data': [6.4, 61.8, 31.7]
  }, {
    'Name': 'Lage',
    'Data': [9.1, 48.9, 41.9]
  }, {
    'Name': 'Lemgo',
    'Data': [10.5, 54.1, 35.4]
  }, {
    'Name': 'Leopoldshöhe',
    'Data': [11.9, 49.3, 38.8]
  }, {
    'Name': 'Lügde',
    'Data': [38.7, 42.1, 19.2]
  }, {
    'Name': 'Oerlinghausen',
    'Data': [14.6, 49.1, 36.3]
  }, {
    'Name': 'Schieder-Schwalenberg',
    'Data': [14.7, 56.8, 28.5]
  }, {
    'Name': 'Schlangen',
    'Data': [21.3, 51.2, 27.6]
  }, {
    'Name': 'Bad Oeynhausen',
    'Data': [9.2, 56.8, 34]
  }, {
    'Name': 'Espelkamp',
    'Data': [8.6, 46.1, 45.3]
  }, {
    'Name': 'Hille',
    'Data': [4.6, 74.5, 20.8]
  }, {
    'Name': 'Hüllhorst',
    'Data': [5.1, 69.7, 25.2]
  }, {
    'Name': 'Lübbecke',
    'Data': [7.8, 61, 31.2]
  }, {
    'Name': 'Minden',
    'Data': [11.6, 52.6, 35.8]
  }, {
    'Name': 'Petershagen',
    'Data': [5.8, 69.2, 25]
  }, {
    'Name': 'Porta Westfalica',
    'Data': [7.3, 61.2, 31.5]
  }, {
    'Name': 'Preußisch Oldendorf',
    'Data': [5.4, 66.8, 27.8]
  }, {
    'Name': 'Rahden',
    'Data': [6.5, 70.5, 23]
  }, {
    'Name': 'Stemwede',
    'Data': [6.3, 74.8, 18.9]
  }, {
    'Name': 'Altenbeken',
    'Data': [63.4, 18.8, 17.8]
  }, {
    'Name': 'Bad Lippspringe',
    'Data': [48.1, 24.8, 27.1]
  }, {
    'Name': 'Borchen',
    'Data': [64.5, 16.8, 18.6]
  }, {
    'Name': 'Büren',
    'Data': [67.9, 16.6, 15.5]
  }, {
    'Name': 'Delbrück',
    'Data': [68.8, 12.3, 18.9]
  }, {
    'Name': 'Hövelhof',
    'Data': [61.4, 16.8, 21.8]
  }, {
    'Name': 'Lichtenau',
    'Data': [73.4, 12.8, 13.9]
  }, {
    'Name': 'Paderborn',
    'Data': [52.3, 19.6, 28.1]
  }, {
    'Name': 'Salzkotten',
    'Data': [66.5, 14.7, 18.8]
  }, {
    'Name': 'Wünnenberg',
    'Data': [72.6, 13.5, 13.9]
  }, {
    'Name': 'Bochum',
    'Data': [32.8, 32.6, 34.6]
  }, {
    'Name': 'Dortmund',
    'Data': [28.5, 32.2, 39.3]
  }, {
    'Name': 'Hagen',
    'Data': [29.1, 34.2, 36.7]
  }, {
    'Name': 'Hamm',
    'Data': [37.4, 32.3, 30.3]
  }, {
    'Name': 'Herne',
    'Data': [31.8, 32, 36.1]
  }, {
    'Name': 'Breckerfeld',
    'Data': [21.7, 51.7, 26.6]
  }, {
    'Name': 'Ennepetal',
    'Data': [19.2, 44.5, 36.3]
  }, {
    'Name': 'Gevelsberg',
    'Data': [19.7, 44.3, 36]
  }, {
    'Name': 'Hattingen',
    'Data': [29.9, 37.6, 32.5]
  }, {
    'Name': 'Herdecke',
    'Data': [24.9, 41.4, 33.8]
  }, {
    'Name': 'Schwelm',
    'Data': [20.2, 40.8, 39]
  }, {
    'Name': 'Sprockhövel',
    'Data': [20.3, 48.1, 31.6]
  }, {
    'Name': 'Wetter (Ruhr)',
    'Data': [22.2, 42.1, 35.7]
  }, {
    'Name': 'Witten',
    'Data': [24.8, 39.3, 35.9]
  }, {
    'Name': 'Arnsberg',
    'Data': [63.1, 18.3, 18.7]
  }, {
    'Name': 'Bestwig',
    'Data': [67.8, 11.6, 20.5]
  }, {
    'Name': 'Brilon',
    'Data': [67.1, 16.5, 16.4]
  }, {
    'Name': 'Eslohe (Sauerland)',
    'Data': [78.5, 10.1, 11.4]
  }, {
    'Name': 'Hallenberg',
    'Data': [74.8, 15.4, 9.8]
  }, {
    'Name': 'Marsberg',
    'Data': [66.2, 19.6, 14.3]
  }, {
    'Name': 'Medebach',
    'Data': [70.8, 15.6, 13.6]
  }, {
    'Name': 'Meschede',
    'Data': [65.2, 13.6, 21.2]
  }, {
    'Name': 'Olsberg',
    'Data': [71, 13.8, 15.2]
  }, {
    'Name': 'Schmallenberg',
    'Data': [77.3, 10.2, 12.5]
  }, {
    'Name': 'Sundern (Sauerland)',
    'Data': [69.7, 13.9, 16.4]
  }, {
    'Name': 'Winterberg',
    'Data': [71.7, 14.4, 13.9]
  }, {
    'Name': 'Altena',
    'Data': [22, 46.2, 31.8]
  }, {
    'Name': 'Balve',
    'Data': [64.8, 19.7, 15.5]
  }, {
    'Name': 'Halver',
    'Data': [15.9, 47, 37.1]
  }, {
    'Name': 'Hemer',
    'Data': [30.2, 40.4, 29.4]
  }, {
    'Name': 'Herscheid',
    'Data': [19.1, 50.6, 30.3]
  }, {
    'Name': 'Iserlohn',
    'Data': [32.5, 35.6, 31.9]
  }, {
    'Name': 'Kierspe',
    'Data': [19.4, 41.4, 39.2]
  }, {
    'Name': 'Lüdenscheid',
    'Data': [21.6, 37, 41.3]
  }, {
    'Name': 'Meinerzhagen',
    'Data': [19.7, 39.9, 40.4]
  }, {
    'Name': 'Menden (Sauerland)',
    'Data': [57.2, 22.6, 20.2]
  }, {
    'Name': 'Nachrodt-Wiblingwerde',
    'Data': [20.9, 45.5, 33.5]
  }, {
    'Name': 'Neuenrade',
    'Data': [36.4, 35, 28.7]
  }, {
    'Name': 'Plettenberg',
    'Data': [28.2, 39.7, 32.1]
  }, {
    'Name': 'Schalksmühle',
    'Data': [19.7, 50.2, 30]
  }, {
    'Name': 'Werdohl',
    'Data': [23.1, 35.8, 41.1]
  }, {
    'Name': 'Attendorn',
    'Data': [66.4, 15.7, 17.9]
  }, {
    'Name': 'Drolshagen',
    'Data': [73.1, 13.2, 13.6]
  }, {
    'Name': 'Finnentrop',
    'Data': [73.1, 12.2, 14.7]
  }, {
    'Name': 'Kirchhundem',
    'Data': [76.7, 11.2, 12.2]
  }, {
    'Name': 'Lennestadt',
    'Data': [73.6, 10.3, 16.2]
  }, {
    'Name': 'Olpe',
    'Data': [64.3, 14.9, 20.9]
  }, {
    'Name': 'Wenden',
    'Data': [70.3, 15.7, 13.9]
  }, {
    'Name': 'Bad Berleburg',
    'Data': [10.8, 72.2, 17]
  }, {
    'Name': 'Burbach',
    'Data': [11.2, 57.6, 31.2]
  }, {
    'Name': 'Erndtebrück',
    'Data': [12.4, 74.2, 13.4]
  }, {
    'Name': 'Freudenberg',
    'Data': [19.1, 60.5, 20.4]
  }, {
    'Name': 'Hilchenbach',
    'Data': [17.7, 60.1, 22.2]
  }, {
    'Name': 'Kreuztal',
    'Data': [18, 55.1, 26.9]
  }, {
    'Name': 'Bad Laasphe',
    'Data': [9, 73.3, 17.7]
  }, {
    'Name': 'Netphen',
    'Data': [43.5, 37.5, 18.9]
  }, {
    'Name': 'Neunkirchen',
    'Data': [15.7, 53.2, 31.1]
  }, {
    'Name': 'Siegen',
    'Data': [21.4, 46.4, 32.1]
  }, {
    'Name': 'Wilnsdorf',
    'Data': [34.9, 45.6, 19.6]
  }, {
    'Name': 'Anröchte',
    'Data': [65.5, 17.9, 16.6]
  }, {
    'Name': 'Bad Sassendorf',
    'Data': [35.3, 44, 20.6]
  }, {
    'Name': 'Ense',
    'Data': [69.1, 17.7, 13.2]
  }, {
    'Name': 'Erwitte',
    'Data': [64.3, 19.6, 16.2]
  }, {
    'Name': 'Geseke',
    'Data': [64, 16.5, 19.6]
  }, {
    'Name': 'Lippetal',
    'Data': [68.3, 18.4, 13.3]
  }, {
    'Name': 'Lippstadt',
    'Data': [52.6, 23.4, 24.1]
  }, {
    'Name': 'Möhnesee',
    'Data': [54.1, 23.5, 22.5]
  }, {
    'Name': 'Rüthen',
    'Data': [72, 14.5, 13.5]
  }, {
    'Name': 'Soest',
    'Data': [37.1, 37.9, 25]
  }, {
    'Name': 'Warstein',
    'Data': [66.8, 18, 15.3]
  }, {
    'Name': 'Welver',
    'Data': [38.1, 45.3, 16.6]
  }, {
    'Name': 'Werl',
    'Data': [54.8, 21.2, 24.1]
  }, {
    'Name': 'Wickede (Ruhr)',
    'Data': [60.2, 20.7, 19.1]
  }, {
    'Name': 'Bergkamen',
    'Data': [26.7, 40.7, 32.7]
  }, {
    'Name': 'Bönen',
    'Data': [23.7, 42.8, 33.5]
  }, {
    'Name': 'Fröndenberg/Ruhr',
    'Data': [37.7, 40, 22.3]
  }, {
    'Name': 'Holzwickede',
    'Data': [30.2, 42.3, 27.5]
  }, {
    'Name': 'Kamen',
    'Data': [25.8, 44.9, 29.3]
  }, {
    'Name': 'Lünen',
    'Data': [34.1, 32.5, 33.5]
  }, {
    'Name': 'Schwerte',
    'Data': [28.9, 40.1, 30.9]
  }, {
    'Name': 'Selm',
    'Data': [49.1, 30.1, 20.8]
  }, {
    'Name': 'Unna',
    'Data': [32, 41.1, 26.9]
  }, {
    'Name': 'Werne',
    'Data': [54.7, 25.3, 20]
  }
];

var datenBeschäftigteKommunen = [
  {
    'Name': 'Jahre',
    'Data': ['Land- und Forstwirtschaft, Fischerei', 'Produzierendes Gewerbe', 'Handel, Gastgewerbe, Verkehr', 'Sonstige Dienstleistungen']
  }, {
    'Name': 'Bottrop',
    'Data': [139, 10352, 6995, 14903]
  }, {
    'Name': 'Gelsenkirchen',
    'Data': [47, 20692, 14318, 41089]
  }, {
    'Name': 'Münster',
    'Data': [640, 20460, 28300, 103947]
  }, {
    'Name': 'Ahaus',
    'Data': [154, 7271, 3484, 6742]
  }, {
    'Name': 'Bocholt',
    'Data': [126, 12019, 7179, 9847]
  }, {
    'Name': 'Borken',
    'Data': [314, 5390, 3766, 6964]
  }, {
    'Name': 'Gescher',
    'Data': [33, 2421, 786, 3751]
  }, {
    'Name': 'Gronau',
    'Data': [59, 5277, 4255, 6229]
  }, {
    'Name': 'Heek',
    'Data': [38, 1413, 305, 481]
  }, {
    'Name': 'Heiden',
    'Data': [96, 962, 453, 481]
  }, {
    'Name': 'Isselburg',
    'Data': [101, 1649, 869, 680]
  }, {
    'Name': 'Legden',
    'Data': [24, 745, 396, 438]
  }, {
    'Name': 'Raesfeld',
    'Data': [80, 1123, 610, 544]
  }, {
    'Name': 'Reken',
    'Data': [95, 1447, 647, 1658]
  }, {
    'Name': 'Rhede',
    'Data': [123, 2049, 1550, 2202]
  }, {
    'Name': 'Schöppingen',
    'Data': [43, 775, 396, 501]
  }, {
    'Name': 'Stadtlohn',
    'Data': [65, 3884, 1611, 2105]
  }, {
    'Name': 'Südlohn',
    'Data': [91, 1535, 650, 497]
  }, {
    'Name': 'Velen',
    'Data': [72, 1167, 523, 755]
  }, {
    'Name': 'Vreden',
    'Data': [60, 5873, 1087, 2064]
  }, {
    'Name': 'Ascheberg',
    'Data': [198, 1100, 1010, 1442]
  }, {
    'Name': 'Billerbeck',
    'Data': [122, 1140, 760, 895]
  }, {
    'Name': 'Coesfeld',
    'Data': [133, 4178, 3409, 8581]
  }, {
    'Name': 'Dülmen',
    'Data': [260, 3961, 2805, 5131]
  }, {
    'Name': 'Havixbeck',
    'Data': [32, 338, 329, 1830]
  }, {
    'Name': 'Lüdinghausen',
    'Data': [111, 2262, 2057, 2717]
  }, {
    'Name': 'Nordkirchen',
    'Data': [37, 627, 638, 1921]
  }, {
    'Name': 'Nottuln',
    'Data': [37, 1107, 1127, 1739]
  }, {
    'Name': 'Olfen',
    'Data': [87, 1187, 633, 786]
  }, {
    'Name': 'Rosendahl',
    'Data': [117, 1693, 507, 442]
  }, {
    'Name': 'Senden',
    'Data': [116, 1348, 1605, 1216]
  }, {
    'Name': 'Castrop-Rauxel',
    'Data': [47, 3331, 3700, 6928]
  }, {
    'Name': 'Datteln',
    'Data': [85, 1935, 1918, 4854]
  }, {
    'Name': 'Dorsten',
    'Data': [200, 3764, 4905, 7636]
  }, {
    'Name': 'Gladbeck',
    'Data': [4, 5338, 4094, 6502]
  }, {
    'Name': 'Haltern am See',
    'Data': [65, 2017, 1868, 3092]
  }, {
    'Name': 'Herten',
    'Data': [57, 4069, 4358, 8907]
  }, {
    'Name': 'Marl',
    'Data': [56, 8621, 3949, 16104]
  }, {
    'Name': 'Oer-Erkenschwick',
    'Data': [26, 1482, 1045, 1591]
  }, {
    'Name': 'Recklinghausen',
    'Data': [59, 6888, 7242, 22724]
  }, {
    'Name': 'Waltrop',
    'Data': [150, 1232, 1374, 2792]
  }, {
    'Name': 'Altenberge',
    'Data': [67, 1791, 867, 941]
  }, {
    'Name': 'Emsdetten',
    'Data': [43, 5753, 3353, 5155]
  }, {
    'Name': 'Greven',
    'Data': [85, 2970, 5508, 5241]
  }, {
    'Name': 'Hörstel',
    'Data': [183, 2946, 1202, 1416]
  }, {
    'Name': 'Hopsten',
    'Data': [27, 789, 236, 337]
  }, {
    'Name': 'Horstmar',
    'Data': [7, 547, 154, 426]
  }, {
    'Name': 'Ibbenbüren',
    'Data': [59, 6606, 5006, 6718]
  }, {
    'Name': 'Ladbergen',
    'Data': [23, 496, 1068, 498]
  }, {
    'Name': 'Laer',
    'Data': [34, 424, 258, 271]
  }, {
    'Name': 'Lengerich',
    'Data': [133, 4428, 1380, 3137]
  }, {
    'Name': 'Lienen',
    'Data': [25, 627, 227, 399]
  }, {
    'Name': 'Lotte',
    'Data': [31, 1452, 1411, 964]
  }, {
    'Name': 'Metelen',
    'Data': [9, 465, 185, 342]
  }, {
    'Name': 'Mettingen',
    'Data': [15, 2375, 457, 937]
  }, {
    'Name': 'Neuenkirchen',
    'Data': [38, 1347, 991, 704]
  }, {
    'Name': 'Nordwalde',
    'Data': [58, 697, 748, 697]
  }, {
    'Name': 'Ochtrup',
    'Data': [73, 2712, 1399, 2233]
  }, {
    'Name': 'Recke',
    'Data': [42, 875, 507, 874]
  }, {
    'Name': 'Rheine',
    'Data': [62, 6157, 7632, 13631]
  }, {
    'Name': 'Saerbeck',
    'Data': [113, 947, 499, 421]
  }, {
    'Name': 'Steinfurt',
    'Data': [105, 1827, 1993, 6256]
  }, {
    'Name': 'Tecklenburg',
    'Data': [21, 469, 306, 2833]
  }, {
    'Name': 'Westerkappeln',
    'Data': [28, 896, 1242, 740]
  }, {
    'Name': 'Wettringen',
    'Data': [59, 900, 485, 521]
  }, {
    'Name': 'Ahlen',
    'Data': [119, 5124, 2923, 6078]
  }, {
    'Name': 'Beckum',
    'Data': [57, 6715, 2351, 5450]
  }, {
    'Name': 'Beelen',
    'Data': [10, 1013, 517, 564]
  }, {
    'Name': 'Drensteinfurt',
    'Data': [149, 648, 553, 857]
  }, {
    'Name': 'Ennigerloh',
    'Data': [59, 2970, 987, 1447]
  }, {
    'Name': 'Everswinkel',
    'Data': [51, 1270, 697, 974]
  }, {
    'Name': 'Oelde',
    'Data': [59, 6577, 1846, 2664]
  }, {
    'Name': 'Ostbevern',
    'Data': [36, 1470, 500, 696]
  }, {
    'Name': 'Sassenberg',
    'Data': [95, 2573, 447, 737]
  }, {
    'Name': 'Sendenhorst',
    'Data': [75, 2072, 562, 1524]
  }, {
    'Name': 'Telgte',
    'Data': [95, 1714, 1030, 2791]
  }, {
    'Name': 'Wadersloh',
    'Data': [78, 1415, 603, 815]
  }, {
    'Name': 'Warendorf',
    'Data': [175, 2602, 2783, 7376]
  }, {
    'Name': 'Bielefeld',
    'Data': [233, 32006, 32678, 75924]
  }, {
    'Name': 'Borgholzhausen',
    'Data': [23, 1914, 887, 407]
  }, {
    'Name': 'Gütersloh',
    'Data': [149, 15237, 8331, 26321]
  }, {
    'Name': 'Halle (Westf.)',
    'Data': [36, 4918, 3875, 3509]
  }, {
    'Name': 'Harsewinkel',
    'Data': [34, 6360, 2503, 2049]
  }, {
    'Name': 'Herzebrock-Clarholz',
    'Data': [58, 3734, 1346, 1242]
  }, {
    'Name': 'Langenberg',
    'Data': [58, 796, 402, 306]
  }, {
    'Name': 'Rheda-Wiedenbrück',
    'Data': [59, 7406, 4177, 6205]
  }, {
    'Name': 'Rietberg',
    'Data': [132, 6416, 2992, 1783]
  }, {
    'Name': 'Schloß Holte-Stukenbrock',
    'Data': [36, 4663, 1683, 2171]
  }, {
    'Name': 'Steinhagen',
    'Data': [60, 3540, 1367, 2380]
  }, {
    'Name': 'Verl',
    'Data': [92, 8876, 2348, 2483]
  }, {
    'Name': 'Versmold',
    'Data': [120, 3479, 2443, 1542]
  }, {
    'Name': 'Werther (Westf.)',
    'Data': [88, 1367, 523, 792]
  }, {
    'Name': 'Bünde',
    'Data': [34, 6410, 3416, 4779]
  }, {
    'Name': 'Enger',
    'Data': [25, 2565, 820, 1730]
  }, {
    'Name': 'Herford',
    'Data': [111, 10224, 7601, 14650]
  }, {
    'Name': 'Hiddenhausen',
    'Data': [11, 1906, 1127, 1761]
  }, {
    'Name': 'Kirchlengern',
    'Data': [22, 3753, 1264, 1139]
  }, {
    'Name': 'Löhne',
    'Data': [70, 5085, 3641, 3386]
  }, {
    'Name': 'Rödinghausen',
    'Data': [36, 2016, 396, 574]
  }, {
    'Name': 'Spenge',
    'Data': [38, 1254, 699, 752]
  }, {
    'Name': 'Vlotho',
    'Data': [35, 3797, 1373, 1302]
  }, {
    'Name': 'Bad Driburg',
    'Data': [20, 1312, 1643, 3401]
  }, {
    'Name': 'Beverungen',
    'Data': [17, 1483, 595, 831]
  }, {
    'Name': 'Borgentreich',
    'Data': [45, 716, 303, 399]
  }, {
    'Name': 'Brakel',
    'Data': [63, 2061, 1040, 2469]
  }, {
    'Name': 'Höxter',
    'Data': [60, 3333, 2193, 4950]
  }, {
    'Name': 'Marienmünster',
    'Data': [4, 618, 107, 323]
  }, {
    'Name': 'Nieheim',
    'Data': [45, 418, 184, 361]
  }, {
    'Name': 'Steinheim',
    'Data': [37, 1160, 1144, 1048]
  }, {
    'Name': 'Warburg',
    'Data': [44, 3904, 1583, 3352]
  }, {
    'Name': 'Willebadessen',
    'Data': [73, 277, 193, 357]
  }, {
    'Name': 'Augustdorf',
    'Data': [0, 1059, 275, 871]
  }, {
    'Name': 'Bad Salzuflen',
    'Data': [202, 6234, 4632, 6300]
  }, {
    'Name': 'Barntrup',
    'Data': [28, 1162, 360, 632]
  }, {
    'Name': 'Blomberg',
    'Data': [31, 4855, 1283, 1244]
  }, {
    'Name': 'Detmold',
    'Data': [84, 6868, 4851, 19023]
  }, {
    'Name': 'Dörentrup',
    'Data': [54, 420, 362, 1159]
  }, {
    'Name': 'Extertal',
    'Data': [39, 1682, 607, 687]
  }, {
    'Name': 'Horn-Bad Meinberg',
    'Data': [59, 1192, 901, 1490]
  }, {
    'Name': 'Kalletal',
    'Data': [41, 1094, 404, 724]
  }, {
    'Name': 'Lage',
    'Data': [39, 2254, 1688, 2151]
  }, {
    'Name': 'Lemgo',
    'Data': [102, 5909, 2767, 7972]
  }, {
    'Name': 'Leopoldshöhe',
    'Data': [74, 2364, 1120, 942]
  }, {
    'Name': 'Lügde',
    'Data': [18, 705, 517, 375]
  }, {
    'Name': 'Oerlinghausen',
    'Data': [7, 2191, 433, 1087]
  }, {
    'Name': 'Schieder-Schwalenberg',
    'Data': [11, 435, 258, 635]
  }, {
    'Name': 'Schlangen',
    'Data': [8, 723, 158, 550]
  }, {
    'Name': 'Bad Oeynhausen',
    'Data': [40, 5089, 3730, 13774]
  }, {
    'Name': 'Espelkamp',
    'Data': [30, 5901, 1250, 3799]
  }, {
    'Name': 'Hille',
    'Data': [50, 1260, 712, 986]
  }, {
    'Name': 'Hüllhorst',
    'Data': [32, 1489, 884, 1047]
  }, {
    'Name': 'Lübbecke',
    'Data': [18, 3839, 2918, 6494]
  }, {
    'Name': 'Minden',
    'Data': [31, 11052, 8197, 18355]
  }, {
    'Name': 'Petershagen',
    'Data': [88, 1292, 833, 1649]
  }, {
    'Name': 'Porta Westfalica',
    'Data': [16, 4583, 3848, 2890]
  }, {
    'Name': 'Preußisch Oldendorf',
    'Data': [24, 1323, 864, 704]
  }, {
    'Name': 'Rahden',
    'Data': [200, 2205, 774, 1354]
  }, {
    'Name': 'Stemwede',
    'Data': [86, 3581, 649, 1529]
  }, {
    'Name': 'Altenbeken',
    'Data': [4, 352, 184, 535]
  }, {
    'Name': 'Bad Lippspringe',
    'Data': [38, 1281, 666, 2168]
  }, {
    'Name': 'Borchen',
    'Data': [68, 761, 428, 1061]
  }, {
    'Name': 'Büren',
    'Data': [63, 2324, 1673, 2488]
  }, {
    'Name': 'Delbrück',
    'Data': [178, 4465, 1703, 1712]
  }, {
    'Name': 'Hövelhof',
    'Data': [27, 3460, 579, 1235]
  }, {
    'Name': 'Lichtenau',
    'Data': [104, 1033, 266, 498]
  }, {
    'Name': 'Paderborn',
    'Data': [83, 17996, 14095, 37542]
  }, {
    'Name': 'Salzkotten',
    'Data': [132, 2934, 1354, 2275]
  }, {
    'Name': 'Wünnenberg',
    'Data': [90, 1669, 1236, 912]
  }, {
    'Name': 'Bochum',
    'Data': [37, 27910, 28804, 71407]
  }, {
    'Name': 'Dortmund',
    'Data': [106, 40790, 50487, 121232]
  }, {
    'Name': 'Hagen',
    'Data': [133, 19680, 16216, 31929]
  }, {
    'Name': 'Hamm',
    'Data': [79, 13876, 14199, 25812]
  }, {
    'Name': 'Herne',
    'Data': [25, 11178, 9602, 22601]
  }, {
    'Name': 'Breckerfeld',
    'Data': [8, 719, 360, 489]
  }, {
    'Name': 'Ennepetal',
    'Data': [24, 7801, 2788, 2449]
  }, {
    'Name': 'Gevelsberg',
    'Data': [6, 4047, 1532, 3208]
  }, {
    'Name': 'Hattingen',
    'Data': [57, 3079, 2954, 5711]
  }, {
    'Name': 'Herdecke',
    'Data': [5, 1423, 1202, 3710]
  }, {
    'Name': 'Schwelm',
    'Data': [11, 3248, 2218, 4397]
  }, {
    'Name': 'Sprockhövel',
    'Data': [45, 3013, 1388, 2333]
  }, {
    'Name': 'Wetter (Ruhr)',
    'Data': [28, 5116, 1449, 4534]
  }, {
    'Name': 'Witten',
    'Data': [62, 11294, 6479, 13564]
  }, {
    'Name': 'Arnsberg',
    'Data': [115, 11121, 4534, 12972]
  }, {
    'Name': 'Bestwig',
    'Data': [95, 1641, 749, 831]
  }, {
    'Name': 'Brilon',
    'Data': [52, 5128, 2291, 4414]
  }, {
    'Name': 'Eslohe (Sauerland)',
    'Data': [75, 1627, 384, 583]
  }, {
    'Name': 'Hallenberg',
    'Data': [0, 1157, 416, 0]
  }, {
    'Name': 'Marsberg',
    'Data': [43, 2521, 963, 2904]
  }, {
    'Name': 'Medebach',
    'Data': [10, 1070, 660, 417]
  }, {
    'Name': 'Meschede',
    'Data': [64, 4982, 2372, 5239]
  }, {
    'Name': 'Olsberg',
    'Data': [20, 2500, 624, 3078]
  }, {
    'Name': 'Schmallenberg',
    'Data': [170, 3452, 1937, 3679]
  }, {
    'Name': 'Sundern (Sauerland)',
    'Data': [99, 4987, 1427, 1965]
  }, {
    'Name': 'Winterberg',
    'Data': [51, 786, 1521, 1483]
  }, {
    'Name': 'Altena',
    'Data': [0, 3356, 0, 1410]
  }, {
    'Name': 'Balve',
    'Data': [39, 1523, 476, 523]
  }, {
    'Name': 'Halver',
    'Data': [42, 4131, 863, 1018]
  }, {
    'Name': 'Hemer',
    'Data': [16, 6577, 1565, 3846]
  }, {
    'Name': 'Herscheid',
    'Data': [12, 1257, 246, 278]
  }, {
    'Name': 'Iserlohn',
    'Data': [48, 13317, 5845, 15481]
  }, {
    'Name': 'Kierspe',
    'Data': [14, 2526, 454, 1868]
  }, {
    'Name': 'Lüdenscheid',
    'Data': [45, 15965, 5555, 15083]
  }, {
    'Name': 'Meinerzhagen',
    'Data': [18, 5085, 1559, 1323]
  }, {
    'Name': 'Menden (Sauerland)',
    'Data': [31, 7232, 3258, 4041]
  }, {
    'Name': 'Nachrodt-Wiblingwerde',
    'Data': [16, 591, 185, 234]
  }, {
    'Name': 'Neuenrade',
    'Data': [60, 2538, 439, 659]
  }, {
    'Name': 'Plettenberg',
    'Data': [19, 8577, 1359, 2409]
  }, {
    'Name': 'Schalksmühle',
    'Data': [8, 2830, 392, 576]
  }, {
    'Name': 'Werdohl',
    'Data': [6, 4099, 922, 1638]
  }, {
    'Name': 'Attendorn',
    'Data': [11, 8721, 1523, 2998]
  }, {
    'Name': 'Drolshagen',
    'Data': [19, 2440, 403, 536]
  }, {
    'Name': 'Finnentrop',
    'Data': [46, 3597, 605, 663]
  }, {
    'Name': 'Kirchhundem',
    'Data': [76, 2209, 274, 702]
  }, {
    'Name': 'Lennestadt',
    'Data': [55, 4873, 1287, 3068]
  }, {
    'Name': 'Olpe',
    'Data': [54, 4704, 2063, 7378]
  }, {
    'Name': 'Wenden',
    'Data': [12, 3312, 1127, 1042]
  }, {
    'Name': 'Bad Berleburg',
    'Data': [115, 3050, 1004, 2759]
  }, {
    'Name': 'Burbach',
    'Data': [9, 4620, 1215, 1150]
  }, {
    'Name': 'Erndtebrück',
    'Data': [14, 2420, 411, 710]
  }, {
    'Name': 'Freudenberg',
    'Data': [0, 2052, 0, 1556]
  }, {
    'Name': 'Hilchenbach',
    'Data': [0, 3592, 0, 1283]
  }, {
    'Name': 'Kreuztal',
    'Data': [55, 6348, 2034, 2240]
  }, {
    'Name': 'Bad Laasphe',
    'Data': [10, 2295, 630, 971]
  }, {
    'Name': 'Netphen',
    'Data': [13, 3897, 861, 2533]
  }, {
    'Name': 'Neunkirchen',
    'Data': [0, 3683, 1333, 0]
  }, {
    'Name': 'Siegen',
    'Data': [27, 11774, 9846, 24605]
  }, {
    'Name': 'Wilnsdorf',
    'Data': [51, 3462, 1673, 914]
  }, {
    'Name': 'Anröchte',
    'Data': [35, 1682, 739, 579]
  }, {
    'Name': 'Bad Sassendorf',
    'Data': [46, 520, 492, 1707]
  }, {
    'Name': 'Ense',
    'Data': [10, 2592, 372, 631]
  }, {
    'Name': 'Erwitte',
    'Data': [68, 2044, 1244, 996]
  }, {
    'Name': 'Geseke',
    'Data': [34, 1966, 967, 1542]
  }, {
    'Name': 'Lippetal',
    'Data': [93, 615, 527, 785]
  }, {
    'Name': 'Lippstadt',
    'Data': [820, 13444, 4735, 14671]
  }, {
    'Name': 'Möhnesee',
    'Data': [50, 816, 626, 1021]
  }, {
    'Name': 'Rüthen',
    'Data': [60, 1529, 406, 544]
  }, {
    'Name': 'Soest',
    'Data': [72, 4458, 6116, 10461]
  }, {
    'Name': 'Warstein',
    'Data': [44, 5445, 1149, 2917]
  }, {
    'Name': 'Welver',
    'Data': [153, 264, 256, 512]
  }, {
    'Name': 'Werl',
    'Data': [77, 3003, 3121, 3210]
  }, {
    'Name': 'Wickede (Ruhr)',
    'Data': [18, 2398, 564, 1298]
  }, {
    'Name': 'Bergkamen',
    'Data': [17, 3360, 2687, 3318]
  }, {
    'Name': 'Bönen',
    'Data': [22, 2574, 2722, 1935]
  }, {
    'Name': 'Fröndenberg/Ruhr',
    'Data': [59, 1453, 939, 1377]
  }, {
    'Name': 'Holzwickede',
    'Data': [0, 0, 4660, 3356]
  }, {
    'Name': 'Kamen',
    'Data': [19, 2885, 2826, 4783]
  }, {
    'Name': 'Lünen',
    'Data': [50, 6724, 5103, 9990]
  }, {
    'Name': 'Schwerte',
    'Data': [65, 4843, 3388, 4926]
  }, {
    'Name': 'Selm',
    'Data': [100, 1371, 1049, 1974]
  }, {
    'Name': 'Unna',
    'Data': [47, 5218, 7036, 13249]
  }, {
    'Name': 'Werne',
    'Data': [41, 3512, 3758, 2903]
  }
];

var datenPendlersaldoKommunen = [
 {
   'Name': 'Jahre',
   'Data': ['2011', '2013', '2014']
 }, {
   'Name': 'Bottrop',
   'Data': [-7303, -7111, -8037]
 }, {
   'Name': 'Gelsenkirchen',
   'Data': [1656, 3340, 2972]
 }, {
   'Name': 'Münster',
   'Data': [53978, 54303, 55285]
 }, {
   'Name': 'Ahaus',
   'Data': [2853, 3363, 3763]
 }, {
   'Name': 'Bocholt',
   'Data': [3640, 3239, 3292]
 }, {
   'Name': 'Borken',
   'Data': [1429, 1516, 1960]
 }, {
   'Name': 'Gescher',
   'Data': [-1083, -249, -113]
 }, {
   'Name': 'Gronau',
   'Data': [1593, 554, 259]
 }, {
   'Name': 'Heek',
   'Data': [-1387, -1228, -1237]
 }, {
   'Name': 'Heiden',
   'Data': [-1217, -1338, -1366]
 }, {
   'Name': 'Isselburg',
   'Data': [-970, -932, -927]
 }, {
   'Name': 'Legden',
   'Data': [-839, -1147, -1088]
 }, {
   'Name': 'Raesfeld',
   'Data': [-2231, -2118, -2116]
 }, {
   'Name': 'Reken',
   'Data': [-2184, -2018, -2100]
 }, {
   'Name': 'Rhede',
   'Data': [-2782, -2120, -2128]
 }, {
   'Name': 'Schöppingen',
   'Data': [-1115, -1060, -1081]
 }, {
   'Name': 'Stadtlohn',
   'Data': [-372, -60, -268]
 }, {
   'Name': 'Südlohn',
   'Data': [-677, -701, -750]
 }, {
   'Name': 'Velen',
   'Data': [-2901, -3032, -3033]
 }, {
   'Name': 'Vreden',
   'Data': [-396, -63, -10]
 }, {
   'Name': 'Ascheberg',
   'Data': [-2298, -2587, -2316]
 }, {
   'Name': 'Billerbeck',
   'Data': [-1762, -1803, -1832]
 }, {
   'Name': 'Coesfeld',
   'Data': [2877, 2844, 3187]
 }, {
   'Name': 'Dülmen',
   'Data': [-6642, -6532, -6585]
 }, {
   'Name': 'Havixbeck',
   'Data': [-2398, -2073, -2197]
 }, {
   'Name': 'Lüdinghausen',
   'Data': [-1618, -1497, -1376]
 }, {
   'Name': 'Nordkirchen',
   'Data': [-1463, -409, -497]
 }, {
   'Name': 'Nottuln',
   'Data': [-4225, -4274, -4315]
 }, {
   'Name': 'Olfen',
   'Data': [-1877, -2223, -2173]
 }, {
   'Name': 'Rosendahl',
   'Data': [-2103, -2060, -2081]
 }, {
   'Name': 'Senden',
   'Data': [-3939, -4072, -4320]
 }, {
   'Name': 'Castrop-Rauxel',
   'Data': [-12073, -11804, -11748]
 }, {
   'Name': 'Datteln',
   'Data': [-2470, -3272, -3269]
 }, {
   'Name': 'Dorsten',
   'Data': [-11022, -10459, -10335]
 }, {
   'Name': 'Gladbeck',
   'Data': [-8470, -9305, -9249]
 }, {
   'Name': 'Haltern am See',
   'Data': [-7148, -7388, -7472]
 }, {
   'Name': 'Herten',
   'Data': [-3633, -3278, -2882]
 }, {
   'Name': 'Marl',
   'Data': [1575, 549, 709]
 }, {
   'Name': 'Oer-Erkenschwick',
   'Data': [-6501, -6705, -6811]
 }, {
   'Name': 'Recklinghausen',
   'Data': [-1865, -843, -919]
 }, {
   'Name': 'Waltrop',
   'Data': [-5291, -5237, -5322]
 }, {
   'Name': 'Altenberge',
   'Data': [-681, -617, -573]
 }, {
   'Name': 'Emsdetten',
   'Data': [-31, -318, 32]
 }, {
   'Name': 'Greven',
   'Data': [-104, -216, 189]
 }, {
   'Name': 'Hörstel',
   'Data': [-2717, -2437, -2518]
 }, {
   'Name': 'Hopsten',
   'Data': [-1793, -1867, -1862]
 }, {
   'Name': 'Horstmar',
   'Data': [-1407, -1478, -1512]
 }, {
   'Name': 'Ibbenbüren',
   'Data': [-227, -467, -896]
 }, {
   'Name': 'Ladbergen',
   'Data': [-520, -549, -569]
 }, {
   'Name': 'Laer',
   'Data': [-1338, -1585, -1709]
 }, {
   'Name': 'Lengerich',
   'Data': [549, 345, 569]
 }, {
   'Name': 'Lienen',
   'Data': [-2187, -2265, -2343]
 }, {
   'Name': 'Lotte',
   'Data': [-2590, -2564, -2737]
 }, {
   'Name': 'Metelen',
   'Data': [-1543, -1759, -1785]
 }, {
   'Name': 'Mettingen',
   'Data': [-1167, -1342, -1250]
 }, {
   'Name': 'Neuenkirchen',
   'Data': [-2500, -2526, -2511]
 }, {
   'Name': 'Nordwalde',
   'Data': [-1813, -1745, -1677]
 }, {
   'Name': 'Ochtrup',
   'Data': [-1793, -1107, -1242]
 }, {
   'Name': 'Recke',
   'Data': [-2097, -2423, -2422]
 }, {
   'Name': 'Rheine',
   'Data': [1699, 659, 1240]
 }, {
   'Name': 'Saerbeck',
   'Data': [-964, -969, -946]
 }, {
   'Name': 'Steinfurt',
   'Data': [-1507, -1154, -1191]
 }, {
   'Name': 'Tecklenburg',
   'Data': [-833, 360, 395]
 }, {
   'Name': 'Westerkappeln',
   'Data': [-1916, -2026, -1645]
 }, {
   'Name': 'Wettringen',
   'Data': [-1212, -1349, -1322]
 }, {
   'Name': 'Ahlen',
   'Data': [-2607, -3159, -3244]
 }, {
   'Name': 'Beckum',
   'Data': [457, 525, 843]
 }, {
   'Name': 'Beelen',
   'Data': [-664, -588, -655]
 }, {
   'Name': 'Drensteinfurt',
   'Data': [-4396, -4452, -4393]
 }, {
   'Name': 'Ennigerloh',
   'Data': [-2867, -3020, -2847]
 }, {
   'Name': 'Everswinkel',
   'Data': [-804, -929, -889]
 }, {
   'Name': 'Oelde',
   'Data': [-687, -792, -865]
 }, {
   'Name': 'Ostbevern',
   'Data': [-1624, -1750, -1708]
 }, {
   'Name': 'Sassenberg',
   'Data': [-2348, -2374, -2426]
 }, {
   'Name': 'Sendenhorst',
   'Data': [-1127, -1094, -1216]
 }, {
   'Name': 'Telgte',
   'Data': [-1658, -1763, -1733]
 }, {
   'Name': 'Wadersloh',
   'Data': [-2151, -2268, -2390]
 }, {
   'Name': 'Warendorf',
   'Data': [-825, -238, -192]
 }, {
   'Name': 'Bielefeld',
   'Data': [31631, 31661, 32654]
 }, {
   'Name': 'Borgholzhausen',
   'Data': [-289, -350, -395]
 }, {
   'Name': 'Gütersloh',
   'Data': [13181, 14150, 13968]
 }, {
   'Name': 'Halle (Westf.)',
   'Data': [2620, 4182, 4778]
 }, {
   'Name': 'Harsewinkel',
   'Data': [601, 1276, 1478]
 }, {
   'Name': 'Herzebrock-Clarholz',
   'Data': [-905, -444, -335]
 }, {
   'Name': 'Langenberg',
   'Data': [-2028, -2005, -2108]
 }, {
   'Name': 'Rheda-Wiedenbrück',
   'Data': [-312, -1114, -400]
 }, {
   'Name': 'Rietberg',
   'Data': [-321, -259, -380]
 }, {
   'Name': 'Schloß Holte-Stukenbrock',
   'Data': [-2279, -2148, -2205]
 }, {
   'Name': 'Steinhagen',
   'Data': [554, 259, 238]
 }, {
   'Name': 'Verl',
   'Data': [2741, 3058, 3878]
 }, {
   'Name': 'Versmold',
   'Data': [-609, -1470, -1484]
 }, {
   'Name': 'Werther (Westf.)',
   'Data': [-1605, -1702, -1826]
 }, {
   'Name': 'Bünde',
   'Data': [-2217, -2842, -2711]
 }, {
   'Name': 'Enger',
   'Data': [-3013, -3079, -3177]
 }, {
   'Name': 'Herford',
   'Data': [10752, 10779, 11451]
 }, {
   'Name': 'Hiddenhausen',
   'Data': [-2833, -3021, -2978]
 }, {
   'Name': 'Kirchlengern',
   'Data': [-913, -382, -363]
 }, {
   'Name': 'Löhne',
   'Data': [-2324, -2812, -3188]
 }, {
   'Name': 'Rödinghausen',
   'Data': [-1149, -977, -1084]
 }, {
   'Name': 'Spenge',
   'Data': [-3320, -3236, -3203]
 }, {
   'Name': 'Vlotho',
   'Data': [-856, -1034, -1028]
 }, {
   'Name': 'Bad Driburg',
   'Data': [-540, -440, -609]
 }, {
   'Name': 'Beverungen',
   'Data': [-2217, -2327, -2315]
 }, {
   'Name': 'Borgentreich',
   'Data': [-2253, -2265, -2303]
 }, {
   'Name': 'Brakel',
   'Data': [-159, -348, -413]
 }, {
   'Name': 'Höxter',
   'Data': [36, 273, 392]
 }, {
   'Name': 'Marienmünster',
   'Data': [-1093, -1154, -1147]
 }, {
   'Name': 'Nieheim',
   'Data': [-1556, -1530, -1484]
 }, {
   'Name': 'Steinheim',
   'Data': [-1227, -1313, -1329]
 }, {
   'Name': 'Warburg',
   'Data': [349, 214, 321]
 }, {
   'Name': 'Willebadessen',
   'Data': [-2272, -2350, -2365]
 }, {
   'Name': 'Augustdorf',
   'Data': [1651, 1368, 1392]
 }, {
   'Name': 'Bad Salzuflen',
   'Data': [-379, -578, -829]
 }, {
   'Name': 'Barntrup',
   'Data': [-1138, -1278, -1317]
 }, {
   'Name': 'Blomberg',
   'Data': [834, 1460, 1647]
 }, {
   'Name': 'Detmold',
   'Data': [5980, 6858, 6930]
 }, {
   'Name': 'Dörentrup',
   'Data': [-2011, -1322, -1344]
 }, {
   'Name': 'Extertal',
   'Data': [-1676, -1677, -1685]
 }, {
   'Name': 'Horn-Bad Meinberg',
   'Data': [-2159, -2574, -2686]
 }, {
   'Name': 'Kalletal',
   'Data': [-3255, -3361, -3524]
 }, {
   'Name': 'Lage',
   'Data': [-7155, -7377, -7407]
 }, {
   'Name': 'Lemgo',
   'Data': [1680, 1972, 1842]
 }, {
   'Name': 'Leopoldshöhe',
   'Data': [-2096, -2229, -2122]
 }, {
   'Name': 'Lügde',
   'Data': [-2424, -2454, -2394]
 }, {
   'Name': 'Oerlinghausen',
   'Data': [-2664, -2594, -2851]
 }, {
   'Name': 'Schieder-Schwalenberg',
   'Data': [-1911, -2161, -2189]
 }, {
   'Name': 'Schlangen',
   'Data': [-2270, -2396, -2447]
 }, {
   'Name': 'Bad Oeynhausen',
   'Data': [5217, 6183, 5950]
 }, {
   'Name': 'Espelkamp',
   'Data': [2012, 1901, 1794]
 }, {
   'Name': 'Hille',
   'Data': [-3685, -3927, -3883]
 }, {
   'Name': 'Hüllhorst',
   'Data': [-2029, -2072, -2074]
 }, {
   'Name': 'Lübbecke',
   'Data': [3231, 3955, 4133]
 }, {
   'Name': 'Minden',
   'Data': [10918, 10375, 11245]
 }, {
   'Name': 'Petershagen',
   'Data': [-6578, -6914, -6896]
 }, {
   'Name': 'Porta Westfalica',
   'Data': [-2142, -2456, -2898]
 }, {
   'Name': 'Preußisch Oldendorf',
   'Data': [-2473, -2403, -2409]
 }, {
   'Name': 'Rahden',
   'Data': [-1856, -1893, -1963]
 }, {
   'Name': 'Stemwede',
   'Data': [305, 93, 121]
 }, {
   'Name': 'Altenbeken',
   'Data': [-2961, -3035, -2844]
 }, {
   'Name': 'Bad Lippspringe',
   'Data': [-1486, -1613, -1410]
 }, {
   'Name': 'Borchen',
   'Data': [-3199, -3222, -3175]
 }, {
   'Name': 'Büren',
   'Data': [-2493, -1963, -2001]
 }, {
   'Name': 'Delbrück',
   'Data': [-4396, -4560, -4528]
 }, {
   'Name': 'Hövelhof',
   'Data': [-1680, -1373, -1259]
 }, {
   'Name': 'Lichtenau',
   'Data': [-2605, -2676, -2672]
 }, {
   'Name': 'Paderborn',
   'Data': [21439, 20377, 20544]
 }, {
   'Name': 'Salzkotten',
   'Data': [-2535, -3058, -3177]
 }, {
   'Name': 'Wünnenberg',
   'Data': [-1407, -1320, -1223]
 }, {
   'Name': 'Bochum',
   'Data': [10038, 10262, 10404]
 }, {
   'Name': 'Dortmund',
   'Data': [44849, 42615, 39702]
 }, {
   'Name': 'Hagen',
   'Data': [9474, 7057, 7001]
 }, {
   'Name': 'Hamm',
   'Data': [-5095, -2839, -3868]
 }, {
   'Name': 'Herne',
   'Data': [-4898, -6216, -7184]
 }, {
   'Name': 'Breckerfeld',
   'Data': [-2256, -2063, -2111]
 }, {
   'Name': 'Ennepetal',
   'Data': [1486, 1773, 1589]
 }, {
   'Name': 'Gevelsberg',
   'Data': [-3030, -3102, -3294]
 }, {
   'Name': 'Hattingen',
   'Data': [-7954, -8946, -9132]
 }, {
   'Name': 'Herdecke',
   'Data': [-2374, -2272, -2115]
 }, {
   'Name': 'Schwelm',
   'Data': [205, 337, 334]
 }, {
   'Name': 'Sprockhövel',
   'Data': [-3524, -3181, -3188]
 }, {
   'Name': 'Wetter (Ruhr)',
   'Data': [-327, -151, 24]
 }, {
   'Name': 'Witten',
   'Data': [-3155, -4111, -4111]
 }, {
   'Name': 'Arnsberg',
   'Data': [3109, 4303, 4813]
 }, {
   'Name': 'Bestwig',
   'Data': [-1082, -958, -1055]
 }, {
   'Name': 'Brilon',
   'Data': [786, 1712, 1757]
 }, {
   'Name': 'Eslohe (Sauerland)',
   'Data': [-934, -794, -727]
 }, {
   'Name': 'Hallenberg',
   'Data': [137, -156, -228]
 }, {
   'Name': 'Marsberg',
   'Data': [-1534, -1750, -1683]
 }, {
   'Name': 'Medebach',
   'Data': [-1305, -1037, -1011]
 }, {
   'Name': 'Meschede',
   'Data': [3252, 2175, 2033]
 }, {
   'Name': 'Olsberg',
   'Data': [-115, 142, 193]
 }, {
   'Name': 'Schmallenberg',
   'Data': [-1058, -1518, -968]
 }, {
   'Name': 'Sundern (Sauerland)',
   'Data': [-2867, -2915, -2873]
 }, {
   'Name': 'Winterberg',
   'Data': [-1210, -1223, -1112]
 }, {
   'Name': 'Altena',
   'Data': [-1639, -1602, -1522]
 }, {
   'Name': 'Balve',
   'Data': [-2001, -2047, -2326]
 }, {
   'Name': 'Halver',
   'Data': [-577, -450, -235]
 }, {
   'Name': 'Hemer',
   'Data': [-1218, -1423, -1408]
 }, {
   'Name': 'Herscheid',
   'Data': [-1204, -1258, -1261]
 }, {
   'Name': 'Iserlohn',
   'Data': [1419, 2551, 2726]
 }, {
   'Name': 'Kierspe',
   'Data': [-2650, -1627, -1595]
 }, {
   'Name': 'Lüdenscheid',
   'Data': [9577, 9622, 10037]
 }, {
   'Name': 'Meinerzhagen',
   'Data': [-343, -57, 91]
 }, {
   'Name': 'Menden (Sauerland)',
   'Data': [-5646, -6372, -6439]
 }, {
   'Name': 'Nachrodt-Wiblingwerde',
   'Data': [-1504, -1680, -1695]
 }, {
   'Name': 'Neuenrade',
   'Data': [-1010, -1025, -1165]
 }, {
   'Name': 'Plettenberg',
   'Data': [1971, 1997, 2165]
 }, {
   'Name': 'Schalksmühle',
   'Data': [-474, -507, -581]
 }, {
   'Name': 'Werdohl',
   'Data': [34, -161, -85]
 }, {
   'Name': 'Attendorn',
   'Data': [3048, 3376, 3498]
 }, {
   'Name': 'Drolshagen',
   'Data': [-1187, -1514, -2019]
 }, {
   'Name': 'Finnentrop',
   'Data': [-2440, -2476, -2537]
 }, {
   'Name': 'Kirchhundem',
   'Data': [-1664, -1780, -1716]
 }, {
   'Name': 'Lennestadt',
   'Data': [-462, -129, 133]
 }, {
   'Name': 'Olpe',
   'Data': [5304, 6092, 5838]
 }, {
   'Name': 'Wenden',
   'Data': [-3133, -3436, -3573]
 }, {
   'Name': 'Bad Berleburg',
   'Data': [-1347, -1467, -1390]
 }, {
   'Name': 'Burbach',
   'Data': [613, 901, 1061]
 }, {
   'Name': 'Erndtebrück',
   'Data': [698, 1016, 969]
 }, {
   'Name': 'Freudenberg',
   'Data': [-1831, -2074, -1928]
 }, {
   'Name': 'Hilchenbach',
   'Data': [-1070, -859, -926]
 }, {
   'Name': 'Kreuztal',
   'Data': [-1325, -1441, -1158]
 }, {
   'Name': 'Bad Laasphe',
   'Data': [-1923, -1971, -1983]
 }, {
   'Name': 'Netphen',
   'Data': [-3438, -2927, -2814]
 }, {
   'Name': 'Neunkirchen',
   'Data': [619, 689, 787]
 }, {
   'Name': 'Siegen',
   'Data': [15796, 14055, 13800]
 }, {
   'Name': 'Wilnsdorf',
   'Data': [-2300, -2282, -2312]
 }, {
   'Name': 'Anröchte',
   'Data': [-1723, -1647, -1308]
 }, {
   'Name': 'Bad Sassendorf',
   'Data': [-852, -1154, -1249]
 }, {
   'Name': 'Ense',
   'Data': [-1727, -1708, -1628]
 }, {
   'Name': 'Erwitte',
   'Data': [-1811, -2074, -2110]
 }, {
   'Name': 'Geseke',
   'Data': [-3508, -3608, -3664]
 }, {
   'Name': 'Lippetal',
   'Data': [-3068, -3034, -3103]
 }, {
   'Name': 'Lippstadt',
   'Data': [8656, 9320, 9260]
 }, {
   'Name': 'Möhnesee',
   'Data': [-1372, -1320, -1325]
 }, {
   'Name': 'Rüthen',
   'Data': [-2189, -1986, -1934]
 }, {
   'Name': 'Soest',
   'Data': [4840, 4575, 4699]
 }, {
   'Name': 'Warstein',
   'Data': [-1021, -841, -872]
 }, {
   'Name': 'Welver',
   'Data': [-4026, -4139, -4203]
 }, {
   'Name': 'Werl',
   'Data': [-1604, -1535, -1539]
 }, {
   'Name': 'Wickede (Ruhr)',
   'Data': [323, -414, -243]
 }, {
   'Name': 'Bergkamen',
   'Data': [-8218, -8346, -8517]
 }, {
   'Name': 'Bönen',
   'Data': [-241, 257, 740]
 }, {
   'Name': 'Fröndenberg/Ruhr',
   'Data': [-4219, -4244, -4148]
 }, {
   'Name': 'Holzwickede',
   'Data': [2553, 3324, 4293]
 }, {
   'Name': 'Kamen',
   'Data': [-4908, -4832, -4916]
 }, {
   'Name': 'Lünen',
   'Data': [-7085, -7415, -7180]
 }, {
   'Name': 'Schwerte',
   'Data': [-4623, -4638, -4437]
 }, {
   'Name': 'Selm',
   'Data': [-4746, -4536, -4579]
 }, {
   'Name': 'Unna',
   'Data': [10365, 5387, 5928]
 }, {
   'Name': 'Werne',
   'Data': [-2038, -1534, -1013]
 }

];

var datenNatuerlicheBevoelkerungsentwicklungKommunen = [
 {
   'Name': 'Jahre',
   'Data': ['2007', '2009', '2011', '2013', '2015']
 }, 
 { 'Name': 'Bottrop', 'Data': [-3.5, -4.8, -4.4, -5.3, -4.9 ]  },
{ 'Name': 'Gelsenkirchen', 'Data': [-4.4, -4.8, -5.7, -5.4, -3.8 ]  },
{ 'Name': 'Münster', 'Data': [0.8, 0.4, 0.9, 1.2, 1.6 ]  },
{ 'Name': 'Ahaus', 'Data': [2.3, 1, 1.3, 0.8, 1 ]  },
{ 'Name': 'Bocholt', 'Data': [-0.9, -1.3, -1.2, -2.2, -1.7 ]  },
{ 'Name': 'Borken', 'Data': [0.8, 0.4, -0.1, -1, -0.2 ]  },
{ 'Name': 'Gescher', 'Data': [1.2, 0.1, -2.9, 0.2, 0.6 ]  },
{ 'Name': 'Gronau', 'Data': [0.5, -0.3, -0.4, 0.3, -0.6 ]  },
{ 'Name': 'Heek', 'Data': [5.8, 3.7, 1.7, 1.7, 0.9 ]  },
{ 'Name': 'Heiden', 'Data': [0, -0.4, -0.5, -1.7, -2.1 ]  },
{ 'Name': 'Isselburg', 'Data': [-3, -0.1, -1.4, -2.7, -4.1 ]  },
{ 'Name': 'Legden', 'Data': [4, -1.2, -0.6, 0.7, 5.1 ]  },
{ 'Name': 'Raesfeld', 'Data': [0.4, -2.4, 1.2, 2, 0.4 ]  },
{ 'Name': 'Reken', 'Data': [-1.6, -3.8, -2.9, -1.7, -2.8 ]  },
{ 'Name': 'Rhede', 'Data': [2, 1.8, 0.3, -1.3, -2.4 ]  },
{ 'Name': 'Schöppingen', 'Data': [0, 1.9, 1.3, 0.4, -2.9 ]  },
{ 'Name': 'Stadtlohn', 'Data': [1.8, 1.4, 0.4, -1.1, 1 ]  },
{ 'Name': 'Südlohn', 'Data': [-0.9, -1.3, -3, 0, -3.1 ]  },
{ 'Name': 'Velen', 'Data': [1.7, 1.2, -0.3, -2.2, 1.3 ]  },
{ 'Name': 'Vreden', 'Data': [0.7, 0, -1, -0.4, 1.5 ]  },
{ 'Name': 'Ascheberg', 'Data': [0, 0.3, -1.5, -0.3, 0.1 ]  },
{ 'Name': 'Billerbeck', 'Data': [-1, -2.3, -3.1, -4.6, -3.2 ]  },
{ 'Name': 'Coesfeld', 'Data': [-1.8, -1.7, -3.2, -1.8, -0.7 ]  },
{ 'Name': 'Dülmen', 'Data': [-0.8, -2.2, -2.6, -4.6, -2 ]  },
{ 'Name': 'Havixbeck', 'Data': [-0.8, -2.6, -2.9, -3.2, -3.4 ]  },
{ 'Name': 'Lüdinghausen', 'Data': [-1.7, -2, -2.4, -3.3, -3.2 ]  },
{ 'Name': 'Nordkirchen', 'Data': [-2.4, -1.5, -0.9, -1.2, -1.7 ]  },
{ 'Name': 'Nottuln', 'Data': [0.4, 0.3, -0.5, -0.6, -1.7 ]  },
{ 'Name': 'Olfen', 'Data': [-3.3, -3.4, -3.4, -4.3, -1.1 ]  },
{ 'Name': 'Rosendahl', 'Data': [2.2, 1.7, 0.4, -1.2, -2.2 ]  },
{ 'Name': 'Senden', 'Data': [2.2, 1.5, -0.1, 0.5, 2.1 ]  },
{ 'Name': 'Castrop-Rauxel', 'Data': [-5.4, -5.8, -6.9, -7.2, -6.4 ]  },
{ 'Name': 'Datteln', 'Data': [-3.6, -4.7,  -4.3, -5.5, -3.6 ]  },
{ 'Name': 'Dorsten', 'Data': [-3, -2.8,  -3.8, -4, -4.3 ]  },
{ 'Name': 'Gladbeck','Data': [-3.4, -4.6,  -4.5, -4.9, -4.1 ]  },
{ 'Name': 'Haltern am See', 'Data': [-2.1, -2.6,  -3.1, -4.3, -3.6 ]  },
{ 'Name': 'Herten', 'Data': [-5.9, -6.3,  -6.7, -5.4, -5.5 ]  },
{ 'Name': 'Marl', 'Data': [-3.8, -5,  -4.3, -5.8, -4.6 ]  },
{ 'Name': 'Oer-Erkenschwick', 'Data': [-2.8, -4.2,  -4.2, -4.2, -3.8 ]  },
{ 'Name': 'Recklinghausen', 'Data': [-4, -5.1,  -5.3, -4.4, -4.2 ]  },
{ 'Name': 'Waltrop', 'Data': [-3.4, -5.6,  -4.5, -6.1, -5.1 ]  },
{ 'Name': 'Altenberge', 'Data': [1, 0.5,  1.8, -0.1, 2.3 ]  },
{ 'Name': 'Emsdetten', 'Data': [-1, -0.4,  -2.1, -2.5, -0.2 ]  },
{ 'Name': 'Greven','Data': [1.2, -1.3,  -1.4, -1.4, 0.2 ]  },
{ 'Name': 'Hörstel', 'Data': [1.2, 1.3,  1.3, -1.4, 1.6 ]  },
{ 'Name': 'Hopsten', 'Data': [-0.4, 0.4,  -0.7, 0, -2.2 ]  },
{ 'Name': 'Horstmar', 'Data': [-3.9, -5.4,  -8.4, -4.9, -6.2 ]  },
{ 'Name': 'Ibbenbüren', 'Data': [-0.1, -0.8,  -0.8, -2.1, -1.6 ]  },
{ 'Name': 'Ladbergen', 'Data': [-3.9, -3.3,  -4.4, -3.1, -4.9 ]  },
{ 'Name': 'Laer', 'Data': [2.4, 5.6,  0.2, 1.2, 3.9 ]  },
{ 'Name': 'Lengerich', 'Data': [-2.2, -3.4,  -3.8, -2.3, -3.1 ]  },
{ 'Name': 'Lienen', 'Data': [-1, -4.1,  -2.6, -1.8, -4.2 ]  },
{ 'Name': 'Lotte', 'Data': [0.3, 0.7,  -0.8, -0.9, 0.1 ]  },
{ 'Name': 'Metelen', 'Data': [-1.2, 3,  -1.1, -0.8, -7.6 ]  },
{ 'Name': 'Mettingen', 'Data': [-0.6, -2.7,  0.1, -1.5, -1.6 ]  },
{ 'Name': 'Neuenkirchen', 'Data': [2.6, -1.5,  -1.2, 1.8, -2.2 ]  },
{ 'Name': 'Nordwalde', 'Data': [-2.2, -3,  -4.6, -3.8, -3.1 ]  },
{ 'Name': 'Ochtrup', 'Data': [1.4, 3.1,  1.2, 0.6, 1 ]  },
{ 'Name': 'Recke', 'Data': [-1.1, -0.9,  -1.9, -3.1, -1.2 ]  },
{ 'Name': 'Rheine', 'Data': [-0.2, -1.5,  -0.5, -1.2, -1.8 ]  },
{ 'Name': 'Saerbeck', 'Data': [0.8, 1.7,  0.1, 1, -1.3 ]  },
{ 'Name': 'Steinfurt', 'Data': [-0.3, -1.6,  -2.4, -1.7, -1.9 ]  },
{ 'Name': 'Tecklenburg', 'Data': [-2.3, -2.8,  -1.7, -4.4, -5.5 ]  },
{ 'Name': 'Westerkappeln', 'Data': [-0.7, -3.1,  -0.7, -2.3, -2.9 ]  },
{ 'Name': 'Wettringen', 'Data': [3.9, 1,  1, -0.1, 0.5 ]  },
{ 'Name': 'Ahlen', 'Data': [-0.5, -1.8,  -2.7, -4.4, -1.9 ]  },
{ 'Name': 'Beckum', 'Data': [-1.6, -3.2,  -3.3, -4.9, -3.7 ]  },
{ 'Name': 'Beelen', 'Data': [-2.7, -0.3,  1.6, -3.1, -0.8 ]  },
{ 'Name': 'Drensteinfurt', 'Data': [1.4, 0.7,  -1.3, 0.5, 1.2 ]  },
{ 'Name': 'Ennigerloh', 'Data': [-1.2, -2.7,  -2.7, -2.7, -1.3 ]  },
{ 'Name': 'Everswinkel', 'Data': [2.8, 0.8,  -0.9, -1.5, 0.3 ]  },
{ 'Name': 'Oelde', 'Data': [1.3, -1.8,  -2.3, -1.6, 0.6 ]  },
{ 'Name': 'Ostbevern', 'Data': [2.8, 3.4,  0.4, 3, 1.9 ]  },
{ 'Name': 'Sassenberg', 'Data': [2.2, 1.1,  -1.4, -1.6, 2 ]  },
{ 'Name': 'Sendenhorst', 'Data': [-3.1, -1.7,  0.5, -2.6, -0.7 ]  },
{ 'Name': 'Telgte', 'Data': [-1.1, -0.7,  -1.6, -0.5, -0.5 ]  },
{ 'Name': 'Wadersloh', 'Data': [-4.6, -6.9,  -3.5, -6.2, -5 ]  },
{ 'Name': 'Warendorf', 'Data': [1.7, -0.3,  -0.3, -1.1, -1.7 ]  },
{ 'Name': 'Bielefeld', 'Data': [-1, -1.9,  -0.9, -1.7, -0.9 ]  },
{ 'Name': 'Borgholzhausen', 'Data': [-0.8, 0.2,  -0.8, 0.1, -1.5 ]  },
{ 'Name': 'Gütersloh', 'Data': [-0.7, -1.3,  -0.2, -1, -1 ]  },
{ 'Name': 'Halle (Westf.)', 'Data': [-1.7, -1.5,  -1, -3.2, -0.8 ]  },
{ 'Name': 'Harsewinkel', 'Data': [4.6, 2.1,  2.5, 0.1, 2.5 ]  },
{ 'Name': 'Herzebrock-Clarholz', 'Data': [0.3, 0.2,  0.8, -1.8, -1.1 ]  },
{ 'Name': 'Langenberg', 'Data': [1.3, -2.5,  -2.3, -2.2, -0.2 ]  },
{ 'Name': 'Rheda-Wiedenbrück', 'Data': [-0.6, -0.2,  0.4, -1.7, -1.8 ]  },
{ 'Name': 'Rietberg', 'Data': [0.6, 0.7,  1.3, 0, 0.2 ]  },
{ 'Name': 'Schloß Holte-Stukenbrock', 'Data': [1.3, -0.9,  0.7, 0.8, 1.4 ]  },
{ 'Name': 'Steinhagen', 'Data': [-0.5, -0.7,  -2.2, -1.9, -2.2 ]  },
{ 'Name': 'Verl', 'Data': [0.7, 0.2,  1.5, 0.5, 3 ]  },
{ 'Name': 'Versmold', 'Data': [0.1, -1.9,  -3.3, -4, -3.4 ]  },
{ 'Name': 'Werther (Westf.)', 'Data': [0.7, -1.4,  -3.1, -2.6, -1.1 ]  },
{ 'Name': 'Bünde', 'Data': [-2.1, -2,  -1.9, -1.9, -2.6 ]  },
{ 'Name': 'Enger', 'Data': [0.4, 0.4,  -1.8, -0.8, -0.5 ]  },
{ 'Name': 'Herford', 'Data': [-0.7, -1.5,  -2.1, -3.8, -2.2 ]  },
{ 'Name': 'Hiddenhausen', 'Data': [-3.8, -4.2,  -4, -2.9, -4.1 ]  },
{ 'Name': 'Kirchlengern', 'Data': [-0.8, -1.9,  -3.7, -4.1, -3.4 ]  },
{ 'Name': 'Löhne', 'Data': [-3.9, -5.7,  -4.5, -5.5, -4.4 ]  },
{ 'Name': 'Rödinghausen', 'Data': [-3.4, -5.7,  -3.3, -6.4, -4.9 ]  },
{ 'Name': 'Spenge', 'Data': [-6.7, -5.7,  -3.9, -5.6, -3.5 ]  },
{ 'Name': 'Vlotho', 'Data': [-3, -4.2,  -5.5, -4.1, -5.6 ]  },
{ 'Name': 'Bad Driburg', 'Data': [-3.8, -3.6,  -5.1, -5.6, -4.7 ]  },
{ 'Name': 'Beverungen', 'Data': [-3.6, -6.2,  -6, -6.6, -5.6 ]  },
{ 'Name': 'Borgentreich', 'Data': [-2.2, -3,  -4, -5.7, -1.6 ]  },
{ 'Name': 'Brakel', 'Data': [0.2, -0.6,  -1, -4.4, -2.7 ]  },
{ 'Name':'Höxter', 'Data': [-2.7, -3.8, -6, -4.7,  -5.4 ]  },
{ 'Name':'Marienmünster', 'Data': [-0.5,  -7.9, -4.7, -7.3,  -9.8 ]  },
{ 'Name':'Nieheim', 'Data': [-3.7,  -7.1, -5.1, -6.5,  -5.8 ]  },
{ 'Name':'Steinheim', 'Data': [0.7,  -0.9, -0.8, -3,  -2.6 ]  },
{ 'Name':'Warburg', 'Data': [-2.5,  -4.8, -3.6, -5.4,  -4 ]  },
{ 'Name':'Willebadessen', 'Data': [2.9,  1.6, 0.2, -1.5,  -0.7 ]  },
{ 'Name':'Augustdorf', 'Data': [5,  5.2, 3.1, 3.9,  3.3 ]  },
{ 'Name':'Bad Salzuflen', 'Data': [-5.4,  -5.8, -6.5, -6.4,  -6.9 ]  },
{ 'Name':'Barntrup', 'Data': [-2.1,  -3.2, -3.6, -6.2,  -2.7 ]  },
{ 'Name':'Blomberg', 'Data': [-0.6,  -2.3, -3.8, -3.5,  -2.7 ]  },
{ 'Name':'Detmold', 'Data': [-1.9,  -2.3, -2.5, -3.2,  -1.7 ]  },
{ 'Name':'Dörentrup', 'Data': [-3.8,  -4.6, -6.2, -4.5,  -6.9 ]  },
{ 'Name':'Extertal', 'Data': [-4,  -5.7, -5.9, -5.6,  -6.3 ]  },
{ 'Name':'Horn-Bad Meinberg', 'Data': [-3.6,  -6, -7.4, -5.1,  -6.4 ]  },
{ 'Name':'Kalletal', 'Data': [-1.9,  -4.4, -7.5, -5.8,  -6 ]  },
{ 'Name':'Lage', 'Data': [0.2,  0.5, -0.4, -1.2,  -1.1 ]  },
{ 'Name':'Lemgo', 'Data': [-2.1,  -2.9, -3.5, -3.1,  -3.5 ]  },
{ 'Name':'Leopoldshöhe', 'Data': [-1.2,  -0.7, -3.2, -0.1,  -0.8 ]  },
{ 'Name':'Lügde', 'Data': [-3.2,  -4.9, -3, -8.9,  -8 ]  },
{ 'Name':'Oerlinghausen', 'Data': [-1.6,  -2.5, -1.6, -3,  -3.3 ]  },
{ 'Name':'Schieder-Schwalenberg', 'Data': [-2.2,  -2.6, -6, -1.9,  -1.5 ]  },
{ 'Name':'Schlangen', 'Data': [0.1,  -1.8, -0.4, 0.2,  -0.1 ]  },
{ 'Name':'Bad Oeynhausen', 'Data': [-4.2,  -5.3, -5.9, -5.4,  -4.6 ]  },
{ 'Name':'Espelkamp', 'Data': [0.1,  0, 1, 0,  0.5 ]  },
{ 'Name':'Hille', 'Data': [-1.6,  -1.9, -3.1, -3,  -0.9 ]  },
{ 'Name':'Hüllhorst', 'Data': [0,  0.7, -1.4, -1.2,  -2.1 ]  },
{ 'Name':'Lübbecke', 'Data': [-1.3,  -1.2, -1.6, -2.7,  -3.7 ]  },
{ 'Name':'Minden', 'Data': [-2.4,  -3.1, -2.8, -2.9,  -2.2 ]  },
{ 'Name':'Petershagen', 'Data': [-4.2,  -4.5, -4.6, -6.7,  -4.4 ]  },
{ 'Name':'Porta Westfalica', 'Data': [-3,  -3.7, -2.9, -3,  -2.7 ]  },
{ 'Name':'Preußisch Oldendorf', 'Data': [-0.5,  -1, -4, -2.7,  -2.3 ]  },
{ 'Name':'Rahden', 'Data': [-0.9,  -3.1, -5.5, -7.5,  -5.3 ]  },
{ 'Name':'Stemwede', 'Data': [-3.4,  -7.5, -9.8, -8,  -8.3 ]  },
{ 'Name':'Altenbeken', 'Data': [-2.3,  -3.6, -5, -5.4,  -2.8 ]  },
{ 'Name':'Bad Lippspringe', 'Data': [-4.1,  -6.7, -6.6, -6.7,  -4.5 ]  },
{ 'Name':'Borchen', 'Data': [1.1,  0.7, 0.5, -1.3,  -1.1 ]  },
{ 'Name':'Büren', 'Data': [1.7,  1.2, -0.4, -0.2,  -2.3 ]  },
{ 'Name':'Delbrück', 'Data': [3.3,  2.8, 2.6, 2.2,  1.3 ]  },
{ 'Name':'Hövelhof', 'Data': [0.3,  2.9, 1, 1.2,  3 ]  },
{ 'Name':'Lichtenau', 'Data': [0.4,  0.9, -1, -3.8,  -2 ]  },
{ 'Name':'Paderborn', 'Data': [2,  2.3, 2.1, 1.5,  2.5 ]  },
{ 'Name':'Salzkotten', 'Data': [3.2,  0.3, 3.2, 2,  1.3 ]  },
{ 'Name':'Wünnenberg', 'Data': [-0.1,  -0.6, -4.2, -1.2,  -0.2 ]  },
{ 'Name':'Bochum', 'Data': [-3.8,  -4.5, -4.8, -4.8,  -4.5 ]  },
{ 'Name':'Dortmund', 'Data': [-3.1,  -3.4, -3.6, -3.5,  -2.9 ]  },
{ 'Name':'Hagen', 'Data': [-3.8,  -4.6, -5.2, -5.2,  -4.2 ]  },
{ 'Name':'Hamm', 'Data': [-2.1,  -2.7, -3.3, -2.6,  -2.8 ]  },
{ 'Name':'Herne', 'Data': [-4.6,  -5.3, -5.6, -6,  -5.3 ]  },
{ 'Name':'Breckerfeld', 'Data': [-1.4,  -4.1, -4, -4.8,  -4.9 ]  },
{ 'Name':'Ennepetal', 'Data': [-5.7,  -4.8, -6.2, -6,  -4.6 ]  },
{ 'Name':'Gevelsberg', 'Data': [-6.2,  -6.9, -6.5, -7.9,  -7.8 ]  },
{ 'Name':'Hattingen', 'Data': [-4.3,  -4.6, -5.2, -5,  -4.8 ]  },
{ 'Name':'Herdecke', 'Data': [-6,  -7.8, -7.5, -9.3,  -7.9 ]  },
{ 'Name':'Schwelm', 'Data': [-5.2,  -8.5, -6.7, -8.2,  -6.4 ]  },
{ 'Name':'Sprockhövel', 'Data': [-4.8,  -3.2, -3.6, -6.6,  -4.5 ]  },
{ 'Name':'Wetter (Ruhr)', 'Data': [-4.4,  -3.7, -4.8, -2.7,  -5.3 ]  },
{ 'Name':'Witten', 'Data': [-4.4,  -4.5, -5.3, -5.6,  -5.3 ]  },
{ 'Name':'Arnsberg', 'Data': [-3.5,  -3, -4.4, -4.7,  -3.8 ]  },
{ 'Name':'Bestwig', 'Data': [-2.2,  -2.4, -2.5, -2.8,  -7.6 ]  },
{ 'Name':'Brilon', 'Data': [-2.9,  -5.5, -5.6, -6.1,  -4.3 ]  },
{ 'Name':'Eslohe (Sauerland)', 'Data': [-0.9,  -3.6, -2.1, -1.6,  -5.9 ]  },
{ 'Name':'Hallenberg', 'Data': [-2.7,  -6.1, -2.4, -7.1,  -3.1 ]  },
{ 'Name':'Marsberg', 'Data': [-3.5,  -4.9, -4.7, -4.5,  -5.9 ]  },
{ 'Name':'Medebach', 'Data': [-0.4,  -0.6, -4.8, -5.6,  -7.7 ]  },
{ 'Name':'Meschede', 'Data': [-2.7,  -3.6, -4.1, -4.6,  -5.5 ]  },
{ 'Name':'Olsberg', 'Data': [-1.2,  -3.3, -2.5, -1.7,  -4 ]  },
{ 'Name':'Schmallenberg', 'Data': [-0.2,  -2.9, -4.2, -3.3,  -5.4 ]  },
{ 'Name':'Sundern (Sauerland)', 'Data': [-0.3,  0.4, -2.7, -3.2,  -3.6 ]  },
{ 'Name':'Winterberg', 'Data': [-5.6,  -5.3, -6.9, -4.9,  -7 ]  },
{ 'Name':'Altena', 'Data': [-2.8,  -7.5, -6.3, -6.8,  -5.6 ]  },
{ 'Name':'Balve', 'Data': [-1.8,  -3.9, -5.8, -4.4,  -4.7 ]  },
{ 'Name':'Halver', 'Data': [-3.3,  -1.7, -3.3, -2.7,  -5 ]  },
{ 'Name':'Hemer', 'Data': [-1.5,  0.6, -0.4, -1.5,  -2.9 ]  },
{ 'Name':'Herscheid', 'Data': [-5.2,  -5.9, -5.1, -2.5,  -4.7 ]  },
{ 'Name':'Iserlohn', 'Data': [-2.9,  -3.9, -3.5, -5.5,  -3.2 ]  },
{ 'Name':'Kierspe', 'Data': [2.5,  -1, 0.7, -1.1,  -1.5 ]  },
{ 'Name':'Lüdenscheid', 'Data': [-2.3,  -2.6, -3, -4.4,  -3.2 ]  },
{ 'Name':'Meinerzhagen', 'Data': [-0.1,  -2, -0.8, -1.7,  -2.4 ]  },
{ 'Name':'Menden (Sauerland)', 'Data': [-1.6,  -3.1, -2.8, -4,  -4.5 ]  },
{ 'Name':'Nachrodt-Wiblingwerde', 'Data': [-2.4,  -6.6, -6.8, -7.1,  -0.3 ]  },
{ 'Name':'Neuenrade', 'Data': [-1.1,  -1.3, -0.7, -2.3,  -3.7 ]  },
{ 'Name':'Plettenberg', 'Data': [-2.3,  -5.1, -3.7, -5.3,  -4 ]  },
{ 'Name':'Schalksmühle', 'Data': [-3.2,  -5.1, -5.7, -4,  -5 ]  },
{ 'Name':'Werdohl', 'Data': [-1,  -3.6, -2.1, -4.3,  -3.6 ]  },
{ 'Name':'Attendorn', 'Data': [0.2,  -2.5, -2.5, -2.3,  -1.3 ]  },
{ 'Name':'Drolshagen', 'Data': [-2.5,  -2.5, -2.3, -3.5,  -0.8 ]  },
{ 'Name':'Finnentrop', 'Data': [-0.9,  -1.2, -1.3, -3.3,  -2.7 ]  },
{ 'Name':'Kirchhundem', 'Data': [-2.1,  -2.9, -3.2, -4.8,  -1.9 ]  },
{ 'Name':'Lennestadt', 'Data': [-1.1,  -2.7, -4.1, -4.1,  -3.8 ]  },
{ 'Name':'Olpe', 'Data': [-0.1,  -0.4, -1.8, -2.5,  -0.6 ]  },
{ 'Name':'Wenden','Data': [0.2,  -0.1, -1, -0.8,  -0.4 ]  },
{ 'Name':'Bad Berleburg', 'Data': [-2,  -3.5, -4.1, -6,  -5.4 ]  },
{ 'Name':'Burbach','Data': [-2.9,  -1.2, -2.2, -3.9,  -3.5 ]  },
{ 'Name':'Erndtebrück', 'Data': [-1.2,  -2.8, -3.7, -4.8,  -3.5 ]  },
{ 'Name':'Freudenberg', 'Data': [-1.8,  -1.7, 0.2, -3.9,  -2.8 ]  },
{ 'Name':'Hilchenbach', 'Data': [-2.9,  -7.2, -6.3, -5.2,  -6.1 ]  },
{ 'Name':'Kreuztal', 'Data': [-0.6,  -2.1, -1.9, -2.8,  -1.1 ]  },
{ 'Name':'Bad Laasphe', 'Data': [-7.3,  -6.5, -5.5, -4.1,  -5.8 ]  },
{ 'Name':'Netphen','Data': [-1.6,  -2.6, -2.8, -1.4,  -2.3 ]  },
{ 'Name':'Neunkirchen', 'Data': [-4.6,  -4.7, -4.3, -5.9,  -3.8 ]  },
{ 'Name':'Siegen', 'Data': [-2.9,  -2.9, -3.1, -3.6,  -1.8 ]  },
{ 'Name':'Wilnsdorf', 'Data': [-2.7,  -2.4, -4.2, -4.3,  -2.5 ]  },
{ 'Name':'Anröchte', 'Data': [-2.2,  -1.2, 0, -1.1,  -1.7 ]  },
{ 'Name':'Bad Sassendorf', 'Data': [-10.7,  -7.6, -5.8, -10.2,  -8.4 ]  },
{ 'Name':'Ense', 'Data': [1.6,  0.5, -2.4, -4.2,  -2 ]  },
{ 'Name':'Erwitte', 'Data': [-1.6,  -3.2, -3.2, -3.8,  -1.3 ]  },
{ 'Name':'Geseke', 'Data': [-2.7,  -2.3, -4.7, -5.2,  -4.2 ]  },
{ 'Name':'Lippetal', 'Data': [-1.8,  -2.6, -2.2, -2,  -1.5 ]  },
{ 'Name':'Lippstadt', 'Data': [-0.9,  -1.5, -1.5, -3,  -2.4 ]  },
{ 'Name':'Möhnesee', 'Data': [-3.3,  -5.9, -4.8, -11.8,  -8.3 ]  },
{ 'Name':'Rüthen', 'Data': [-4.5,  -5.2, -6.1, -6.3,  -2.1 ]  },
{ 'Name':'Soest', 'Data': [-0.9,  -1.2, -2.7, -2.8,  -2.3 ]  },
{ 'Name':'Warstein', 'Data': [-3,  -3.7, -5, -5.8,  -5.2 ]  },
{ 'Name':'Welver', 'Data': [-2.4,  -3.1, -4.5, -5.3,  -6.6 ]  },
{ 'Name':'Werl', 'Data': [-0.7,  -2.6, -1.7, -2.8,  -3.5 ]  },
{ 'Name':'Wickede (Ruhr)', 'Data': [-3.7,  -4.2, -5.1, -5.7,  -0.6 ]  },
{ 'Name':'Bergkamen','Data': [-2,  -3.2, -2.1, -3.7,  -4.1 ]  },
{ 'Name':'Bönen', 'Data': [-2.6,  -1.7, -2.8, -5.8,  -2.7 ]  },
{ 'Name':'Fröndenberg/Ruhr', 'Data': [-3.4,  -5.5, -7.4, -7.8,  -9.4 ]  },
{ 'Name':'Holzwickede', 'Data': [-2.9,  -4, -4.2, -4.7,  -3.7 ]  },
{ 'Name':'Kamen', 'Data': [-2.2,  -3.1, -3.8, -5,  -5.5 ]  },
{ 'Name':'Lünen', 'Data': [-2.4,  -3.5, -4.4, -4.4,  -4 ]  },
{ 'Name':'Schwerte', 'Data': [-3.9,  -4.5, -3.8, -4.7,  -4.5 ]  },
{ 'Name':'Selm', 'Data': [-0.4,  -1.2, -4.1, -4.8,  -3.7 ]  },
{ 'Name':'Unna', 'Data': [-1.5,  -2.9, -4.5, -4.2,  -4.9 ]  },
{ 'Name':'Werne', 'Data': [-4.5,  -6.5, -6.5, -5.5,  -6.4 ]  },

];