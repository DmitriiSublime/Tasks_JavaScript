//Дан массив, из масива снача вывести нечетные числа

let m = [1, 62, 34, 7, 16, 77, 89, 32];

function getNumber() {
    for (let i = 0; i < m.length; i++) {
        if (m[i] % 2 === 1) {
            console.log(m[i]);
        }
    }
}
getNumber()

console.log(m);

let b = document.querySelector('.out').innerHTML
document.querySelector('.b-1').addEventListener('click', getNumber).innerHTML = b;