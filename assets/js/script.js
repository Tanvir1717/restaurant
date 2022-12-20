// loader
jQuery(document).ready(function() {
     setTimeout(() => {
      jQuery('#loading').fadeOut('slow'), function() {
        $(this).remove();
      };
    },2000);
});
// scroll-nav-start
var num = 500; //number of pixels before modifying styles

$(window).bind("scroll", function() {
    if ($(window).scrollTop() > num) {
        $(".navbar").addClass("fixed");
        $(".navbar").addClass("bg-dark");   
    } else {
        $(".navbar").removeClass("bg-dark");
        $(".navbar").removeClass("fixed");
    }
});
// scroll-nav-end
// portfolio
(function($) {
  'use strict';

  $(function() {
		$('.portfolio-item').isotope({
			itemSelector: '.item',
			layoutMode: 'fitRows'
		 });
		 $('.portfolio-menu ul li').click(function(){
         	$('.portfolio-menu ul li').removeClass('active');
         	$(this).addClass('active');

         	var selector = $(this).attr('data-filter');
         	$('.portfolio-item').isotope({
         		filter:selector
         	});
         	return  false;
         });
			 $(document).ready(function() {
			 var popup_btn = $('.popup-btn');
			 popup_btn.magnificPopup({
				 type : 'image',
				 gallery : {
					enabled : true
				 }
			 });
         });
  });

}(jQuery));
// AOS initialized
AOS.init();
$(window).on("scroll",function(){
  AOS.init({
    offset:120,
  });
})
