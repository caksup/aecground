// =========================================================
// RIWAYAT PERUBAHAN VERSI JAVASCRIPT (sw.js)
// Link Edit: https://github.com/[USERNAME]/[REPO]/edit/main/sw.js
// =========================================================
// - v1.0.0 (8 Jul 2026) : Pendaftaran Service Worker awal.
// - v3.0.0 (8 Jul 2026) : Standarisasi repositori & caching rute PWA.
// =========================================================

const CACHE_NAME = 'kuis-pro-v3.0.0';
const urlsToCache = [
  './', './index.html', './su.html', './tc.html', './sd.html',
  './firebase-config.js', './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map(cacheName => {
        if (cacheName !== CACHE_NAME) return caches.delete(cacheName);
      })
    ))
  );
});
