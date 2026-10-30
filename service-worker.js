const VERSION='6.21';
const CACHE='tokyo-hakone-v'+VERSION;
const NETWORK_TIMEOUT_MS=3000;

// Required for the app shell; install fails (and the old version keeps running) if any of these cannot be fetched.
const CORE=[
  './','./index.html',
  './styles.css?v='+VERSION,'./app.js?v='+VERSION,'./manifest.webmanifest',
  './assets/icon-192.png','./assets/icon-512.png',
  './assets/cover-hero.webp',
  './assets/hero/day1.webp','./assets/hero/day2.webp','./assets/hero/day3.webp','./assets/hero/day4.webp','./assets/hero/day5.webp',
  './assets/hakone-stay.webp','./assets/omo3-stay.webp',
  './assets/google-maps-icon.png','./assets/tokyo-subway-map.webp','./assets/travel-book-cover.webp',
  './assets/nav/home.webp','./assets/nav/trip.webp','./assets/nav/map.webp','./assets/nav/more.webp',
  './assets/home-actions/flight.webp','./assets/home-actions/luggage.webp','./assets/home-actions/links.webp'
];

// Travel book: 27 page previews + original PDF. Cached during install as well,
// but a single failure here does not block the update (it will be cached on first view instead).
const BOOK=[
  ...Array.from({length:27},(_,i)=>`./assets/pages/p${String(i+1).padStart(2,'0')}.webp`),
  './assets/travel-book.pdf'
];

const fresh=url=>new Request(url,{cache:'reload'});

self.addEventListener('install',event=>{
  event.waitUntil((async()=>{
    const cache=await caches.open(CACHE);
    await cache.addAll(CORE.map(fresh));
    await Promise.allSettled(BOOK.map(async url=>{
      const res=await fetch(fresh(url));
      if(res.ok) await cache.put(url,res);
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith('tokyo-hakone-')&&key!==CACHE).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});

// Network-first with a timeout: use the network when it answers quickly,
// fall back to cache when offline or when the connection is too slow.
function networkFirst(event,req,cacheKey,fallbackKeys=[]){
  // A navigate-mode Request cannot be re-used with init options, so rebuild it from the URL.
  const netReq=req.mode==='navigate'?new Request(req.url,{cache:'no-store',credentials:'same-origin'}):new Request(req,{cache:'no-store'});
  const network=fetch(netReq).then(async res=>{
    if(res&&res.ok){const cache=await caches.open(CACHE);await cache.put(cacheKey,res.clone());}
    return res;
  });
  event.waitUntil(network.catch(()=>{}));
  return (async()=>{
    const findCached=async()=>{
      for(const key of [cacheKey,...fallbackKeys]){const hit=await caches.match(key);if(hit) return hit;}
      return null;
    };
    let timer;
    const timeout=new Promise(resolve=>{timer=setTimeout(()=>resolve('timeout'),NETWORK_TIMEOUT_MS)});
    try{
      const first=await Promise.race([network,timeout]);
      if(first!=='timeout'){clearTimeout(timer);if(first.ok) return first;return (await findCached())||first;}
      const cached=await findCached();
      if(cached) return cached;
      return await network; // nothing cached yet: keep waiting for the network
    }catch(_){
      clearTimeout(timer);
      return (await findCached())||Response.error();
    }
  })();
}

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const req=event.request;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin) return;

  // HTML/navigation: network-first (with timeout) so a new deployment appears quickly.
  if(req.mode==='navigate'||req.destination==='document'){
    event.respondWith(networkFirst(event,req,'./index.html',['./']));
    return;
  }

  // Versioned JS/CSS: network-first (with timeout).
  if(req.destination==='script'||req.destination==='style'){
    event.respondWith(networkFirst(event,req,req));
    return;
  }

  // Images/PDF: cache-first for speed and offline use.
  event.respondWith((async()=>{
    const cached=await caches.match(req,{ignoreSearch:true});
    if(cached) return cached;
    try{
      const res=await fetch(req);
      if(res&&res.ok){const cache=await caches.open(CACHE);cache.put(req,res.clone());}
      return res;
    }catch(_){return Response.error();}
  })());
});
