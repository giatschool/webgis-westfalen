function selectGrid(e){
  require(['esri/layers/FeatureLayer',
    'esri/symbols/SimpleFillSymbol',
    'esri/symbols/SimpleLineSymbol',
    'esri/tasks/query',
    'esri/Color'],function(FeatureLayer, SimpleFillSymbol, SimpleLineSymbol, Query, Color){
    console.log(e);
    var id = e.graphic.attributes.Kreisname;
    var query = new Query();
    query.where = 'Kreisname = \'' + id + '\'';
    var fl = map.getLayer('kreise');
    fl.selectFeatures(query, FeatureLayer.SELECTION_NEW, function(results){
      for (var i = 0; i < fl.renderer.infos.length; i++) {
        if (fl.renderer.infos[i].value.toLowerCase() === results[0].attributes.Kreisname.toLowerCase()) {
          color = fl.renderer.infos[i].symbol.color;
          break;
        }
      }

      sls = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,new Color([0, 85, 157]),2);

      featureLayer.setSelectionSymbol(new SimpleFillSymbol().setOutline(sls).setColor(color));
    });
    grid.clearSelection();
    var result_id = store.query({'0':id})[0].id;
    grid.select(result_id);
    grid.row(result_id).element.scrollIntoView();
  });
}

function selectState(e) {
  require(['esri/layers/FeatureLayer',
    'esri/symbols/SimpleFillSymbol',
    'esri/symbols/SimpleLineSymbol',
    'esri/tasks/query',
    'esri/Color'],function(FeatureLayer, SimpleFillSymbol, SimpleLineSymbol, Query, Color){
    var fl = map.getLayer('kreise');
    var query = new Query();
    query.where = 'Kreisname = \'' + e.target.innerHTML + '\'';
    fl.selectFeatures(query, FeatureLayer.SELECTION_NEW, function(results){
      if (results.length) {
        for (var i = 0; i < fl.renderer.infos.length; i++) {
          if (fl.renderer.infos[i].value.toLowerCase() === results[0].attributes.Kreisname.toLowerCase()) {
            color = fl.renderer.infos[i].symbol.color;
            break;
          }
        }

        featureLayer.on('mouse-over', function() {
          map.setMapCursor('pointer');
        });

        featureLayer.on('mouse-out', function() {
          map.setMapCursor('default');
        });

        featureLayer.on('click', selectGrid);

        sls = new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,new Color([0, 85, 157]),2);

        featureLayer.setSelectionSymbol(new SimpleFillSymbol().setOutline(sls).setColor(color));
      }
    });
  });
}

/**
 * programmatically add onMouseOver-tooltips
 */
function addTooltips() {
  require(['dijit/Tooltip',
    'dojo/dom',
    'dgrid/OnDemandGrid',
    'dgrid/Selection',
    'dojo/store/Memory',
    'dojo/query',
    'dojo/_base/declare',
    'dojo/domReady!'],function(Tooltip, dom, Grid, Selection, Memory, query, declare){

    query('.gridview').on('click', function(e){
      //create columns
      var columns = {
        0: {
            label: 'Kreis'
        }
      };

      for (var j = 0; j < currentDataframe[0].Data.length; j++) {
        columns[j+1] = {label: currentDataframe[0].Data[j]};
      }

      store = new Memory();
      grid = new (declare([Grid,Selection]))({
        columns: columns
      }, 'grid');

      var data = [];
      var column;
      var i;
      for (i = 1; i < currentDataframe.length; i++) {
        data.push({});
        for (column in columns) {
          data[i-1].id = i;
          if (column === '0') {
            data[i-1][column] = currentDataframe[i].Name;
          } else {
            data[i-1][column] = currentDataframe[i].Data[column-1];
          }
        }
      }
      store.data = data;
      grid.set({'store':store});
      grid.on('.field-0:click', selectState);
      query('#menuPane-grid .menuPane-head')[0].innerHTML = layerAttributes[1];
      showPane('menuPane-grid');
    });

    //Layers:
    //Einwohner Layer
    new Tooltip({
      connectId: ['einwohnerInfoAbsolut'],
      label: 'Einwohner in den Jahren 1990,<br>2015 und 2040 (Prognose)<br><b>Einheit: </b>Absolute Zahlen',
      showDelay: 0
    });

    //Einwohner-Entwicklung Layer
    new Tooltip({
      connectId: ['einwohner_entwicklungInfo'],
      label: 'Entwicklung der Einwohnerzahlen in<br>den Zeiträumen 1990 - 2015 und<br>2015 - 2040 (Prognose)<br><b>Einheit: </b>Zu-/Abnahmen in &#037;',
      showDelay: 0
    });

    //Bevoelkerungsdichte Layer
    new Tooltip({
      connectId: ['bevoelkerungsdichteInfo'],
      label: 'Bevölkerungsdichte in den Jahren 2012, 2013 und 2015<br><b>Einheit: </b>Einwohner pro km&sup2;',
      showDelay: 0
    });

    //Altersgruppen Layer
    new Tooltip({
      connectId: ['altersgruppenInfo'],
      label: 'Altersgruppen im Jahr 2015<br><b>Einheit: </b>Anteile in &#037;',
      showDelay: 0
    });

    //Altersgruppen Diagramme 2011 Layer
    new Tooltip({
      connectId: ['altersgruppenDiagramme2011Info'],
      label: 'Diagramme zur Verteilung<br>der Altersgruppen im Jahr<br>2011',
      showDelay: 0
    });

    //Geburtenrate Layer
    new Tooltip({
      connectId: ['geburtenrateInfo'],
      label: 'Geburtenrate der Jahre 2007, 2009, 2011, 2013 und 2015<br><b>Einheit: </b>je 1.000 Einwohner (&permil;)',
      showDelay: 0
    });

    //Sterberate Layer
    new Tooltip({
      connectId: ['sterberateInfo'],
      label: 'Sterberate der Jahre 2007, 2009, 2011, 2013 und 2015<br><b>Einheit: </b>je 1.000 Einwohner (&permil;)',
      showDelay: 0
    });

    //Migrationen Layer
    new Tooltip({
      connectId: ['migrationen_gesamtInfo'],
      label: 'Zu-/Fortzüge der gesamten Bevölkerung der Jahre 2007, 2009, 2011, 2013 und 2015<br><b>Einheit: </b>je 1.000 Einwohner (&permil;)',
      showDelay: 0
    });

    //Migrationen Nichtdeutsch Layer
    new Tooltip({
      connectId: ['migrationen_nichtdeutschInfo'],
      label: 'Zu-/Fortzüge von Nichtdeutschen der Jahre 2007, 2009, 2011, 2013 und 2015<br><b>Einheit: </b>je 1.000 Einwohner (&permil;)',
      showDelay: 0
    });

    //Pflegebeduerftige Layer
    new Tooltip({
      connectId: ['pflegebeduerftigeInfo'],
      label: 'Anteil der Pflegebedürftigen an<br>der Gesamtbevölkerung<br>im Jahr 2011<br><b>Einheit: </b>&permil;',
      showDelay: 0
    });

    //PflegeheimPersonal
    new Tooltip({
      connectId: ['pflegeheimPersonalInfo'],
      label: 'Personal in Pflegeheimen: Veränderung im Zeitraum 2007 – 2013 in &#037;',
      showDelay: 0
    });

    //Pflegebedürftige in Pflegeheimen 2007 – 2013 Layer
    new Tooltip({
      connectId: ['pflegebeduerftigePflegeheimInfo'],
      label: 'Pflegebedürftige in Pflegeheimen: Veränderung im Zeitraum 2007 - 2013 in &#037;',
      showDelay: 0
    });

    //Pflegeeinrichtungen Layer
    new Tooltip({
      connectId: ['pflegeeinrichtungenInfo'],
      label: 'Verfügbare Plätze in stationären<br>Pflegeeinrichtungen im Jahr 2009<br><b>Einheit: </b>verfügbare Plätze je<br>100000 Einwohner ab 65 Jahren',
      showDelay: 0
    });

    //Haushaltsgroessen Layer
    new Tooltip({
      connectId: ['haushaltsgroessenInfo'],
      label: 'Durchschnittliche Haushaltsgrößen der Privathaushalte',
      showDelay: 0
    });

    //Single-Haushalte Layer
    new Tooltip({
      connectId: ['single_haushalteInfo'],
      label: 'Anteil der Single-Haushalte (= Ein-Personen-Haushalte) an allen Privathaushalten in &#037;',
      showDelay: 0
    });

    //Nichtdeutsche Layer
    new Tooltip({
      connectId: ['NichtdeutscheInfo'],
      label: 'Nichtdeutsche: Anteil an der Gesamtbevölkerung in &#037;',
      showDelay: 0
    });

    //Migrationshintergrund Layer
    new Tooltip({
      connectId: ['migrationshintergrundInfo'],
      label: 'Menschen mit Migrations-<br>hintergrund im Jahr 2008 und 2011<br><b>Einheit: </b>Anteile an der<br>Gesamtbevölkerung in &#037;',
      showDelay: 0
    });

    //Einkommen Layer
    new Tooltip({
      connectId: ['einkommenInfo'],
      label: 'Verfügbares Einkommen der privaten Haushalte <br><b>Einheit: </b>Euro je Einwohner',
      showDelay: 0
    });

    //Abschlüsse Layer
    new Tooltip({
      connectId: ['abschlüsseInfo'],
      label: 'Höchste berufliche Ausbildungsabschlüsse: Anteile an der Gesamtbevölkerung im Jahr 2013 in &#037;',
      showDelay: 0
    });

    //Arbeitslosenquote Layer
    new Tooltip({
      connectId: ['arbeitslosenquoteInfo'],
      label: 'Arbeitslosenquote in &#037;',
      showDelay: 0
    });

    //Arbeitslosenquote25 Layer
    new Tooltip({
      connectId: ['arbeitslosenquote25Info'],
      label: 'Arbeitslosenquote der unter 25-Jährigen in &#037;',
      showDelay: 0
    });

    //Arbeitslosenquote55 Layer
    new Tooltip({
      connectId: ['arbeitslosenquote55Info'],
      label: 'Arbeitslosenquote der über 55-Jährigen in &#037;',
      showDelay: 0
    });

    //ArbeitslosenquoteND Layer
    new Tooltip({
      connectId: ['arbeitslosenquoteNDInfo'],
      label: 'Arbeitslosenquote der Nichtdeutschen in &#037;',
      showDelay: 0
    });

    //Erwerbstätigen Layer
    new Tooltip({
      connectId: ['erwerbstätigeInfo'],
      label: 'Anteil der Erwerbstätigen an der Gesamtbevölkerung in &#037;',
      showDelay: 0
    });

    //Beschäftigte Layer
    new Tooltip({
      connectId: ['beschäftigteKreisInfo'],
      label: 'Zahl der sozialversicherungspflichtig Beschäftigten nach Wirtschaftsbereichen im Jahr 2014',
      showDelay: 0
    });

    //BIP Layer
    new Tooltip({
      connectId: ['bipInfo'],
      label: 'Bruttoinlandsprodukt (BIP) je Erwerbstätigen in Euro',
      showDelay: 0
    });

    //Pendlersaldo Layer
    new Tooltip({
      connectId: ['pendlerInfo'],
      label: 'Pendlersaldo: Zahl der Einpendler minus Zahl der Auspendler',
      showDelay: 0
    });

    //Konfessionen Layer
    new Tooltip({
      connectId: ['konfessionenInfo'],
      label: 'Konfessionszugehörigkeit: Anteile an der Gesamtbevölkerung im Jahr 2011 in &#037;',
      showDelay: 0
    });

    //Konfessionen Diagramme 2008-2010 Layer
    new Tooltip({
      connectId: ['konfessionenDiagramme2008Info'],
      label: 'Diagramme zur Verteilung der Konfessionen<br>im Durchschnitt der Jahre 2008 - 2010',
      showDelay: 0
    });

    //Menüs:
    //Themenauswahl Menü
    new Tooltip({
      connectId: ['themenauswahlInfo'],
      label: 'In diesem Untermenü können Sie aussuchen,<br>welche Daten als Ebene über die Karte <br>gelegt werden sollen.',
      showDelay: 0
    });

    //Klasseneinteilung Menü
    new Tooltip({
      connectId: ['klasseneinteilungInfo'],
      label: 'In diesem Untermenü können Sie die Art der Klassifikation angeben,<br>die Farbgebung und die Klassenanzahl verändern<br>und eigene Klassengrenzen bilden.',
      showDelay: 0
    });

    //Kopiere Farbwerte
    new Tooltip({
      connectId: ['copyColorRange'],
      label: 'Kopiert die Farbwerte aus dem anderen Kartenfenster.',
      showDelay: 0
    });

    ////////Tooltips für die Kommunale ansicht/////////////
    new Tooltip({
      connectId: ['einwohnerInfo'],
      label: 'Einwohner in den Jahren 1990,<br>2015 und 2040 (Prognose)<br><b>Einheit: </b>Absolute Zahlen',
      showDelay: 0
    });

    //Einwohner-Entwicklung Layer
    new Tooltip({
      connectId: ['einwohner_entwicklungInfoKommunal'],
      label: 'Entwicklung der Einwohnerzahlen in<br>den Zeiträumen 1990 - 2015 und<br>2015 - 2040 (Prognose)<br><b>Einheit: </b>Zu-/Abnahmen in &#037;',
      showDelay: 0
    });

    //Bevoelkerungsdichte Layer
    new Tooltip({
      connectId: ['bevoelkerungsdichteInfoKommunal'],
      label: 'Bevölkerungsdichte im Jahr 2015<br><b>Einheit: </b>Einwohner pro km&sup2;',
      showDelay: 0
    });

    //Migrationen Nichtdeutsch Layer
    new Tooltip({
      connectId: ['migrationen_nichtdeutschInfoKommunal'],
      label: 'Zu-/Fortzüge von Nichtdeutschen der Jahre 2007, 2009, 2011, 2013 und 2015<br><b>Einheit: </b>je 1.000 Einwohner (&permil;)',
      showDelay: 0
    });

    //Migrationen Gesamt Layer
    new Tooltip({
      connectId: ['migrationen_gesamtInfoKommunal'],
      label: 'Zu-/Fortzüge der gesamten Bevölkerung der Jahre 2007, 2009, 2011, 2013 und 2015<br><b>Einheit: </b>je 1.000 Einwohner (&permil;)',
      showDelay: 0
    });

     //Sterberate Layer
    new Tooltip({
      connectId: ['sterberateInfoKommunal'],
      label: 'Sterberate der Jahre und 2007, 2009, 2011, 2013 und 2015<br><b>Einheit: </b>je 1.000 Einwohner (&permil;)',
      showDelay: 0
    });

    //Geburtenrate Layer
    new Tooltip({
      connectId: ['geburtenrateInfoKommunal'],
      label: 'Geburtenrate der Jahre 2007, 2009, 2011, 2013 und 2015<br><b>Einheit: </b>je 1.000 Einwohner (&permil;)',
      showDelay: 0
    });

    //Altersgruppen Layer
    new Tooltip({
      connectId: ['altersgruppenInfoKommunal'],
      label: 'Altersgruppen im Jahr 2015<br><b>Einheit: </b>Anteile in &#037;',
      showDelay: 0
    });

    //Einkommen Layer
    new Tooltip({
      connectId: ['EinkommenKommunenCheckInfo'],
      label: 'Verfügbares Einkommen der privaten Haushalte<br><b>Einheit: </b> Euro je Einwohner',
      showDelay: 0
    });

    //beschäftigte
    new Tooltip({
      connectId: ['beschäftigteInfoKommunal'],
      label: 'Zahl der sozialversicherungspflichtig Beschäftigten nach Wirtschaftsbereichen<br> im Jahr 2014',
      showDelay: 0
    });

    //PendlersaldoKommunen Layer
    new Tooltip({
      connectId: ['pendlersaldoInfoKommunal'],
      label: 'Pendlersaldo: Zahl der Einpendler minus Zahl der Auspendler',
      showDelay: 0
    });

    //NichtdeutscheKommunal Layer
    new Tooltip({
      connectId: ['NichtdeutscheKommunenInfo'],
      label: 'Nichtdeutsche: Anteil an der Gesamtbevölkerung in &#037;',
      showDelay: 0
    });


    query('.copyColorRange').on('click', function(e) {
      
      var colors = [];
      if (self.name === 'frame1') {
        colors = parent.frames[1].getColor();
      } else if (self.name === 'frame2') {
        colors = parent.frames[0].getColor();
      }
      document.getElementById('eqBrStartColor').jscolor.fromString(colors[0]);
      document.getElementById('eqBrEndColor').jscolor.fromString(colors[1]);
    });

    //Klassifikationsmethode
    new Tooltip({
      connectId: ['klassifikationsInfo'],
      showDelay: 0,
      getContent: function() {
        var classifier = dom.byId('classificationMethod').value;
        var tooltipText = '';
        switch(classifier) {
          case 'equalInterval':
            tooltipText = 'Unterteilt die Klassen in gleich große Bereiche.';
            break;
          case 'quantile':
            tooltipText = 'Weist allen Klassen eine möglichst gleiche Anzahl von Objekten zu.';
            break;
          case 'jenks':
            tooltipText = 'Bildet Klassen, deren Objekte nah beieinanderliegende Werte aufweisen.';
            break;
          case 'standardDeviation':
            tooltipText = 'Fasst Objekte, deren Werte eine ähnlich große Abweichung vom Durchschnitt aufweisen, zu Klassen zusammen.';
            break;
          case 'pretty':
            tooltipText = 'Erstellt Klassen, die leicht verständlich<br>und optisch ansprechend sind.';
            break;
          default:
            tooltipText = '';
            break;
        }
        return tooltipText;
      }
    });
  });
}