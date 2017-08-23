function convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ';'

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
        items.unshift(headers);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);

    var csv = this.convertToCSV(jsonObject);

    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", exportedFilenmae);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

function download(data, titel){

  var headers = {};
    
  var itemsNotFormatted = [];

  for (var i = 0; i < data[0].Data.length; i++) {
    headers['ort'] = 'Ort';
    headers[data[0].Data[i]] = data[0].Data[i];
  }


  for (var i = 0; i < data.length; i++) {
    for (var k = 0; k < data[0].Data.length; k++) {
      headers[data[0].Data[k]] = data[i].Data[k];
    }
    var headersCopy = Object.assign({}, headers);
    itemsNotFormatted.push(headersCopy);
  }

  for (var k = 0; k < itemsNotFormatted.length; k++) {
    itemsNotFormatted[k].ort = data[k].Name;
  }
  
  var itemsFormatted = itemsNotFormatted.slice(1);

  for (var i = 0; i < data[0].Data.length; i++) {
    headers['ort'] = 'Ort';
    headers[data[0].Data[i]] = data[0].Data[i];
  }

  console.log(titel);
  
  var fileTitle = titel;
  

  exportCSVFile(headers, itemsFormatted, fileTitle); // call the exportCSVFile() function to process the JSON and trigger the download
}