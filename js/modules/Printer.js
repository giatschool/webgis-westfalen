define(['dojo/query'], function(query) {

	/**
   * converts the legend to JSON to transmit it to the print preview
   */
  function legendToJSON() {
    var i = 0;

    var legend = {};
    legend.values = [];
    legend.diagram = [];

    $('div#myLegend table tr').each( function () {
      legend.values.push(
        {
          'bg' : $(this).children('td:nth-of-type(1)').children('.legendColorfield').css('background-color'),
          'min' : $(this).children('td:nth-of-type(2)').text(),
          'l' : $(this).children('td:nth-of-type(4)').text(),
          'max' : $(this).children('td:nth-of-type(5)').text()
        }
      );
    });

    if($('div#legendDiagrams').length > 0) {
      $('div#legendDiagrams table tbody tr').each( function () {
        legend.diagram.push(
          {
            'icon' : $(this).children('td:nth-of-type(1)').children('img').attr('src'),
            'text' : $(this).children('td:nth-of-type(2)').text()
          }
        );
      });
    }

    return legend;
  }

  return {
    printMap: function() {
      console.log('initPrinter called');

      var svgElement = $('#map_gc')[0];
      var xmlSerializer = new XMLSerializer();
      var str = xmlSerializer.serializeToString(svgElement);
      var overlayUrl = $('#map_collection img').attr('src');

      var mapTitle = $('#mapExportTitle').val();
      var mapAuthor = $('#mapExportAuthor').val();
      var jsonLegend = legendToJSON();

      $('#exportWarning').html('<img src="images/loading_small.gif" id="loadingImage" alt="loading" />');

      $.ajax({
          type: 'POST',
          url: './lwl-convert/converter.php',
          data: {
            'svg': str,
            'overlay': overlayUrl,
            'legend': JSON.stringify(jsonLegend)
           },
          success: function(data) {
            response = $.parseJSON(data);
            console.log('Map printed, id '+response.message);
            if(response.status==='success') {
              $('#exportWarning').html('<a style="margin:" href="./lwl-convert/printpreview.php?map='+response.message+'&name='+escape(mapAuthor)+'&title='+escape(mapTitle)+'" target="_blank">Link zur Druckansicht</a>');
            } else {
              $('#exportWarning').html('<i>Beim Erstellen der Druckansicht ist ein Fehler aufgetreten.</i>');
            }
          },
          fail: function(data) {
            console.log('Error printing id '+response.message);
            $('#exportWarning').html('<i>Beim Erstellen der Druckansicht ist ein Fehler aufgetreten.</i>');
          }
      });
    }
  }
});