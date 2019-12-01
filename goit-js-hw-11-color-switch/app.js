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

// eslint-disable-next-line arrow-body-style
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// eslint-disable-next-line no-shadow
function getRandomColor(colors) {
  const randomColor = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.style.backgroundColor = colors[randomColor];
}

const changeBodysColor = {
  start() {
    refs.buttonStart.setAttribute('disabled', true);
    this.changeColor = setInterval(() => {
      getRandomColor(colors);
    }, 1000);
  },
  stop() {
    refs.buttonStart.removeAttribute('disabled');
    clearInterval(this.changeColor);
  },
};

refs.buttonStart.addEventListener(
  'click',
  changeBodysColor.start.bind(changeBodysColor),
);
refs.buttonStop.addEventListener(
  'click',
  changeBodysColor.stop.bind(changeBodysColor),
);
