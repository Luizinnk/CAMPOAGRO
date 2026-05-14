export function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;

  for (let i = 0; i < 20; i += 1) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${8 + Math.random() * 12}s`;
    particle.style.animationDelay = `${Math.random() * 10}s`;
    particle.style.setProperty('--drift', `${Math.random() * 100 - 50}px`);
    container.appendChild(particle);
  }
}
