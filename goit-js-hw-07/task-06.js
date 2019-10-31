const input = document.querySelector('#validation-input');

const handleInputBlur = e => {
  e.preventDefault();
  if (input.value.length == input.dataset.length) input.classList.add('valid');
  else input.classList.add('invalid');
};

input.onblur = handleInputBlur;
