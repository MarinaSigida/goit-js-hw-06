// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
//  Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const numberEl = document.querySelector('[type=number]');
const boxesEl = document.querySelector('#boxes');
const boxesTempEl = [];

btnCreate.addEventListener ('click', createBoxes);
btnDestroy.addEventListener ('click', destroyBoxes);


function createBoxes() {
  for (let i = 0; i < numberEl.value; i += 1) {
      const sizeFn = `${30 + 10 * i}px`;

      const boxEl = document.createElement("div");
      boxEl.style.display = "inline-block";
      boxEl.style.width = sizeFn;
      boxEl.style.height = sizeFn;
      boxEl.style.margin = "20px";
      boxEl.style.backgroundColor = getRandomHexColor();
      boxesTempEl.push(boxEl);

      boxesEl.append(...boxesTempEl);
  }
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


