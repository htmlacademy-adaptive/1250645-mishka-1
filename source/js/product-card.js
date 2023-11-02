const modalShowButtons = document.querySelectorAll('.product-card__button');
modalShowButtons.forEach(button => {
  button.addEventListener('click', showModal)
});
