const input = document.querySelector("input");
const mul = document.querySelector(".multiply")
const div = document.querySelector(".divide")
const response = document.querySelector(".response");


isWWThere = !!window.Worker;

if(isWWThere){
let ww = new Worker("./ww.js");

mul.onclick = function(){return  sendMessageToWW("mul",ww)};
div.onclick = function(){return sendMessageToWW("div",ww)}

ww.onmessage = function (html){
    response.innerHTML = html.data;
}

}else{

    console.log('No web worker found in this browser');
}
function sendMessageToWW(op,ww){
    response.innerHTML = ""
        const num = input.value;
        ww.postMessage(JSON.stringify({op,num}));
}