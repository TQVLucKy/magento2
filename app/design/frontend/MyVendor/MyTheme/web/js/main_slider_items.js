require(['jquery', 'slick'], function($) {
    $('.your-carousel-class').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.carousel-class-prev'),
        nextArrow: $('.carousel-class-next'),
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    infinite: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1
                }
            }
        ]
    });
});