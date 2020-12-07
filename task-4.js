const value = document.querySelector('#value ');
const incrementBtnRef = document.querySelector(
  'button[data-action="increment"]',
);
const decrementBtnRef = document.querySelector(
  'button[data-action="decrement"]',
);
let counterValue = 0;

const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
incrementBtnRef.addEventListener('click', increment);
decrementBtnRef.addEventListener('click', decrement);
