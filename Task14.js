// Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив, где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])

const array = [1,2,5,12,15,21];

function getNumber() {
    for(let i = 0; i <array.length; i++) {
        if (array[i] % 5 === 0) {
            console.log(array[i])
        }
    }
}
getNumber();