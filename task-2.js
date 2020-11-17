const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
let ul = document.querySelector('#ingredients');
ingredients.forEach(arr => {
  let li = document.createElement('li');

  li.innerHTML = arr;
  ul.append(li);
});
