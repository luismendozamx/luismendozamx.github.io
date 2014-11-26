
$(document).ready( function() {
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	navHeight = $('#nav-container').height();

	$('#nav-container').css( "padding-top", (windowHeight - navHeight)/2 + "px" );
	$('#nav-container').css( "padding-bottom", (windowHeight - navHeight)/2 + "px" );

});
