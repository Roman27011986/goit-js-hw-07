const inputvalidRef = document.querySelector('#validation-input');

inputvalidRef.addEventListener('blur', event => {
  if (event.target.value.length <= inputvalidRef.dataset.length) {
    inputvalidRef.classList.remove('invalid');
    inputvalidRef.classList.add('valid');
  } else if (event.target.value.length > inputvalidRef.dataset.length) {
    inputvalidRef.classList.remove('valid');
    inputvalidRef.classList.add('invalid');
  }
});
