var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor:true,
  speed: 400, //velocidade
  preventClicks: true,
  noSwiping:true, //Isso é para evitar deslizar no final
  freeMode: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    950: {
      slidesPerView: 3,
      spaceBetween:30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});



