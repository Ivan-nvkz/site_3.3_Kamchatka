
$(function () {
   $('.slider-slick').slick({
      slidesToShow: 1,
      speed: 800,

      prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/bnn-prev.svg" alt="" class="slick-button-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="images/icons/bnn-next.svg" alt="" class="slick-button-next"></button>',

      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: false
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }

      ]
   });

   $('.slider-slick2').slick({
      slidesToShow: 1,
      speed: 800,

      prevArrow: '<button type="button" class="slick-prev2"><img src="images/icons/bnn-prev-black.svg" alt="" class="slick-button-prev2"></button>',
      nextArrow: '<button type="button" class="slick-next2"><img src="images/icons/bnn-next-black.svg" alt="" class="slick-button-next2"></button>',
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: false
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });

   $('.slider-slick-team').slick({
      slidesToShow: 1,
      speed: 800,

      prevArrow: '<button type="button" class="slick-prev3"><img src="images/icons/bnn-prev-black.svg" alt="" class="slick-button-prev3"></button>',
      nextArrow: '<button type="button" class="slick-next3"><img src="images/icons/bnn-next-black.svg" alt="" class="slick-button-next3"></button>',
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: false
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         }
      ]
   });

   // Слайдер свипер
   const swiper = new Swiper('.swiper', {
      // Количество слайдов для показа
      slidesPerView: 3,
      // Отступ между слайдами
      spaceBetween: 50,
      // Бесконечный слайдер
      loop: true,
      // Скорость
      speed: 800,
      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      // Слайд по центру
      centeredSlides: true,
      // Брейк поинты (адаптив)
      // Ширина экрана
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         480: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         },
      },
   });



});








