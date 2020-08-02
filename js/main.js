/*global $, akert, console, window*/

$(function () {
	
	'use strict';
    
	$('.carousel .carousel-inner img').css({
	
		'height' : $(window).height() - $(window).height() / 3
	
	});
	
	$('.carousel-caption').css({
	
		'marginBottom' : $('.carousel').height() / 2 - $('.carousel-caption').height() + 40
	
	});
	
	if ($(window).width() > 991) {
		
		$("html").niceScroll({
			
			cursorcolor: "#E41B17",
			cursorwidth: "10px",
			cursorborder: "1px solid #E41B17",
			cursorborderradius: "0",
			zindex: "999999"
			
		});
		
	}
	
	if ($(window).width() < 992) {
				
		$('.scroll-top').css({'opacity' : '0.5'});
				
	} else {
		
		$('.scroll-top').css({'opacity' : '1'});
		
	}
			
	$(window).scroll(function () {
		
		console.log($(window).scrollTop());
		
		if ($(this).scrollTop() > 800) {
			
			$('.scroll-top').show();
			
		} else {
			
			$('.scroll-top').hide();
			
		}
			
	});
	
	$('.scroll-top').click(function () {
		
		$("html,body").animate({ scrollTop : 0 }, 1000);
		
	});
	
	$(window).resize(function () {
		
		$('.double-bounce1, .double-bounce2').css({
	
			'marginLeft' : $(window).width() / 2 - $('.double-bounce1, .double-bounce2').width() / 2,
			'marginTop' : $(window).height() / 2 - $('.double-bounce1, .double-bounce2').height() / 2
			
		});
		
		if ($(window).width() < 992) {
				
			$('.scroll-top').css({'opacity' : '0.5'});
					
		} else {
			
			$('.scroll-top').css({'opacity' : '1'});
			
		}
	
	});
	
});