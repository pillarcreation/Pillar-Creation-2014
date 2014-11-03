/* Tool tip */

$('.tip').tooltip({
	placement: 'bottom'
});

/* prettyPhoto Gallery */

jQuery(".prettyphoto").prettyPhoto({
	overlay_gallery: false, social_tools: false
});

/* Isotype */

// cache container
var $container = $('#portfolio');
// initialize isotope
$container.isotope();

// filter items when filter link is clicked
$('#filters a').click(function(){
	var selector = $(this).attr('data-filter');
	$container.isotope({ filter: selector });
	return false;
});               

/* *************************************** */ 
/* Way Point Animation */
/* *************************************** */  

$(document).ready(function(){

	// Service Animation
	$('.service').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeInUp');
	}, { offset: '100%' });
	
	// Theme Message Animation
	$('.theme-msg-content').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('bounceIn');
	}, { offset: '70%' });
	
	// Features Item Animation
	$('.feature-left').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeInLeft');
	}, { offset: '90%' });
	
	// Features Item Animation
	$('.feature-right').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeInRight');
	}, { offset: '90%' });
	
	// Pricing Content Animation
	$('.ptable-content').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('bounceInUp');
	}, { offset: '100%' });
	
	// Testimonial Content Animation
	$('.testimonial-item').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('bounceInUp');
	}, { offset: '100%' });
	
	// About Us Content Animation
	$('.staff').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeInUp');
	}, { offset: '80%' });
	
	// Blog Content Animation
	$('.blog-post .entry').waypoint(function(down){
		$(this).addClass('animation');
		$(this).addClass('fadeIn');
	}, { offset: '70%' });
	
});

/* *************************************** */ 
/* Scroll to Top */
/* *************************************** */  
		
$(document).ready(function() {
	$(".totop").hide();
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('.totop').fadeIn();
		} else {
			$('.totop').fadeOut();
		}
	});
	$(".totop a").click(function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
		
});
/* *************************************** */