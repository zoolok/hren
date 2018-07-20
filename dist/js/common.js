$(document).ready(function () {

    /* --------------------------------------------------------
         INDEX  SLIDERS
----------------------------------------------------------- */
    $(function () {
        "use strict";
        if ($(".slider_1").length > 0) {

            $('.slider_1').owlCarousel({
                items: 1,
                nav: true,
                navText: ["", ""],
                dots: false,
                loop: true,
                center: true,
                autoplay: false
            });
        }
        if ($(".slider-logo").length > 0) {

            $('.slider-logo').owlCarousel({
                items: 7,
                nav: false,
                navText: ["", ""],
                dots: false,
                loop: true,
                center: true,
                autoplay: true
            });
        }
        if ($(".serv-list-tabs").length > 0) {

            $('.serv-list-tabs').owlCarousel({
                items: 7,
                nav: true,
                navText: ["", ""],
                dots: false,
                loop: false,
                center: false,
                autoplay: false
            });
        }
        if ($(".personal-slider").length > 0) {

            $('.personal-slider').owlCarousel({
                items: 4,
                nav: true,
                navText: ["", ""],
                dots: false,
                loop: false,
                center: false,
                autoplay: false,
                margin:40
            });
        }
        if ($(".slider-otzyv").length > 0) {
            $('.slider-otzyv').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.slider-logo-otzyv'
            });
            $('.slider-logo-otzyv').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                asNavFor: '.slider-otzyv',
                dots: true,
                /* centerMode: true,*/
                focusOnSelect: true,
                prevArrow:'<button type="button" class="owl-prev"></button>',
                nextArrow:'<button type="button" class="owl-next"></button>'
            });
        }
    });

    /* --------------------------------------------------------
    MFP
----------------------------------------------------------- */
    $(function () {
        "use strict";
        if ($(".image-link").length > 0) {
            $('.image-link').magnificPopup({
                type:'image',
                gallery: {
                    enabled: true
                },
                image: {
                    titleSrc: 'title'
                }
            });
        }
    });

    /* --------------------------------------------------------
                INDEX COUNTS
    ----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $( "#counts" ).length > 0 ) {

            var show = true;
            var countbox = "#counts";

            $(window).on("scroll load resize", function () {

                if (!show) return false;

                var w_top = $(window).scrollTop();
                var e_top = $(countbox).offset().top;

                var w_height = $(window).height();
                var d_height = $(document).height();

                var e_height = $(countbox).outerHeight();

                if (w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                    $(".spincrement").spincrement({
                        thousandSeparator: "",
                        duration: 2500
                    });

                    show = false;
                }
            });
        }
    });/* --------------------------------------------------------
ADD ANIMATIONS
----------------------------------------------------------- */
    $(function() {
        "use strict";
        var map =  $('.map');

        if ( map.length > 0 ) {

            var show = true;

            $(window).on("scroll load resize", function () {

                if (!show) return false;

                var w_top = $(window).scrollTop();
                var e_top = $(map).offset().top;

                var w_height = $(window).height();
                var d_height = $(document).height();

                var e_height = $(map).outerHeight();

                if (w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {

                    for (var i = 0; i < 17; i++) {
                        map.append('<span class="map-marker"></span>');
                    }

                    $('.map-marker').addClass('animated fadeInDown');

                    show = false;
                }
            });

        }
    });

    $(function() {
        "use strict";
        var map =  $('.history');

        if ( map.length > 0 ) {

            var show = true;

            $(window).on("scroll load resize", function () {

                if (!show) return false;

                var w_top = $(window).scrollTop();
                var e_top = $(map).offset().top;

                var w_height = $(window).height();
                var d_height = $(document).height();

                var e_height = $(map).outerHeight();

                if (w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {

                    $('.history ul li').addClass('animated fadeIn');

                    show = false;
                }
            });

        }
    });
    /* --------------------------------------------------------
    SERVICES TABS
    ----------------------------------------------------------- */
    $(function () {
        $('.serv-button ul li').click(function () {

            var curItem = $(this).attr('datatype');
            console.log(curItem);

            $('.serv-button ul li').each(function (index) {
                $(this).removeClass('select');
            });

            $('.serv-item').each(function (index) {
                if($(this).attr('datatype') == curItem){
                    $(this).addClass('active').animate({opacity: "1"}, 400);
                }else{
                    $(this).removeClass('active').animate({opacity: "0"}, 400);
                }
            });
            $(this).toggleClass('select');
        });

    });
    /* --------------------------------------------------------
    3-th Level Menu
    ----------------------------------------------------------- */
    $(function () {
        $('a[datamenu]').hover(function () {

            var curMenuItem = $(this).attr('datamenu');

            $('.subsub').each(function (index) {
                if($(this).attr('datamenu') == curMenuItem){
                    $(this).addClass('active');
                }else{
                    $(this).removeClass('active');
                }
            });
        });
        $('a.dropdown').hover(function () {
            },
            function(){
                $('.subsub').each(function (index) {
                    $(this).removeClass('active');
                });
            });
    });
    /* --------------------------------------------------------
OFFICE MAP
----------------------------------------------------------- */
    $(function () {
        $('.office-list ul li').click(function () {

            var curOffice = $(this).attr('dataoffice');
            var xMap =  $(this).attr('dataX');
            var yMap =  $(this).attr('dataY');
            var tel = $(this).attr('datatel');
            var fax = $(this).attr('datafax');
            var mail = $(this).attr('datamail');

            $('.office-list ul li').each(function (index) {
                $(this).removeClass('select');
            });

            $(this).toggleClass('select');
            initMap(xMap,yMap);

            $('.nn p').html($(this).text());
            $('.nn ul li:first-child').html('<span>Адрес:</span>' + curOffice);
            $('.nn ul li:nth-child(2)').html('<span>Телефон:</span>' + tel);
            if(fax){
                $('.nn ul li:nth-child(3)').html('<span>Факс:</span>' + fax);
            }else{
                $('.nn ul li:nth-child(3)').html("");
            }
            if(mail){
                $('.nn ul li:nth-child(4)').html('<span>Почта:</span><a href="mailto:' + mail + '">' + mail + '</a>');
            }else{
                $('.nn ul li:nth-child(4)').html("");
            }
        });

    });
    /* --------------------------------------------------------
SERVICE PAGE LIST ITEMS
----------------------------------------------------------- */
    $(function() {
        "use strict";
        if ( $( ".serv-list-content" ).length > 0 ) {

            $('.serv-list-tabs h3').click(function () {

                var curservtab = $(this).attr('data-serv');

                console.log(curservtab);

                $('.serv-list-tabs h3').each(function (index) {
                    $(this).removeClass('select');
                });

                $(this).toggleClass('select');

                $('.serv-list-content>div').each(function (index) {

                    if($(this).hasClass('serv-' + curservtab)){
                        $(this).addClass('active').animate({opacity: "1"}, 400);
                    }else{
                        $(this).removeClass('active').animate({opacity: "0"}, 400);
                    }

                });
                var items =$('.serv-list-content>.active .serv-list-item'),
                    per = 8,
                    i = 1,
                    total = 0;

                $('.serv-list-content>.active .more-services').on('click', function(){
                    total = per * (i++);
                    items.slice(0, total).show();
                    console.log(items.length);
                    $(this)[total >= items.length ? 'hide' : 'show']();
                }).click();

            });

        }
    });
    /* --------------------------------------------------------
   SERVICE TABS INIT
    ----------------------------------------------------------- */
    var items =$('.serv-list-content>.active .serv-list-item'),
        per = 8,
        i = 1,
        total = 0;

    $('.serv-list-content>.active .more-services').on('click', function(){
        total = per * (i++);
        items.slice(0, total).show();
        console.log(items.length);
        $(this)[total >= items.length ? 'hide' : 'show']();
    }).click();
});

/* --------------------------------------------------------
GOOGLE MAP
----------------------------------------------------------- */

function initMap(xMap,yMap) {

    if(!xMap || !yMap){
        xMap = 56.296545;
        yMap = 44.065512;
    }

    var centerLatLng = new google.maps.LatLng(xMap, yMap);
    var mapOptions = {
        center: centerLatLng,
        zoom: 17,
        styles:[
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#ff0000"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": -30
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#353535"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#656565"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#505050"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#808080"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#454545"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels",
                "stylers": [
                    {
                        "hue": "#000000"
                    },
                    {
                        "saturation": 100
                    },
                    {
                        "lightness": -40
                    },
                    {
                        "invert_lightness": true
                    },
                    {
                        "gamma": 1.5
                    }
                ]
            }
        ]
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Добавляем маркер
    var marker = new google.maps.Marker({
        position: centerLatLng,
        map: map,
        title: "Нижегородский Институт Прикладных Технологий",
        icon: 'https://zoolok.github.io/projects/google-marker.png'
    });
}
google.maps.event.addDomListener(window, "load", initMap);