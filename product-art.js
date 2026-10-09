/* Original vector product artwork for Nebula. Runs directly in a browser. */
(() => {
  'use strict';
  if (customElements.get('nebula-product')) return;
  let instance = 0;

  class NebulaProduct extends HTMLElement {
    static get observedAttributes() { return ['variant', 'label']; }

    constructor() {
      super();
      this.artId = `nebula-art-${++instance}`;
    }

    connectedCallback() { this.render(); }
    attributeChangedCallback() { if (this.isConnected) this.render(); }

    render() {
      const id = this.artId;
      const variant = this.getAttribute('variant');
      const budsOnly = variant === 'buds';
      const caseOnly = variant === 'case';
      this.setAttribute('role', 'img');
      this.setAttribute('aria-label', this.getAttribute('label') || (budsOnly
        ? 'Nebula Buds 无线耳机'
        : caseOnly ? 'Nebula Buds 充电盒' : 'Nebula Buds 无线耳机与充电盒'));
      this.innerHTML = `
      <svg class="nebula-product-art" viewBox="0 0 800 650" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="display:block;width:100%;height:auto;overflow:visible">
        <style>
          .nebula-product-art .nebula-color-stop { transition:stop-color .65s ease; }
          .nebula-product-art .nebula-engraving { transition:fill .65s ease; }
          @media(prefers-reduced-motion:reduce) {
            .nebula-product-art .nebula-color-stop,.nebula-product-art .nebula-engraving { transition:none; }
          }
        </style>
        <defs>
          <linearGradient id="${id}-body" x1="0.18" y1="0" x2="0.86" y2="1">
            <stop class="nebula-color-stop" offset="0" style="stop-color:var(--product-light,#e4d9ff)"/>
            <stop class="nebula-color-stop" offset=".36" style="stop-color:var(--product-light,#e4d9ff)"/>
            <stop class="nebula-color-stop" offset=".72" style="stop-color:var(--product-mid,#a38ac8)"/>
            <stop class="nebula-color-stop" offset="1" style="stop-color:var(--product-dark,#625077)"/>
          </linearGradient>
          <linearGradient id="${id}-lid" x1=".24" y1="0" x2=".73" y2="1">
            <stop offset="0" stop-color="#fff"/>
            <stop class="nebula-color-stop" offset=".19" style="stop-color:var(--product-light,#e4d9ff)"/>
            <stop class="nebula-color-stop" offset=".78" style="stop-color:var(--product-mid,#a38ac8)"/>
            <stop class="nebula-color-stop" offset="1" style="stop-color:var(--product-dark,#625077)"/>
          </linearGradient>
          <linearGradient id="${id}-side" x1="0" y1=".3" x2="1" y2=".6">
            <stop class="nebula-color-stop" offset="0" style="stop-color:var(--product-mid,#a38ac8)" stop-opacity="0"/>
            <stop class="nebula-color-stop" offset=".73" style="stop-color:var(--product-dark,#625077)" stop-opacity=".32"/>
            <stop class="nebula-color-stop" offset="1" style="stop-color:var(--product-dark,#625077)" stop-opacity=".85"/>
          </linearGradient>
          <linearGradient id="${id}-stem" x1="0" y1="0" x2="1" y2=".08">
            <stop class="nebula-color-stop" offset="0" style="stop-color:var(--product-dark,#625077)"/>
            <stop class="nebula-color-stop" offset=".22" style="stop-color:var(--product-mid,#a38ac8)"/>
            <stop class="nebula-color-stop" offset=".52" style="stop-color:var(--product-light,#e4d9ff)"/>
            <stop offset=".65" stop-color="#fff"/>
            <stop class="nebula-color-stop" offset=".84" style="stop-color:var(--product-light,#e4d9ff)"/>
            <stop class="nebula-color-stop" offset="1" style="stop-color:var(--product-mid,#a38ac8)"/>
          </linearGradient>
          <radialGradient id="${id}-pod" cx=".38" cy=".27" r=".83">
            <stop offset="0" stop-color="#fff"/>
            <stop class="nebula-color-stop" offset=".30" style="stop-color:var(--product-light,#e4d9ff)"/>
            <stop class="nebula-color-stop" offset=".65" style="stop-color:var(--product-mid,#a38ac8)"/>
            <stop class="nebula-color-stop" offset="1" style="stop-color:var(--product-dark,#625077)"/>
          </radialGradient>
          <radialGradient id="${id}-pod-back" cx=".4" cy=".24" r=".83">
            <stop offset="0" stop-color="#fff"/>
            <stop class="nebula-color-stop" offset=".32" style="stop-color:var(--product-light,#e4d9ff)"/>
            <stop class="nebula-color-stop" offset=".78" style="stop-color:var(--product-mid,#a38ac8)"/>
            <stop class="nebula-color-stop" offset="1" style="stop-color:var(--product-dark,#625077)"/>
          </radialGradient>
          <linearGradient id="${id}-tip" x1="0" y1="0" x2=".9" y2="1">
            <stop offset="0" stop-color="#717079"/>
            <stop offset=".38" stop-color="#302f39"/>
            <stop offset="1" stop-color="#11121b"/>
          </linearGradient>
          <linearGradient id="${id}-mesh" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#45444c"/>
            <stop offset=".36" stop-color="#21212b"/>
            <stop offset="1" stop-color="#0c0d16"/>
          </linearGradient>
          <linearGradient id="${id}-shine" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#fff" stop-opacity=".84"/>
            <stop offset=".46" stop-color="#fff" stop-opacity=".18"/>
            <stop offset="1" stop-color="#fff" stop-opacity="0"/>
          </linearGradient>
          <linearGradient id="${id}-front-glow" x1="0" y1="0" x2=".5" y2="1">
            <stop offset="0" stop-color="#fff" stop-opacity=".24"/>
            <stop offset=".4" stop-color="#fff" stop-opacity=".04"/>
            <stop offset="1" stop-color="#fff" stop-opacity="0"/>
          </linearGradient>
          <radialGradient id="${id}-ground">
            <stop offset="0" stop-color="#2d203d" stop-opacity=".21"/>
            <stop offset=".6" stop-color="#3b2c4c" stop-opacity=".09"/>
            <stop offset="1" stop-color="#3b2c4c" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="${id}-led">
            <stop offset="0" stop-color="#e4fff0"/>
            <stop offset=".4" stop-color="#b2e4b9"/>
            <stop offset="1" stop-color="#718d74"/>
          </radialGradient>
          <pattern id="${id}-perforation" patternUnits="userSpaceOnUse" width="4.2" height="4.2">
            <circle cx="1.8" cy="1.8" r=".78" fill="#b2afb9" opacity=".36"/>
          </pattern>
          <filter id="${id}-object-shadow" x="-50%" y="-40%" width="200%" height="200%" color-interpolation-filters="sRGB">
            <feDropShadow dx="1" dy="10" stdDeviation="10" flood-color="#2d203e" flood-opacity=".17"/>
          </filter>
          <filter id="${id}-soft" x="-30%" y="-60%" width="160%" height="220%">
            <feGaussianBlur stdDeviation="9"/>
          </filter>
          <filter id="${id}-led-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="1.7"/>
          </filter>

          <!-- Inner-facing earbud: sculpted capsule, soft silicone lip, metal mesh. -->
          <g id="${id}-left-bud">
            <path d="M32 20 C46 14 68 23 74 43 L72 131 C71 146 62 153 51 150 C42 149 36 140 37 128 L34 60Z" fill="url(#${id}-stem)"/>
            <path d="M59 67 L59 126 C59 135 57 139 53 141" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2.3" stroke-linecap="round"/>
            <path d="M38 131 C46 138 62 139 71 131 L70 137 C65 148 47 150 40 140Z" fill="url(#${id}-side)"/>
            <ellipse cx="54" cy="141" rx="7.5" ry="2.5" fill="#433f50" opacity=".65"/>
            <ellipse cx="54" cy="140.4" rx="4.7" ry="1.1" fill="#b5a8c7"/>
            <path d="M-49-33 C-24-58 18-63 50-44 C81-26 87 3 72 31 C57 60 23 65-7 55 C-30 48-52 24-58 1 C-63-14-58-26-49-33Z" fill="url(#${id}-pod)"/>
            <path d="M-42-32 C-14-49 22-49 47-35 C60-27 68-17 69-6" fill="none" stroke="url(#${id}-shine)" stroke-width="5" stroke-linecap="round"/>
            <path d="M-6 53 C19 67 53 55 67 34" fill="none" stroke="#302738" stroke-opacity=".16" stroke-width="1.2"/>
            <path d="M-39-3 C-27-14-10-8-4 5 C2 18-5 35-18 41 C-32 47-44 38-49 25 C-52 14-49 4-39-3Z" fill="url(#${id}-side)"/>
            <path d="M-54-6 C-45-12-31-8-27 2 L-21 22 C-18 32-26 44-36 46 C-49 49-66 31-68 16 C-70 5-64-3-54-6Z" fill="url(#${id}-tip)"/>
            <ellipse cx="-50" cy="19" rx="17.3" ry="26.5" transform="rotate(-23-50 19)" fill="#14151e" stroke="#9a94a4" stroke-opacity=".6" stroke-width="1.4"/>
            <ellipse cx="-50.6" cy="19.4" rx="13.6" ry="22.4" transform="rotate(-23-50.6 19.4)" fill="url(#${id}-mesh)"/>
            <ellipse cx="-50.6" cy="19.4" rx="12.9" ry="21.8" transform="rotate(-23-50.6 19.4)" fill="url(#${id}-perforation)"/>
            <path d="M-61-1 C-57-7-51-9-45-6" fill="none" stroke="#dbd6e1" stroke-opacity=".6" stroke-width="1.4" stroke-linecap="round"/>
            <ellipse cx="36" cy="-15" rx="5" ry="9" transform="rotate(-17 36-15)" fill="#403b4c" opacity=".86"/>
            <ellipse cx="36" cy="-16" rx="2.8" ry="6.2" transform="rotate(-17 36-16)" fill="#10131c"/>
            <circle cx="33" cy="38" r="3.8" fill="#493e59" opacity=".65"/>
            <circle cx="33" cy="37.4" r="2" fill="#21212b"/>
            <path d="M8-35 C22-40 35-37 43-31" fill="none" stroke="#fff" stroke-opacity=".48" stroke-width="1.6" stroke-linecap="round"/>
          </g>

          <!-- Outer-facing earbud shows the long reflective shoulder and sensor. -->
          <g id="${id}-right-bud">
            <path d="M-30 19 C-16 12 5 20 10 36 L9 125 C9 142 1 149-11 148 C-21 147-28 140-28 127 L-31 53Z" fill="url(#${id}-stem)"/>
            <path d="M-4 61 L-4 127 C-4 133-6 138-10 139" fill="none" stroke="#fff" stroke-opacity=".67" stroke-width="2.2" stroke-linecap="round"/>
            <ellipse cx="-11" cy="140" rx="6.8" ry="2.1" fill="#443d52" opacity=".6"/>
            <ellipse cx="-11" cy="139.5" rx="4" ry=".9" fill="#c5bad1"/>
            <path d="M33-10 C48-17 64-6 67 7 C72 23 65 40 53 42 C40 44 28 31 29 17Z" fill="url(#${id}-tip)"/>
            <ellipse cx="56" cy="17" rx="12" ry="20" transform="rotate(19 56 17)" fill="url(#${id}-mesh)" stroke="#92909b" stroke-opacity=".55" stroke-width="1.2"/>
            <ellipse cx="56" cy="17" rx="9.5" ry="16.7" transform="rotate(19 56 17)" fill="url(#${id}-perforation)"/>
            <path d="M-50-32 C-30-53 6-58 35-43 C62-29 68-6 55 20 C42 45 13 57-12 49 C-38 42-63 22-65 0 C-66-13-61-23-50-32Z" fill="url(#${id}-pod-back)"/>
            <path d="M-51-27 C-26-48 9-48 34-35 C44-30 50-23 53-15" fill="none" stroke="url(#${id}-shine)" stroke-width="4.6" stroke-linecap="round"/>
            <path d="M-61-6 C-51 10-33 21-18 23 C-6 25 9 22 17 15" fill="none" stroke="#fff" stroke-opacity=".16" stroke-width="1.5"/>
            <path d="M-44-13 C-42-21-35-23-30-18 L-19-4 C-14 2-17 9-23 10 C-29 12-34 7-37 3Z" fill="#41394e" opacity=".83"/>
            <path d="M-39-13 L-25 3" stroke="#12131d" stroke-width="4.8" stroke-linecap="round"/>
            <path d="M-7-37 C7-39 22-35 29-30" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.3" stroke-linecap="round"/>
            <path d="M-11 48 C12 57 43 40 53 22" fill="none" stroke="#403047" stroke-opacity=".18" stroke-width="1"/>
            <circle cx="22" cy="26" r="2.8" fill="#393445" opacity=".68"/>
            <circle cx="22" cy="25.6" r="1.3" fill="#14151b"/>
          </g>
        </defs>

        <g class="nebula-art-case" ${budsOnly ? 'display="none"' : ''} transform="${caseOnly ? 'translate(-64 -210) scale(1.16)' : 'translate(0 0)'}">
          <ellipse cx="404" cy="588" rx="223" ry="31" fill="url(#${id}-ground)" filter="url(#${id}-soft)"/>
          <g transform="rotate(-7 400 460)" filter="url(#${id}-object-shadow)">
            <path d="M212 396 C221 368 282 351 403 352 C517 352 579 368 591 398 L587 480 C582 546 521 575 401 575 C282 575 222 543 215 481Z" fill="url(#${id}-body)"/>
            <path d="M514 364 C557 371 583 384 591 400 L587 479 C583 525 551 552 504 562 C529 540 542 500 541 458 C542 418 536 388 514 364Z" fill="url(#${id}-side)"/>
            <path d="M219 412 C263 438 320 447 406 446 C498 445 561 436 588 412 L585 470 C576 534 516 559 399 560 C287 559 231 533 224 478Z" fill="url(#${id}-front-glow)"/>
            <path d="M217 383 C228 354 277 332 370 330 C470 327 554 343 584 373 C601 389 598 410 578 422 C541 447 274 447 231 425 C217 418 209 401 217 383Z" fill="url(#${id}-lid)"/>
            <path d="M228 377 C250 350 309 339 374 337 C451 334 516 344 550 359" fill="none" stroke="url(#${id}-shine)" stroke-width="5" stroke-linecap="round"/>
            <path d="M237 371 C267 350 326 342 377 341 C448 339 502 345 532 354" fill="none" stroke="#fff" stroke-opacity=".58" stroke-width="1.1" stroke-linecap="round"/>
            <path d="M215 407 C228 432 313 445 404 444 C497 443 563 435 589 411" fill="none" stroke="#473652" stroke-opacity=".52" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M219 411 C252 437 326 449 405 447 C497 446 560 436 586 416" fill="none" stroke="#fff" stroke-opacity=".52" stroke-width="1.25" stroke-linecap="round"/>
            <path d="M225 433 C226 473 230 494 240 508" fill="none" stroke="#fff" stroke-opacity=".50" stroke-width="3.5" stroke-linecap="round"/>
            <path d="M241 522 C264 550 323 565 398 565" fill="none" stroke="#fff" stroke-opacity=".16" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M556 509 C552 519 544 527 534 533" fill="none" stroke="#fff" stroke-opacity=".08" stroke-width="1.1" stroke-linecap="round"/>
            <text x="402" y="501.5" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="15" font-weight="500" letter-spacing="5.7" fill="#fff" opacity=".34">NEBULA</text>
            <text class="nebula-engraving" x="402" y="500.5" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="15" font-weight="500" letter-spacing="5.7" style="fill:var(--product-dark,#625077)" opacity=".74">NEBULA</text>
            <ellipse cx="400" cy="527" rx="3.8" ry="2.8" fill="#4a4056" opacity=".23"/>
            <ellipse cx="400" cy="526.6" rx="2.7" ry="1.9" fill="url(#${id}-led)"/>
            <ellipse cx="400" cy="526.6" rx="2.7" ry="1.9" fill="#d7f8dc" opacity=".5" filter="url(#${id}-led-glow)"/>
          </g>
        </g>

        <g class="nebula-art-buds" ${caseOnly ? 'display="none"' : ''} transform="${budsOnly ? 'translate(-32 100) scale(1.08)' : 'translate(0 0)'}" filter="url(#${id}-object-shadow)">
          <use href="#${id}-left-bud" transform="translate(285 147) rotate(27) scale(1.22)"/>
          <use href="#${id}-right-bud" transform="translate(518 147) rotate(-28) scale(1.19)"/>
        </g>
      </svg>`;
    }
  }

  customElements.define('nebula-product', NebulaProduct);
})();
