var popup = document.querySelector('.form-container');
var checkboxform = document.getElementById('data');

checkboxform.addEventListener('change', e => {

    if (e.target.checked) {
        popup.classList.remove('contact-error');
    } else {

        alert('Поставьте галку, если вы согласны на обработку ваших персональных данных');
        

    }

});