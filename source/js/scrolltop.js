/* begin Up-Down button  */

'use strict';

var upDownBtn = document.querySelector('.promo__scroll');
var check;

function trackScroll() {
var scrolled = window.pageYOffset;
var coords = document.documentElement.clientHeight;

if (scrolled > coords) {
     upDownBtn.classList.add('promo__scroll-show');
    
    check = false;
  }
    if (scrolled === 0) {
  

      check = true;
    }
  }

  function backToTop() {
    upDownBtn.classList.add('promo__scroll-disabled');
    if (!check) {
      (function goTop() {

        if (window.pageYOffset !== 0) {
          window.scrollBy(0, -80);
          setTimeout(goTop, 0);
        } else {
          upDownBtn.classList.remove('promo__scroll-disabled');
        }

      })();
      return;

    } else if (check) {
      (function goBottom() {
        var match = Math.ceil(window.pageYOffset + document.documentElement.clientHeight);

        if (match != document.documentElement.scrollHeight) {
          window.scrollBy(0, 80);
          setTimeout(goBottom, 0);
        } else {
          upDownBtn.classList.remove('promo__scroll-disabled');
        }

      })();
      return;
    }

  }

  window.addEventListener('scroll', trackScroll);
upDownBtn.addEventListener('click', backToTop);

/* end Up-Down button  */
