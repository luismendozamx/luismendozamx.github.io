$(document).ready( function() {

	var callMakeFullScreen = makeFullScreen( $('#hero') );
	verticalCenter( $('#tag-line') , 0, callMakeFullScreen);
	positionCTA();
	alignPhotoPortoflolio();
	videoAlign();

	$( "#nav-toggle" ).click(function() {
		fitNavigation();
		/*if( $(window).width() < 768 ){
			$('#nav').css("position", "absolute");
			$('#main-container').css("position", "fixed");
		}*/
		$( "#nav" ).fadeIn( "medium", "swing" );
	});

	$( "#nav-close" ).click(function() {
		/*if( $(window).width() < 768 ){
			$('#main-container').css("position", "relative");
		}*/
		$( "#nav" ).fadeOut( "fast" );
	});

	//Typed.js
	$(".typed").typed({
		strings: ["write code.", "take photos.", "shoot films.", "build cool things."],
		typeSpeed: 0,
		startDelay: 100,
		backDelay: 1000,
		loop: true,
		loopCount: 3
	});

});

$(window).resize( function(){
	verticalCenter( $('#tag-line') );
	makeFullScreen( $('#hero') );
	alignPhotoPortoflolio();
	videoAlign();
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
	if(windowHeight < 600)
		windowHeight = 600;

	if(pTop != undefined){
		elem.height(windowHeigh - pTop + "px");
		elem.css("margin-top", pTop + "px");
	}else{
		elem.height(windowHeight + "px");
	}

}

function verticalCenter(elem, adjust){
	containerHeight = elem.parent().height();
	pTop = ((containerHeight - elem.height())/2) * .9;
	positionCTA(pTop);
	elem.css("padding-top", pTop + "px");
}

function positionCTA(pTop){
	var windowWidth = $(window).width();

	if(windowWidth > 768){
		$('#scroll-down').css("padding-top", pTop*.9 + "px" );
	}else{
		$('#scroll-down').css("padding-top", pTop*.7 + "px" );
	}
	
}

function alignPhotoPortoflolio(){
	var arr = $('.portfolio-desc');

	for (var i = 0; i <= arr.length; i++) {
		var width = $(arr[i]).width();
		var content = $(arr[i]).height();

		$(arr[i]).css("padding-top", (width-content)/2 + "px" );
		$(arr[i]).css("padding-bottom", (width-content)/2 + "px" );
	};
}

function videoAlign(){
	var windowWidth = $(window).width();

	if( windowWidth > 768){
		$('#video-selector').height( $('#video-well').height() );
	}else{
		$('#video-selector').height("100px");
	}
	
}

$(window).scroll(function() {
	var windowWidth = $(window).width();
	var trigger = $('#photography').offset().top - 50;

	if( windowWidth < 768 && $("nav").css("display") == "none" ){

	}else{
		if ($("#menu").offset().top >  50) {
	        $("#menu").addClass("white");
	        $("#nav-close").addClass("white");
	        $("#menu").removeClass("transparent");
	        $("#nav-close").removeClass("transparent");
	    } else {
	        $("#menu").addClass("transparent");
	        $("#nav-close").addClass("transparent");
	        $("#menu").removeClass("white");
	        $("#nav-close").removeClass("white");
	    }
	}
    

    if($("#menu").offset().top > pTop * 1.3){
		$("#hero .overlay").css("background-color", "rgba(1, 1, 1, 0.8)");
    }else{
    	$("#hero .overlay").css("background-color", "rgba(1, 1, 1, 0.25)");
    }

});
