const refs = {
  body: document.querySelector('body'),
  buttonStart: document.querySelector('button[data-action="start"]'),
  buttonStop: document.querySelector('button[data-action="stop"]'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// eslint-disable-next-line no-shadow
function getRandomColor(colors) {
  const randomColor = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.style.backgroundColor = colors[randomColor];
}

function start() {
  refs.buttonStart.setAttribute('disabled', true);
  setInterval(() => {
    getRandomColor(colors);
  }, 1000);
}

function stop() {
  console.log('click on button STOP is working');
  clearInterval(getRandomColor);
  refs.buttonStart.removeAttribute('disabled');
}

refs.buttonStart.addEventListener('click', start);
refs.buttonStop.addEventListener('click', stop);
