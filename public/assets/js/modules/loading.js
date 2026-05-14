export function initLoading() {
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loading')?.classList.add('hidden');
    }, 2200);
  });
}
