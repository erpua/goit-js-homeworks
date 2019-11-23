import refreshList from './components/menu';
import changeTheme from './components/theme';
import data from './db/menu.json';
import refs from './utils/refs';

const checkBox = document.querySelector('#theme-switch-control');

refreshList(data, refs.menu);

checkBox.addEventListener('change', changeTheme);
