
$(document).ready( function() {

	resizeMainContainer();

});

$(window).resize( function(){

	resizeMainContainer();
	
});

function resizeMainContainer(){

	windowWidth 	= $(window).width();
	navWidth		= $('#mainNav').width();

	$('#mainContainer').width(windowWidth - navWidth);
	$('#mainContainer').offset({left: navWidth + "px"});
}

$('.sideMenuItem').tooltip();