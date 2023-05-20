// Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, если все элементы четные, если бы хотя бы один элемент не четный, то false.

const array = [2, 12, 4, 14, 6, 16, 6, 16, 28, 10];

function getNumber() {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}
console.log(getNumber());





