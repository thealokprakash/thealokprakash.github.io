(function () {
  'use strict';

  var root = document.documentElement;
  var mqDark = window.matchMedia('(prefers-color-scheme: dark)');

  /* ---------- Theme: Dark (default), Light, Auto (follows the system) ---------- */
  var modes = ['dark', 'light', 'auto'];
  var names = { dark: 'Dark', light: 'Light', auto: 'Auto' };
  var btn = document.getElementById('theme-btn');
  var label = document.getElementById('theme-label');
  var meta = document.querySelector('meta[name="theme-color"]');

  function currentMode() {
    var m = root.getAttribute('data-mode');
    return modes.indexOf(m) === -1 ? 'dark' : m;
  }

  function apply(mode, persist) {
    var dark = mode === 'dark' || (mode === 'auto' && mqDark.matches);
    root.setAttribute('data-mode', mode);
    root.setAttribute('data-theme', dark ? 'dark' : 'light');
    if (label) label.textContent = names[mode];
    if (btn) btn.setAttribute('aria-label', 'Colour theme: ' + names[mode].toLowerCase() + '. Select to change.');
    if (meta) meta.setAttribute('content', dark ? '#080d1b' : '#f5f7fc');
    if (persist) { try { localStorage.setItem('theme-mode', mode); } catch (e) {} }
  }

  apply(currentMode(), false);

  if (btn) {
    btn.addEventListener('click', function () {
      apply(modes[(modes.indexOf(currentMode()) + 1) % modes.length], true);
    });
  }

  function onSystem() { if (currentMode() === 'auto') apply('auto', false); }
  if (mqDark.addEventListener) mqDark.addEventListener('change', onSystem);
  else if (mqDark.addListener) mqDark.addListener(onSystem);

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.querySelector('.navbtn');
  var nav = document.getElementById('site-nav');

  function setMenu(open) {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = open ? '✕ Close' : '☰ Menu';
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); menuBtn.focus(); }
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    Array.prototype.forEach.call(items, function (el) { io.observe(el); });
  } else {
    Array.prototype.forEach.call(items, function (el) { el.classList.add('visible'); });
  }

  /* ---------- CV links appear only once assets/cv.pdf exists ---------- */
  var cvLinks = document.querySelectorAll('[data-cv]');
  if (cvLinks.length && window.fetch && /^https?:$/.test(location.protocol)) {
    fetch('assets/cv.pdf', { method: 'HEAD' }).then(function (r) {
      if (r.ok) Array.prototype.forEach.call(cvLinks, function (a) { a.hidden = false; });
    }).catch(function () {});
  }
})();
