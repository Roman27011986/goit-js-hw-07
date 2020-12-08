const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ul = document.querySelector('#ingredients');
ingredients.forEach(arr => {
  const li = document.createElement('li');
  li.textContent = arr;
  ul.appendChild(li);
});
