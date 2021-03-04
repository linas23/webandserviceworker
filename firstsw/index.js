if('serviceWorker' in navigator){
    console.log('service worker found');
    window.addEventListener('load',()=>{
        navigator.serviceWorker
        .register('./sw.js')
        .then(reg=>console.log('service worker registered'))
        .catch(err=>console.log('err in registering SW',err))
    })
}