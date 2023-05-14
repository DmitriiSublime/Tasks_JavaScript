// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(randomNumber(1, 8))