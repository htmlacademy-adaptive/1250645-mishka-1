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
