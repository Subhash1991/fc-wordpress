var loadFcChartTypes, bindFormElementEvents, populateDataSection, previewTheChart, validateChartForm, backToChartSettings, showEmbedCode;
window.fcwp_main.loadFcChartTypes= (function(){
	var index,optionHTML="";
	for(index in window.fcwp_main.fc_chartTypes) {
		optionHTML += "<option value='"+window.fcwp_main.fc_chartTypes[index].id+"'>"+window.fcwp_main.fc_chartTypes[index].name+"</option>"
	}
	jQuery("#fcwp_chartType").html(optionHTML);
});

window.fcwp_main.populateDataSection = (function(element) {
	var value = jQuery.trim(jQuery(element).val()),
	getData = (function(chartId, datatype){
		for(var index in window.fcwp_main.fc_chartTypes) {
			if(window.fcwp_main.fc_chartTypes[index].id == chartId) {
				if(datatype=="json") {
					return window.fcwp_main.fc_chartTypes[index].dataJSON;
				} else {
					return window.fcwp_main.fc_chartTypes[index].dataXML;
				}
			}
		}
	});
	if(value != "") {
		switch(value) {

			case "json":
				if(jQuery("#fcwp_data").length)jQuery("#fcwp_data").remove();
				jQuery('<textarea id="fcwp_data" data-type="json"></textarea>').insertAfter( jQuery(element) );
				jQuery("p",jQuery(element).parent()[0]).css({
					"display": "none"
				});
				jQuery("#fcwp_data").val(getData(jQuery("#fcwp_chartType").val(), "json"));
			break;

			case "xml":
				if(jQuery("#fcwp_data").length)jQuery("#fcwp_data").remove();
				jQuery('<textarea id="fcwp_data" data-type="xml"></textarea>').insertAfter( jQuery(element) );
				jQuery("p",jQuery(element).parent()[0]).css({
					"display": "none"
				});
				jQuery("#fcwp_data").val(getData(jQuery("#fcwp_chartType").val(), "xml"));
			break;

			case "jsonurl":
				if(jQuery("#fcwp_data").length)jQuery("#fcwp_data").remove();
				jQuery('<input type="text" placeholder="Enter JSON URL here" id="fcwp_data"/>').insertAfter( jQuery(element) );
				jQuery("p",jQuery(element).parent()[0]).css({
					"display": "none"
				});
			break;

			case "xmlurl":
				if(jQuery("#fcwp_data").length)jQuery("#fcwp_data").remove();
				jQuery('<input type="text" placeholder="Enter XML URL here" id="fcwp_data"/>').insertAfter( jQuery(element) );
				jQuery("p",jQuery(element).parent()[0]).css({
					"display": "none"
				});
			break;
		}
	} else {
		if(jQuery("#fcwp_data").length){
			jQuery("#fcwp_data").remove();
			jQuery("p",jQuery(element).parent()[0]).css({
				"display": "block"
			});
		}
	}
});

window.fcwp_main.validateChartForm = (function() {
	// if(jQuery.trim(jQuery("#fcwp_chartTitle").val())=="") {
	// 	jQuery("#fcwp_chartTitle").siblings(".error-text").remove();
	// 	jQuery("#fcwp_chartTitle").after("<div class='error-text'>Please enter chart title</div>");
	// 	// alert("Please enter chart title");
	// 	jQuery("#fcwp_chartTitle").addClass("error-info");
	// 	return 0;
	// } else {
	// 	jQuery("#fcwp_chartTitle").removeClass("error-info");
	// 	jQuery("#fcwp_chartTitle").siblings(".error-text").remove();
	// }
	if(jQuery.trim(jQuery("#fcwp_chartType").val())=="") {
		jQuery("#fcwp_chartType").siblings(".error-text").remove();
		jQuery("#fcwp_chartType").after("<div class='error-text'>Please enter chart type</div>");
		//alert("Please enter chart type");
		jQuery("#fcwp_chartType").addClass("error-info");
		return 0;
	} else {
		jQuery("#fcwp_chartType").removeClass("error-info");
		jQuery("#fcwp_chartType").siblings(".error-text").remove();
	}
	if(jQuery.trim(jQuery("#fcwp_chartId").val())=="") {
		jQuery("#fcwp_chartId").siblings(".error-text").remove();
		jQuery("#fcwp_chartId").after("<div class='error-text'>Please enter unique chart ID</div>");
		//alert("Please enter unique chart id");
		jQuery("#fcwp_chartId").addClass("error-info");
		return 0;
	} else {
		jQuery("#fcwp_chartId").removeClass("error-info");
		jQuery("#fcwp_chartId").siblings(".error-text").remove();
	}
	if(jQuery.trim(jQuery("#fcwp_chartWidth").val())!==""&&!isNaN(jQuery("#fcwp_chartWidth").val())) {
		jQuery("#fcwp_chartWidth").removeClass("error-info");
		jQuery("#fcwp_chartWidth").siblings(".error-text").remove();
	} else {
		jQuery("#fcwp_chartWidth").siblings(".error-text").remove();
		jQuery("#fcwp_chartWidth").after("<div class='error-text'>Please enter chart width</div>");
		//alert("Please enter chart width in number");
		jQuery("#fcwp_chartWidth").addClass("error-info");
	}

	if(jQuery.trim(jQuery("#fcwp_chartWidthUnit").val())=="%"){
	  	if(jQuery("#fcwp_chartWidth").val()>100){
	  		jQuery("#fcwp_chartWidth").val(100);
	  	}	  	
	} else {
		
	}

	if(jQuery.trim(jQuery("#fcwp_chartHeight").val())!==""&&!isNaN(jQuery("#fcwp_chartHeight").val())) {
		jQuery("#fcwp_chartHeight").removeClass("error-info");
		jQuery("#fcwp_chartHeight").siblings(".error-text").remove();
	} else {
		jQuery("#fcwp_chartHeight").siblings(".error-text").remove();
		jQuery("#fcwp_chartHeight").after("<div class='error-text'>Please enter chart height</div>");
		//alert("Please enter chart height in number");
		jQuery("#fcwp_chartHeight").addClass("error-info");
		return 0;
	}
	if(jQuery.trim(jQuery("#fcwp_chartContainerId").val())=="") {
		jQuery("#fcwp_chartContainerId").siblings(".error-text").remove();
		jQuery("#fcwp_chartContainerId").after("<div class='error-text'>Please enter chart container div id</div>");
		//alert("Please enter chart container div id");
		jQuery("#fcwp_chartContainerId").addClass("error-info");
		return 0;
	} else {
		jQuery("#fcwp_chartContainerId").removeClass("error-info");
		jQuery("#fcwp_chartContainerId").siblings(".error-text").remove();
	}
	if(jQuery.trim(jQuery("#fcwp_chartDataType").val())=="") {
		jQuery("#fcwp_chartDataType").siblings(".error-text").remove();
		jQuery("#fcwp_chartDataType").after("<div class='error-text'>Please select chart data type</div>");
		//alert("Please select chart data type");
		jQuery("#fcwp_chartDataType").addClass("error-info");
		return 0;
	} else {
		jQuery("#fcwp_chartDataType").removeClass("error-info");
		jQuery("#fcwp_chartDataType").siblings(".error-text").remove();
	}
	if(jQuery.trim(jQuery("#fcwp_data").val())=="") {
		jQuery("#fcwp_data").siblings(".error-text").remove();
		jQuery("#fcwp_data").after("<div class='error-text'>Please select chart data</div>");
		//alert("Please select chart data");
		jQuery("#fcwp_data").addClass("error-info");
		return 0;
	} else {
		jQuery("#fcwp_data").removeClass("error-info");
		jQuery("#fcwp_data").siblings(".error-text").remove();
	}
	return 1;
});

window.fcwp_main.previewTheChart = (function() {
	if(window.fcwp_main.validateChartForm()) {
		var fcData = {
				// chartTitle : jQuery("#fcwp_chartTitle").val(),
				chartType : jQuery("#fcwp_chartType").val(),
				chartId : jQuery("#fcwp_chartId").val(),
				chartWidth : jQuery("#fcwp_chartWidth").val(),
				chartWidthUnit : jQuery("#fcwp_chartWidthUnit").val(),
				chartHeight : jQuery("#fcwp_chartHeight").val(),
				chartHeightUnit : jQuery("#fcwp_chartHeightUnit").val(),
				chartContainerId : jQuery("#fcwp_chartContainerId").val(),
				chartDataType : jQuery("#fcwp_chartDataType").val(),
				chartData : jQuery("#fcwp_data").val(),
				action : 'get_chart'
			};
		// if(parseInt(fcData.chartWidth)>400){
		// 	fcData.chartWidth = 400;
		// }
		// if(parseInt(fcData.chartHeight)>400){
		// 	fcData.chartWidth = 400;
		// }	

		if((parseInt(fcData.chartWidth)>400)&&(fcData.chartWidthUnit=="px")){
			fcData.chartWidth = 400;
		}

		if(parseInt(fcData.chartHeight)>400){
			fcData.chartHeight = 250;
		}


		jQuery.ajax({
			url: ajaxurl,
			data: fcData,
			type: "POST",
			success: function(returnData) {
				window.fcwp_main.fcwp_embedChartCode = returnData;
				returnData = "<!DOCTYPE html><html><head></head><body>"+returnData+"</body></html>";
					if(fcData.chartWidthUnit ==="px") {
						var extraWidth = 25;
					}
					else {
						var extraWidth = 0;
					}
				jQuery("#fcwp_preview object").css({					
					"width" : (parseInt(fcData.chartWidth)+extraWidth)+fcData.chartWidthUnit,
					"height" : (parseInt(fcData.chartHeight)+25)+fcData.chartHeightUnit
				});
				jQuery("#fcwp_preview object").attr('data',"data:text/html;charset=utf-8,"+escape(returnData));
				jQuery("#fcwp_step1").fadeOut(function(){
					jQuery("#fcwp_preview").fadeIn();
				});
			}
		});	
	}
});

window.fcwp_main.showEmbedCode = (function() {
	// jQuery("#fcwp_embedCode").text(window.fcwp_main.fcwp_embedChartCode);
	// jQuery("#fcwp_preview").fadeOut(function() {
	// 	jQuery("#fcwp_code").fadeIn();	
	// });
	wp.media.editor.insert(window.fcwp_main.fcwp_embedChartCode);
	jQuery('#fcwp_popupDiv').fadeOut("slow", function() {
		// jQuery("#fcwp_popupDiv").prev().css({ // this is just for style        
	 //        "display": "none"  
	 //    });
	    jQuery("#fcwp_popupDiv").remove();
	    jQuery("#fcwp_content_bg").remove();
	}); 
});

window.fcwp_main.backToChartSettings = (function() {
	jQuery("#fcwp_preview").fadeOut(function(){
		jQuery("#fcwp_step1").fadeIn();
	});
});

window.fcwp_main.bindFormElementEvents = (function() {
	jQuery("#fcwp_chartDataType").unbind('change').on('change', function(event){
		if(jQuery(event.currentTarget).val().indexOf("url")!=-1) {
			alert("If you select JSON/XML url as data type all the previous given data for chart may be overwritten by the url's data");
		}
		window.fcwp_main.populateDataSection(event.currentTarget);
	});
	jQuery("#fcwp_previewButton").unbind('click').on('click', function(event){
		window.fcwp_main.previewTheChart();
	});
	jQuery("#fcwp_chartSettingsButton").unbind('click').on('click', function(){
		window.fcwp_main.backToChartSettings();
	});
	jQuery("#fcwp_embedChartButton").unbind('click').on('click', function() {
		window.fcwp_main.showEmbedCode();
	});



	// jQuery("#fcwp_chartTitle").blur(function(){
	// 	if(jQuery.trim(jQuery("#fcwp_chartTitle").val())=="") {
	// 	jQuery("#fcwp_chartTitle").siblings(".error-text").remove();
	// 	jQuery("#fcwp_chartTitle").after("<div class='error-text'>Enter chart title</div>");
	// 	// alert("Please enter chart title");
	// 	jQuery("#fcwp_chartTitle").addClass("error-info");
	// 	return 0;
	// 	} else {
	// 		jQuery("#fcwp_chartTitle").removeClass("error-info");
	// 		jQuery("#fcwp_chartTitle").siblings(".error-text").remove();
	// 	}
	// });


	jQuery("#fcwp_chartId" ).blur(function() {
		if(jQuery.trim(jQuery("#fcwp_chartId").val())=="") {
		jQuery("#fcwp_chartId").siblings(".error-text").remove();
		jQuery("#fcwp_chartId").after("<div class='error-text'>Enter an unique chart ID</div>");
		//alert("Please enter unique chart id");
		jQuery("#fcwp_chartId").addClass("error-info");
			return 0;
		} else {
			jQuery("#fcwp_chartId").removeClass("error-info");
			jQuery("#fcwp_chartId").siblings(".error-text").remove();
		}
	});


	jQuery("#fcwp_chartWidth" ).blur(function() {
		if(jQuery.trim(jQuery("#fcwp_chartWidth").val())!==""&&!isNaN(jQuery("#fcwp_chartWidth").val())) {
			jQuery("#fcwp_chartWidth").removeClass("error-info");
			jQuery("#fcwp_chartWidth").parent(".fcwp_group").siblings(".error-text").remove();
		} else {
			jQuery("#fcwp_chartWidth").parent(".fcwp_group").siblings(".error-text").remove();
			jQuery("#fcwp_chartWidth").parent(".fcwp_group").after("<div class='error-text'>Enter chart width</div>");
			//alert("Please enter chart width in number");
			jQuery("#fcwp_chartWidth").addClass("error-info");
		}

		if(jQuery.trim(jQuery("#fcwp_chartWidthUnit").val())=="%"){
	  	if(jQuery("#fcwp_chartWidth").val()>100){
	  		jQuery("#fcwp_chartWidth").val(100);
	  	}	  	
		} else {
			
		}
	});


	jQuery("#fcwp_chartWidthUnit" ).change(function() {
		if(jQuery.trim(jQuery("#fcwp_chartWidthUnit").val())=="%"){
	  	if(jQuery("#fcwp_chartWidth").val()>100){
	  		jQuery("#fcwp_chartWidth").val(100);
	  	}	  	
		} else {
			
		}
	});

	


	jQuery("#fcwp_chartHeight" ).blur(function() {
		if(jQuery.trim(jQuery("#fcwp_chartHeight").val())!==""&&!isNaN(jQuery("#fcwp_chartHeight").val())) {
			jQuery("#fcwp_chartHeight").removeClass("error-info");
			jQuery("#fcwp_chartHeight").parent(".fcwp_group").siblings(".error-text").remove();
		} else {
			jQuery("#fcwp_chartHeight").parent(".fcwp_group").siblings(".error-text").remove();
			jQuery("#fcwp_chartHeight").parent(".fcwp_group").after("<div class='error-text'>Enter chart height</div>");
			//alert("Please enter chart height in number");
			jQuery("#fcwp_chartHeight").addClass("error-info");
			return 0;
		}
	});

	jQuery("#fcwp_chartContainerId" ).blur(function() {
		if(jQuery.trim(jQuery("#fcwp_chartContainerId").val())=="") {
			jQuery("#fcwp_chartContainerId").siblings(".error-text").remove();
			jQuery("#fcwp_chartContainerId").after("<div class='error-text'>Enter an unique div id</div>");
			//alert("Please enter chart container div id");
			jQuery("#fcwp_chartContainerId").addClass("error-info");
			return 0;
		} else {
			jQuery("#fcwp_chartContainerId").removeClass("error-info");
			jQuery("#fcwp_chartContainerId").siblings(".error-text").remove();
		}
	});


	jQuery("#fcwp_chartDataType" ).change(function() {
		if(jQuery.trim(jQuery("#fcwp_chartDataType").val())=="") {
			jQuery("#fcwp_chartDataType").siblings(".error-text").remove();
			jQuery("#fcwp_chartDataType").after("<div class='error-text'>Select chart data type</div>");
			//alert("Please select chart data type");
			jQuery("#fcwp_chartDataType").addClass("error-info");
			return 0;
		} else {
			jQuery("#fcwp_chartDataType").removeClass("error-info");
			jQuery("#fcwp_chartDataType").siblings(".error-text").remove();
		}
	});


});



