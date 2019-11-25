'use strict';
var checkboxform = document.getElementById('data');
var checkboxjs = document.querySelector('.checkboxjs');

function checkPolicy() {
  var checkbox = document.getElementById('data');
  if (checkbox.checked != true) {

    checkboxjs.classList.add('pulse');
    alert('Поставьте галку, если вы согласны на обработку ваших персональных данных');
  }

}
