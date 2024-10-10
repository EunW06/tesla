const topSlider = new Swiper(".top-swiper", {
  // Optional parameters
  direction: "horizontal", //vertical
  loop: true,
  autoplay: true,
  speed: 1000, //기본값 300
  effect: "slide", //slide, fade, cube, flip, coverflow

  slidesPerView: 4, // 캐러셀 만들기
  spaceBetween: 20, // 간격 20px
  centeredSlides: true, // 첫 번째 슬라이드를 가운데로

  // If we need pagination
  pagination: {
    el: ".top-slider-wrap .pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".top-slider-wrap .btn-next",
    prevEl: ".top-slider-wrap .btn-prev",
  },
});
