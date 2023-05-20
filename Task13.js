//Нам дпн массив 'clients' должников. Необходимо вывести только тех должников у которых задолженность выше 2500 рублей. Вы вести в консоль массив должников от больщего к меньшему.

const clients = [
    { 'id': 'wefvwcwec', 'user': 'Andrei', 'debt': '17728'},
    { 'id': 'geg4r45ge', 'user': 'Vova', 'debt': '2452'},
    { 'id': 'cj28cg2tv', 'user': 'Konstya', 'debt': '98763'},
    { 'id': 'vmwy34nfu', 'user': 'Nikita', 'debt': '783'},
    { 'id': '32hevirgr', 'user': 'Sveta', 'debt': '12379'},
];

let clientFilter = clients.filter(item => item.debt >= 2500);
console.log(clientFilter);