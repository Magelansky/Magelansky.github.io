$(function() {
    //equalHeight
    $('.footer__list').equalHeights();


    //slider
    $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 10000,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: false,
                    loop: true
                }
            }
        });
        $('.owl-carousel-collection').owlCarousel({
        loop:true,
        margin:30,
        responsiveClass:true,
        lazyLoad: true,
        navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        responsive:{
            320:{
                items:1,
                nav:false
            },
            480:{
                items:2,
                nav:false
            },
            768:{
                items:2,
                nav:false,
                loop:true
            },
            1170:{
                items:2,
                nav:false,
                loop:true
            },
            2000:{
                items:2,
                nav:false,
                loop:true
            }
        }
    });


    // menu
    $(".hiddenButton").click(function(event) {
        $(".nav__o").toggle(400);
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

$(window).load(function() {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

});
