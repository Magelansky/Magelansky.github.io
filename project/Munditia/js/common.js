$(function() {
	// SLIDER
	$('.carousel').carousel({
  		interval: 4000
	})

	// form topHeader
	$('.topHeaderBtn').on('click', function() {
		
  		$('.searchTopHeader').toggle('200', function() {
   			 if ($(this).is(':visible'))
       		 $(this).css('display','inline-block');
		});
	});

	// MENU
	 $(".hidden__menu_btn").on('click',  function(event) {
	 	$(".nav__list").toggle(300);
	 });

	 // TABS
	

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




});
