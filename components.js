(() => {
  const paths = {
    nebula: '<path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M4.9 19.1L19.1 4.9"/><circle cx="12" cy="12" r="4.5" fill="currentColor" stroke="none"/>',
    chevron: '<path d="m9 5 7 7-7 7"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    close: '<path d="m6 6 12 12M6 18 18 6"/>',
    heart: '<path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.4a5.5 5.5 0 0 0-.1-7.8Z"/>',
    comment: '<path d="M21 11.5a9 9 0 0 1-13.2 8L3 21l1.5-4.8A9 9 0 1 1 21 11.5Z"/>',
    send: '<path d="m22 2-7 20-4-9-9-4 20-7ZM11 13 22 2"/>',
    bookmark: '<path d="M6 3h12v18l-6-4-6 4V3Z"/>',
    home: '<path d="m3 10 9-7 9 7v11h-6v-7H9v7H3V10Z"/>',
    grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    reel: '<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M3 9h18M7 3l4 6m3-6 4 6m-8 3 5 3-5 3v-6Z"/>',
    bag: '<path d="M5 7h14l1 14H4L5 7Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    volume: '<path d="m11 4-5 4H2v8h4l5 4V4Zm4 4a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
    play: '<path d="m8 4 12 8-12 8V4Z" fill="currentColor" stroke="none"/>',
    pause: '<path d="M8 5v14M16 5v14" stroke-width="4"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    spark: '<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z"/>',
    wave: '<path d="M3 10v4m4-8v12m5-16v20m5-16v12m4-8v4"/>',
    battery: '<rect x="2" y="6" width="18" height="12" rx="3"/><path d="M23 10v4M6 10v4m4-4v4m4-4v4"/>'
  };
  class NebulaIcon extends HTMLElement {
    connectedCallback() {
      this.setAttribute('aria-hidden', 'true');
      this.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round">${paths[this.getAttribute('name')] || paths.spark}</svg>`;
    }
    static get observedAttributes() { return ['name']; }
    attributeChangedCallback() { if (this.isConnected) this.connectedCallback(); }
  }
  customElements.define('nb-icon', NebulaIcon);
})();
