const body = document.querySelector('body');
const checkBox = document.querySelector('#theme-switch-control');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const currentTheme = localStorage.getItem('theme');

if (JSON.parse(currentTheme) === Theme.DARK) {
  checkBox.checked = true;
  body.setAttribute('class', Theme.DARK);
} else {
  body.setAttribute('class', Theme.LIGHT);
}

const changeTheme = ({ target }) => {
  if (target.checked) {
    body.setAttribute('class', Theme.DARK);
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
  } else {
    body.setAttribute('class', Theme.LIGHT);
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
  }
};

export default changeTheme;
