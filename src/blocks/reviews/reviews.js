import $ from 'jquery';

const reviews = $('#reviews');

// $(function () {
//   $('.reviews__link').on('click', function (e) {
//     e.preventDefault();
//     $(this).siblings('.reviews__text').css('-webkit-line-clamp', 'none');
//     $(this).addClass('open', function () {
//       // reviews.slick('reinit');
//     });
//   });
// });



reviews.slick({
  arrows: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        dots: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        dots: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        slidesToShow: 1
      }
    }
  ]
});

$('#reviews-prev').on('click', function (event) {
  event.preventDefault();
  reviews.slick('slickPrev');
});

$('#reviews-next').on('click', function (event) {
  event.preventDefault();
  reviews.slick('slickNext');
});




