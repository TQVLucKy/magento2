require(['jquery','jquery/ui','slick'], function ($) {
    $(document).ready(function () {
        console.log('JavaScript loaded successfully!');

        $('.btn-readmore').on('click', function() {
            var currrentContent = $('.expanded-modal-text').html().trim();

            var shortContent = '<p class="p1">The Academy Brand men’s shorts come in different styles, fabrics and colours—perfect for the warm weather or a casual getaway. Whether you’re going for a relaxe...</p>';
            var expandedContent = `
                <p class="p1">The Academy Brand men’s shorts come in different styles, fabrics and colours—perfect for the warm weather or a casual getaway. Whether you’re going for a relaxed, sporty or smart look, our collection of shorts has something for every occasion.</p>
                <p class="p1">Our chino short have a button up fixed waist and are garment dyed and enzyme washed, giving them a lovely soft feel. These shorts will quickly become your summer essential when paired with a simple tee or <a href="https://academybrand.com/collections/s-s-shirts"><span class="s1">linen shirt</span></a>.</p>
                <p class="p1">The volley short is another classic summer staple that gives extra comfort with its elastic waistband and natural cotton drawcord. Like the chino shorts, this pair is enzyme washed for that premium soft feel. Easily pair with a <a href="https://academybrand.com/collections/mens-long-sleeve-shirts"><span class="s1">shirt with rolled up sleeves</span></a> or a <a href="https://academybrand.com/collections/mens-tees-and-layering"><span class="s1">cotton tee</span></a>. If you’re after an effortlessly cool look with contemporary styling, the cotton sweat is made for you. Wear with a loose fit tee or oversized long sleeve tee for a sporty getup.</p>
                <p class="p1">As for our linen shorts, these can be dressed up or down to suit the occasion. Linen is great in the hot weather because it's lightweight, breathable and will soften with every wash and wear.</p>
                <p class="p1">The Academy Brand shorts collection will have you ready for any holiday, adventure or even everyday errands. Shop our shorts and find the next pair to add to your wardrobe.</p>
            `;

            var readMore = `Read More`;
            var showLess = `Show Less`;
            if (currrentContent == shortContent) {
                $('.expanded-modal-text').slideUp('slow', function() {
                    $('.expanded-modal-text').html(expandedContent);

                    $('.expanded-modal-text').slideDown('slow');
                    $('.link').html(showLess);
                    $('.Icon').css('transform', 'rotate(180deg)');

                });
            } else {
                $('.expanded-modal-text').slideUp('slow', function() {
                    $('.expanded-modal-text').html(shortContent);
                    $('.expanded-modal-text').slideDown('slow');
                    $('.link').html(readMore);
                    $('.Icon').css('transform', 'rotate(360deg)');

                });
            }
        })
        
        //Filter
        $(".Collection__Main").accordion({
            collapsible: true,
            active: false,
        });
        $('.Collection_Button').on('click', function () {
            $(this).toggleClass('active');
        })
        //cagegory
        $('.Recommendation__Profile').slick({
            dots: false,
            infinite: false,
            slidesToShow: 5,
            arrows:false,
            responsive: [{
                    breakpoint: 1240,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });

        $('.CategoryToolbar_Filter, .Collection__Close').on('click', function () {
            $('.CollectionFilters').addClass('show');
            $('#overlay').toggle();
        })
        $('.item-selection').on('click', function () {
            if (!$(this).hasClass('disabled')) {
                $(this).siblings('.item-selection').removeClass('active');
                $(this).addClass('active');
            }
        })


        // Sort
        $('.CategoryToolbar_Item.Sort').on('click', function (e) {
            e.stopPropagation();
            $('.Category_Short_Popover').toggleClass('show');
        })
        $('.CategoryToolber_Close').on('click', function (e) {
            e.stopPropagation();
            $('.Category_Short_Popover').removeClass('show');
        })
        $(document).on('click', function (e) {
            if (!$(e.target).closest('.Category_Short_Popover').length)
                $('.Category_Short_Popover').removeClass('show');
        });

        $('.CategoryToolbar_Layout').on('click', function () {
            $('.CategoryToolbar_Layout').removeClass('active');
            $(this).addClass("active");
        })


    });
});