'use strict';

var checkboxpop = document.getElementById('pop-data');

checkboxpop.addEventListener('change', e => {

    if(e.target.checked){
        popupForm.classList.remove('contact-error');
    } else {

    alert ('Поставьте галку, если вы согласны');

    popupForm.classList.add('contact-error');
    
    }

});

var checkboxform = document.getElementById('data');

checkboxform.addEventListener('change', e => {

    if(e.target.checked){
        popupForm.classList.remove('contact-error');
    } else {

    alert ('Поставьте галку, если вы согласны');  
    
    }

});