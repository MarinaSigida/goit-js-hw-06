// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. 
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputRef =  document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');
console.log(spanRef)

inputRef.addEventListener('input', onInputChange);
function onInputChange(event) {
    spanRef.textContent=event.currentTarget.value;

    if (!event.currentTarget.value){
        spanRef.textContent="Anonymous";
    }
}