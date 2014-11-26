
$(document).ready( function() {

	$( "#nav-toggle" ).click(function() {
		fitNavigation();
		$( "#nav" ).fadeIn( "medium", "swing", fitNavigation );
	});

	$( "#nav-close" ).click(function() {
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
