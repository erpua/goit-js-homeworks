const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// eslint-disable-next-line arrow-parens
const getList = ingredients.map(e => {
  const li = document.createElement('li');
  li.textContent = e;
  return li;
});

const list = document.querySelector('#ingredients');

list.append(...getList);
console.log('list: ', list);
