import createList from './components/createList';
import handleSwitchingTheme from './components/handleSwitchingTheme';
import data from './dataBase/menu.json';
import refs from './utils/refs';

createList(data, refs.menu);

refs.checkBox.addEventListener('change', handleSwitchingTheme);
