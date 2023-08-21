

(function ($) {
    "use strict";
    
    /*Document is Raedy */
    $(document).ready(function () {

        /*========== MENU ==========*/
        
        $(function () {
            function toggleNavbarMethod() {
                if ($(window).width() > 992) {
                    
                    $('.dropdown')
                        .on('mouseover', function () {
                            $(this).addClass('open');
                            $('b', this).toggleClass("caret caret-up");
                        })

                    .on('mouseout', function () {
                        $(this).removeClass('open');
                        $('b', this).toggleClass("caret caret-up");
                    });


                } else {
                    $('.dropdown').off('mouseover').off('mouseout');
                    $('.dropdown-toggle')

                    .on('click', function (e) {
                        $('b', this).toggleClass("caret caret-up");
                    });

                }
            }
            toggleNavbarMethod();
            $(window).on("resize", (toggleNavbarMethod));

            $(".navbar-toggle").on("click", function () {
                $(this).toggleClass("active");
            });
        });

        /*========== MOBILE MENU ==========*/

        $('.moblie_menu_btn').click(function(event) {
            $('#main_menu').addClass('expand');
            $('.mobile_menu_close_btn').addClass('expand');
            $('.body_overlay').css({
                display: 'block'
            });
        });
        $('.mobile_menu_close_btn').click(function(event) {
            $('#main_menu').removeClass('expand');
            $('.mobile_menu_close_btn').removeClass('expand');
            $('.body_overlay').css({
                display: 'none'
            });
        });

        /*========== HOME MAIN SLIDE ==========*/
        $('.home_slider').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: false
        });

        /*========== HOME PROJECT SLIDE ==========*/
        $('.home_project_card_wrapper').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: false
        });

        $('.product-card-md-3').hover(function() {
            $(this).find('.product-card-image-quick-view').css('display', 'block')
            $(this).find('.product-card-image-quick-view').toggleClass('animate__fadeInUp');
            
        });

        /*========== BACK TO TOP ==========*/
        var amountScrolled = 500;
        var back_to_top = $('#back_to_top');
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > amountScrolled) {
                back_to_top.addClass('active');
            } else {
                back_to_top.removeClass('active');
            }
        });
        back_to_top.on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        });

        /*========== GOOGLE MAP ==========*/
        let map;

        async function initMap() {
        const { Map } = await google.maps.importLibrary("maps");

        map = new Map(document.getElementById("home-contact-map"), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
        }

initMap();
    });
})(jQuery);