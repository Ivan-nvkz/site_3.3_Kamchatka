'use strict';
document.addEventListener('DOMContentLoaded', () => {


   // Плавный скролл + кнопка вверх
   const anchors = document.querySelectorAll('.menu__link');

   if (window.location.hash != '') {
      scrollToId(window.location.hash);
   }

   for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {

         if (e.target.classList.contains('menu__link')) {
            e.preventDefault();

            let link = e.target;
            scrollToId(link.hash);

            let ancorActive = document.querySelector('.menu__link--active');
            ancorActive.classList.remove('menu__link--active');
            link.classList.add('menu__link--active');
         }
      });
   }

   function elemOffsetTop(node) {
      let coords = node.getBoundingClientRect();
      return coords.top + window.pageYOffset;

   }

   function scrollToId(id) {
      let target = document.querySelector(id);

      if (target !== null) {
         let position = elemOffsetTop(target) - 0;

         window.scrollTo({
            top: position,
            behavior: "smooth"
         });
      }
   }

   let btnUp = document.querySelector('.btn-up');
   btnUp.addEventListener('click', function (e) {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });
   });

   let scrollWind = window;
   scrollWind.addEventListener('scroll', function () {
      let pos = window.pageYOffset;

      if (pos > window.innerHeight) {
         btnUp.classList.add('btn-up-open');
      } else {
         btnUp.classList.remove('btn-up-open');
      }
   });


   // Меню бургер 2
   const burgerBtn = document.querySelector('.burger__btn');
   const menuList = document.querySelector('.menu__list');


   burgerBtn.addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle('burger__btn-line--active');
      menuList.classList.toggle('menu__list--active');
   });




   // Календарь в форме ()
   new AirDatepicker('.date__tour', {
      buttons: ['today', 'clear'],
      //  timepicker: true,
      toggleSelected: true,
      multipleDates: 2,
      // range: true,
      multipleDatesSeparator: ' - ',
      position: 'top right',
      minDate: new Date(),
      onSelect({ date, formattedDate, datepicker, }) {
         // datepicker.hide();
      }
   });


   // Увеличение жирности шрифта при нажатии на радиокнопку
   let inputRadio = document.querySelectorAll('.input__base-box');
   let boxText1 = document.querySelector('.base-box__text1');
   let boxText2 = document.querySelector('.base-box__text-plus2');
   let boxText3 = document.querySelector('.base-box__text-plus3');

   inputRadio.forEach(radio => {
      radio.addEventListener('click', function () {

         if (radio.value === "Базовый (для камчадал)") {
            boxText1.style.fontWeight = 'bold';
         } else {
            boxText1.style.fontWeight = '400';
         }

         if (radio.value === "Базовый + проживание") {
            boxText2.style.fontWeight = 'bold';
         } else {
            boxText2.style.fontWeight = '400';
         }

         if (radio.value === "Базовый + проживание + долина гейзеров") {
            boxText3.style.fontWeight = 'bold';
         } else {
            boxText3.style.fontWeight = '400';
         }

      });

   });

   // Модальное окно Паратунка
   const openModal = document.querySelector('.one-day__text-link');
   const modal = document.querySelector('.modal-inner');
   const btnCloseModal = document.querySelector('.modal__close-button');
   const btnReturn = document.querySelector('.return');


   console.log(btnCloseModal);

   openModal.addEventListener('click', function () {
      modal.classList.add('modal-inner--active');
   });

   btnCloseModal.addEventListener('click', function () {
      modal.classList.remove('modal-inner--active');
      console.log(789);

   });

   btnReturn.addEventListener('click', function () {
      modal.classList.remove('modal-inner--active');
      console.log(789);

   });




















});