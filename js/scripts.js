// TODO - I haven't quite tested this properly
$(document).ready(function() {
	$( "#show-hidden-section" ).click(function(event) {
		event.preventDefault();
		$('#hidden-section').slideDoown();
	});
});