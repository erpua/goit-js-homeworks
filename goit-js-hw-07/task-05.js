const refs = {
  input: document.querySelector('input[type="text"]'),
  name: document.getElementById('name-output'),
};

function handleInput(e) {
  e.preventDefault();
  refs.name.textContent = e.target.value;
  if (refs.input.value.length == 0) refs.name.textContent = 'незнакомец';
}

refs.input.addEventListener('input', handleInput);
