const CACHE = "praga-v6";
const SHELL = ["./", "./index.html", "./places.js", "./config.js", "./manifest.webmanifest", "./favicon.png", "./icon-192.png", "./icon-512.png", "./vendor/leaflet.js", "./vendor/leaflet.css"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
  self.clients.claim();
});
// Network-first con fallback cache: tiles e librerie vengono salvati al primo uso.
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.hostname.endsWith("firebaseio.com") || url.hostname.includes("googleapis.com") || url.hostname.includes("nominatim")) return;
  e.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req))
  );
});
