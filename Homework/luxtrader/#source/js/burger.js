$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$(this).toggleClass('active');
		$('.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});