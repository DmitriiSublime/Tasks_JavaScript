// Есть массив m = [7, 3, 21]. Умножте каждый элемент на 2, и выведите .out. Вывод - через пробел. Вывод по нажатию кнопки .b-1.

const m = [7, 3, 21];

let numberMap = m.map(item => {
    return item * 2 + ' ';
})
console.log(numberMap);

document.querySelector('.b-1').addEventListener('click', () => {
    document.querySelector('.out-1').innerHTML = numberMap;
})





