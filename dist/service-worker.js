self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('statics').then(cache => {
      return cache.addAll([
        './',
        './css/styles.min.css',
        './js/index.js',
        './images/me.png'
      ])
    })
  );
});

self.addEventListener('fetch', e => {
  console.log('Intersectig fetch ' + e.request.url);
  e.respondWith(
    caches.match(e.request)
      .then(res => res || fetch(e.request))
  );
});