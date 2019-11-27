import template from '../templates/menu-items.hbs';

function createList(data, root) {
  const html = data.map(e => template(e)).join('\n');
  root.insertAdjacentHTML('afterbegin', html);
}

export default createList;
