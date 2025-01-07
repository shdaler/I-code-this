const el = document.querySelector(".blaze-slider");

new BlazeSlider(el, {
  all: {
    slidesToShow: 4,
    slidesToScroll: 8,
    slideGap: "10px",
    enableAutoPlay: false,
  },
  "(max-width:850px)": {
    slidesToShow: 3,
    slidesToScroll: 6,
  },
  "(max-width:600px)": {
    slidesToShow: 2,
    slidesToScroll: 4,
  },
  "(max-width:540px)": {
    slidesToShow: 1,
    slidesToScroll: 2,
  },
});
