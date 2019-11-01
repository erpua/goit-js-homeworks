const input = document.querySelector('#validation-input');

const handleInputBlur = e => {
  e.preventDefault();
  if (
    input.dataset.length < input.value.length ||
    input.dataset.length > input.value.length
  ) {
    input.classList.remove('valid');
    input.classList.add('invalid');
  } else {
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
};

input.onblur = handleInputBlur;
