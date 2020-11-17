const inputfontsizeRef = document.querySelector('#font-size-control');
const sizetextRef = document.querySelector('#text');

console.log(inputfontsizeRef.dataset.range);
inputfontsizeRef.addEventListener('input', ev => {
  sizetextRef.style.fontSize = `${ev.target}`;
  console.log(inputfontsizeRef.value);
});
// ev.target.value.length =
