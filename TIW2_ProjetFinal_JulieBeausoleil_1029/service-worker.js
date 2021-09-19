const CACHE_NAME = 'static-cache-v4';

//Add list of files to cache here.
const FILES_TO_CACHE = [
    'index.html',
    'animation.html',
    'montage.html',
    'format-sauvegarde.html',
    'validation.html',
    'ressources.html',
    'offline.html',
    'js/bootstrap.js',
    'js/c09.js',
    'js/install.js',
    'js/anime-master/build.js',
    'js/anime-master/src/index.js',
    'js/anime-master/lib/anime.js',
    'js/anime-master/lib/anime.es.js',
    'js/anime-master/lib/anime.min.js',
    'img/enregistrer-web.png',
    'img/exporter-selection.png',
    'img/logo_anime.svg',
    'img/logo_c09.svg',
    'img/logo_calixa.svg',
    'img/logo_stroke.svg',
    'img/montage-video_2.mp4',
    'img/rendu-video.png',
    'img/anim_img/01.png',
    'img/anim_img/02.png',
    'img/anim_img/03.png',
    'img/anim_img/04.png',
    'img/anim_img/05.png',
    'img/anim_img/06.png',
    'img/anim_img/07.png',
    'img/anim_img/08.png',
    'img/anim_img/anim-sprite.gif',
    'img/anim_img/capture_anim_img.png',
    
    // mettre aussi les images, les fichiers JS. CSS pas nécessaire.
];

self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');

    // Precache static resources here.
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// Register service worker.
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then((reg) => {
                console.log('Service worker registered.', reg);
            });
    });
}


self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');

    // Precache static resources here.
    self.skipWaiting();
});
self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Activate');

    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
 
    self.clients.claim();
});
self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
    if (evt.request.mode !== 'navigate') {
        // Not a page navigation, bail.
        return;
    }
 
    evt.respondWith(
        fetch(evt.request)
            .catch(() => {
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                                                return cache.match('/cegeptr_travaux_Integration/TIW2_ProjetFinal_JulieBeausoleil_1029/offline.html');
                    });
            })
    );
 
});


// Pour Safari