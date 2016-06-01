	$(function() {

		$('.nav__anchor').mPageScroll2id({
		 	scrollSpeed: 600,
		 	offset: 70
		  });
		

		$('#myTabs a').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		});
		$('.owl-carousel').owlCarousel({
		            loop: true,
		            margin: 10,
		            responsiveClass: true,
		            navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
		            responsive: {
		                0: {
		                    items: 1,
		                    nav: false,
		                    dots: true,
		                    loop: true
		                },
		                768: {
		                    items: 1,
		                    nav: false,
		                    dots: true
		                },
		                1000: {
		                    items: 1,
		                    nav: true,
		                    loop: true,
		                    dots: true
		                }
		            }

});

		$('.carousel').carousel({
		  interval: 5000
		});

	    $('.number__one')
	        .prop('number', 0)
	        .animateNumber({
	                number: 150
	            },
	            3000
	        );
	    $('.number__two')
	        .prop('number', 0)
	        .animateNumber({
	                number: 12
	            },
	            6500
	        );

	    $('.number__three')
	        .prop('number', 0)
	        .animateNumber({
	                number: 120
	            },
	            5000
	        );






	    $('.navbar-toggle').on('click', function() {
	        $('.collapse').collapse('toggle');
	    });

	    // Options
	    var options = {
	        offset: 100
	    }

	    // Create a new instance of Headhesive.js and pass in some options
	    var header = new Headhesive('.header', options);
	    var headerBottom = new Headhesive('.navbar-header', options);


	    $('.new__client').on('shown.bs.modal', function() {
	        alert(123);
	    });

	    $('.price__listModal').selectize({
	        create: true,
	        sortField: 'text'
	    });
	    //SVG Fallback
	    if (!Modernizr.svg) {
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
	        if ($("html").hasClass("chrome")) {
	            $.smoothScroll();
	        }
	    } catch (err) {

	    };

	    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

	});
