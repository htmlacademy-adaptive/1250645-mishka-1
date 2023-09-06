const modal = document.querySelector(".modal-to-cart");
const modalSubmitButton = document.querySelector(".modal-to-cart__button");
function showModal() {
  modal.classList.remove("modal-to-cart--hidden");
}
modal.addEventListener("click", function(event) {
    if (this === event.target) {
      this.classList.add("modal-to-cart--hidden");
    }
});
modalSubmitButton.addEventListener("click", () => modal.classList.add("modal-to-cart--hidden"));

const navMenuToggle = document.querySelector(".navigation__menu-toggle");
const navMenu = document.querySelector(".navigation__menu");
navMenuToggle.addEventListener("click", function() {
  if (this.classList.contains("navigation__menu-toggle--open")) {
    this.classList.remove("navigation__menu-toggle--open");
    this.classList.add("navigation__menu-toggle--close");
    navMenu.classList.remove("navigation__menu--hidden");
  } else {
    this.classList.remove("navigation__menu-toggle--close");
    this.classList.add("navigation__menu-toggle--open");
    navMenu.classList.add("navigation__menu--hidden");
  }
});

const modalShowButtons = document.querySelectorAll(".product-card__button");
modalShowButtons.forEach(button => {
  button.addEventListener("click", showModal)
});

const modalShowButton = document.querySelector(".weekly-goods__button");
modalShowButton.addEventListener("click", showModal);
