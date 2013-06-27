var arrayElements = [];

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

/* BEGIN: ANIMATED CONTENTS */
$(document).ready(function(){
	
	/* define if you want to display the contents animation (true|false) */
	var effectsOnMobiles = false;
	
	var doAnimations = false;
	if (isMobile.any() && effectsOnMobiles) doAnimations = true;
	if (isMobile.any() && !effectsOnMobiles) doAnimations = false;
	if (!isMobile.any()) doAnimations = true;
	
	if (isMobile.any()){
		$('.parallax').css('background-attachment','scroll');
		$('#intro-block .intro-text .intro-big').css('opacity', '1');
	}
	
	if (doAnimations){
		/*
		-----------------------------------------------------------------------------
		  ANIMATE PORTFOLIO ITEMS
		-----------------------------------------------------------------------------
		*/
		var delay = .2;
		var howMany = $('#portfolio .entries').children('div').length;
			
		for (var index = 0; index < howMany; index++){
		
			arrayElements[index] = false;
	
			$('#portfolio .entries').children('div').eq(index).children('.img_holder').css('opacity',0);
		
			$('#portfolio .entries').children('div').eq(index).waypoint({
				handler: function() {
					animateE($(this).children('.img_holder'));
				},
				offset: '200%',
				triggerOnce: true
			}, function(){ $.waypoints("refresh"); });
			
			$('#portfolio .entries').children('div').eq(index).children('.img_holder').css({
				"-webkit-animation-delay": delay+'s',
			    "-moz-animation-delay": delay+'s',
			    "-ms-animation-delay": delay+'s',
			    "-o-animation-delay": delay+'s'
			});
			
			delay = delay + .3;
		}
		
		/*
		-----------------------------------------------------------------------------
		  ANIMATE INTRO TEXT BIG
		-----------------------------------------------------------------------------
		*/
		$('#intro-block .intro-text .intro-big').css('opacity', '0');
	
		var AnimateIntroBig = false;
	
		$('#intro-block .intro-text .intro-big').waypoint({
			handler: function() {
				animateintrobig();
			},
			offset: '100%',
			triggerOnce: true
		}, function(){ $.waypoints("refresh"); });
		
		/*
		-----------------------------------------------------------------------------
		  ANIMATE INTRO TEXT SMALL
		-----------------------------------------------------------------------------
		*/
		$('#intro-block .intro-text .intro-small').css('opacity', '0');
	
		var AnimateIntroSmall = false;
	
		$('#intro-block .intro-text .intro-small').waypoint({
			handler: function() {
				animateintrosmall();
			},
			offset: '100%',
			triggerOnce: true
		}, function(){ $.waypoints("refresh"); });
		
		/*
		-----------------------------------------------------------------------------
		  ANIMATE ABOUT SECTION - THING BIG
		-----------------------------------------------------------------------------
		*/
		$('#about .thinkbig').css('opacity', '0');
	
		var AnimateAboutBig = false;
	
	
		$('#about .thinkbig').waypoint({
			handler: function() {
				animateaboutbig();
			},
			offset: '100%',
			triggerOnce: true
		}, function(){ $.waypoints("refresh"); });
		
		/*
		-----------------------------------------------------------------------------
		  ANIMATE ABOUT SECTION - THING BIG
		-----------------------------------------------------------------------------
		*/
		$('#about .testimonials').css('opacity', '0');
	
		var AnimateAboutTestimonials = false;
	
		$('#about .testimonials').waypoint({
			handler: function() {
				animateabouttestimonials();
			},
			offset: '100%',
			triggerOnce: true
		}, function(){ $.waypoints("refresh"); });
		
		/*
		-----------------------------------------------------------------------------
		  ABOUT SECTION - TEAM MEMBERS
		-----------------------------------------------------------------------------
		*/
		$('#team .profile').css('opacity', '0');
	
		var AnimateAboutTeam = false;
	
		$('#team .profile').waypoint({
			handler: function() {
				animateaboutteam();
			},
			offset: '100%',
			triggerOnce: true
		}, function(){ $.waypoints("refresh"); });
		
		/*
		-----------------------------------------------------------------------------
		  SERVICES SECTION - ICON1
		-----------------------------------------------------------------------------
		*/
		$('#services .service .love').css('opacity', '0');
	
		var AnimateServiceLove = false;
	
		$('#services .service .love').waypoint({
			handler: function() {
				animateservicelove();
			},
			offset: '100%',
			triggerOnce: true
		}, function(){ $.waypoints("refresh"); });
		
		/*
		-----------------------------------------------------------------------------
		  SERVICES SECTION - ICON2
		-----------------------------------------------------------------------------
		*/
		$('#services .service .imac').css('opacity', '0');
	
		var AnimateServiceImac = false;
	
		$('#services .service .imac').waypoint({
			handler: function() {
				animateserviceimac();
			},
			offset: '100%',
			triggerOnce: true
		}, function(){ $.waypoints("refresh"); });
		
		/*
		-----------------------------------------------------------------------------
		  SERVICES SECTION - ICON3
		-----------------------------------------------------------------------------
		*/
		$('#services .service .iphone').css('opacity', '0');
	
		var AnimateServiceIphone = false;
	
		$('#services .service .iphone').waypoint({
			handler: function() {
				animateserviceiphone();
			},
			offset: '100%',
			triggerOnce: true
		}, function(){ $.waypoints("refresh"); });
		
		/*
		-----------------------------------------------------------------------------
		  SERVICES SECTION - ICON4
		-----------------------------------------------------------------------------
		*/
		$('#services .service .diamond').css('opacity', '0');
	
		var AnimateServiceDiamond = false;
	
		$('#services .service .diamond').waypoint({
			handler: function() {
				animateservicediamond();
			},
			offset: '100%',
			triggerOnce: true
		}, function(){ $.waypoints("refresh"); });
		
		/*
		-----------------------------------------------------------------------------
		  SERVICES SECTION - ICON5
		-----------------------------------------------------------------------------
		*/
		$('#services .service .storage').css('opacity', '0');
	
		var AnimateServiceStorage = false;
	
		$('#services .service .storage').waypoint({
			handler: function() {
				animateservicestorage();
			},
			offset: '100%',
			triggerOnce: true
		}, function(){ $.waypoints("refresh"); });
		
		/*
		-----------------------------------------------------------------------------
		  SERVICES SECTION - ICON6
		-----------------------------------------------------------------------------
		*/
		$('#services .service .idea').css('opacity', '0');
	
		var AnimateServiceIdea = false;
	
		$('#services .service .idea').waypoint({
			handler: function() {
				animateserviceidea();
			},
			offset: '100%',
			triggerOnce: true
		}, function(){ $.waypoints("refresh"); });
		
		/*
		-----------------------------------------------------------------------------
		  SERVICES SECTION - ICON7
		-----------------------------------------------------------------------------
		*/
		$('.flexslider').css('opacity', '0');
	
		var AnimateFlexslider = false;
	
		$('.flexslider').waypoint({
			handler: function() {
				animateflexslider();
			},
			offset: '160%',
			triggerOnce: true
		}, function(){ $.waypoints("refresh"); });		
	}
	
	
	/*
	---------------------------------------------------------------------------------
		FUNCTION TO ANIMATE ALL YOUR PROJECTS ITEMS
	---------------------------------------------------------------------------------
	*/
	function animateE($el) {
		var index = $el.parent().index();
		if (arrayElements[index] === false){
			$el.addClass('animated fadeInDown');	
			$el.css('opacity', '1');	
		}
		arrayElements[index] = true;
	}
	
	function animateintrobig() {
		if (AnimateIntroBig === false) {
			$('.intro-text .intro-big').addClass('animated fadeInUp');
	
			$('.intro-text .intro-big').css('opacity', '1');
		}
	
		AnimateIntroBig = true;
	}
	
	function animateintrosmall() {
		if (AnimateIntroSmall === false) {
			$('.intro-text .intro-small').addClass('animated fadeInUp');
	
			$('.intro-text .intro-small').css('opacity', '1');
		}
	
		AnimateIntroSmall = true;
	}
	
	function animateaboutbig() {
		if (AnimateAboutBig === false) {
			$('.thinkbig').addClass('animated fadeInLeft');
	
			$('.thinkbig').css('opacity', '1');
		}
	
		AnimateAboutBig = true;
	}
	
	function animateabouttestimonials() {
		if (AnimateAboutTestimonials === false) {
			$('.testimonials').addClass('animated fadeInRight');
	
			$('.testimonials').css('opacity', '1');
		}
	
		AnimateAboutTestimonials = true;
	}
	
	function animateaboutteam() {
		if (AnimateAboutTeam === false) {
			$('.profile').addClass('animated bounceInLeft');
	
			$('.profile').css('opacity', '1');
		}
	
		AnimateAboutTeam = true;
	}
	
	function animateservicediamond() {
		if (AnimateServiceDiamond === false) {
			$('.diamond').addClass('animated flipInX');
	
			$('.diamond').css('opacity', '1');
		}
	
		AnimateServiceDiamond = true;
	}
	
	function animateservicelove() {
		if (AnimateServiceLove === false) {
			$('.love').addClass('animated flipInX');
	
			$('.love').css('opacity', '1');
		}
	
		AnimateServiceLove = true;
	}
	
	function animateserviceimac() {
		if (AnimateServiceImac === false) {
			$('.imac').addClass('animated flipInX');
	
			$('.imac').css('opacity', '1');
		}
	
		AnimateServiceImac = true;
	}
	
	function animateserviceiphone() {
		if (AnimateServiceIphone === false) {
			$('.iphone').addClass('animated flipInX');
	
			$('.iphone').css('opacity', '1');
		}
	
		AnimateServiceIphone = true;
	}
	
	function animateservicestorage() {
		if (AnimateServiceStorage === false) {
			$('.storage').addClass('animated flipInX');
	
			$('.storage').css('opacity', '1');
		}
	
		AnimateServiceStorage = true;
	}
	
	function animateserviceidea() {
		if (AnimateServiceIdea === false) {
			$('.idea').addClass('animated flipInX');
	
			$('.idea').css('opacity', '1');
		}
	
		AnimateServiceIdea = true;
	}
	
	function animateflexslider() {
		if (AnimateFlexslider === false) {
			$('.flexslider').addClass('animated fadeInUp');
	
			$('.flexslider').css('opacity', '1');
		}
	
		AnimateFlexslider = true;
	}
	
	
});