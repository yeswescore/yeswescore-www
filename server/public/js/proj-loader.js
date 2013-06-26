/*
-------------------------------------------
	LOAD PROJECTS INTO THE PAGE LOADER
-------------------------------------------
*/
$(document).ready(function() {
	
	/* SETTINGS */
	var slideToSpeed = 1000;
	var slideUpSpeed = 700;
	var $easingType= 'easeInOutQuart';
	
	var $close_button = $('#close');	
	var $load_items = $('a.loadcontent');
	
	var hash = window.location.hash.substr(1);
	$('a').each(function(){
		var $this = $(this);							 
		var rel = $this.attr('rel');
		var href = $this.attr('href');
		if(hash==rel){
			$(this).addClass('active');	
			$('html,body').animate({scrollTop: $("#portfolio").offset().top}, slideToSpeed, $easingType, function() {
				$(this).addClass('active');
				loadContent(href);																										
			});
		}											
	});
		
	/* OPEN PANEL FOR PAGE LOADER */
	$load_items.click(function() {
		$load_items.removeClass('active');
		$(this).addClass('active');					   
		//						   
			
		var $this = $(this);	
		var rel = $this.attr('rel');
		var href = $this.attr('href');
		
		if(window.location.hash.substr(1) == rel) { 
			$('html,body').animate({scrollTop: $("#portfolio").offset().top}, slideToSpeed, $easingType);
		} else {
			window.location.hash = rel;
			$('html,body').animate({scrollTop: $("#portfolio").offset().top}, slideToSpeed, $easingType, function() {
				$close_button.fadeOut(100);
				$('#pagecontent').slideUp(slideUpSpeed, function() {
					loadContent(href);
				});													
			});
		}
		return(false);
	});
	
	/* CLOSE BUTTON */
	$close_button.click(function() {
		$load_items.removeClass('active');
		$close_button.fadeOut(500);
		$('#pagecontent').slideUp(slideUpSpeed, $easingType, function(){
			$.waypoints("refresh");
		});
		window.location.hash = '#-';
		return(false);
	});
	
	
	/* LOAD CONTENTS */	
	function loadContent(href) {
		$('#loader').fadeIn(100);

		var LoadContentWrapper = href+' .pageloader_inner';
		
		$('#pageloader').queue(function() {
			$(this).load(LoadContentWrapper, function() {
				$('#loader').fadeOut(100);
				$('#pagecontent').slideDown(slideUpSpeed, $easingType, function() {
				
					$close_button.fadeIn(500);
			        	
		        	/*********************************
		        	
		        	 ADD A SLIDER FOR EACH PROJECT 
		        	 
		        	*********************************/
		        	$('#proj_slider01').flexslider();
		        	$('#proj_slider02').flexslider();
		        	$('#proj_slider03').flexslider();
		        	$('#proj_slider04').flexslider();
		        	$('#proj_slider05').flexslider();			
				    
				    
				    $.waypoints("refresh");
			    });
				initialise('#pagecontent');
				$.waypoints("refresh");
			// after loading is complete initialise all scripts
			});
			$(this).dequeue();
		});
	}
});