const inputvalidRef = document.querySelector('#validation-input');

inputvalidRef.addEventListener('blur', event => {
  if (event.target.value.length === Number(inputvalidRef.dataset.length)) {
    inputvalidRef.classList.remove('invalid');
    inputvalidRef.classList.add('valid');
  } else {
    inputvalidRef.classList.remove('valid');
    inputvalidRef.classList.add('invalid');
  }
});
