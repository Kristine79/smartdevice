
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
  if (!checkbox.value) {
    checkbox.classList.add('contact-error');
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

//скролл

var anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));
var animationTime = 600;
var framesCount = 60;


anchors.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    var coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    var scroller = setInterval(function () {
      var scrollBy = coordY / framesCount;

      if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
  });
});



// Аккордеон //

var acc = document.getElementsByClassName('toggle-section');
var i;
var activeTab = null;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    if(activeTab && this !== activeTab) {
      activeTab.classList.remove('active');
      activeTab.nextElementSibling.style.maxHeight = null;
    }
    
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
    activeTab = this;
  });
}




