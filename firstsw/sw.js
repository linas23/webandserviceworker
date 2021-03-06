const  cacheName = 'v1';

const cacheAssets = [
    '/firstsw/index.html',
    '/firstsw/about.html',
    '/firstsw/css/style.css',
    '/firstsw/js/index.js'
]

// intalling SW
self.addEventListener('install',(e)=>{
    console.log('service worker : installed')

    e.waitUntil(
        caches.open(cacheName)
            .then(cache=>{
                console.log('SW: Caching Files')
                cache.addAll(cacheAssets)
            })
            .then(()=>self.skipWaiting())
    )
})
// activating SW
self.addEventListener('activate',(e)=>{
    console.log('service worker : activated') 

    // remove unwanted caches
    e.waitUntil(
        caches.keys()
            .then(cacheNames=>{
                return Promise.all(
                    cacheNames.map(cache=>{
                        if(cache != cacheName){
                            console.log('SW: Clearig old cache')
                            return caches.delete(cache)
                        }
                    })
                )
            })
        )}
)

self.addEventListener("fetch",(e)=>{
    console.log("SW : Fetching")

    e.respondWith(
        fetch(e.request).catch(()=>caches.match(e.request))
    )
})  