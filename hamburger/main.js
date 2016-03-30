$(function() {

	// jQuery Goes here!
	$('.js-menu').on('click touchstart', 
		function() {
		console.log('Menu will open');
		$('.mainNav').fadeIn().addClass('showNav');
	})

});