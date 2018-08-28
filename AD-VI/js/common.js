/* --------------------------------------------
 MAIN FUNCTION
-------------------------------------------- */
$(document).ready(function () {

    /* --------------------------------------------------------
 ANIMATED SCROLL PAGE WITH ACTIVE MENU - BOOTSTRAP SROLLSPY
----------------------------------------------------------- */
    $(function () {
        "use strict";
        $(".mouse-icon").on('click', function (event) {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        });
    });
});


$(window).scroll(function () {
    var dy = $(this).scrollTop();
    var wh = window.innerHeight;

    console.log(dy);
    console.log(wh);

    if (dy < wh / 5) {

        $('#tabletka').css('transform', 'rotate(0deg)');
        $('#tabletka').animate({
                'left': -dy,
                'top': 0
            }, {
                duration: 0,
                easing: 'linear'
            }
        );

    } else if (dy < 2 * wh - 400) {

        $('#tabletka').css('transform', 'rotate(-90deg)');
        $('#tabletka').animate({
                'top': dy + 300
            }, {
                duration: 0,
                easing: 'linear'
            }
        );

        $('#tabletka>.yel').css({
            'transform': 'rotate(0deg)'
        });
        $('#tabletka>.blue').css({
            'transform': 'rotate(0deg)'
        });
    } else {

        $('#tabletka').css('transform', 'rotate(0deg)');
        $('#tabletka>.yel').css({
            'transform': 'rotate(45deg)'
        });
        $('#tabletka>.blue').css({
            'transform': 'rotate(-15deg)'
        });
    }
});
