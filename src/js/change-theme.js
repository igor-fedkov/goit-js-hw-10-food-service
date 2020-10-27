import storage from './storage';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const currentTheme = storage.load('typeTheme');
const bodyEl = document.querySelector('body');
const themeSwitchToggleEl = document.querySelector('#theme-switch-toggle');

if (currentTheme === Theme.DARK) {
  bodyEl.classList.add(Theme.DARK);
  themeSwitchToggleEl.checked = true;
}
else {
  bodyEl.classList.add(Theme.LIGHT);
  console.log(themeSwitchToggleEl.checked);
}

themeSwitchToggleEl.addEventListener('change', onSwitchToggle);

function onSwitchToggle(event) {
  if (themeSwitchToggleEl.checked) {
    bodyEl.classList.remove(Theme.LIGHT);
    bodyEl.classList.add(Theme.DARK);
    storage.save('typeTheme', Theme.DARK);
  }
  else {
    bodyEl.classList.remove(Theme.DARK);
    bodyEl.classList.add(Theme.LIGHT);
    storage.save('typeTheme', Theme.LIGHT);
  }
}