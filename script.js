// ================= DATA =================
  const categories = [
    { id:'all',         label:'All Work',       color:'var(--red)' },
    { id:'shortform',   label:'Short Form',     color:'var(--c-shortform)' },
    { id:'longform',    label:'Long Form',      color:'var(--c-longform)' },
    { id:'gaming',      label:'Gaming',         color:'var(--c-gaming)' },
    { id:'football',    label:'Football',       color:'var(--c-football)' },
    { id:'ecommerce',   label:'Ecommerce',      color:'var(--c-ecommerce)' },
    { id:'documentary', label:'Documentary',    color:'var(--c-documentary)' },
    { id:'grading',     label:'Color Grading',  color:'var(--c-grading)' },
    { id:'anime',       label:'Anime',          color:'var(--c-anime)' },
    { id:'ads',         label:'Ads',            color:'var(--c-ads)' },
  ];
  const catMap = Object.fromEntries(categories.map(c => [c.id, c]));

  // Demo placeholder clip — swap `src` per project with the real delivered edit.
  const DEMO_SRC = 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  const projects = [
    { cat:'shortform',   title:'Neon Streets — Reel 2025',      meta:'Vertical 9:16 · Nova Creators', size:'s4 r2', play:false, image:'neon-streets.jpg' },
    { cat:'football',    title:'Sunday Kickoff',                meta:'Hype Edit · FC Metro',          size:'s2',    play:false, image:'sunday-kickoff.jpg' },
    { cat:'gaming',      title:'Trigger — Gaming Montage',      meta:'60FPS · Rift Esports',           size:'s2',    play:true,  image:'trigger-gaming.jpg' },
    { cat:'ecommerce',   title:'Streetwear Drop 03',            meta:'Product Ad · Koya Apparel',      size:'s3',    play:false, image:'streetwear-drop.jpg' },
    { cat:'grading',     title:"The Colorist's Cut",            meta:'Filmic LUT · Studio Ochre',      size:'s3',    play:false, image:'colorists-cut.jpg' },
    { cat:'documentary', title:'After Midnight — Docu',         meta:'Long Form · Field Notes',        size:'s3',    play:false, image:'after-midnight.jpg' },
    { cat:'anime',       title:'Blade Rush — Anime AMV',        meta:'AMV · Ronin Collective',         size:'s3',    play:true,  image:'blade-rush.jpg' },
    { cat:'longform',    title:'The Founder Story',             meta:'16:9 · Wavelength Studios',      size:'s3',    play:false, image:'founder-story.jpg' },
    { cat:'ads',         title:'Launch — 30s Spot',             meta:'Brand Ad · Halo Beverage Co.',   size:'s3',    play:false, image:'launch-spot.jpg' },
    { cat:'football',    title:'Highlights — Semifinal Night',  meta:'Recap · United North FC',        size:'s2',    play:false, image:'highlights-semifinal.jpg' },
    { cat:'gaming',      title:'Ranked — Solo Q Diaries',       meta:'Series · ByteHawk',              size:'s2',    play:false, image:'ranked-soloq.jpg' },
    { cat:'ecommerce',   title:'Slow Fashion — Lookbook',       meta:'Lookbook · Loom &amp; Co.',      size:'s2',    play:false, image:'slow-fashion.jpg' },
  ];

  const services = [
    { icon:'phone',   title:'Short-Form Editing', desc:'Reels, Shorts, TikToks — hook-first cuts engineered to retain and convert.' },
    { icon:'youtube', title:'Long-Form YouTube',  desc:'Docu-style storytelling, motion graphics, retention pacing and thumbnails.' },
    { icon:'gamepad', title:'Gaming Highlights',  desc:'Frame-perfect fragmovies, montages and stream edits for creators &amp; orgs.' },
    { icon:'trophy',  title:'Football Edits',     desc:'Match recaps, hype reels and player highlights synced to broadcast rhythm.' },
    { icon:'bag',     title:'Ecommerce Ads',      desc:'Performance creatives A/B tested for Meta, TikTok and YouTube.' },
    { icon:'film',    title:'Documentary',        desc:'Cinematic long-form storytelling with sound design and grading.' },
    { icon:'palette', title:'Color Grading',      desc:'Filmic LUTs, secondary correction and mood-driven color science.' },
    { icon:'sparkle', title:'Anime AMVs',         desc:'Beat-matched AMVs with speed ramps, glows and typography.' },
  ];

  const testimonials = [
    { quote:'Our launch ads did 3.2× ROAS in week one. Editkaro just gets pacing.', name:'Aarav Mehta', role:'Founder, Koya Apparel' },
    { quote:'They took my rough footage and gave it a Netflix-doc feel. Retention up 41%.', name:'Neha Kapoor', role:'Creator, 480K Subs' },
    { quote:'Match recaps that finally do our players justice. Our socials exploded.', name:'Coach D. Silva', role:'United North FC' },
    { quote:'Frame-accurate montages, always on time. The only editors we book.', name:'Rift Esports', role:'Content Lead' },
  ];

  const iconPaths = {
    phone:   '<rect x="7" y="2" width="10" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/>',
    youtube: '<rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none"/>',
    gamepad: '<path d="M6 10h4M8 8v4M15 9.5h.01M18 12.5h.01"/><rect x="2" y="7" width="20" height="10" rx="5"/>',
    trophy:  '<path d="M8 4h8v5a4 4 0 0 1-8 0V4z"/><path d="M8 5H4a3 3 0 0 0 4 5M16 5h4a3 3 0 0 1-4 5"/><path d="M12 13v3M9 20h6M9.5 20c0-2 1-3 2.5-3s2.5 1 2.5 3"/>',
    bag:     '<path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    film:    '<rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="9" x2="7" y2="9"/><line x1="3" y1="15" x2="7" y2="15"/><line x1="17" y1="9" x2="21" y2="9"/><line x1="17" y1="15" x2="21" y2="15"/>',
    palette: '<path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-.9.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-3.9-4-7-9-7z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="10.5" cy="7" r="1"/><circle cx="15" cy="8" r="1"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/>',
  };

  // ================= BUILD: MARQUEE =================
  const marqueeTrack = document.getElementById('marqueeTrack');
  const marqueeItems = categories.filter(c => c.id !== 'all');
  const marqueeHtml = marqueeItems.map(c => `<span>${c.label}</span><span class="dot"></span>`).join('');
  marqueeTrack.innerHTML = marqueeHtml + marqueeHtml;

  // ================= BUILD: FILTERS =================
  const filtersEl = document.getElementById('filters');
  categories.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'filter-pill' + (c.id === 'all' ? ' active' : '');
    btn.textContent = c.label;
    btn.dataset.cat = c.id;
    btn.addEventListener('click', () => setActiveCategory(c.id));
    filtersEl.appendChild(btn);
  });

  // ================= BUILD: BENTO GRID =================
  const bentoGrid = document.getElementById('bentoGrid');
  projects.forEach((p, i) => {
    const cat = catMap[p.cat];
    const sizeClasses = p.size.split(' ').map(s => (s.startsWith('s') ? s : s)).join(' ');
    const card = document.createElement('div');
    card.className = `bcard ${sizeClasses}`;
    card.dataset.cat = p.cat;
    card.style.setProperty('--cc', cat.color);
    card.dataset.index = i;
    card.innerHTML = `
      <div class="bthumb">${p.image ? `<img src="${p.image}" alt="${p.title}" onerror="this.remove()">` : ''}</div>
      <span class="bbadge">${cat.label}</span>
      <span class="bplay"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
      <div class="bcontent">
        <span class="bmeta">${p.meta}</span>
        <span class="btitle">${p.title}</span>
      </div>
    `;
    card.addEventListener('click', () => openLightbox(i));
    bentoGrid.appendChild(card);
  });

  function setActiveCategory(catId){
    document.querySelectorAll('.filter-pill').forEach(b => b.classList.toggle('active', b.dataset.cat === catId));
    document.querySelectorAll('.bcard').forEach(card => {
      const match = catId === 'all' || card.dataset.cat === catId;
      card.classList.toggle('hide', !match);
    });
  }

  // ================= BUILD: SERVICES =================
  const servicesGrid = document.getElementById('servicesGrid');
  services.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = 'service';
    div.innerHTML = `
      <span class="num">0${i+1}</span>
      <span class="icon"><svg viewBox="0 0 24 24">${iconPaths[s.icon]}</svg></span>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
    `;
    servicesGrid.appendChild(div);
  });

  // ================= BUILD: TESTIMONIALS =================
  const tGrid = document.getElementById('testimonialGrid');
  testimonials.forEach(t => {
    const div = document.createElement('div');
    div.className = 't-card';
    div.innerHTML = `
      <div class="quote-icon">&ldquo;</div>
      <p class="quote">${t.quote}</p>
      <div class="t-person">
        <span class="t-avatar">${t.name.charAt(0)}</span>
        <div>
          <div class="name">${t.name}</div>
          <div class="role">${t.role}</div>
        </div>
      </div>
    `;
    tGrid.appendChild(div);
  });

  // ================= LIGHTBOX =================
  const lightbox = document.getElementById('lightbox');
  const lbVideo = document.getElementById('lbVideo');
  const lbTag = document.getElementById('lbTag');
  const lbTitle = document.getElementById('lbTitle');
  const lbMeta = document.getElementById('lbMeta');
  const lbClose = document.getElementById('lbClose');

  function openLightbox(i){
    const p = projects[i];
    const cat = catMap[p.cat];
    lbVideo.src = DEMO_SRC; // client: replace with the real per-project video URL
    lbTag.textContent = cat.label;
    lbTag.style.setProperty('--lc', cat.color);
    lbTitle.textContent = p.title;
    lbMeta.innerHTML = p.meta;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox(){
    lightbox.classList.remove('open');
    lbVideo.pause(); lbVideo.removeAttribute('src'); lbVideo.load();
    document.body.style.overflow = '';
  }
  lbClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  // ================= FORM =================
  const form = document.getElementById('projectForm');
  const formMsg = document.getElementById('formMsg');
  form.addEventListener('submit', e => {
    e.preventDefault();
    formMsg.textContent = "Thanks! We'll get back to you within 24 hours.";
    formMsg.classList.add('ok');
    form.reset();
  });

  // ================= MOBILE NAV =================
  const burgerBtn = document.getElementById('burgerBtn');
  const mainNav = document.getElementById('mainNav');
  burgerBtn.addEventListener('click', () => mainNav.classList.toggle('mobile-open'));
  mainNav.addEventListener('click', e => { if (e.target.tagName === 'A') mainNav.classList.remove('mobile-open'); });