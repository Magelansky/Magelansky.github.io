$(function() {
	$('.header__anchor').mPageScroll2id({
		 	scrollSpeed: 800
	});

	$('.cashier').tooltip();
	$('.collapse').collapse();

	$('.owl-carousel').owlCarousel({
	    loop: true,
	    margin: 10,
	    nav: false,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    responsive: {
	        0: {
	            items: 1,
	            dots: false
	        },
	        750: {
	            items: 1,
	            dots: true
	        },
	        1000: {
	            items: 1,
	            dots: true
	        }
	    }
	});

	$('.owl-carousel_second').owlCarousel({
	    loop: true,
	    margin: 10,
	    nav: false,
	    autoplay: true,
	    autoplayTimeout: 4000,
	    responsive: {
	        0: {
	            items: 1,
	            dots: false
	        },
	        750: {
	            items: 4,
	            dots: false
	        },
	        1000: {
	            items: 4,
	            dots: false
	        }
	    }
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$("#modal__surprice").modal('false');
	$("#modal__reservation").modal('false');

});
