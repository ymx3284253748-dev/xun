(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!reduceMotion.matches) document.documentElement.classList.add('js-motion');
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); reveal.unobserve(entry.target); } });
  }, { threshold: .12 });
  document.querySelectorAll('[data-reveal]').forEach(el => reveal.observe(el));
  const scenes = [...document.querySelectorAll('[data-scene]')].map(element => ({
    element, product: element.querySelector('.scene-product'), progress: element.querySelector('.scene-progress span'),
    text: [...element.querySelectorAll('[data-at]')]
  }));
  const active = new Set();
  const visibility = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting ? active.add(entry.target) : active.delete(entry.target));
    requestTick();
  }, { rootMargin: '150px 0px' });
  scenes.forEach(scene => visibility.observe(scene.element));
  let ticking = false;
  const clamp = (v,min,max) => Math.min(max,Math.max(min,v));
  function render() {
    const vh = window.innerHeight;
    scenes.forEach(scene => {
      if (!active.has(scene.element)) return;
      const rect = scene.element.getBoundingClientRect();
      const navHeight = window.innerWidth <= 760 ? 62 : 68;
      const p = clamp((navHeight - rect.top) / Math.max(1,rect.height - vh + navHeight), 0, 1);
      const mobile = window.innerWidth <= 760;
      if (!reduceMotion.matches) {
        let scale, rotation, y;
        if (scene.element.dataset.scene === 'quiet') { scale = .88 + p * (mobile ? .18 : .35); rotation = -10 + p * 19; y = 20 - p * 30; }
        if (scene.element.dataset.scene === 'space') { scale = .95 + p * (mobile ? .15 : .24); rotation = 13 - p * 27; y = 12 - p * 24; }
        if (scene.element.dataset.scene === 'power') { scale = .86 + p * (mobile ? .18 : .3); rotation = -6 + p * 10; y = 22 - p * 35; }
        scene.product.style.transform = `translateY(${y}px) scale(${scale}) rotate(${rotation}deg)`;
      }
      scene.progress.style.transform = `scaleX(${p})`;
      scene.text.forEach(el => el.classList.toggle('is-visible', reduceMotion.matches || p >= Number(el.dataset.at)));
    });
    ticking = false;
  }
  function requestTick() { if (!ticking) { ticking = true; requestAnimationFrame(render); } }
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick, { passive: true });
  reduceMotion.addEventListener('change', () => { document.documentElement.classList.toggle('js-motion', !reduceMotion.matches); if (reduceMotion.matches) scenes.forEach(s => s.product.style.transform = 'none'); requestTick(); });
  const sections = [...document.querySelectorAll('#overview, #sound, #compare')];
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => link.classList.toggle('current', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-15% 0px -55% 0px' });
  sections.forEach(section => navObserver.observe(section));
  requestTick();
})();
