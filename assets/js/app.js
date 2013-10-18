jQuery(document).ready(function($) {
	$('body').on('click', '.su-spoiler-title', function (e) {
		var $title = $(this),
			$spoiler = $title.parent();
		$spoiler.toggleClass('su-spoiler-closed');
		$spoiler.parent('.su-accordion').children('.su-spoiler').not($spoiler).addClass('su-spoiler-closed');
		e.preventDefault();
	});
});