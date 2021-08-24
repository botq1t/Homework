$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$(this).toggleClass('active');
		$('.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.all__title').click(function (event) {
		$('.all__body').toggleClass('active');
	})
});