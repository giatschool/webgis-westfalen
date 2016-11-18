var timeslider;

/**
 * function to update the visibility and values of the timeslider if a Layer has changed
 */
function updateTimeslider(){
	if (getYearsArray(currentDataframe).length > 1){
		document.getElementById('timesliderDiv').style.display = 'block';
		timeslider.set({
			name: 'timeslider',
	    	minimum:0,
	    	maximum:getYearsArray(currentDataframe).length-1,
	    	onChange:function(val){ yearChange(val); },
	    	value:getYearsArray(currentDataframe).length-1,
	    	discreteValues:getYearsArray(currentDataframe).length,
	    	showButtons:true,
	    	intermediateChanges:true,
	    	slideDuration:0,
	    	style:{width:'20%', height:'20px'}
		});
		var appendix = '';
		if (layerAttributes[1].indexOf('Altersgruppe') !== -1) {appendix = ' J.';}
		document.getElementById('legendTheme').innerHTML = layerAttributes[1] + ': ' + getYearsArray(currentDataframe)[getYearsArray(currentDataframe).length-1] + appendix;
		document.getElementById('timesliderValue').innerHTML = layerAttributes[1] + ': ' + getYearsArray(currentDataframe)[getYearsArray(currentDataframe).length-1] + appendix;
		document.getElementById('timesliderMinLabel').innerHTML = getYearsArray(currentDataframe)[0];
		document.getElementById('timesliderMaxLabel').innerHTML = getYearsArray(currentDataframe)[getYearsArray(currentDataframe).length-1];
	}
	else if (getYearsArray(currentDataframe).length === 1){
		document.getElementById('timesliderDiv').style.display = 'none';
		if (getYearsArray(currentDataframe)[0] === ''){
			document.getElementById('timesliderValue').innerHTML = layerAttributes[1];
			document.getElementById('legendTheme').innerHTML = layerAttributes[1];
		}
		else {
			document.getElementById('timesliderValue').innerHTML = layerAttributes[1] + ': ' + getYearsArray(currentDataframe)[getYearsArray(currentDataframe).length-1];
			document.getElementById('legendTheme').innerHTML = layerAttributes[1] + ': ' + getYearsArray(currentDataframe)[getYearsArray(currentDataframe).length-1];
		}
	}
	else {
		document.getElementById('timesliderDiv').style.display = 'none';
		document.getElementById('timesliderValue').innerHTML = layerAttributes[1];
		document.getElementById('legendTheme').innerHTML = layerAttributes[1];
	}
}

/**
 * function to create the timeslider on startup
 */
function createTimeslider(){
	require(['dijit/form/HorizontalSlider', 'dojo/domReady!'], function(HorizontalSlider){
		timeslider = new HorizontalSlider({
			name: 'timeslider',
	    	minimum:0,
	    	maximum:getYearsArray(currentDataframe).length-1,
	    	onChange:function(val){ yearChange(val); },
	    	value:getYearsArray(currentDataframe).length-1,
	    	discreteValues:getYearsArray(currentDataframe).length,
	    	showButtons:true,
	    	intermediateChanges:true,
	    	slideDuration:0,
	    	style:{width:'20%', height:'20px'}
		}, 'timeslider');
		updateTimeslider();
		timeslider.set({value:getYearsArray(currentDataframe).length-1});
	});
	document.getElementById('timesliderValue').innerHTML = layerAttributes[1] + ': ' + getYearsArray(currentDataframe)[getYearsArray(currentDataframe).length-1];
	document.getElementById('legendTheme').innerHTML = layerAttributes[1] + ': ' + getYearsArray(currentDataframe)[getYearsArray(currentDataframe).length-1];
	console.log(layerAttributes[1])
	console.log(getYearsArray(currentDataframe).length-1)
	console.log(getYearsArray(currentDataframe)[2])
	console.log(getYearsArray(currentDataframe)[getYearsArray(currentDataframe).length-1])
}