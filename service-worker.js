self.addEventListener('install', function(event) {
  console.log('Service Worker: Installed');
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker: Activated');
});

self.addEventListener('fetch', function(event) {
  // Để trống - tương lai bạn có thể thêm cache
});
