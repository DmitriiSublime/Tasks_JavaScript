// Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)

const array = [1, 2, 3, 4, 5];

function sumNumber() {
    let n = array.reduce((a, b) => a + b);
    console.log(n);
}

sumNumber();

function getQuantity() {
    console.log(array.length);
}

getQuantity();

let result = sumNumber() / getQuantity();
console.log(result);