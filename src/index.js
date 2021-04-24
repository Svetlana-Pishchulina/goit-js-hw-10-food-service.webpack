import './styles.css';
import menuMarkupTemplates from './templates/gallery-items.hbs';
import dishes from './menu.json';
const menuEl = document.querySelector('.js-menu');
const markup = menuMarkupTemplates(dishes);
menuEl.insertAdjacentHTML('beforeend', markup);

const checkboxEl = document.querySelector('.theme-switch__toggle');
checkboxEl.addEventListener('change', onCheckboxChange);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
if (localStorage.getItem('theme')) {
  document.body.classList.add(localStorage.getItem('theme'));
} else {
  document.body.classList.add(Theme.LIGHT);
}
if (localStorage.getItem('theme') === Theme.DARK) {
  checkboxEl.checked = true;
}

function onCheckboxChange() {
  if (checkboxEl.checked) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  }
  if (!checkboxEl.checked) {
    document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
