/* begin Up-Down button  */

"use strict";

var upDownBtn = document.querySelector(".promo__scroll");
var check;
var advantagesSection = document.querySelector('.advantages');

function trackScroll() {
  var scrolled = window.pageYOffset;
  var coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    upDownBtn.classList.add("promo__scroll-show");

    check = false;
  }
  if (scrolled === 0) {
    check = true;
  }
}

function scrollTo(elem) {
  const offsetTop = elem.getBoundingClientRect().top;
  
  window.scrollBy(0, offsetTop);
  
}

function backToTop() {
  upDownBtn.classList.add("promo__scroll-disabled");
  if (!check) {
    (function goTop() {
      if (window.pageYOffset !== 0) {
        window.scrollBy(0, -80);
        setTimeout(goTop, 0);
      } else {
        upDownBtn.classList.remove("promo__scroll-disabled");
      }
    })();
    return;
  } else if (check) {
    
    scrollTo(advantagesSection);
    
    var match = Math.ceil(
      window.pageYOffset + document.documentElement.clientHeight
    );

    upDownBtn.classList.remove("promo__scroll-disabled");
//     (function goBottom() {
//       var match = Math.ceil(
//         window.pageYOffset + document.documentElement.clientHeight
//       );

//       if (match != document.documentElement.scrollHeight) {
//         console.log('here', match);
//         window.scrollBy(0, 80);
//         setTimeout(goBottom, 0);
//       } else {
//         upDownBtn.classList.remove("promo__scroll-disabled");
//       }
//     })();
    return;
  }
}

window.addEventListener("scroll", trackScroll);
upDownBtn.addEventListener("click", backToTop);

/* end Up-Down button  */
