(() => {
  const track = document.querySelector('#phone-carousel');
  const dots = [...document.querySelectorAll('[data-slide]')];
  const previous = document.querySelector('[data-carousel-prev]');
  const next = document.querySelector('[data-carousel-next]');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0, scrollFrame;
  function moveTo(index, instant = false) {
    const target = Math.max(0, Math.min(4, index));
    track.scrollTo({ left: target * track.clientWidth, behavior: instant || motion.matches ? 'instant' : 'smooth' });
  }
  function updateCarousel() {
    current = Math.round(track.scrollLeft / track.clientWidth);
    dots.forEach((dot,i) => i === current ? dot.setAttribute('aria-current','true') : dot.removeAttribute('aria-current'));
    previous.disabled = current === 0; next.disabled = current === 4;
    document.querySelector('[data-carousel-status]').textContent = `0${current+1} / 05 · 左右滑动，发现不同`;
  }
  track.addEventListener('scroll', () => { cancelAnimationFrame(scrollFrame); scrollFrame = requestAnimationFrame(updateCarousel); }, { passive: true });
  previous.addEventListener('click', () => moveTo(current-1));
  next.addEventListener('click', () => moveTo(current+1));
  dots.forEach(dot => dot.addEventListener('click', () => moveTo(Number(dot.dataset.slide))));
  track.addEventListener('keydown', event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); moveTo(current+(event.key === 'ArrowRight' ? 1 : -1)); } });
  window.addEventListener('resize', () => moveTo(current,true));
  const storyData = [
    ['NEBULA DAILY', '每个人，都是\n一个小宇宙。', '戴上星云，把这一刻留给喜欢的事。', 'purple'],
    ['YOUR COLOR', '今天，\n是什么颜色？', '曜石黑、珍珠白、星云紫。选一种心情，听自己的声音。', 'purple'],
    ['QUIET CLUB', '世界很吵。\n你可以安静。', '自适应主动降噪，把喧嚣调成背景。', 'black'],
    ['ON REPEAT', '这首歌，\n再听一遍。', '360° 空间音频，让喜欢的旋律围绕着你。', 'purple'],
    ['GOLDEN HOUR', '日落之后，\n快乐继续。', '最长 36 小时续航，从第一首歌听到晚安。', 'white'],
    ['JUST BE YOU', '你的风格。\n你的节奏。', '不必跟随每一种声音。你喜欢的，就是你的频率。', 'purple']
  ];
  const storyDialog = document.querySelector('#story-dialog');
  let storyIndex = 0;
  function showStory(index) {
    storyIndex = (index+storyData.length)%storyData.length;
    const [kicker,title,copy,color] = storyData[storyIndex];
    storyDialog.querySelector('[data-story-kicker]').textContent = kicker;
    const heading = storyDialog.querySelector('h2'); heading.textContent = title; heading.style.whiteSpace = 'pre-line';
    storyDialog.querySelector('[data-story-copy]').textContent = copy;
    storyDialog.querySelector('nebula-product').dataset.color = color;
    storyDialog.querySelector('[data-story-count]').textContent = `${storyIndex+1} / ${storyData.length}`;
    storyDialog.querySelectorAll('.story-modal-progress i').forEach((bar,i) => bar.classList.toggle('is-active', i <= storyIndex));
  }
  document.querySelectorAll('[data-story]').forEach(button => button.addEventListener('click', () => { showStory(Number(button.dataset.story)); storyDialog.showModal(); }));
  document.querySelector('[data-story-prev]').addEventListener('click', () => showStory(storyIndex-1));
  document.querySelector('[data-story-next]').addEventListener('click', () => showStory(storyIndex+1));
  storyDialog.addEventListener('keydown', event => { if (event.key === 'ArrowLeft') showStory(storyIndex-1); if (event.key === 'ArrowRight') showStory(storyIndex+1); });
  document.querySelectorAll('[data-like]').forEach(button => button.addEventListener('click', () => {
    const liked = button.getAttribute('aria-pressed') !== 'true'; button.setAttribute('aria-pressed',String(liked));
    const count = button.closest('.post-card').querySelector('[data-likes]');
    count.textContent = (Number(count.dataset.likes)+(liked ? 1 : 0)).toLocaleString('en-US');
  }));
  document.querySelectorAll('[data-save]').forEach(button => button.addEventListener('click', () => {
    const saved = button.getAttribute('aria-pressed') !== 'true'; button.setAttribute('aria-pressed',String(saved));
    window.nebulaToast(saved ? '已收藏这个星云时刻' : '已取消收藏');
  }));
  const comments = new Map();
  const commentDialog = document.querySelector('#comment-dialog');
  const commentInput = document.querySelector('#comment-input');
  let commentingPost = '';
  function renderComments() {
    const thread = commentDialog.querySelector('.comment-thread'); thread.replaceChildren();
    const items = comments.get(commentingPost) || [];
    if (!items.length) { const p = document.createElement('p'); p.textContent = '还没有评论。写下你的第一条星云心情吧。'; thread.append(p); }
    items.forEach(text => { const p = document.createElement('p'), name = document.createElement('b'); name.textContent = '你'; p.append(name,document.createTextNode(text)); thread.append(p); });
    thread.scrollTop = thread.scrollHeight;
  }
  document.querySelectorAll('[data-comment]').forEach(button => button.addEventListener('click', () => {
    commentingPost = button.closest('.post-card').dataset.post; commentInput.value = ''; renderComments(); commentDialog.showModal(); commentInput.focus();
  }));
  document.querySelector('#comment-form').addEventListener('submit', event => {
    event.preventDefault(); const text = commentInput.value.trim(); if (!text) return;
    const list = comments.get(commentingPost) || []; list.push(text); comments.set(commentingPost,list); renderComments(); commentInput.value = '';
  });
  const reel = document.querySelector('.reels-card'), reelButton = document.querySelector('.reel-toggle');
  reelButton.addEventListener('click', () => {
    const paused = reel.classList.toggle('is-paused'); reelButton.setAttribute('aria-pressed',String(paused));
    reelButton.setAttribute('aria-label',paused ? '播放 Reels 动画' : '暂停 Reels 动画'); reelButton.querySelector('nb-icon').setAttribute('name',paused ? 'play' : 'pause');
  });
  const tabs = [...document.querySelectorAll('.bottom-tabs a[href^="#"]')];
  function activateTab(id) { tabs.forEach(tab => { const active = tab.getAttribute('href') === `#${id}`; tab.classList.toggle('active',active); active ? tab.setAttribute('aria-current','page') : tab.removeAttribute('aria-current'); }); }
  tabs.forEach(tab => tab.addEventListener('click', () => activateTab(tab.getAttribute('href').slice(1))));
  const visibleSections = new Set();
  const tabObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting ? visibleSections.add(entry.target.id) : visibleSections.delete(entry.target.id));
    const selected = ['reels','feed','stories','top'].find(id => visibleSections.has(id));
    if (selected) activateTab(selected);
  }, { rootMargin: '-15% 0px -55% 0px' });
  document.querySelectorAll('#top, #stories, #feed, #reels').forEach(el => tabObserver.observe(el));
  updateCarousel();
})();
