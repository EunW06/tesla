const topSlider = new Swiper(".top-slider", {
  // Optional parameters
  direction: "horizontal", //vertical
  loop: true,
  autoplay: true,
  speed: 1000, //기본값 300
  effect: "slide", //slide, fade, cube, flip, coverflow

  slidesPerView: 3, // 캐러셀 만들기
  spaceBetween: 20, // 간격 20px
  centeredSlides: true, // 첫 번째 슬라이드를 가운데로

  //RWD setting " min-width, 모바일부터 pc까지 설정한다.ㄴ"
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

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

$(function () {
  const $menu = $(".gnb > li");
  const $submenu = $(".submenu");
  const duration = 300;

  $menu.on("mouseenter", function () {
    $(this).find($submenu).stop().slideDown(duration);
    $(this).addClass("on");
  });

  $menu.on("mouseleave", function () {
    $submenu.stop().slideUp(duration);
    $menu.removeClass("on");
  });
});
