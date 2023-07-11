
// Вывести значение 0 и при нажатии кнопки значение 0 будет увеличиваться на +1

let button = document.querySelector('.b-1');
let zeroNumber = document.querySelector('.number');

button.addEventListener('click', () => {
    let zeroNumberHTML = zeroNumber.innerHTML;
    zeroNumberHTML++;
    zeroNumber.innerHTML = zeroNumberHTML;
})








