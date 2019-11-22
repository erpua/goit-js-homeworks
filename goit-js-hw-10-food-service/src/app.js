import refreshList from './components/menu';
import data from './db/menu.json';
import refs from './utils/refs';

refreshList(data, refs.menu);
