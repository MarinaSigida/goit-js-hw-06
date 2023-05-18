// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

 const spanRef = document.querySelector('#value');
 const btnDecrement = document.querySelector('[data-action="decrement"]');
 const btnIncrement = document.querySelector('[data-action="increment"]');

 let counterValue = 0;
 spanRef.textContent = counterValue;
 
 btnDecrement.addEventListener('click', decrease);
 btnIncrement.addEventListener('click', increase);

 function  decrease (){
    counterValue -=1;
    spanRef.textContent = counterValue;
 };

 function  increase (){
    counterValue +=1;
    spanRef.textContent = counterValue;
 };




