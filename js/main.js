
$(document).ready( function() {

	$( "#nav-toggle" ).click(function() {
		fitNavigation();
		$('#nav').css("position", "absolute");
		$('#main-container').css("position", "fixed");
		$( "#nav" ).fadeIn( "medium", "swing", fitNavigation );
	});

	$( "#nav-close" ).click(function() {
		$('#nav').css("position", "fixed");
		$('#main-container').css("position", "relative");
		$( "#nav" ).fadeOut( "fast" );
	});

});

function fitNavigation(){
	windowWidth = $(window).width();
	windowHeight = $(window).height();

	if( $('#nav').css("display") == "none"){
		navHeight = 500;
	}else{
		navHeight = $('#nav-container').height();
	}

	$('#nav-container').css( "padding-top", (windowHeight - navHeight - 48)/2 + "px" );
	$('#nav-container').css( "padding-bottom", (windowHeight - navHeight - 48)/2 + "px" );
}
