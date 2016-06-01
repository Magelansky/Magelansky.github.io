$(function() {

	// 2 ID SCROLL

	$('.header__anchor').mPageScroll2id({
		 	scrollSpeed: 800,
		 	offset: 66
	});
	
	// ----Basket-----
	var basket = $(".header__basket"),
		counter = 0,
		summPrice = $(".summ__allPrice"),
		summPriceNumber = 0;
		
	$( ".menu__item" ).on( "click", function() {
		counter++;
		basket.text(counter);
	});

	// ---- Animation Basket
	$( ".menu__item" ).on( "click", function() {

		$(this).find('figcaption').append('<div class="animation_plus">+</div>').find('.animation_plus')
		.hide(1000, function(){
			$(this).remove();
		});
	});




	//-------------------------
	$( ".menu__item" ).on( "click", function() {
		var nameProduct = $(this).find("h5").html();
		var priceProduct = $(this).find(".price__item_bottom span").html();
		summPriceNumber += parseFloat(priceProduct);
		summPrice.text(summPriceNumber.toFixed(2));


		$(".reserv__ul")
					.append('<li class="reserv__item"> <span class="reserv__title">'+ nameProduct +'</span> <span class="reserv__price">'+ priceProduct +'</span> <span class="reserv__cancel"><img src="img/remove-symbol.svg" alt="remove"></span> </li>');
	

	});
	$( ".reserv__ul" ).on( "click", "li span img", function() {
		counter--;
		basket.text(counter);
		$(this).parent().parent().hide(300, function () {
			var currentPriceNumber = parseFloat($(this).find(".reserv__price").html());
			summPriceNumber -= currentPriceNumber;
			summPrice.text(summPriceNumber.toFixed(2));
    		$(this).remove();
  		});
	});	


	$('.dropdown-toggle').dropdown();
	$('#myModal').modal('hide');
	//-----------------
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
