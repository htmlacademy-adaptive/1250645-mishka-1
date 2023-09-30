function showModal() {
  modal.classList.remove("page-body__modal--hidden");
  addListenerToPutToCart(() => modal.classList.add("page-body__modal--hidden"));
}

const modal = document.querySelector(".page-body__modal");
modal?.addEventListener("click", function(event) {
  if (this === event.target) {
    this.classList.add("page-body__modal--hidden");
  }
});
