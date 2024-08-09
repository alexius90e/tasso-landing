const accordeons = document.querySelectorAll('.faq__accordeon');

accordeons.forEach((accordeon) => {
  const accordeonToggler = accordeon.querySelector('.faq__accordeon-toggler');
  accordeonToggler.addEventListener('click', () => {
    closeAccordeons(accordeon);
    accordeon.classList.toggle('active');
    const panel = accordeon.querySelector('.faq__accordeon-panel');
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 240 + 'px';
    }
  });
});

function closeAccordeons(targetAccordeon) {
  const accordeons = document.querySelectorAll('.faq__accordeon');
  accordeons.forEach((accordeon) => {
    if (accordeon !== targetAccordeon) {
      const panel = accordeon.querySelector('.faq__accordeon-panel');
      accordeon.classList.remove('active');
      panel.style.maxHeight = null;
    }
  });
}

const galleryThumbsSwiper = new Swiper('.gallery__thumbs .swiper', {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
  direction: 'vertical',
});

const gallerySwiper = new Swiper('.gallery__slider .swiper', {
  spaceBetween: 10,
  slidesPerView: 2,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1.1,
    },
    576: {
      slidesPerView: 1.25,
    },
    680: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 1,
    }
  },
  navigation: {
    nextEl: '.gallery__slider .swiper-button-next',
    prevEl: '.gallery__slider .swiper-button-prev',
  },
  pagination: {
    el: '.gallery__slider .swiper-pagination',
  },
  thumbs: {
    swiper: galleryThumbsSwiper,
  },
});
