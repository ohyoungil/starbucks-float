const $search = document.querySelector('.search');
const $searchInput = $search.querySelector('input');
$search.addEventListener('click', function () {
  $searchInput.focus();
});

$searchInput.addEventListener('focus', function () {
  $search.classList.add('focused');
  $searchInput.setAttribute('placeholder', '통합검색');
});
$searchInput.addEventListener('blur', function () {
  $search.classList.remove('focused');
  $searchInput.setAttribute('placeholder', '');
});

const $badgeEl = document.querySelector('header .badges');
window.addEventListener(
  'scroll',
  _.throttle(function () {
    console.log(window.scrollY);
    if (scrollY > 500) {
      gsap.to($badgeEl, 0.6, {
        opacity: 0,
        display: 'none',
      });
    } else {
      gsap.to($badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      });
    }
  })
);

// Scroll Magic
const $spyEls = document.querySelectorAll('.scroll-spy');
$spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

// new Swiper
new Swiper('.inner__left .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});

// Notice toggle
const $noticeToggle = document.querySelector('.toggle-promotion');
const $promotion = document.querySelector('.promotion');
$noticeToggle.addEventListener('click', function () {
  $promotion.classList.toggle('hide');
});
