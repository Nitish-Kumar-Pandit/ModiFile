// Check if we're in a service worker context
if (typeof self !== 'undefined' && 'serviceWorker' in self) {
  const CACHE_NAME = 'modifile-v1';
  const urlsToCache = [
    '/',
    '/about',
    '/features',
    '/_next/static/css/',
    '/_next/static/js/',
  ];

  // Install event
  self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          return cache.addAll(urlsToCache);
        })
        .catch((error) => {
          console.log('Cache installation failed:', error);
        })
    );
  });

  // Fetch event - bypass cache in development
  self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
      return;
    }

    // Skip chrome-extension and other non-http requests
    if (!event.request.url.startsWith('http')) {
      return;
    }

    // In development, always fetch from network
    if (self.location && (self.location.hostname === 'localhost' || self.location.hostname === '127.0.0.1')) {
      event.respondWith(fetch(event.request));
      return;
    }

    // In production, use cache-first strategy
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request);
        })
        .catch((error) => {
          console.log('Fetch failed:', error);
          return fetch(event.request);
        })
    );
  });

  // Activate event
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
      }).catch((error) => {
        console.log('Cache cleanup failed:', error);
      })
    );
  });
}
