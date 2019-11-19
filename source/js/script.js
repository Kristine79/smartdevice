'use strict';

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


function disableForm() {
  popupForm.classList.add(hideClass);
  closeFormButton.removeEventListener('click', desableForm);
  document.removeEventListener('keydown', onEscPress);
}

function onEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    desableForm();
  }
}

function hideForm() {
  popupForm.addEventListener('click', function (evt) {
    if (evt.target === closeFormButton || evt.target === popupForm) {
      disableForm();
    }
  });
  document.addEventListener('keydown', onEscPress);
}

function enableForm() {
  if (popupForm.classList.contains(hideClass)) {
    popupForm.classList.remove(hideClass);
  }

  hideForm();
}


modalbutton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupForm.classList.add('contact-show');
});
closeFormButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupForm.classList.remove('contact-show');
  popupForm.classList.remove('contact-error');
  popupForm.offsetWidth = popupForm.offsetWidth;
});

form.addEventListener('submit', function (evt) {
  if (!inputName.value || !phone.value || !textarea.value) {
    evt.preventDefault();
    popupForm.classList.add('contact-error');
  }
  if (!inputName.value ) {
    inputName.classList.add('error');
  }
  if (!phone.value ) {
    phone.classList.add('error');
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
phone.addEventListener('input', function() {
  if (!phone.value ) {
    phone.classList.add('error');
  } else {
    phone.classList.remove('error');
  }
});
textarea.addEventListener('input', function() {
  if (!textarea.value ) {
    textarea.classList.add('error');
  } else {
    textarea.classList.remove('error');
  }
});

modalbutton.addEventListener('click', enableForm);

// Аккордеон //

var acc = document.getElementsByClassName('toggle-section__toggle');
var i;
var openItem = document.getElementsByClassName('toggle-section__text')[1];

function slideToggle(elem) {
  if (elem.style.maxHeight) {
    elem.style.maxHeight = null;
  } else {
    elem.style.maxHeight = elem.scrollHeight + 'px';
  }
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    slideToggle(panel);
  });
}

function openAcc() {
  acc[1].classList.add('active');
  slideToggle(openItem); 
}

openAcc();
