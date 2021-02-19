// popular tours slick slider function service page
$(document).ready(function(){
    $('.popular-tour-slick-slider').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: ".slickPrev",
        nextArrow: ".slickNext",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
          }
        ]
    });
  });