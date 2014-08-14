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
	setTimeout(typeWord('developer', 200), waitTime);
}

function typeWord(word, delay){
	for(var i = 0; i < word.length; i++){
		setTimeout(typeLetter( word.charAt(i)) , delay );
	}
}

function typeLetter(x){
	$('#mainInput').sendkeys(x);
}