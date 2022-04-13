import $ from "jquery";
import slick from 'slick-carousel';
import './assets/css/slick.css';


$(document).ready(function () {
    $('.team__carousel').slick({
        dots: true,
        dotsClass: 'dosts-carousel',
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prevBtn"></button>',
        nextArrow: '<button type="button" class="slick-nextBtn"></button>',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow: false,
              nextArrow: false
            }
          }
        ]
      });

    

      $('.testimonials--carousel').slick({
        centerMode: true,
        centerPadding: '120px',
        slidesToShow: 3,
        dots: true,
        dotsClass: 'dosts-carousel',
        prevArrow: false,
        nextArrow: false,
        
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
});