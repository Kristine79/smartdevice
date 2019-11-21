var ESC_KEYCODE = 27;
var hideClass = 'visually-hidden';

var body = document.querySelector('body');
var popupForm = document.querySelector('.popup');
var form = popupForm.querySelector('.popup-form');
var closeFormButton = popupForm.querySelector('.popup-contact__close');
var modalbutton = document.querySelector('.header__button');
var inputName = popupForm.querySelector('.name');
var textarea = popupForm.querySelector('.message');
var phone = popupForm.querySelector('.phone');
var nameFocus = popupForm.querySelector('input[name=name]');

var disableScroll = 'overflow: hidden;';
var enableScroll = 'overflow: auto;';

function onClosePopup(evt) {
  if (evt.target === popupForm || evt.target === closeFormButton) {
    closePopup();

    document.removeEventListener('keydown', onClosePopup);
  }
}

function closePopup() {
  popupForm.classList.add(hideClass);
  body.removeAttribute('style');
}

function onKeyPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
    document.removeEventListener('keydown', onKeyPress);
  }
}

function onOpenPopup() {
  popupForm.classList.remove(hideClass);

  nameFocus.focus();
  body.style = disableScroll;
  document.addEventListener('keydown', onKeyPress);
  popupForm.addEventListener('click', onClosePopup);
}

modalbutton.addEventListener('click', onOpenPopup);

form.addEventListener('submit', function(evt) {
  if (!inputName.value || !phone.value || !textarea.value) {
    evt.preventDefault();
    popupForm.classList.add('contact-error');
  }
  if (!inputName.value) {
    inputName.classList.add('error');
  }
  if (!phone.value) {
    phone.classList.add('error');
  }
  if (!textarea.value) {
    textarea.classList.add('error');
  }
});
inputName.addEventListener('input', function() {
  if (!inputName.value) {
    inputName.classList.add('error');
  } else {
    inputName.classList.remove('error');
  }
});
phone.addEventListener('input', function() {
  if (!phone.value) {
    phone.classList.add('error');
  } else {
    phone.classList.remove('error');
  }
});

textarea.addEventListener('input', function() {
  if (!textarea.value) {
    textarea.classList.add('error');
  } else {
    textarea.classList.remove('error');
  }
});
