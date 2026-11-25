/* RoomBridge: the phone menu. Rebuilt 2026-11-25 in place of the design-skill scripts. */
(() => {
  const nav = document.querySelector('.nav');
  const toggle = nav && nav.querySelector('.nav__toggle');
  if (!toggle) return;
  const icon = toggle.querySelector('path');
  const setOpen = (open) => {
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    if (icon) icon.setAttribute('d', open ? 'M4 4l10 10M14 4L4 14' : 'M2 5h14M2 13h14');
  };
  toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a[href^="#"]')) setOpen(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
  matchMedia('(min-width: 1024px)').addEventListener('change', (m) => { if (m.matches) setOpen(false); });
})();
