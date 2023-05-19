
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль 
// по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const BtnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

BtnChangeColor.addEventListener('click', onChangeBodyColor);

function onChangeBodyColor (event){
  document.body.style.backgroundColor = getRandomHexColor ();
  spanColor.textContent= getRandomHexColor ();
}