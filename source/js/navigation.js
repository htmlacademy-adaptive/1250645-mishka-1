const nav = document.querySelector(".navigation");
const navMenuToggle = document.querySelector(".navigation__menu-toggle");
navMenuToggle.addEventListener("click", function() {
  if (nav.classList.contains("navigation--collapsed")) {
    nav.classList.remove("navigation--collapsed");
  } else {
    nav.classList.add("navigation--collapsed");
  }
  switchMenuButton();
});
