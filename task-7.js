const inputfontsizeRef = document.querySelector('#font-size-control');
const sizetextRef = document.querySelector('#text');

inputfontsizeRef.addEventListener('input', () => {
  sizetextRef.style.fontSize = inputfontsizeRef.value + 'px';
});
