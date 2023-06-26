// click counter

let counterWidget = document.querySelector('.js-counter');
counterWidget.addEventListener('click', () => {
   let counterValueEl = document.querySelector('.js-counter-value');
   let currentValue = counterValueEl.innerHTML;
   currentValue++;
   counterValueEl.innerHTML = currentValue;
});