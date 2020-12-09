const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ul = document.querySelector('#ingredients');

const createCard = card => {
  const li = document.createElement('li');
  li.textContent = card;
  return li;
};
const ingredientCard = ingredients.map(product => createCard(product));
ul.append(...ingredientCard);
