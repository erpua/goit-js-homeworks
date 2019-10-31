const refs = {
  input: document.querySelector('input[type="text"]'),
  name: document.getElementById('name-output'),
};

function handleInput(e) {
  e.preventDefault();
  refs.name.textContent = e.target.value;
}

refs.input.addEventListener('input', handleInput);
