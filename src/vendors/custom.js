(function ($) {
    
    /*
     navigation
     -------------------------------------------------------------------*/
    if ($("#main-nav").length > 0) {
        $("#main-nav").navigation({
            effect: "fade",
            mobileBreakpoint: 992,
        });


        // menu scrolling

        if($('.taps').length > 0){
            $('.taps').on ('click',function () {
                $('html, body').animate({scrollTop: $(this.hash).offset().top -100}, 1000);
                return false;
            });
        }

    }


    /*=
         back to top
-------------------------------------------------------------------*/

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 4000) {
            $(".BackTo").fadeIn('slow');
        }
        else {
            $(".BackTo").fadeOut('slow');
        }

    });

    $("body, html").on("click", ".BackTo", function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    if ( $(window).width() > 767 ) {
        $(".BackTo").css('display', 'none');
    }



    /*=
            particles dot on background
  -------------------------------------------------------------------*/
  $(window).on("load", function() {
    $("#particles-js").length && particlesJS("particles-js", {
        particles: {
            number: {
                value: 28
            },
            color: {
                value: ["#0182cc", "#00befa", "#0182cc"]
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1
                }
            },
            size: {
                value: 4,
                random: !0,
                anim: {
                    enable: !1
                }
            },
            line_linked: {
                enable: !1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !0,
                straight: !1,
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !1
                },
                onclick: {
                    enable: !1
                },
                resize: !0
            }
        },
        retina_detect: !0
    })
});


    /*-------------------------------------------------------------------
            wow animation init
    -------------------------------------------------------------------*/
    $(function(){
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true,
            scrollContainer: null,
        });
        wow.init();
    });


    /*-------------------------------------------------------------------
            Static header
    -------------------------------------------------------------------*/
    $(window).on('scroll', function () {
        /**Static header**/

            if ($(window).scrollTop() > 100) {
                $('.header').addClass('static-header animated fadeInDown');
            } else {
                $('.header').removeClass('static-header animated fadeInDown');
            }

            if ($(window).width() < 991) {
                $('.header').removeClass('static-header animated fadeInDown');
            }

    });



})(jQuery);
