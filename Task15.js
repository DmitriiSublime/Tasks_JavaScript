// Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)

const array = [1, 2, 3, 4, 5];

// let sum = 0;
// function getNumber() {
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//         return sum
//     }
// }
//
// getNumber();

function sumNumber() {
    let n = array.reduce((a, b) => a + b);
    console.log(n([1, 2, 3, 4, 5]));
}

sumNumber();





// function getQuantity() {
//     console.log(array.length);
//     // return array.length;
// }
//
// getQuantity();
//
// let result = sumNumber() / getQuantity();
// console.log(result);