const CACHE_NAME = 'phuihub-cache-v1';
const urlsToCache = [
  '/',
  '/index.html'
];

// Khi cài đặt Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Đã mở cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Khi fetch tài nguyên
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - trả về cache
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
