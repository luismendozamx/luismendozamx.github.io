
$(document).ready( function() {

	resizeMainContainer();
	$('.menuToggle').tooltip();
	fullScreen($(".fullScreen"));

});

$(window).resize( function(){

	resizeMainContainer();
	$('.menuToggle').tooltip();
	fullScreen($(".fullScreen"));
	
});

function resizeMainContainer(){

	var windowWidth 	= $(window).width();
	var windowHeight 	= $(window).height();
	var navWidth 		= 0;

	if(windowWidth > 911){
		navWidth = $('#mainNav').width();
		$('#mainContainer').width(windowWidth - navWidth);
		$('#mainContainer').offset({left: navWidth + "px"});
	}else if(windowWidth > 768){
		navWidth = $('.mainNavTablet').width();
		$('#mainContainer').width(windowWidth - navWidth);
		$('#mainContainer').offset({left: navWidth + "px"});
	}else{
		if($('.mainNavMobile').hasClass('hidden')){
			navWidth = 15;
		}else{
			navWidth = $('.mainNavMobile').width();
			navWidth += 15;
		}
		$('#mobileTopNav').css("left", navWidth + "px");
		console.log($('#mobileTopNav').offset());
	}

	if(windowHeight < 400){
		$('#mainNav').css("overflow", "scroll");
		console.log($('#mainNav').css("overflow"));
	}

	$('.menuToggle').tooltip();
}

function allLoaded(){
	resizeMainContainer();
	$('.menuToggle').tooltip();
}

function fullScreen(array){
	var altura = $(window).height();
	$('.fullScreen').height(altura);
	//$('.fullScreen').css("padding", "0 0 0 0")
	//$('.fullScreen').css("height", "100%")
}

$('#menuButton').click( function() {
	//$('.menuHidden').toggle(250, resizeMainContainer);
	$('.menuHidden').toggle(250);
});

$('#menuButtonTablet').click( function() {
	//$('.menuHidden').toggle(250, resizeMainContainer);
	$('.menuHidden').toggle(250);
});

$('#mobileTopNav').click( function(){
	if($('.mainNavMobile').hasClass('hidden')){
		$('.mainNavMobile').removeClass('hidden');
		resizeMainContainer();
	}else{
		$('.mainNavMobile').addClass('hidden');
		resizeMainContainer();
	}
});

