const CACHE_NAME = 'smartmoney-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'https://raw.githubusercontent.com/KatlehoSephoko/SmartMoney-SA/refs/heads/main/public/logo.PNG'
];

// Install the service worker and cache the core files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercept network requests and serve from cache if available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from the network
        return response || fetch(event.request);
      })
  );
});
