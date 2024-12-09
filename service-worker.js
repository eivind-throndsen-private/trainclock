const CACHE_VERSION = '5';
const CACHE_NAME = `swiss-clock-v${CACHE_VERSION}`;
const ASSETS_TO_CACHE = [
  '/ch-clock/',
  '/ch-clock/index.html',
  '/ch-clock/manifest.json',
  '/ch-clock/icons/icon-72x72.png',
  '/ch-clock/icons/icon-96x96.png',
  '/ch-clock/icons/icon-128x128.png',
  '/ch-clock/icons/icon-144x144.png',
  '/ch-clock/icons/icon-152x152.png',
  '/ch-clock/icons/icon-192x192.png',
  '/ch-clock/icons/icon-384x384.png',
  '/ch-clock/icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return fetch(event.request)
        .then((networkResponse) => {
          const responseToCache = networkResponse.clone();
          
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch(() => response);
    })
  );
});
