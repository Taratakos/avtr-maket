$(function () {
  $(".design-slider").slick({
    dots: false,
    // щоб показувало 4 картинки
    slidesToShow: 4, 
    variableWidth: true,
    prevArrow:
      '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="l-arrow">',
    nextArrow:
      '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="r-arrow">',
  });
});
