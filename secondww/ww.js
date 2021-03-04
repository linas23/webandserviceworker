onmessage = function(str){
    let obj = JSON.parse(str.data)
    const {op,num} = obj;
    switch (op) {
        case 'mul': {
            returnTable(op,num)
            return;
        }
        case 'div' : {
            returnTable(op,num)
            return; 
        }
    }
}


function returnTable(op,num){
    let html = ''
    for(let i = 1; i<10 ; i++){
        if(op=="mul"){
            html+=`<li>${i} * ${num} = ${i*num}</li>`
        }else{
            html+=`<li>${num} / ${i} = ${(num/i).toFixed(2)}</li>`
        }
    }
    postMessage(html)
}