const  cacheName = 'v2';


// intalling SW
self.addEventListener('install',(e)=>{
    console.log('service worker : installed')
    
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
        fetch(e.request)
            .then(res=>{
                // clone of response
                const resClone = res.clone();

                caches.open(cacheName)
                .then(cache=>{
                    cache.put(e.request,resClone)
                })
                return res;

            })
        .catch((err)=>caches.match(e.request).then(res=>res))
    )
})  