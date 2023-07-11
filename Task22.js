// Вывести значение 0 и при нажатии кнопки значение 0 будет увеличиваться на +1

let button = document.querySelector('.b-1');
let zeroNumber = document.querySelector('.number');

button.addEventListener('click', () => {
    let zeroNumberHTML = zeroNumber.innerHTML;
    zeroNumberHTML++;
    zeroNumber.innerHTML = zeroNumberHTML;
})









// let  result = document.querySelector('.out-1')


let but = document.querySelector('.b-1');
// let anyNumber = 0;
but.addEventListener('click', () => {
    let result = document.querySelector('.input-1').innerHTML + 1;
    result++;
})
