const modal = document.querySelector(".modal-to-cart");
const modalSubmitButton = document.querySelector(".modal-to-cart__button");
function showModal() {
  modal.classList.remove("modal-to-cart--hidden");
}
modal?.addEventListener("click", function(event) {
    if (this === event.target) {
      this.classList.add("modal-to-cart--hidden");
    }
});
modalSubmitButton?.addEventListener("click", () => modal.classList.add("modal-to-cart--hidden"));
