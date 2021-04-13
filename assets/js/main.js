(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('.sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $('.abc').toggleClass('d-none');
      // $('.hid').toggleClass('d-none');
      // $('.abc').toggleId('d-none');

  });

})(jQuery);
