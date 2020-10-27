import menuTemplate from '../templates/menu-element.hbs';
import menuListData from '../menu.json';

const markup = menuTemplate(menuListData);

const menuList = document.querySelector('ul.js-menu');
menuList.insertAdjacentHTML('beforeend', markup);
