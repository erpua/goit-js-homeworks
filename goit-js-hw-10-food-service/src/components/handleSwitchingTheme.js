import refs from '../utils/refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const currentTheme = localStorage.getItem('theme') || Theme.LIGHT;
refs.body.classList.add(currentTheme);
if (localStorage.getItem('theme') === Theme.DARK) refs.switch.checked = true;

function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}

function handleSwitchingTheme() {
  if (refs.body.classList.contains(Theme.LIGHT)) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
    saveTheme(Theme.DARK);
  } else {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
    saveTheme(Theme.LIGHT);
  }
}

export default handleSwitchingTheme;
