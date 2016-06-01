$(function() {

 $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .9, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out durationk for Modal close
    }
  );




  $('#modalFuck').closeModal();
	$(".button-collapse").sideNav();

	$('.header__anchor').mPageScroll2id({
			offset: 68,
		 	scrollSpeed: 500
	});

  $(window).scroll(function() {

  	var st = $(this).scrollTop() /16;
  	var sr = $(this).scrollTop() /2;

  	$(".parallax__more").css({
  		"transform" : "translate3d(0px, " + st  + "%, .01px)",
  		"-webkit-transform" : "translate3d(0px, " + st  + "%, .01px)"
  	});
  	$(".about__button").css({
  		"transform" : "translate3d(0px, " + st  + "%, .01px)",
  		"-webkit-transform" : "translate3d(0px, " + -st  + "%, .01px)"
  	});
  	$(".git__word img").css({
  		"transform" : "translate3d(0px, " + st  + "%, .01px)",
  		"-webkit-transform" : "translate3d(0px, " + st  + "%, .01px)"
  	});




  });

});
