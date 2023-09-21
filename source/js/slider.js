const slider = document.querySelector(".slider__list");
const slides = Array.from(document.querySelectorAll(".slider__item"));
const previousButton = document.querySelector(".slider__button--previous");
const nextButton = document.querySelector(".slider__button--next");
nextButton?.addEventListener('click', () => {
  if (slider.scrollLeft + slider.clientWidth === slider.scrollWidth) {
    slider.scrollBy({
      left: -slider.scrollLeft
    });
  } else {
    slider.scrollBy({
      left: slider.clientWidth
    });
  }
});
previousButton?.addEventListener('click', () => {
  if (slider.scrollLeft === 0) {
    slider.scrollBy({
      left: slider.scrollWidth - slider.clientWidth
    });
  } else {
    slider.scrollBy({
      left: -slider.clientWidth
    });
  }
});
