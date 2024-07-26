function mobileOnlySlider($slidername, $dots, $arrows, $breakpoint) {
	const slider = $($slidername);
	const settings = {
		mobileFirst: true,
		dots: $dots,
		arrows: $arrows,
		appendArrows: $('.arrows-container'),
		responsive: [
			{
				breakpoint: $breakpoint,
				settings: "unslick",
			},
		],
	};
	$(".slider-template").slick();
	slider.slick(settings);

	$(window).on("resize", function () {
		if ($(window).width() > $breakpoint) {
			return;
		}
		if (!slider.hasClass("slick-initialized")) {
			return slider.slick(settings);
		}
	});
}
mobileOnlySlider(".slider-template", false, true, 1024);
