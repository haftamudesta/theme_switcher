const themes = [
  { name: 'light', message: 'Bright and clean - perfect for daytime use!' },
  { name: 'dark', message: 'Dark mode activated - easier on the eyes at night.' },
  { name: 'ocean', message: 'Feel the calm of the ocean with this refreshing blue theme.' },
  { name: 'forest', message: 'Embrace nature with this peaceful green theme.' }
];

const themeButton = document.getElementById('theme-switcher-button');
const themeDropdown = document.getElementById('theme-dropdown');
const messageElement = document.querySelector('[aria-live="polite"]');
const body = document.body;
themeButton.addEventListener('click', () => {
  const isExpanded = themeButton.getAttribute('aria-expanded') === 'true';

  if (isExpanded) {

    themeDropdown.setAttribute('hidden', '');
    themeButton.setAttribute('aria-expanded', 'false');
  } else {
 
    themeDropdown.removeAttribute('hidden');
    themeButton.setAttribute('aria-expanded', 'true');
  }
});

themeDropdown.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const selectedTheme = e.target.id.replace('theme-', '');
themeDropdown.setAttribute('hidden', '');
    themeButton.setAttribute('aria-expanded', 'false');


    themes.forEach(theme => {
      body.classList.remove(`theme-${theme.name}`);
    });

    body.classList.add(`theme-${selectedTheme}`);

    const selectedThemeData = themes.find(theme => theme.name === selectedTheme);
    if (selectedThemeData) {
      messageElement.textContent = selectedThemeData.message;
    }
}
});
document.addEventListener('click', (e) => {
  if (!themeButton.contains(e.target) && !themeDropdown.contains(e.target)) {
    themeDropdown.setAttribute('hidden', '');
    themeButton.setAttribute('aria-expanded', 'false');
  }
});