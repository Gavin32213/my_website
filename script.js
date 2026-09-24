const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelector('.inquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  if (button) {
    const originalText = button.textContent;
    button.textContent = 'Thanks!';
    button.disabled = true;
    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
      event.currentTarget.reset();
    }, 1800);
  }
});
