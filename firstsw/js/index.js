if('serviceWorker' in navigator){
    console.log('service worker found');
    window.addEventListener('load',()=>{
        navigator.serviceWorker
        .register('./sw_site.js')
        .then(reg=>console.log('service worker registered'))
        .catch(err=>console.log('error in registering SW',err))
    })
}