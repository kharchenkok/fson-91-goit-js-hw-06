const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.getElementById('value');

let counter = 0;

const updateCounter = step => {
  counter += step;
  counterValue.textContent = counter;
};

decrementBtn.addEventListener('click', () => updateCounter(-1));
incrementBtn.addEventListener('click', () => updateCounter(1));
