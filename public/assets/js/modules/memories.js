export function initMemories() {
  const modal = document.querySelector('[data-media-modal]');
  const content = document.querySelector('[data-media-content]');
  const title = document.querySelector('[data-media-title]');
  const category = document.querySelector('[data-media-category]');
  const close = document.querySelector('[data-media-close]');
  const track = document.querySelector('[data-memoria-track]');
  const prev = document.querySelector('.memoria-prev');
  const next = document.querySelector('.memoria-next');

  if (!modal || !content) return;

  function openMedia(trigger) {
    const src = trigger.dataset.src;
    const type = trigger.dataset.mediaType || 'image';
    if (!src) return;

    content.innerHTML = '';
    const media = document.createElement(type === 'video' ? 'video' : 'img');
    media.src = src;
    if (type === 'video') {
      media.controls = true;
      media.autoplay = true;
    } else {
      media.alt = trigger.dataset.title || 'Memória do CampoAgro';
    }

    content.appendChild(media);
    title.textContent = trigger.dataset.title || '';
    category.textContent = trigger.dataset.category || '';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMedia() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    content.innerHTML = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-media-type]').forEach((trigger) => {
    trigger.addEventListener('click', () => openMedia(trigger));
  });

  close?.addEventListener('click', closeMedia);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeMedia();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeMedia();
  });

  prev?.addEventListener('click', () => {
    track?.scrollBy({ left: -360, behavior: 'smooth' });
  });

  next?.addEventListener('click', () => {
    track?.scrollBy({ left: 360, behavior: 'smooth' });
  });
}
