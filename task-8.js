const controlRef = document.querySelector('#controls');
const boxRef = document.querySelector('#boxes');
const btn = document.querySelectorAll('#controls button');
let res = 30;

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    boxRef.insertAdjacentHTML('afterbegin', '<div class=container>');
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = '#' + r.toString(16) + g.toString(16) + b.toString(16);

    boxRef.firstChild.style.height = res + 'px';
    boxRef.firstChild.style.width = res + 'px';
    boxRef.firstChild.style.backgroundColor = c;
    res += 10;
    btn[1].addEventListener('click', () => {
      boxRef.firstChild.remove();
    });
  }
};
controlRef.firstElementChild.addEventListener('input', () => {
  let result = controlRef.firstElementChild.value;
  btn[0].addEventListener('click', () => {
    createBoxes(result);
  });
});
