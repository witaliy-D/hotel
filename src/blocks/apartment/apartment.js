import $ from 'jquery';
const sliderResponsive = [
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
      slidesToShow: 3
    }
  },
  {
    breakpoint: 768,
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
];

const sliderSetings = {
  arrows: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: sliderResponsive
};


$('.apartment .apartment__slider-content').each(function () {
  $(this).slick(sliderSetings);

  $(this).siblings('.apartment__arrow--prev').on('click', function (event) {
    event.preventDefault();
    $(this).siblings('.apartment__slider-content').slick('slickPrev');
  });

  $(this).siblings('.apartment__arrow--next').on('click', function (event) {
    event.preventDefault();
    $(this).siblings('.apartment__slider-content').slick('slickNext');
  });

});
