export function initProgramTabs() {
  window.showTab = (id, button) => {
    document.querySelectorAll('.prog-content').forEach((content) => {
      content.classList.remove('active');
    });

    document.querySelectorAll('.prog-tab').forEach((tab) => {
      tab.classList.remove('active');
    });

    document.getElementById(id)?.classList.add('active');
    button?.classList.add('active');
  };
}
