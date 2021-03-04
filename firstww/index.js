
const btn = document.querySelector("button");

/* const handleBtnClick = function(s){
    console.log({s})
}
btn.click(function(){return handleBtnClick("hello world")}) */

if(window.Worker){
    let w = new Worker("./worker.js");

    btn.onclick= function (e){
        w.postMessage("heello world")
    }

    w.onmessage = function(res){
        console.log({res})
        btn.innerText = res.data;
    }


}
else{
    console.log("web worker not supported in this browser.")
}