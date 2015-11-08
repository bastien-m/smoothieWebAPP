(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
 
    //animation function
    (function() {
    	//we must invoke this function first
    	animationVelocity.init();
    	//call this function to apply different color to
    	//each character of the brand logo
    	animationVelocity.customLogo(); 
    })();
 

  }); // end of document ready
})(jQuery); // end of jQuery name space