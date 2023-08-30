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
