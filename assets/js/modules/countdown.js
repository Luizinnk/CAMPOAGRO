const ids = {
  days: 'cd-days',
  hours: 'cd-hours',
  mins: 'cd-mins',
  secs: 'cd-secs',
};

export function initCountdown(targetDate) {
  const target = new Date(targetDate);

  function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  function updateCountdown() {
    const diff = target - new Date();

    if (diff <= 0) {
      setText(ids.days, '0');
      setText(ids.hours, '00');
      setText(ids.mins, '00');
      setText(ids.secs, '00');
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    setText(ids.days, String(days));
    setText(ids.hours, String(hours).padStart(2, '0'));
    setText(ids.mins, String(mins).padStart(2, '0'));
    setText(ids.secs, String(secs).padStart(2, '0'));
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}
