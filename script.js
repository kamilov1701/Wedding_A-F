/* ═══════════════════════════════════════════════
   CONFIG — edit these values freely in browser
═══════════════════════════════════════════════ */
var CONFIG = {
  /* Wedding date — YYYY, MM (0-indexed), DD, HH, MM, SS */
  weddingDate: new Date(2026, 5, 28, 19, 0, 0),  // 28 June 2026, 19:00

  /* Google Maps share link */
  googleMapsLink: "https://maps.app.goo.gl/dPH8D4aBXLFFPVME6",

  /* Yandex Maps link — replace with your yandex.uz/maps link */
  yandexMapsLink: "https://yandex.uz/maps/-/CXU~BL7i",

  /* Google Maps embed — get from Google Maps > Share > Embed a map */
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d686.6144482364075!2d60.83303590667374!3d41.351626430321886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfeb00254a76e1%3A0xb4531f081d34e662!2sIstanbul%20restaurant!5e0!3m2!1sru!2s!4v1790831959904!5m2!1sru!2s",

  /* Yandex Maps embed — get from yandex.uz/maps > Share > iframe */
  yandexMapsEmbed: "https://yandex.uz/map-widget/v1/?ll=60.833048%2C41.351050&z=17&mode=search&text=Istanbul%20restaurant",

  /* YouTube video ID — Sevara Nazarkhon "Meni Sev" */
  youtubeVideoId: "8ttozx_uag8"
};
/* ═══════════════════════════════════════════════ */


/* ── TRANSLATIONS ── */
var texts = {
  uz: {
    'man-name': 'Akmalbek',
    'woman-name': 'Farangiz',
    'quran-tr': '«U ularning qalblarini birlashtirdi»',
    'invite-text': 'Aziz mehmonlarimiz,<br>Sizi hayotimizning eng baxtli kuniga —<br><em style="color:var(--gold)">to\'y bazm</em>imizga taklif etamiz.',
    'lbl-details': 'TAFSILOTLAR',
    'lbl-date': 'SANA',
    'lbl-time': 'VAQT',
    'lbl-evening': 'Kechki Paytda',
    'lbl-program': 'DASTUR',
    't1': 'Mehmonlar kutib olinishi',
    't2': 'Nikoh marosimi',
    't3': 'To\'y ziyofati',
    't4': 'Yakunlanish',
    'lbl-venue-label': 'MANZIL',
    'venue-addr': "Xorazm viloyati, Bog'ot tumani",
    'lbl-google': 'GOOGLE MAPS',
    'lbl-yandex': 'YANDEX MAPS',
    'lbl-map-google': 'Google Maps',
    'lbl-map-yandex': 'Yandex Maps',
    'cd-label': 'TO\'YGA QADAR',
    'cd-days': 'KUN',
    'cd-hours': 'SOAT',
    'cd-mins': 'DAQIQA',
    'cd-secs': 'SONIYA',
    'footer-main': 'SIZNING ISHTIROKINGIZ',
    'footer-sub': 'Biz uchun eng muhim sovg\'a!',
    'venue-name': "Istambul Toyxonasi",
  },
  ru: {
    'man-name': 'Акмалбек',
    'woman-name': 'Фарангиз',
    'quran-tr': '«И Он соединил их сердца»',
    'invite-text': 'Дорогие гости,<br>Мы с радостью приглашаем вас на<br>наш <em style="color:var(--gold)">свадебный вечер</em>.',
    'lbl-details': 'ДЕТАЛИ',
    'lbl-date': 'ДАТА',
    'lbl-time': 'ВРЕМЯ',
    'lbl-evening': 'Вечернее торжество',
    'lbl-program': 'ПРОГРАММА',
    't1': 'Встреча гостей',
    't2': 'Свадебная церемония',
    't3': 'Торжественный банкет',
    't4': 'Завершение вечера',
    'lbl-venue-label': 'МЕСТО ПРОВЕДЕНИЯ',
    'venue-addr': 'Хорезмская область, район Багат',
    'lbl-google': 'GOOGLE MAPS',
    'lbl-yandex': 'ЯНДЕКС КАРТЫ',
    'lbl-map-google': 'Google Maps',
    'lbl-map-yandex': 'Яндекс Карты',
    'cd-label': 'ДО СВАДЬБЫ',
    'cd-days': 'ДНЕЙ',
    'cd-hours': 'ЧАСОВ',
    'cd-mins': 'МИНУТ',
    'cd-secs': 'СЕКУНД',
    'footer-main': 'ВАШЕ ПРИСУТСТВИЕ',
    'footer-sub': 'Лучший подарок для нас!',
    'venue-name': "Тойхона Истамбул",
  },
  en: {
    'man-name': 'Akmalbek',
    'woman-name': 'Farangiz',
    'quran-tr': '"And He united their hearts"',
    'invite-text': 'Dear guests,<br>We joyfully invite you to celebrate<br>our <em style="color:var(--gold)">wedding evening</em> with us.',
    'lbl-details': 'DETAILS',
    'lbl-date': 'DATE',
    'lbl-time': 'TIME',
    'lbl-evening': 'Evening celebration',
    'lbl-program': 'SCHEDULE',
    't1': 'Guest reception',
    't2': 'Wedding ceremony',
    't3': 'Wedding banquet',
    't4': 'End of evening',
    'lbl-venue-label': 'VENUE',
    'venue-addr': 'Khorezm province, Bagat district',
    'lbl-google': 'GOOGLE MAPS',
    'lbl-yandex': 'YANDEX MAPS',
    'lbl-map-google': 'Google Maps',
    'lbl-map-yandex': 'Yandex Maps',
    'cd-label': 'UNTIL THE WEDDING',
    'cd-days': 'DAYS',
    'cd-hours': 'HOURS',
    'cd-mins': 'MINS',
    'cd-secs': 'SECS',
    'footer-main': 'YOUR PRESENCE',
    'footer-sub': 'Is our greatest gift!',
    'venue-name': "Wedding Hall Istambul",
  }
};

function setLang(lang) {
  document.querySelectorAll('.lang-btn').forEach(function (b) {
    b.classList.toggle('active', b.getAttribute('data-lang') === lang);
  });
  var t = texts[lang];
  for (var id in t) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = t[id];
  }
  document.getElementById('google-map-btn').href = CONFIG.googleMapsLink;
  document.getElementById('yandex-map-btn').href = CONFIG.yandexMapsLink;
}


/* ── DARK / LIGHT MODE ── */
var currentTheme = 'dark';
function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme === 'light' ? 'light' : '');
  var icon = document.getElementById('themeIcon');
  if (icon) icon.className = currentTheme === 'dark' ? 'ti ti-sun' : 'ti ti-moon';
}


/* ── COUNTDOWN ── */
function updateCountdown() {
  var now = new Date();
  var diff = CONFIG.weddingDate - now;
  if (diff <= 0) {
    document.getElementById('cd-days-val').textContent = '00';
    document.getElementById('cd-hours-val').textContent = '00';
    document.getElementById('cd-mins-val').textContent = '00';
    document.getElementById('cd-secs-val').textContent = '00';
    return;
  }
  var d = Math.floor(diff / 86400000);
  var h = Math.floor((diff % 86400000) / 3600000);
  var m = Math.floor((diff % 3600000) / 60000);
  var s = Math.floor((diff % 60000) / 1000);
  document.getElementById('cd-days-val').textContent = String(d).padStart(2, '0');
  document.getElementById('cd-hours-val').textContent = String(h).padStart(2, '0');
  document.getElementById('cd-mins-val').textContent = String(m).padStart(2, '0');
  document.getElementById('cd-secs-val').textContent = String(s).padStart(2, '0');
}




/* ── YOUTUBE MUSIC ── */
var ytPlayer, ytReady = false, playing = false;

function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player('yt-player', {
    videoId: CONFIG.youtubeVideoId,
    playerVars: { autoplay: 0, controls: 0, loop: 1, playlist: CONFIG.youtubeVideoId, mute: 0 },
    events: {
      onReady: function () { ytReady = true; },
      onStateChange: function (e) {
        if (e.data === YT.PlayerState.ENDED) ytPlayer.playVideo();
      }
    }
  });
}

function toggleMusic() {
  var icon = document.getElementById('musicIcon');
  var wave = document.getElementById('mwave');
  var status = document.getElementById('music-status');
  if (!ytReady) { if (status) status.textContent = 'YUKLANMOQDA...'; return; }
  if (playing) {
    ytPlayer.pauseVideo();
    if (icon) icon.className = 'ti ti-player-play';
    if (wave) wave.classList.remove('playing');
    if (status) status.textContent = "BOSING — O'YNATING";
    playing = false;
  } else {
    ytPlayer.playVideo();
    if (icon) icon.className = 'ti ti-player-pause';
    if (wave) wave.classList.add('playing');
    if (status) status.textContent = 'IJRO ETILMOQDA...';
    playing = true;
  }
}


/* ── UNLOCK SLIDER ── */
var wrap, thumb, fill, track, lockIcon;
var dragging = false, startX = 0, currentX = 0;
function maxX() { return wrap.offsetWidth - thumb.offsetWidth - 8; }
function getX(e) { return e.touches ? e.touches[0].clientX : e.clientX; }

function initSlider() {
  wrap = document.getElementById('unlockWrap');
  thumb = document.getElementById('unlockThumb');
  fill = document.getElementById('unlockFill');
  track = document.getElementById('unlockTrack');
  lockIcon = document.getElementById('lockIcon');
  if (!wrap) return;

  thumb.addEventListener('mousedown', function (e) {
    dragging = true; startX = getX(e) - currentX;
    thumb.style.cursor = 'grabbing'; track.style.opacity = '0';
  });
  thumb.addEventListener('touchstart', function (e) {
    dragging = true; startX = getX(e) - currentX; track.style.opacity = '0';
  }, { passive: true });
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('touchmove', onDrag, { passive: false });
  document.addEventListener('mouseup', snapBack);
  document.addEventListener('touchend', snapBack);
}

function onDrag(e) {
  if (!dragging) return;
  if (e.cancelable) e.preventDefault();
  var x = Math.max(0, Math.min(getX(e) - startX, maxX()));
  currentX = x;
  thumb.style.left = (4 + x) + 'px';
  fill.style.width = (58 + x) + 'px';
  lockIcon.className = (x / maxX() > 0.5) ? 'ti ti-lock-open' : 'ti ti-lock';
  if (x / maxX() >= 0.92) unlock();
}

function snapBack() {
  if (!dragging) return;
  dragging = false; thumb.style.cursor = 'grab';
  if (currentX / maxX() < 0.92) {
    currentX = 0;
    thumb.style.left = '4px';
    fill.style.width = '58px';
    track.style.opacity = '1';
    lockIcon.className = 'ti ti-lock';
  }
}

function unlock() {
  dragging = false;
  var cover = document.getElementById('coverPage');
  var main = document.getElementById('mainPage');
  cover.classList.add('hide');
  setTimeout(function () {
    cover.style.display = 'none';
    main.style.display = 'flex';
    requestAnimationFrame(function () { main.classList.add('show'); });
    injectMaps();
    /* auto-play music after unlock */
    var tryPlay = function () {
      if (ytReady) {
        ytPlayer.playVideo();
        var icon = document.getElementById('musicIcon');
        var wave = document.getElementById('mwave');
        var status = document.getElementById('music-status');
        if (icon) icon.className = 'ti ti-player-pause';
        if (wave) wave.classList.add('playing');
        if (status) status.textContent = 'IJRO ETILMOQDA...';
        playing = true;
      } else {
        setTimeout(tryPlay, 500);
      }
    };
    setTimeout(tryPlay, 600);
  }, 650);
}


/* ── MAP EMBEDS ── */
function injectMaps() {
  var gWrap = document.getElementById('google-embed-wrap');
  var yWrap = document.getElementById('yandex-embed-wrap');
  if (gWrap && !gWrap.querySelector('iframe')) {
    var gf = document.createElement('iframe');
    gf.src = CONFIG.googleMapsEmbed;
    gf.allowFullscreen = true; gf.loading = 'lazy';
    gWrap.appendChild(gf);
  }
  if (yWrap && !yWrap.querySelector('iframe')) {
    var yf = document.createElement('iframe');
    yf.src = CONFIG.yandexMapsEmbed;
    yf.allowFullscreen = true; yf.loading = 'lazy';
    yWrap.appendChild(yf);
  }
}


/* ── INIT ── */
document.addEventListener('DOMContentLoaded', function () {
  initSlider();
  updateCountdown();
  setInterval(updateCountdown, 1000);
  document.getElementById('google-map-btn').href = CONFIG.googleMapsLink;
  document.getElementById('yandex-map-btn').href = CONFIG.yandexMapsLink;
});
