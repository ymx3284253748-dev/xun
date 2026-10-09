(() => {
  const palettes = { black: '曜石黑', white: '珍珠白', purple: '星云紫' };
  const body = document.body;
  let toastTimer;
  window.nebulaToast = message => {
    let toast = document.querySelector('.toast');
    if (!toast) { toast = document.createElement('div'); toast.className = 'toast'; toast.setAttribute('role', 'status'); body.append(toast); }
    toast.textContent = message; toast.classList.add('visible');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('visible'), 3400);
  };
  window.setNebulaColor = (color, announce = false) => {
    if (!palettes[color]) return;
    body.dataset.color = color;
    document.querySelectorAll('[data-color-name]').forEach(el => el.textContent = palettes[color]);
    document.querySelectorAll('[data-color-choice]').forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.colorChoice === color)));
    try { localStorage.setItem('nebula-color', color); } catch (_) {}
    if (announce) window.nebulaToast(`已选择${palettes[color]}`);
  };
  let initial = 'purple';
  try { initial = localStorage.getItem('nebula-color') || 'purple'; } catch (_) {}
  window.setNebulaColor(initial);
  document.querySelectorAll('[data-color-choice]').forEach(btn => btn.addEventListener('click', () => window.setNebulaColor(btn.dataset.colorChoice)));
  const purchase = document.querySelector('#purchase-dialog');
  document.querySelectorAll('[data-purchase]').forEach(button => button.addEventListener('click', () => {
    if (purchase && !purchase.open) purchase.showModal();
  }));
  document.querySelectorAll('[data-close-dialog]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
  document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('click', event => {
    if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); }
  }));
  document.querySelector('[data-confirm-purchase]')?.addEventListener('click', () => {
    purchase.close(); window.nebulaToast(`已保存你的选择：Nebula Buds · ${palettes[body.dataset.color]}。演示网站不产生订单。`);
  });
  const header = document.querySelector('[data-glass-nav]');
  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 24);
  updateHeader(); window.addEventListener('scroll', updateHeader, { passive: true });
  document.querySelector('[data-menu-toggle]')?.addEventListener('click', event => {
    const expanded = event.currentTarget.getAttribute('aria-expanded') !== 'true';
    event.currentTarget.setAttribute('aria-expanded', String(expanded));
    document.querySelector('.nav-links')?.classList.toggle('is-open', expanded);
  });
  document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
    document.querySelector('.nav-links')?.classList.remove('is-open');
    document.querySelector('[data-menu-toggle]')?.setAttribute('aria-expanded', 'false');
  }));
})();
