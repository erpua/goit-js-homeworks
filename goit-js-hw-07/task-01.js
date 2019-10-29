const chosenCategories = document.querySelector('#categories');
const lengthOfChildren = chosenCategories.children.length;
console.log('lengthOfChildren:', lengthOfChildren);

const respuesta = [...chosenCategories.children]
  .map(e => `${e.children[0].textContent} : ${e.children[1].children.length}`)
  .join('\n');

console.log(respuesta);
