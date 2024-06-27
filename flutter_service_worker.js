'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1cee4ac9e0956f2aee95a22bad4a23d1",
"assets/AssetManifest.json": "e5cdf585b0f3371f2fe767b5060803a6",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Armada%2520Condensed%2520Bold.otf": "833dae723e07540f001fccb7e38b0568",
"assets/assets/fonts/ARMADA.otf": "4c52f86268c3292df17f24428c0608dc",
"assets/assets/fonts/ARMADA.ttf": "f31097cafa8406b07cafedaa61229d47",
"assets/assets/fonts/Armada_Condensed_Bold.otf": "833dae723e07540f001fccb7e38b0568",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/icomoon.ttf": "885cac48635f824a7088ad5e66595932",
"assets/assets/fonts/Lexend%2520Deca-Bold.ttf": "419050ff841bb5ff5c9f41e3ee7ebc8b",
"assets/assets/fonts/Lexend%2520Deca-Medium.ttf": "142fc585b5cfbcb3b5b41fb0e89a347e",
"assets/assets/fonts/Lexend%2520Deca-Regular.ttf": "47e7cf64af81a528d189b300dfe60c30",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/3D.1_2_(1)_(1).png": "ec3dd862a226b300c73e14d6f57f16e0",
"assets/assets/images/addImage@2x.png": "e684bd8b00aac765414b257df5f74fd9",
"assets/assets/images/app-icon-app-store.png": "d2d74a22bccf4a3491c4388b9d4ffcba",
"assets/assets/images/app_launcher_icon.png": "37ed04d8939459bb277e0641830d704a",
"assets/assets/images/congrats@2x.png": "2a1eeef24cffd4f9a9d74307955c526f",
"assets/assets/images/contrase%25C3%25B1a.gif": "99d4c860caeb3aa7b629bece22aafe49",
"assets/assets/images/contrasea.gif": "99d4c860caeb3aa7b629bece22aafe49",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/logo_newforceLight@3x.png": "d25a492088a863d3132e245a908e5578",
"assets/assets/images/Logo_VN_Resplandor.png": "37ed04d8939459bb277e0641830d704a",
"assets/assets/images/NGLS-YABANCI-DIL-DUNYASI.png": "0ee72c36430ce2805b0974b2fd84ec9d",
"assets/assets/images/Sin_t%25C3%25ADtulo.png": "1c5fd7c167c54c7b786501c57faf54c3",
"assets/assets/images/Sin_ttulo.png": "1c5fd7c167c54c7b786501c57faf54c3",
"assets/assets/images/VN_Resplandor@300x.png": "e099430e49fa52252f5a77a215985fa0",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "29e0300cb13fa6abf099a9297ed6e3b6",
"assets/fonts/MaterialIcons-Regular.otf": "c69f88bbb5b04aab3c015e14119e7335",
"assets/NOTICES": "fb6eb00356cfb0bcb6bfc8093e8021ab",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "60170625fd25bb7175a67ccd0aa23e7e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c16254559dee23dd6075aaae00c16f79",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "47c1071310eb39960ade5d955a762fd1",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/app_launcher_icon.png": "37ed04d8939459bb277e0641830d704a",
"icons/Icon-192.png": "1d0d502619f9c3f4c4c10f35f87a17d6",
"icons/Icon-512.png": "281cf8910a6afc35d1563ee995e18b6c",
"icons/Icon-maskable-192.png": "1d0d502619f9c3f4c4c10f35f87a17d6",
"icons/Icon-maskable-512.png": "281cf8910a6afc35d1563ee995e18b6c",
"index.html": "7e296a25adac29520ae01c03c75962da",
"/": "7e296a25adac29520ae01c03c75962da",
"main.dart.js": "eaf4c086b25c4841184855cf2663db2e",
"manifest.json": "2dd2b2920ded2369c54c369bfb0eba02",
"version.json": "10492ac70563555942fc650d4a046cf5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
