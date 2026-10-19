(() => {
  const root = document.documentElement;
  const key = 'alok-portfolio-theme';
  const modes = ['auto', 'light', 'dark'];
  const getMode = () => { try { return localStorage.getItem(key) || 'auto'; } catch (_) { return 'auto'; } };
  let mode = getMode();
  function applyTheme() {
    const hour = new Date().getHours();
    const theme = mode === 'auto' ? ((hour >= 7 && hour < 19) ? 'light' : 'dark') : mode;
    root.dataset.theme = theme;
    const label = document.getElementById('themeLabel');
    const button = document.getElementById('themeToggle');
    if (label) label.textContent = 'Theme: ' + mode[0].toUpperCase() + mode.slice(1);
    if (button) button.setAttribute('aria-label', 'Current theme ' + mode + '. Click to change theme.');
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'light' ? '#f7f5ef' : '#111512';
  }
  applyTheme();
  const button = document.getElementById('themeToggle');
  if (button) button.addEventListener('click', () => {
    mode = modes[(modes.indexOf(mode) + 1) % modes.length];
    try { localStorage.setItem(key, mode); } catch (_) {}
    applyTheme();
  });
  // Re-evaluate automatic mode if the page remains open across day/night.
  window.setInterval(() => { if (mode === 'auto') applyTheme(); }, 60000);
})();
