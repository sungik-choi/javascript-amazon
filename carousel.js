class Carousel {
  constructor(option) {
    this.item = document.querySelector(option.item);
    this.size = this.item.childElementCount - 1;
    this.index = option.random ? Math.floor(Math.random() * (this.size + 1)) : 0;
    this.button = document.querySelector(option.button);
    this.card = document.querySelectorAll(option.card);
    this.slideItem();
    this.activeCard();
    this.clickButton();
    this.clickCard();
  }

  slideItem() {
    const offset = this.item.firstElementChild.offsetWidth;
    this.item.style.transform = `translateX(-${this.index * offset}px)`;
  }

  clickButton() {
    const [prevBtn, nextBtn] = this.button.children;
    prevBtn.addEventListener("click", () => {
      this.changePrevIndex();
    });
    nextBtn.addEventListener("click", () => {
      this.changeNextIndex();
    });
    this.button.addEventListener("click", () => {
      this.goSideIndex(this.index);
      this.activeCard();
    });
  }

  clickCard() {
    this.card.forEach((eachCard, index) => {
      eachCard.addEventListener("click", () => {
        this.goCardIndex(index);
        this.activeCard();
      });
    });
  }

  activeCard() {
    this.card.forEach((eachCard, index) => {
      eachCard.classList.remove("active");
      if (this.index === index) eachCard.classList.add("active");
    });
  }

  changePrevIndex() {
    this.index -= 1;
  }

  changeNextIndex() {
    this.index += 1;
  }

  goSideIndex(currentIndex) {
    if (currentIndex < 0) this.index = this.size;
    else if (currentIndex > this.size) this.index = 0;
    this.slideItem();
  }

  goCardIndex(index) {
    this.index = index;
    this.slideItem();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const carousel = new Carousel({
    item: ".slider-list",
    button: ".slider-btn",
    card: ".card-category-card",
    random: false,
  });
});
