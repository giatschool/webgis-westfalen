require(['dojo/on', 'dojo/dom', 'dojo/dom-class', 'dojo/domReady!'],function(on, dom, domClass){

  var slideAwayButtonSplit = dom.byId('slideAwayButton_split');

  var dualView = false;
  var fs, fs2;
  
  on(slideAwayButtonSplit, 'click', function(evt){
    //reposition menuPane-layer, needed if the user drags it to far left before issueing a split
    $('#menuPane-layer').css({'left': '85px', 'top': '75px'});
    //reposition menuPane-legend, ...,
    $('#menuPane-legend').css({'left': '65px', 'top': '731px'});
    //reposition menuPane-export, ...,
    $('#menuPane-export').css({'left': '85px', 'top': '75px'});
    //reposition menuPane-classes, ...,
    $('#menuPane-classes').css({'left': '85px', 'top': '75px'});
    //reposition menuPane-classes, ...,
    $('#menuPane-grid').css({'left': '85px', 'top': '75px'});
    if (dualView) {
      fs.removeChild(parent.document.getElementById('frame2'));
      fs = parent.document.getElementById('frameset');
      fs.cols = '100%';
      dualView = false;
      domClass.add('copyColorRange','disabled');
      domClass.remove('copyColorRange','enabled');
    } else {
      fs = parent.document.getElementById('frameset');
      f2 = top.document.createElement('frame');
      fs.cols = '50%,50%';
      f2.name = 'frame2';
      f2.id = 'frame2';
      f2.src = 'map.html';
      fs.appendChild(f2);
      dualView = true;
      domClass.remove('copyColorRange','disabled');
      domClass.add('copyColorRange','enabled');

    }

    /* jshint ignore:start */
    window.setTimeout('fullExtent(); fullExtent();', 500);
    /* jshint ignore:end*/
  });
});