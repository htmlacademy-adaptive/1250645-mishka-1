const menuButton = document.querySelector(".button--menu-open");
function switchMenuButton() {
  if (menuButton.classList.contains("button--menu-open")) {
    menuButton.classList.remove("button--menu-open");
    menuButton.classList.add("button--menu-close");
  } else {
    menuButton.classList.remove("button--menu-close");
    menuButton.classList.add("button--menu-open");
  }
}
