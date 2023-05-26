// Написать функцию, которая принимает массив сотрудников, каждый сотрудник имеет имя и возраст ([{name: 'Иван', age: 23},...]) и возвращает массим, где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23".

const persons = [
    {name: 'Иван', age: 23},
    {name: 'Виктор', age: 25},
    {name: 'Светлана', age: 53},
    {name: 'Игорь', age: 47},
    {name: 'Анастасия', age: 31},
    {name: 'Глеб', age: 45},
    {name: 'Мерина', age: 33}
];

for (let i = 0; i < persons.length; i++) {
    console.log(persons[i]);
    let getName = persons.map.age
    console.log(getName);
}