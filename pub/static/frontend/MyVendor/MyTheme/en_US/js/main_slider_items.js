require(['jquery', 'slick'], function($) {
    $('.your-carousel-class').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});