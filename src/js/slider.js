function Slider() {
  const sliders = [...document.querySelectorAll(".slider__body")];
  const arrowLeft = document.querySelector(".fa-arrow-left");
  const arrowRight = document.querySelector(".fa-arrow-right");
  let value;

  arrowRight.addEventListener("click", () => changePosition(1));
  arrowLeft.addEventListener("click", () => changePosition(-1));

  function changePosition(change) {
    const currentElement = Number(
      document.querySelector(".slider__body__show").dataset.id
    );
    value = currentElement;
    value += change;

    if (value === 0 || value == sliders.length + 1) {
      value = value === 0 ? sliders.length : 1;
    }
    sliders[currentElement - 1].classList.toggle("slider__body__show");
    sliders[value - 1].classList.toggle("slider__body__show");
  }
}
