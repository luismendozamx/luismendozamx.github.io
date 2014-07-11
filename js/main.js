
$(document).ready( function() {

	resizeMainContainer();
	$('.menuToggle').tooltip();

});

$(window).resize( function(){

	resizeMainContainer();
	
});

function resizeMainContainer(){

	windowWidth 	= $(window).width();
	navWidth		= $('#mainNav').width();

	$('#mainContainer').width(windowWidth - navWidth);
	$('#mainContainer').offset({left: navWidth + "px"});
	$('.menuToggle').tooltip();
}

function allLoaded(){
	resizeMainContainer();
	$('.menuToggle').tooltip();
}

$('#menuButton').click( function() {
	$('.menuHidden').toggle("fast");
	resizeMainContainer();
});