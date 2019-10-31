/* const refs = {
  buttonIncrement: document.querySelector('button[data-action="increment"]'),
  buttonDecrement: document.querySelector('button[data-action="decrement"]'),
  spanOfCounter: document.querySelector('#value'),
};
console.log('buttons: ', refs.buttonIncrement);
console.log('buttons: ', refs.buttonDecrement);
console.log('buttons: ', refs.spanOfCounter);
const state = {
  counterValue: 0,
  increment() {
    state.counterValue += 1;
    refs.spanOfCounter.textContent = state.counterValue;
  },
  decrement() {
    state.counterValue -= 1;
    refs.spanOfCounter.textContent = state.counterValue;
  },
};
function handleClicks({ target }) {
  state[target.dataset.action]();
}
refs.spanOfCounter.textContent = state.counterValue;
refs.buttonIncrement.addEventListener('click', handleClicks);
refs.buttonDecrement.addEventListener('click', handleClicks); */

const refs = {
  blockWithButtons: document.querySelector('#counter'),
  spanOfCounter: document.querySelector('#value'),
};
const state = {
  counterValue: 0,
  increment() {
    state.counterValue += 1;
    refs.spanOfCounter.textContent = state.counterValue;
  },
  decrement() {
    state.counterValue -= 1;
    refs.spanOfCounter.textContent = state.counterValue;
  },
};
/* const handleClicks = e => state[e.target.dataset.action](); */
const handleClicks = ({ target }) => state[target.dataset.action]();
refs.spanOfCounter.textContent = state.counterValue;
refs.blockWithButtons.addEventListener('click', handleClicks);
