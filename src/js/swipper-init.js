const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 120
      }
    }
});
const swiper2 = new Swiper('.course-content', {
  slidesPerView: 'auto',
  spaceBetween: 120,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 3000
  }
});
