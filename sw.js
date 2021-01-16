const staticCacheName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/js/ui.js',
    '/js/materialize.min.js',
    '/css/materialize.min.css',
    '/css/styles.css',
    '/img/dish.png',
    'https://fonts.googleapis.com/icon?family=Material+Icons'
]

self.addEventListener('install', evt => {
    // console.log('service worker berhasil di install');
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('melakukan caching');
            cache.addAll(assets);
        })
    )
})

//
self.addEventListener('activate', evt => {
    console.log('service worker berhasil di aktifkan');
})

self.addEventListener('fetch', evt => {
    // console.log('fetch dari service worker', evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        })
    )
})