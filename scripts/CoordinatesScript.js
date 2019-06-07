//Get coordinates of a photo
$(document).ready(function() {
	$('#TheClowder').on("mousemove", function(e) {
		var offset = $(this).offset();
		var X = (e.pageX - offset.left);
		var Y = (e.pageY - offset.top);
		$('#coord').text('X: ' + X + ', Y: ' + Y);
	});
});