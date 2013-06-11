(function($){
  (function init(){
  })();
  $(document).on('pageshow', '#main', function(){
    $('#coupon').slidesjs({
      navigation: {
        active: false,
        effect:"slide"
      },
      play: {
	active: false,
	effect: "slide",
	interval: 3000,
	auto: true,
        swap: false,
        pauseOnHover: true,
        restartDelay:10000
      },
      pagination:{
	active: false
      }
    });
    $('#campaign').slidesjs({
      navigation: {
        active: false,
        effect:"slide"
      },
      play: {
	active: false,
	effect: "slide",
	interval: 5000,
	auto: true,
        swap: false,
        pauseOnHover: true,
        restartDelay:10000
      },
      pagination:{
	active: false
      }
    });
  });
})(jQuery);
