/*
-------------------------------------------
	FULLSIZE SLIDER FUNCTION
-------------------------------------------
*/
$(document).ready(function() {
  $(document).on('init.slides', function() {
    additional_slides = $('#additional-slides').html();
    $(additional_slides).appendTo('#slides .slides-container');
    $('#slides').superslides('update');
  });

  $('#slides').superslides({
    slide_easing: 'easeInOutCubic',
    slide_speed: 800,
    pagination: false,
    hashchange: true,
    scrollable: true
  });

});
/*
-------------------------------------------
	SCROLL FUNCTION
-------------------------------------------
*/
	$('a.nav-to').click(function(e){
	    $('html,body').scrollTo(this.hash, this.hash);
	    e.preventDefault();
	});
/*
-------------------------------------------
	STICKY NAVIGATION
-------------------------------------------
*/
	$(function() {
	
		/* COMMENT THIS LINE TO REMOVE THE TOP PANEL 
		   OR UNCOMMENT TO ADD IT (NEED TO CLEAR THE BROWSER CACHE)
		*/
		
		//createTopPanel();
	
		var nav_container = $(".nav-container");
		var nav = $("nav");
		
		var top_spacing = 0;
		var waypoint_offset = -60;
	
		nav_container.waypoint({
			handler: function(event, direction) {
				
				if (direction == 'down') {
				
					nav_container.css({ 'height':nav.outerHeight() });		
					nav.stop().addClass("sticky").css("top",-nav.outerHeight()).animate({"top":top_spacing});
					
				} else {
				
					nav_container.css({ 'height':'auto' });
					nav.stop().removeClass("sticky").css("top",nav.outerHeight()+waypoint_offset).animate({"top":""});
					
				}
				
			},
			offset: function() {
				return -nav.outerHeight()-waypoint_offset;
			}
		});
		
		var sections = $("section");
		var navigation_links = $("nav a");
		
		sections.waypoint({
			handler: function(event, direction) {
			
				var active_section;
				active_section = $(this);
				if (direction === "up") active_section = active_section.prev();
	
				var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
				navigation_links.removeClass("selected");
				active_link.addClass("selected");
	
			},
			offset: '25%'
		}, function(){ $.waypoints("refresh"); });
	});
/*
-------------------------------------------
	PARALLAX
-------------------------------------------
*/
	
	$(window).bind('load', function() { 
								  
		parallaxInit();	
		$.waypoints("refresh");
		var t=setTimeout(function(){$.waypoints("refresh");},3000);
		
	});
	
	function parallaxInit(){
		
		$('#parallax-1').parallax();
		$('#parallax-2').parallax();
		$('#parallax-3').parallax();
		$('#parallax-4').parallax();	
		$('#parallax-5').parallax();		
		/* ADD AS NECESSARY */
		
	}	
	
/*
-------------------------------------------
	SOCIAL ICONS
-------------------------------------------
*/
	$(document).ready(function(){
	
		$(".ff-items li a.galleryproj[rel^='prettyPhoto']").prettyPhoto({deeplinking: false, show_title: false, theme: 'pp_default'});
		
		/* social icons hover */
		if ($('.social_container')){
			$('.social_container').each(function(){
				$el = $(this);
				$(this)
					.unbind('mouseenter mouseleave')
					.hover(function(){
						$(this).stop().animate({
							'width': $(this).width() + $(this).children('.description').width() + 13 + 'px'
						}, 300, 'jswing');
					}, function(){
						$(this).stop().animate({'width':'27px'}, 300, 'jswing');
					});
				$(this).trigger('mouseenter').trigger('mouseleave');
			});
			$('.social-icons').css('display','block');	
			$('.social-icons, .search_top .search_toggler').delay(1000).animate({ 'opacity':1 }, 500);
		}
		
	});
/*
-------------------------------------------
	ACCORDION
-------------------------------------------
*/
	(function() {

		var $container = $('.acc-container'),
			$trigger   = $('.acc-trigger');

		$container.hide();
		$trigger.first().addClass('active').next().show();

		var fullWidth = $container.outerWidth(true);
		$trigger.css('width', fullWidth);
		$container.css('width', fullWidth);
		
		$trigger.on('click', function(e) {
			if( $(this).next().is(':hidden') ) {
				$trigger.removeClass('active').next().slideUp(300);
				$(this).toggleClass('active').next().slideDown(300);
			}
			e.preventDefault();
		});

		// Resize
		$(window).on('resize', function() {
			fullWidth = $container.outerWidth(true)
			$trigger.css('width', $trigger.parent().width() );
			$container.css('width', $container.parent().width() );
		});

	})();
/*
-------------------------------------------
	TABS
-------------------------------------------
*/
	(function() {

		var $tabsNav    = $('.tabs-nav'),
			$tabsNavLis = $tabsNav.children('li'),
			$tabContent = $('.tab-content');

		$tabsNav.each(function() {
			var $this = $(this);

			$this.next().children('.tab-content').stop(true,true).hide()
												 .first().show();

			$this.children('li').first().addClass('active').stop(true,true).show();
		});

		$tabsNavLis.on('click', function(e) {
			var $this = $(this);

			$this.siblings().removeClass('active').end()
				 .addClass('active');
			
			$this.parent().next().children('.tab-content').stop(true,true).hide()
														  .siblings( $this.find('a').attr('href') ).fadeIn();

			e.preventDefault();
		});

	})();
	
/*
-------------------------------------------
	PORTFOLIO
-------------------------------------------
*/
	function initialise(content) {
		
		/* Isotope itens */
		var $container = $('#masonry');
		$container.imagesLoaded( function(){
			$container.isotope({
				itemSelector : '.masonry_item'
			});
			$.waypoints("refresh");
		});
		
		/* Category Filter */
		$('.filter:not(.gallery) li a').click(function(){
			
			$('.filter li a').removeClass('active');
			$(this).addClass('active');
			
			var selector = $(this).attr('data-option-value');
			$container.isotope({ filter: selector }, function() { $.waypoints('refresh'); });
			
		});
		
		/* Filter Gallery */
		$('.filter.gallery li a').click(function(){
			
			var speed = 1900; //duration of the fade (in and out) in ms
			var fadeOutTo = .2; //opacity value of the fadeOut
			var easing = "easeOutExpo"; //easing method
			
			$('.filter li a').removeClass('active');
			$(this).addClass('active');
			
			var selector = $(this).attr('data-option-value');
			if (selector === "*") $(this).parents('.ff-container').find('.ff-items li').fadeTo(speed, 1, easing).removeClass('disabled');
			else {
				$(this).parents('.ff-container').find('.ff-items li'+selector).fadeTo(speed, 1, easing).removeClass('disabled');
				$(this).parents('.ff-container').find('.ff-items li:not('+selector+')').fadeTo(speed, fadeOutTo, easing).addClass('disabled');	
			}
			
			$(".ff-items li a").unbind('click').click(function(e){ e.stopPropagation(); return false; });
			$(".ff-items li:not(.disabled) a.galleryproj[rel^='prettyPhoto']").prettyPhoto({deeplinking: false, show_title: false, theme: 'pp_default'});
		
		});
	}
	
	/*
	-------------------------------------------
		CREATE TOP PANEL
	-------------------------------------------
	*/
	function createTopPanel(){
		var html = '<div class="toppanel"><div class="container"><div class="top_phrase sixteen columns">This HTML5 Template comes with Several Combinations. Here are some of them.<a href="http://themeforest.net/item/flash-retina-ready-responsive-parallax-template/4659744?ref=Designare" class="buy-item">BUY ITEM &rArr;</a></div><ul class="variations_list"><li class="one-third column"><a href="http://designarethemes.com/themes/flash/fsslider-light"><img src="http://designarethemes.com/themes/flash/fsimage-blue/images/fs-light.png" alt="LIGHT VERSION"/></a></li><li class="one-third column"><a href="http://designarethemes.com/themes/flash/fsslider-dark"><img src="http://designarethemes.com/themes/flash/fsimage-blue/images/fs-dark.png" alt="DARK VERSION"/></a></li><li class="one-third column"><a href="http://designarethemes.com/themes/flash/fsslider-blue"><img src="http://designarethemes.com/themes/flash/fsimage-blue/images/fs-blue.png" alt="BLUE VERSION"/></a></li></ul></div></div><div class="toppanel_trigger"></div>';
		$('body').prepend(html);
		$('.toppanel_trigger').click(function(){
			if ($('html').hasClass('no-csstransitions')){
				if ($('.toppanel').hasClass('opened')){
					$('.toppanel').stop().animate({
						'top': '-80%'
					}, 1200, "easeInOutExpo", function(){
						$('.toppanel').toggleClass('opened');	
						$('.toppanel_trigger').toggleClass('opened');
					});
				} else {
					$('.toppanel').stop().animate({
						'top': '0%'
					}, 1200, "easeInOutExpo", function(){
						$('.toppanel').toggleClass('opened');
						$('.toppanel_trigger').toggleClass('opened');
					});	

				}
			} else {
				$('.toppanel').toggleClass('opened');
				$('.toppanel_trigger').toggleClass('opened');
			}
		});
	}

/*
-------------------------------------------
	INITIALIZE BODY
-------------------------------------------
*/
$(document).ready(function() {	

	initialise('body');
	
});

$(window).load(function(){
	$.waypoints("refresh");
});