(function ($) {
	'use strict';

    /*-------------------------------------------------------------------------------
	Preloader
	-------------------------------------------------------------------------------*/

	$(window).on('load', function() {
		if ( $('.preloader').length ) {
			$('.preloader').hide("slow");
		}
	});

    $('.pp-scrollable').scroll(function() {
		if ($(this).scrollTop() > 0) {
			$('.header').addClass('header-shadow');
		} else {
			$('.header').removeClass('header-shadow');
		}
	});

    if ( $('.a-pagepiling').length ) {
		$('.a-pagepiling').pagepiling({
			scrollingSpeed: 280,
			menu: '#menu, #menuMain',
			anchors: ['Intro', 'About', 'Step', 'News', 'Services', 'Service', 'Footer'],
			loopTop: false,
			loopBottom: false,
			navigation: {
				'position': 'right'
			},
			onLeave: function(){
				$('.header').removeClass('header-shadow');
				if ($('.pp-scrollable.active').scrollTop() > 0) {
					$('.header').addClass('header-shadow');
				} else {
					$('.header').removeClass('header-shadow');
				}
				if ($('.slide-dark-footer').hasClass('active')) {
					$('body').addClass('body-copyright-light');
				} else {
					$('body').removeClass('body-copyright-light');
				}
				if ($('.slide-dark-bg').hasClass('active')) {
					$('body').addClass('body-bg-dark');
				} else {
					$('body').removeClass('body-bg-dark');
				}
				$('.a-carousel-projects').trigger('refresh.owl.carousel');
			}
		});
	}

	if ( $('.banner-slider').length ) {
		$('.banner-slider').owlCarousel({
			loop:true,
			margin:0,
			dots:true,
			nav:false,
			navText:[
			  "<i class='icofont-rounded-double-left'></i>",
			  "<i class='icofont-rounded-double-right'></i>"
			],
			autoplay:true,
			items:1,
			mouseDrag:true,
			autoplayHoverPause:true,
			autoplayTimeout:4000,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn'
		  });
	}


}($));