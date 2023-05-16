// Написать функцию, которая принимает строку (в этом тексте 3-5 предложений), верните каждое первое слово в каждом предложении, через запятую.

let firstProposal = 'Вчера было холодно.';
let secProposal = 'Программировать очень интересно.';
let thirdProposal = 'Я люблю вкусно покушать.';

function firstWord(a, b, c) {
   let massiveOne = a.split(' ');
   let massiveTwo = b.split(' ');
   let massiveThree = c.split(' ');

   let array = [{a}, {b}, {c}];
   console.log(array);
   console.log(massiveOne[0], massiveTwo[0], massiveThree[0]);
}
firstWord(firstProposal, secProposal, thirdProposal);




