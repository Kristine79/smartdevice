var contactlink = document.querySelector('.popup-writeus');
var popup = document.querySelector('.contact-form');
var form = popup.querySelector('.popup-contact');
var close = popup.querySelector('.popup-close;');
var inputName = popup.querySelector('.name');
var textarea = popup.querySelector('.message');

contactlink.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup-show');
});
close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup-show');
  popup.classList.remove('popup-error');
  popup.offsetWidth = popup.offsetWidth;
});
form.addEventListener('submit', function (evt) {
  if (!inputName.value || !textarea.value) {
    evt.preventDefault();
    popup.classList.add('popup-error');
  }
  if (!inputName.value ) {
    inputName.classList.add('error');
  }
  if (!textarea.value ) {
    textarea.classList.add('error');
  }
});
inputName.addEventListener('input', function() {
  if (!inputName.value ) {
    inputName.classList.add('error');
  } else {
    inputName.classList.remove('error');
  }
});
textarea.addEventListener('input', function() {
  if (!textarea.value ) {
    textarea.classList.add('error');
  } else {
    textarea.classList.remove('error');
  }
});
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && popup.classList.contains('popup-show')) {
    evt.preventDefault();
    popup.classList.remove('popup-show');
    popup.classList.remove('popup-error');
  }
});
