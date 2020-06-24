$(".case-study-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  items: 3,
  responsiveClass: true,
  autoplay: true,

  responsive: {
    0: {
      items: 1,
    },

    700: {
      items: 2,
    },
    1000: {
      nav: true,
      loop: false,
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
});
// testimonial js
$(".testimonial-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  items: 1,
  Dots: true,
  autoplay: true,
});
