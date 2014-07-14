
$(document).ready( function() {

	resizeMainContainer();
	$('.menuToggle').tooltip();

});

$(window).resize( function(){

	resizeMainContainer();
	
});

function resizeMainContainer(){

	windowWidth = $(window).width();
	navWidth = 0;

	if(windowWidth > 911){
		navWidth = $('#mainNav').width();
	}else if(windowWidth > 768){
		navWidth = $('.mainNavTablet').width();
	}else{
		if($('.mainNavMobile').hasClass('hidden')){
			navWidth = 0;
		}else{
			navWidth = $('.mainNavMobile').width();
		}
		$('#mobileTopNav').css("margin-left", navWidth);
	}

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

$('#menuButtonTablet').click( function() {
	$('.menuHidden').toggle("fast");
	resizeMainContainer();
});

$('#mobileNavButton').click( function(){
	if($('.mainNavMobile').hasClass('hidden')){
		$('.mainNavMobile').removeClass('hidden');
		resizeMainContainer();
	}else{
		$('.mainNavMobile').addClass('hidden');
		resizeMainContainer();
	}
});

