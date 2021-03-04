
onmessage = function(s){
    console.log("web worker")
    console.log(typeof s)
    postMessage( s.data + "updated from ww")
}