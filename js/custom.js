// $(window).scroll(function() {
//   if ($(this).scrollTop() > 180){
//     $('header').addClass("shrink");
//   }
//   else{
//     $('header').removeClass("shrink");
//   }
// });

$(".banner_img_slider").slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  speed: 500,
  // autoplay: true,
  autoplaySpeed: 6000,
});

$(".service_slider").slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  appendArrows: '.service_slider_arrow',
  speed: 500,
  // autoplay: true,
  autoplaySpeed: 6000,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  ],
});

$(".testimonial_slider").slick({
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  speed: 500,
  // autoplay: true,
  autoplaySpeed: 6000,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  ],
});