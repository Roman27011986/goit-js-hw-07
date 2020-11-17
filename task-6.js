const inputvalidRef = document.querySelector('#validation-input');

inputvalidRef.addEventListener('input', event => {
  if (event.target.value.length <= inputvalidRef.dataset.length) {
    inputvalidRef.classList.add('invalid');
  } else if (event.target.value.length > inputvalidRef.dataset.length) {
    inputvalidRef.classList.remove('invalid');
    inputvalidRef.classList.add('valid');
  }
});
