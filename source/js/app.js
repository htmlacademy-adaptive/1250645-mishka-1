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

const modalShowButton = document.querySelector(".weekly-goods__button");
const modal = document.querySelector(".weekly-goods__modal");
const modalFormButton = document.querySelector(".weekly-goods__modal-button");
modalShowButton.addEventListener("click", () => modal.classList.remove("weekly-goods__modal--hidden"));
modal.addEventListener("click", function(event) {
    if (this === event.target) {
        modal.classList.add("weekly-goods__modal--hidden");
    }
});
modalFormButton.addEventListener("click", () => modal.classList.add("weekly-goods__modal--hidden"));
