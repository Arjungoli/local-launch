const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
const themePicker = document.getElementById('theme-picker');
const themeSwatches = themePicker.querySelectorAll('.theme-swatch');
const html = document.documentElement;

const validThemes = ['dark', 'light', 'blue'];
const storedTheme = localStorage.getItem('theme');
const savedTheme = validThemes.includes(storedTheme) ? storedTheme : 'dark';

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeSwatches.forEach(swatch => {
    swatch.setAttribute('aria-pressed', swatch.dataset.themeValue === theme);
  });
}

applyTheme(savedTheme);

themeSwatches.forEach(swatch => {
  swatch.addEventListener('click', () => applyTheme(swatch.dataset.themeValue));
});

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
