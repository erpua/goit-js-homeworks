/* eslint-disable no-shadow */

// eslint-disable-next-line spaced-comment
//const getList = ingredients => ingredients.map(e => `<li>${e}</li>`).join('\n');

const list = document.querySelector('#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// eslint-disable-next-line arrow-parens
const getList = [...ingredients].map(e => {
  console.log(e);
  const li = document.createElement('li');
  li.textContent = e;
  return li;
});
console.log('getList(ingredients):\n', getList);
list.append(getList);
console.log('list: ', list);
