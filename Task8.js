// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// function randomNumber(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// console.log(randomNumber(1, 8));

// function anyDay(n) {
//     const weekArray = {
//          1: 'Monday',
//          2: 'Thursday',
//          3: 'Wednesday',
//          4: 'Thursday',
//          5: 'Friday',
//          6: 'Saturday',
//          7: 'Sunday'
//     }
//     return weekArray[n] ? weekArray [n] : 'wrong number'
// }
// anyDay(5);

function getDay(n) {
    // const data = [
    //     1: 'Понедельник',
    //     2: 'Вторник',
    //     3: 'Среда',
    //     4: 'Четверг',
    //     5: 'Пятница',
    //     6: 'Суббота',
    //     7: 'Воскресенье'
    // ]

    const data = ['monday', 'thuesday']
    return data[n] ? data[n] : 'Указано неправильное значение';
}
getDay(0);