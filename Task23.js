// Вы получаете массив чисел, возвращаете сумму всех положительных значений.
//
//     Пример [1,-4, 7, 12] => 1 + 7 + 12 = 20
//
// Примечание: если суммировать нечего, то по умолчанию сумма равна 0

const array = [1, -4, 7, 12];

function positiveSum() {
    return array.filter(newArray => newArray > 0).reduce(function(previousValue, currentValue, index, array) {
        return previousValue + currentValue
    })
}
console.log(positiveSum());