const CACHE='tokyo-hakone-v6.4';
const CORE=['./styles.css?v=6.4','./app.js?v=6.4','./manifest.webmanifest','./assets/cover-hero.webp','./assets/icon-192.png','./assets/icon-512.png','./assets/hero/day1.webp','./assets/hero/day2.webp','./assets/hero/day3.webp','./assets/hero/day4.webp','./assets/hero/day5.webp','./assets/hakone-stay.webp','./assets/omo3-stay.webp','./assets/google-maps-icon.png','./assets/tokyo-subway-map.webp','./assets/nav/home.webp','./assets/nav/trip.webp','./assets/nav/map.webp','./assets/nav/more.webp'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith('tokyo-hakone-')&&key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const req=event.request;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin) return;

  // HTML/navigation is network-first so a GitHub Pages deployment appears immediately.
  if(req.mode==='navigate'||req.destination==='document'){
    event.respondWith((async()=>{
      try{
        const fresh=await fetch(req,{cache:'no-store'});
        const cache=await caches.open(CACHE);
        cache.put('./index.html',fresh.clone());
        return fresh;
      }catch(_){
        return (await caches.match('./index.html')) || Response.error();
      }
    })());
    return;
  }

  // Versioned JS/CSS are also network-first; images/PDF remain cache-first for speed/offline use.
  if(req.destination==='script'||req.destination==='style'){
    event.respondWith((async()=>{
      try{
        const fresh=await fetch(req,{cache:'no-store'});
        const cache=await caches.open(CACHE);
        cache.put(req,fresh.clone());
        return fresh;
      }catch(_){return (await caches.match(req)) || Response.error();}
    })());
    return;
  }

  event.respondWith((async()=>{
    const cached=await caches.match(req);
    if(cached) return cached;
    try{
      const fresh=await fetch(req);
      if(fresh && fresh.ok){const cache=await caches.open(CACHE);cache.put(req,fresh.clone());}
      return fresh;
    }catch(_){return Response.error();}
  })());
});
