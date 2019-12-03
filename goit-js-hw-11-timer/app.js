/* eslint-disable no-undef */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-unused-vars */
const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  setTimer() {
    setInterval(() => {
      const catholicChristmas = this.targetDate - Date.now();
      // eslint-disable-next-line no-use-before-define
      updateTimer(catholicChristmas);
    }, 0);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('DEC 24, 2019'),
});

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateTimer(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}

timer.setTimer();
