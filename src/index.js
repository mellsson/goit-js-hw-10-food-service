import menuTemplate from './template/menu.hbs';
import menu from './menu.json';
import { Theme } from './js/theme';
import './scss/styles.scss';

const menuRef = document.querySelector('.js-menu');
const body =document.querySelector('body')

const markupMenu = menuTemplate(menu);

menuRef.insertAdjacentHTML('beforeend', markupMenu);

const themeSwitch = document.querySelector('#theme-switch-toggle');
const test = JSON.parse(localStorage.getItem('theme'));

actualTheme();

themeSwitch.addEventListener('change', switchToggle);



function switchToggle() {
    if (JSON.parse(localStorage.getItem('theme')) === Theme.LIGHT) {
         body.classList.remove('light-theme')
        body.classList.add('dark-theme')
        localStorage.setItem('theme', JSON.stringify(Theme.DARK));
        return;
    }

    if (JSON.parse(localStorage.getItem('theme')) === Theme.DARK) {
        console.log("hello")
        body.classList.remove('dark-theme')
        body.classList.add('light-theme')
        localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
        return;
    }
}

function actualTheme() {
    if (localStorage.getItem('theme') === null) {
    body.classList.add('light-theme');
        localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
        return;
    }

    if (JSON.parse(localStorage.getItem('theme')) === Theme.LIGHT) {
        body.classList.add('light-theme');
        return;
}

if (JSON.parse(localStorage.getItem('theme')) === Theme.DARK ){
    body.classList.add('dark-theme');
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
    themeSwitch.checked = true;
    return;
}
}