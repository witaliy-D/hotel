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

const slider1 = $('#slider-1');
const slider2 = $('#slider-2');
const slider3 = $('#slider-3');
const slider4 = $('#slider-4');
const slider5 = $('#slider-5');
const slider6 = $('#slider-6');



slider1.slick(sliderSetings);

$('#apartment-next-1').on('click', function (event) {
  event.preventDefault();
  slider1.slick('slickPrev');
});

$('#apartment-prev-1').on('click', function (event) {
  event.preventDefault();
  slider1.slick('slickNext');
});



slider2.slick(sliderSetings);

$('#apartment-next-2').on('click', function (event) {
  event.preventDefault();
  slider1.slick('slickPrev');
});

$('#apartment-prev-2').on('click', function (event) {
  event.preventDefault();
  slider1.slick('slickNext');
});

slider3.slick(sliderSetings);

$('#apartment-next-3').on('click', function (event) {
  event.preventDefault();
  slider1.slick('slickPrev');
});

$('#apartment-prev-3').on('click', function (event) {
  event.preventDefault();
  slider1.slick('slickNext');
});

slider4.slick(sliderSetings);

$('#apartment-next-4').on('click', function (event) {
  event.preventDefault();
  slider1.slick('slickPrev');
});

$('#apartment-prev-4').on('click', function (event) {
  event.preventDefault();
  slider1.slick('slickNext');
});

slider5.slick(sliderSetings);

$('#apartment-next-5').on('click', function (event) {
  event.preventDefault();
  slider1.slick('slickPrev');
});

$('#apartment-prev-5').on('click', function (event) {
  event.preventDefault();
  slider1.slick('slickNext');
});

slider6.slick(sliderSetings);

$('#apartment-next-6').on('click', function (event) {
  event.preventDefault();
  slider1.slick('slickPrev');
});

$('#apartment-prev-6').on('click', function (event) {
  event.preventDefault();
  slider1.slick('slickNext');
});
