require(['jquery', 'slick'], function($) {
    $(document).ready(function() {
        //menu-left
        $('#overlay').on('click', function() {
            $('#overlay').hide();
            $('#menu').removeClass('show');
            $('#cart').removeClass("showcart");
            $(".CollectionFilters").removeClass('show');
        })
        $('.header-left-mobile').on('click', function() {
            $('#menu').addClass('show');
            $('#overlay').toggle();
        })
        $('.Icon--close').on('click', function() {
            $('#menu').removeClass('show');
            $('#overlay').toggle();
        })
        // hidden another panel
        $(".accordion").on("click", function() {
            var panel = $(this).next(".panel");
            var isPanelOpen = panel.hasClass("showpanel");


            if (!isPanelOpen) {
                panel.addClass("showpanel").slideDown();
                $(this).addClass("active");

                $(this).parent().siblings().children(".panel").slideUp().removeClass("showpanel");
                $(this).parent().siblings().children(".accordion").removeClass("active");
            } else {
                panel.removeClass("showpanel").slideUp();
                $(this).removeClass("active");
            }
        });
        // toggle megamenu
        $('.header-list-items').mouseenter(function() {
            $('.megamenu').removeClass('is-expanded');
            $(this).siblings('.megamenu').addClass('is-expanded');
        });

        $('.header_left_text').mouseleave(function() {
            $('.megamenu').removeClass('is-expanded');
        });

        // show cart
        $('.header-cart').on("click", function() {
            $('#cart').addClass("showcart");
            $('#overlay').toggle();
        });
        // close cart
        $('.drawer-close').on('click', function() {
            $('#cart').removeClass("showcart");
            $('#overlay').hide();
        })

        //show side-cart
        $('.side-cart-title, .collapse-container, .close-icon').on("click", function() {
            $('.drawer-main').toggleClass("hidden");
            $('.collapse-container').toggle();
            $('.close-icon').toggle();
            $('.carousel-navigation').toggle();
            if ($('.carousel-navigation').css('display') === 'block') {
                $('.carousel-navigation').css('display', 'flex');
            }
            $('.recommendation-result').toggleClass("show");
        });

        $('.item-selection').on('click', function() {
            $(this).siblings('.item-selection').removeClass('active');
            $(this).addClass('active');
        })

        // slick
        $('.recommendation-result').slick({
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            prevArrow: $('.carousel-prev'),
            nextArrow: $('.carousel-next')
        });
        
        $('.search-btn, .search-close').on('click', function() {
            $("#search").toggleClass("active");
            $(".search-dropdown").toggleClass("active");
            setTimeout(function() {
                $('.dropdown-content-results').slick('setPosition');
            }, 1000);
        })

        $('.dropdown-content-results').slick({
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
            arrows: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 475,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }]
        });



    });
});