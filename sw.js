var CACHE_NAME = 'imfine-offline-v1';
// 캐싱할 웹 자원(이미지, css 등)의 목록
var filesToCache = [
  '/',
  '/imfine_5.png',
];

// 서비스 워커 설치 (웹 자원 캐싱)
self.addEventListener('install', function(event) {
  console.log('Service Worker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME) // pwa 파일
      .then(function(cache) {
        // pwa 파일에 다 집어 넣어라
        return cache.addAll(filesToCache);
      })
      .catch(function(error) {
        return console.log(error);
      })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fetch');
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
      .catch(function(error) {
        return console.log(error);
      })
  );
});

self.addEventListener('activate', function(event) {
  var newCacheList = ['imfine-offline-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheList) {
      return Promise.all(
        cacheList.map(function(cacheName) {
          if (newCacheList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      )
    }).catch(function(error) {
      return console.log(error);
    })
  );
});