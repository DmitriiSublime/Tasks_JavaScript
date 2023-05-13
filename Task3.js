// Задание 2
// Напишите функцию getPercents(percent, number), которая возвращает {percent} процентов от {number}.
//
// Пояснение: например, getPercents(30, 200) должно вернуть 60.

let a = function getPercents(percent, number) {
    return number * percent / 100
}
console.log(a(30, 200));
