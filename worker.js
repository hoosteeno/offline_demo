var myCache = "johnny";

// service worker install caches alpine.html
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(myCache).then(function(cache) {
      return cache.addAll([ 'alpine.html', 'present_alpine.jpg' ]);
    })
  );
});

// worker activation invalidates old caches
self.addEventListener('activate', function(event) {
  var keptCaches = [];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (keptCaches.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      )
    })
  );
});

// network falls back to cache
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  )
});
