import content from '../menu.json';
import makeMarkup from '../templates/markup.hbs';


// Markup

const menu = document.querySelector(".js-menu");
menu.insertAdjacentHTML('afterbegin', makeMarkup(content));

// Theme switcher

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeToggle = document.querySelector("#theme-switch-toggle");
const body = document.querySelector('body');

if (localStorage.getItem('theme') === Theme.DARK) {
    body.classList.add(Theme.DARK);
    themeToggle.checked = true;
}
else {
    body.classList.add(Theme.LIGHT);
    themeToggle.checked = false;  
}

themeToggle.addEventListener('input', onToggleChecked);
function onToggleChecked(e) {

    if (e.target.checked) {
        localStorage.setItem('theme', Theme.DARK);
        body.classList.remove(...body.classList);
        body.classList.add(localStorage.getItem('theme'));
    }

    else {
        localStorage.setItem('theme', Theme.LIGHT);
        body.classList.remove(...body.classList);
         body.classList.add(localStorage.getItem('theme'));
    }
}