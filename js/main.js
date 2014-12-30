$(document).ready( function() {

	var callMakeFullScreen = makeFullScreen( $('#hero') );
	verticalCenter( $('#tag-line') , 0, callMakeFullScreen);

	$( "#nav-toggle" ).click(function() {
		fitNavigation();
		if( $(window).width() < 768 ){
			$('#nav').css("position", "absolute");
			$('#nav').css("height", "auto");
			$('#main-container').css("position", "fixed");
		}
		$( "#nav" ).fadeIn( "medium", "swing", fitNavigation );
	});

	$( "#nav-close" ).click(function() {
		if( $(window).width() < 768 ){
			$('#main-container').css("position", "relative");
		}
		$( "#nav" ).fadeOut( "fast" );
	});

	//Typed.js
	$(".typed").typed({
		strings: ["First sentence.", "Second sentence."],
		typeSpeed: 0
	});

});

$(window).resize( function(){
	//verticalCenter( $('#tag-line') );
	makeFullScreen( $('#hero') );
});

function fitNavigation(){
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	if( $('#nav').css("display") == "none"){
		navHeight = 500;
	}else{
		navHeight = $('#nav-container').height();
	}

	$('#nav-container').css( "padding-top", (windowHeight - navHeight - 48)/2 + "px" );
	$('#nav-container').css( "padding-bottom", (windowHeight - navHeight - 48)/2 + "px" );
}

function makeFullScreen(elem, pTop){
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();

	//Avoids making area smaller than content inside it.
	if(elem.height() > windowHeight)
		windowHeight = elem.height() * 1.5;

	if(pTop != undefined){
		elem.height(windowHeigh - pTop + "px");
		elem.css("margin-top", pTop + "px");
	}else{
		elem.height(windowHeight + "px");
	}

}

function verticalCenter(elem, adjust){
	containerHieght = elem.parent().height();
	elem.css("padding-top", ((containerHieght - elem.height())/2) * .9+ "px");
}

$(window).scroll(function() {

    if ($("#menu").offset().top > 50) {
        $("#menu").addClass("white");
        $("#menu").removeClass("transparent");
    } else {
        $("#menu").addClass("transparent");
        $("#menu").removeClass("white");
    }

});
