jQuery(document).ready(function(){
	
	var displayForm = (function() {
			var formHTML = jQuery("#fcwp_formTemplate").html();
			jQuery('body').append(formHTML);	
			bindEvents();
			window.fcwp_main.loadFcChartTypes();
			window.fcwp_main.bindFormElementEvents();
			loadPopupBox();
		}),
		unloadPopupBox = (function () {    // TO Unload the Popupbox
	        jQuery('#fcwp_popupDiv').fadeOut("slow", function() {
		        jQuery("#fcwp_popupDiv").remove();
		        jQuery("#fcwp_content_bg").remove();
	        }); 
	         
	    }),
	    bindEvents = (function(){
			jQuery('#fcwp_popupBoxClose').unbind('click').on('click', function() {
		        unloadPopupBox();
		    });
		    
		    jQuery('#fcwp_container').unbind('click').on('click', function() {
		        unloadPopupBox();
		    });

		    jQuery("#fcwp_chartType").unbind("change").on("change", function(){
		    	jQuery("#fcwp_chartDataType").trigger("change");
		    });    	
	    }),    
        loadPopupBox = (function() {    // To Load the Popupbox
	        jQuery('#fcwp_popupDiv').fadeIn("slow");
	        // jQuery( "<div id='fcwp_content_bg'></div>" ).insertBefore(jQuery("#fcwp_popupDiv"));
	        jQuery('#fcwp_content_bg').fadeIn("slow");
	    });

	jQuery("#fcwp_button").unbind('click').on('click', function(){
		displayForm();
	});
});


 