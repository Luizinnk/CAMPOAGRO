export function initNavigation() {
  const nav = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  window.toggleMenu = () => {
    nav?.classList.toggle('menu-open');
  };

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => nav?.classList.remove('menu-open'));
  });
}
