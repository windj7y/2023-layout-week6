import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

const swiper = new Swiper('.mySwiper', {
  allowTouchMove: false,
  slidesPerView: 'auto',
  speed: 5000,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});