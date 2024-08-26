// sw.js

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('my-cache').then(cache => {
            return cache.addAll([
                '/'
            ]);
        })
    );
});

// Fetch event
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

// Activate event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => {
                    // Delete old caches if needed
                    // For example, if you change the cache version
                    return cacheName !== 'my-cache';
                }).map(cacheName => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});