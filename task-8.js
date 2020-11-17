const controlRef = document.querySelector('#controls');
const boxRef = document.querySelector('#boxes');
const qwe = document.querySelectorAll('#controls button');
console.log(qwe);
let res = 30;
const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    boxRef.insertAdjacentHTML('afterbegin', '<div>');

    boxRef.firstChild.style.height = res + 'px';
    boxRef.firstChild.style.width = res + 'px';
    boxRef.firstChild.style.backgroundColor = 'red';
    res += 10;
  }
};
controlRef.firstElementChild.addEventListener('input', () => {
  let result = controlRef.firstElementChild.value;

  createBoxes(result);
});
