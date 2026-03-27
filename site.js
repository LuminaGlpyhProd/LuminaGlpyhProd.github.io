/* ============================================================
   site.js — Evelyn Animation v2.1
   No auto-init. Each page calls its needed functions inline
   after content.js is parsed. Zero race conditions.
   ============================================================ */

const ICONS = {
  yt:      `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5v-7l6.25 3.5-6.25 3.5z"/></svg>`,
  x:       `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  ig:      `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.335-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.335-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.609.073-3.033.44-4.164 1.572C1.757 2.776 1.39 4.2 1.317 5.809 1.259 7.089 1.245 7.497 1.245 12s.014 4.911.072 6.191c.073 1.609.44 3.033 1.572 4.164 1.131 1.131 2.555 1.499 4.164 1.572 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.609-.073 3.033-.44 4.164-1.572 1.131-1.131 1.499-2.555 1.572-4.164.058-1.28.072-1.688.072-4.947s-.014-4.911-.072-6.191c-.073-1.609-.44-3.033-1.572-4.164C19.98 1.757 18.556 1.39 16.947 1.317 15.667 1.259 15.259 1.245 12 1.245zM12 6.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/></svg>`,
  bsky:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.077 1.242.52 1.66.105 1.963 0 2.363 0 3.364c0 1.63.074 3.494.148 4.944.372 6.528 2.58 8.226 5.35 8.564 1.325.163 2.493-.073 3.35-.585.25-.15.458-.29.637-.418C9 16.007 9 16.103 9 16.276c0 1.265.063 2.54.063 2.54s.136 1.063-.563 1.505c-1.252.792-3.27.98-4.5 1.205C2.3 21.865 2 22.5 2 23h20c0-.5-.3-1.135-2-1.474-1.23-.225-3.248-.413-4.5-1.205-.699-.442-.563-1.505-.563-1.505S15 17.54 15 16.276c0-.173 0-.27-.485.1.18.128.387.268.637.418.857.512 2.025.748 3.35.585 2.77-.338 4.978-2.036 5.35-8.564C23.926 7.365 24 5.5 24 3.865c0-1.002-.105-1.402-.52-1.705-.557-.418-2.046-.716-4.682 1.145C16.046 4.747 13.087 8.686 12 10.8z"/></svg>`,
  patreon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.82 2.41C10.52 2.41 7 5.93 7 10.23c0 4.29 3.52 7.78 7.82 7.78 4.29 0 7.77-3.49 7.77-7.78 0-4.3-3.48-7.82-7.77-7.82zM2.18 21.6h3.06V2.41H2.18V21.6z"/></svg>`,
  discord: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>`
};

/* ── HELPERS ──────────────────────────────────────────────── */
// Extract YouTube video ID from any YouTube URL format
function ytIdFromUrl(url) {
  if (!url) return null;
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

// Detect if a URL is YouTube
function isYouTubeUrl(url) { return !!ytIdFromUrl(url); }

// Convert YouTube watch/share URL to embed URL
function toYTEmbed(url) {
  const id = ytIdFromUrl(url);
  if (!id) return url;
  // Keep existing embed URLs as-is, convert others
  if (url.includes('/embed/')) return url;
  return `https://www.youtube.com/embed/${id}?autoplay=1`;
}

// Get YouTube thumbnail from any YouTube URL
function ytThumb(url) {
  const id = ytIdFromUrl(url);
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : '';
}

// Render description — supports newlines and <br>
function renderDesc(text) {
  return (text || '').replace(/\n/g, '<br>');
}

/* ── NAV ──────────────────────────────────────────────────── */
function buildNav(activePage) {
  const el = document.getElementById('nav');
  if (!el) return;
  const links = [
    { href: 'index.html',    label: 'Home' },
    { href: 'work.html',     label: 'Work' },
    { href: 'services.html', label: 'Services' },
    { href: 'pricing.html',  label: 'Pricing' },
    { href: 'tos.html',      label: 'ToS' }
  ];
  el.innerHTML = `
    <a href="index.html" class="logo">${SITE.name}</a>
    <button class="nav-toggle" id="nav-toggle" aria-label="Menu">&#9776;</button>
    <div class="nav-links" id="nav-links">
      ${links.map(l => `<a href="${l.href}" class="${l.href === activePage ? 'active' : ''}">${l.label}</a>`).join('')}
      <a href="contact.html" class="nav-cta">Hire Me</a>
    </div>`;
  document.getElementById('nav-toggle').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('open');
  });
  // Close nav on link click (mobile)
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('nav-links').classList.remove('open'));
  });
}

/* ── FOOTER ───────────────────────────────────────────────── */
function buildFooter() {
  const el = document.getElementById('footer');
  if (!el) return;
  const navLinks = [
    { href: 'index.html',    label: 'Home' },
    { href: 'work.html',     label: 'Work' },
    { href: 'services.html', label: 'Services' },
    { href: 'pricing.html',  label: 'Pricing' },
    { href: 'tos.html',      label: 'Terms of Service' },
    { href: 'contact.html',  label: 'Contact' }
  ];
  el.innerHTML = `
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="logo">${SITE.name}</a>
          <p>${SITE.tagline}</p>
          <div class="social-row">
            ${SITE.socials.map(s => `
              <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-pill" title="${s.label}">
                ${ICONS[s.icon] || ''}<span>${s.label}</span>
              </a>`).join('')}
          </div>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          <ul>${navLinks.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('')}</ul>
        </div>
        <div class="footer-cta-col">
          <h4>Ready to start?</h4>
          <p>Open a commission ticket or message directly on Discord.</p>
          <a href="${SITE.discordUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-accent">Join Discord</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</span>
        <span class="credit">Built by <a href="https://www.youtube.com/@SpideySpidery" target="_blank" rel="noopener noreferrer">SpideySpidery</a></span>
        <a href="tos.html">Terms of Service</a>
      </div>
    </div>`;
}

/* ── GALLERY ──────────────────────────────────────────────── */
function buildGallery() {
  const el = document.getElementById('gallery-grid');
  if (!el) return;
  el.innerHTML = SITE.gallery.map(item => {
    const isYT  = item.type === 'youtube' || (item.type === 'video' && isYouTubeUrl(item.full));
    const isVid = item.type === 'video' && !isYT;
    const isImg = item.type === 'image';

    // Resolve thumbnail
    let thumb = item.thumbnail;
    if (!thumb && isYT)  thumb = ytThumb(item.full);
    if (!thumb && isImg) thumb = item.full;

    // Resolve full src for lightbox
    const fullSrc = isYT ? toYTEmbed(item.full) : item.full;

    const mediaEl = isVid
      ? `<video muted loop playsinline preload="none" data-full="${fullSrc}"><source src="${item.full}" type="video/mp4"></video>`
      : `<img src="${thumb}" data-full="${fullSrc}" alt="${item.title}" loading="lazy">`;

    const lbType = isYT ? 'youtube' : isVid ? 'video' : 'image';

    return `
      <div class="gallery-card ${item.category}" onclick="openLightbox(this,'${lbType}')">
        <div class="gallery-thumb">
          ${mediaEl}
          ${(isYT || isVid) ? `<div class="play-badge"><svg viewBox="0 0 24 24" fill="white" width="16" height="16"><path d="M8 5v14l11-7z"/></svg></div>` : ''}
        </div>
        <div class="gallery-info" style="display:none">
          <h4>${item.title}</h4>
          <p>${renderDesc(item.description)}</p>
        </div>
      </div>`;
  }).join('');
}

/* ── GALLERY FILTER ───────────────────────────────────────── */
function filterGallery(cat, btn) {
  document.querySelectorAll('.gallery-card').forEach(c => {
    c.style.display = (cat === 'all' || c.classList.contains(cat)) ? '' : 'none';
  });
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

/* ── LIGHTBOX ─────────────────────────────────────────────── */
function openLightbox(el, type) {
  const lb    = document.getElementById('lightbox');
  const media = document.getElementById('lb-media');
  const title = document.getElementById('lb-title');
  const desc  = document.getElementById('lb-desc');
  if (!lb) return;

  title.textContent = el.querySelector('h4').textContent;
  desc.innerHTML    = el.querySelector('p').innerHTML;
  const src = el.querySelector('[data-full]').getAttribute('data-full');
  media.innerHTML = '';

  if (type === 'image') {
    media.innerHTML = `<img src="${src}" alt="${title.textContent}">`;
  } else if (type === 'youtube') {
    media.innerHTML = `<iframe src="${src}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
  } else {
    media.innerHTML = `
      <video id="lb-vid" src="${src}" playsinline></video>
      <div class="lb-controls">
        <button id="lb-play" class="lb-play-btn" aria-label="Play">&#9654;</button>
        <div id="lb-bar-wrap" class="lb-bar-wrap"><div id="lb-bar" class="lb-bar"></div></div>
        <span id="lb-time" class="lb-time">0:00</span>
      </div>`;
    const vid  = document.getElementById('lb-vid');
    const play = document.getElementById('lb-play');
    const bar  = document.getElementById('lb-bar');
    const wrap = document.getElementById('lb-bar-wrap');
    const time = document.getElementById('lb-time');
    play.onclick = () => { if (vid.paused) { vid.play(); play.innerHTML='&#9646;&#9646;'; } else { vid.pause(); play.innerHTML='&#9654;'; } };
    vid.ontimeupdate = () => {
      if (!vid.duration) return;
      bar.style.width = (vid.currentTime / vid.duration * 100) + '%';
      const m = Math.floor(vid.currentTime/60), s = Math.floor(vid.currentTime%60);
      time.textContent = m + ':' + (s < 10 ? '0'+s : s);
    };
    wrap.onclick = e => {
      if (!vid.duration) return;
      const r = wrap.getBoundingClientRect();
      vid.currentTime = (e.clientX - r.left) / r.width * vid.duration;
    };
  }
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb    = document.getElementById('lightbox');
  const media = document.getElementById('lb-media');
  if (!lb) return;
  lb.classList.remove('open');
  if (media) media.innerHTML = '';
  document.body.style.overflow = '';
}

/* ── SERVICES ─────────────────────────────────────────────── */
function buildServices() {
  const el = document.getElementById('services-grid');
  if (!el) return;
  el.innerHTML = SITE.services.map(s => `
    <div class="service-card">
      <div class="service-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.description}</p>
      <ul class="service-features">
        ${s.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
    </div>`).join('');
}

/* ── PRICING ──────────────────────────────────────────────── */
function buildPricing() {
  const el = document.getElementById('pricing-grid');
  if (!el) return;
  el.innerHTML = SITE.pricing.map(p => `
    <div class="price-card${p.popular ? ' popular' : ''}">
      ${p.popular ? '<span class="popular-badge">BEST VALUE</span>' : ''}
      <h3>${p.title}</h3>
      <div class="price-num">${p.price}</div>
      <ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
      <a href="contact.html" class="btn${p.popular ? ' btn-accent' : ' btn-outline'}">Get a Quote</a>
    </div>`).join('');
}

/* ── TOS ──────────────────────────────────────────────────── */
function buildTos() {
  const el = document.getElementById('tos-body');
  if (!el) return;
  el.innerHTML = `
    <div class="tos-intro"><strong>Independent Work Transaction Agreement</strong><br>${SITE.tosIntro}</div>
    ${SITE.tos.map(s => `
      <details class="tos-item">
        <summary>${s.title}</summary>
        <div class="tos-text">${s.body}</div>
      </details>`).join('')}`;
}

/* ── CONTACT SOCIALS ──────────────────────────────────────── */
function buildContactSocials() {
  const el = document.getElementById('contact-socials');
  if (!el) return;
  el.innerHTML = SITE.socials.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-pill" title="${s.label}">
      ${ICONS[s.icon] || ''}<span>${s.label}</span>
    </a>`).join('');
}

/* ── INTRO FADE ───────────────────────────────────────────── */
function fadeIntro() {
  const el = document.getElementById('intro');
  if (!el) return;
  setTimeout(() => {
    el.style.opacity = '0';
    setTimeout(() => { el.style.display = 'none'; }, 700);
  }, 1000);
}

/* ── CURSOR ───────────────────────────────────────────────── */
function initCursor() {
  const c = document.getElementById('cursor');
  if (!c) return;
  document.addEventListener('mousemove', e => {
    c.style.left = e.clientX + 'px';
    c.style.top  = e.clientY + 'px';
  });
}

/* ── LIGHTBOX EVENTS ──────────────────────────────────────── */
function initLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}
