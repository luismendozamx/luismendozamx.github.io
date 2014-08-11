$(document).ready(function(){
	startTyping(1000);
});


(function($){
	$.fn.sendkeys = function (x){
		x = x.replace(/([^{])\n/g, '$1{enter}'); // turn line feeds into explicit break insertions, but not if escaped
		return this.each( function(){
			bililiteRange(this).bounds('selection').sendkeys(x).select();
			this.focus();
		});
	}; // sendkeys
})(jQuery)

function startTyping(waitTime){
	setTimeout(function(){
		$('#mainInput').delay(1000).sendkeys('d');
		$('#mainInput').delay(1000).sendkeys('e');
		$('#mainInput').delay(1000).sendkeys('v');
		$('#mainInput').delay(1000).sendkeys('e');
		$('#mainInput').delay(1000).sendkeys('l');
		$('#mainInput').delay(1000).sendkeys('o');
		$('#mainInput').delay(1000).sendkeys('p');
		$('#mainInput').delay(1000).sendkeys('e');
		$('#mainInput').delay(1000).sendkeys('r');
	}, waitTime);
}