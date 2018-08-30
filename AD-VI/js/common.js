/* --------------------------------------------
MAIN FUNCTION
-------------------------------------------- */
$(document).ready(function () {

    /* --------------------------------------------------------
    ANIMATED SCROLL PAGE
    ----------------------------------------------------------- */
    $(function () {
        "use strict";
        $(".mouse-icon").on('click', function (event) {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000);
        });
    });
    $(function () {
        "use strict";
        $(".menu-wrap ul li a").on('click', function (event) {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000);
        });
    });

});

/* --------------------------------------------------------
TABLETKA DRIVE
----------------------------------------------------------- */
$(window).scroll(function () {
    var dy = $(this).scrollTop();
    var wh = window.innerHeight; // высота видимого окна
    var dh = $('html').height(); //высота всего документа

    console.log(dy);
    console.log(wh);
    console.log(dh);

    $('.menu i').css('color','rgba('+ (89+(dy*165/(dh - wh))) + ',' + (71+(dy*168/(dh - wh)))+ ',' + (244-(dy*175/(dh - wh)))+')' ); // цвет меню при скролле

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

        $('#razrab, #marketing, #branding, #analiz').css({
            'opacity': 0,
            'top': 0,
            'left': 0,
        });

        $('#tabletka>.yel').css({
            'transform': 'rotate(0deg)'
        });
        $('#tabletka>.blue').css({
            'transform': 'rotate(0deg)'
        });


    } else {

        $('#tabletka').css({
            'transform': 'rotate(0deg)'
        });
        $('#tabletka>.yel').css({
            'transform': 'rotate(45deg)'
        });
        $('#tabletka>.blue').css({
            'transform': 'rotate(-15deg)'
        });

        $('#tabletka span#razrab').animate({
            'opacity': 1,
            'top': 600,
            'left': 50
        }, 10);

        $('#marketing').animate({
            'opacity': 1,
            'top': 425,
            'left': 390
        }, 10);


        $('#branding').animate({
            'opacity': 1,
            'top': 400,
            'left': 35
        }, 10);


        $('#analiz').animate({
            'opacity': 1,
            'top': 250,
            'left': 80
        }, 10);

    }
});

/* --------------------------------------------------------
SERVICES POPUP
----------------------------------------------------------- */
$('#tabletka span').click(function (e) {
    e.preventDefault();

    var bn = $(this).attr('id');

    $('.serv-pop-up').each(function (index) {

        if ($(this).css('opacity') == 1) {
            $(this).find('.close-pop-up').trigger('click');
        }

        if ($(this).attr('data') == bn) {

            $(this).animate({
                'width': 1000,
                'height': 1000,
                'opacity': 1
            }).css({
                'top': 'calc(50% - 30rem)',
                'left': 'calc(50% - 30rem)'
            });
        }
    });

});
$('.close-pop-up').click(function (e) {
    e.preventDefault();
    $(this).parent().animate({
        'width': 0,
        'height': 0,
        'opacity': 0
    }).css({
        'top': 0,
        'left': 0
    });
});
/* --------------------------------------------------------
MENU SHOW
----------------------------------------------------------- */
$('.menu').click(function (e) {
    e.preventDefault();
    $('.menu i').toggleClass('fa-bars fa-times');
    $('.menu-wrap ul li').toggleClass('anim');
    $('section, footer').toggleClass('blured');
    $(this).next().toggleClass('open');
});
