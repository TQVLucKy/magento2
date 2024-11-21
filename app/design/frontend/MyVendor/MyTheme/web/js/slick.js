// define('slick', ['jquery'], function($) {
//     "use strict";

//     var jq = {
//         init: function() {
//             this.initSlickCarousel();
//             this.initAccordion();
//         },

//         // Hàm khởi tạo slick carousel
//         initSlickCarousel: function() {
            
//             $('.Recommendation__Profile').slick({
//                 dots: false,
//                 infinite: false,
//                 slidesToShow: 5,
//                 responsive: [
//                     {
//                         breakpoint: 1240,
//                         settings: {
//                             slidesToShow: 4,
//                         }
//                     },
//                     {
//                         breakpoint: 1024,
//                         settings: {
//                             slidesToShow: 3,
//                         }
//                     },
//                     {
//                         breakpoint: 540,
//                         settings: {
//                             slidesToShow: 2,
//                         }
//                     }
//                 ]
//             });
//         },

//         // Hàm khởi tạo accordion
//         initAccordion: function() {
//             $(".Collection__Main").accordion({
//                 collapsible: true,
//                 active: false,
//             });
//         }
//     };

//     $(document).ready(function() {
//         jq.init();
//     });
// });
