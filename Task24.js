// Ваша задача состоит в том, чтобы создать функцию, которая выполняет четыре основные математические операции.//
// Функция должна принимать три аргумента - operation(строка), value1(число), value2(число).
// Функция должна возвращать результат в виде чисел после применения выбранной операции.

// ('+', 4, 7) --> 11

const a = ['+', 4, 7];


function basicOp(operation, value1, value2) {
    return a.filter(newArray => newArray >= 0).reduce(function(previousValue, currentValue, index, array) {
        return previousValue + currentValue
    })
}
console.log(basicOp());


