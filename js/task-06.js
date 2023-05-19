// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
// якщо неправильна кількість - червоним.




const inputRef =  document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputVerification);

function onInputVerification (event){
    if (event.currentTarget.value.length === +inputRef.getAttribute('data-length')){
        inputRef.classList.add ('valid');
        inputRef.classList.remove ('invalid');
    }
    else {
        inputRef.classList.add ('invalid');
        inputRef.classList.remove ('valid');
    }
}

