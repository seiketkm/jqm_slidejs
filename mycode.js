(function($){
  (function init(){
  })();
  $(document).on('pageshow', '#main', function(){
    if(!$('#coupon').children().hasClass("slidesjs-container")){
      $('#coupon').slidesjs({
        width: 320,
	height: 60,
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
	  active: true
        }
      })
    };
    $('#campaign').slidesjs({
      width: 330,
      height: 250,
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
	active: true
      }
    });
  });
})(jQuery);
