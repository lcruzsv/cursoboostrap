/* ----------------- Start JS Document ----------------- */

// Page Loader
$(window).load(function () {
    "use strict";
	$('#loader').fadeOut();
});

$(document).ready(function ($) {
    /*--------------------------------------------------*/
    /* Counter
    /*--------------------------------------------------*/

    $('.timer').countTo();
    $('.counter-item').appear(function() {
        $('.timer').countTo();
    },{
    	accY: -100
    });

	/*----------------------------------------------------*/
	/*	Back Top Link
	/*----------------------------------------------------*/

    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });
    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    })


	/*----------------------------------------------------*/
	/*	Css3 Transition
	/*----------------------------------------------------*/

	$('*').each(function(){
		if($(this).attr('data-animation')) {
			var $animationName = $(this).attr('data-animation'),
				$animationDelay = "delay-"+$(this).attr('data-animation-delay');
			$(this).appear(function() {
				$(this).addClass('animated').addClass($animationName);
				$(this).addClass('animated').addClass($animationDelay);
			});
		}
	});


	/*----------------------------------------------------*/
	/*	Milestone Counter
	/*----------------------------------------------------*/

	jQuery('.milestone-block').each(function() {
		jQuery(this).appear(function() {
			var $endNum = parseInt(jQuery(this).find('.milestone-number').text());
			jQuery(this).find('.milestone-number').countTo({
				from: 0,
				to: $endNum,
				speed: 4000,
				refreshInterval: 60,
			});
		},{accX: 0, accY: 0});
	});


	/*----------------------------------------------------*/
	/*	Tooltips & Fit Vids & Parallax & Text Animations
	/*----------------------------------------------------*/

	$('.bg-parallax').each(function() {
		$(this).parallax("30%", 0.2);
	});
});
