function Slider() {
  this.sliders = [...document.querySelectorAll(".slider__body")];
  this.arrowLeft = document.querySelector(".fa-arrow-left");
  this.arrowRight = document.querySelector(".fa-arrow-right");
  let value;

  this.arrowRight.addEventListener("click", () => changePosition(1));
  this.arrowLeft.addEventListener("click", () => changePosition(-1));

  function changePosition(change) {
    this.currentElement = Number(
      this.document.querySelector(".slider__body__show").dataset.id
    );
    value = currentElement;
    value += change;

    if (value === 0 || value == this.sliders.length + 1) {
      value = value === 0 ? this.sliders.length : 1;
    }
    this.sliders[currentElement - 1].classList.toggle("slider__body__show");
    this.sliders[value - 1].classList.toggle("slider__body__show");
  }
}
