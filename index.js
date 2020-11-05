

let h = 0;
let m = 0;
let s = 0;
let status="start";
let interval;
function start(){
    s++;
    if(s===60){
        s=0;
        m++;
    }

    if(m===60){
        m=0;
        h++;
    }
    let ss=''+s;
    let mm=''+m;
    let hh=''+h;
    if(s<10){
        ss='0'+s;
    }
    if(m<10){
        mm='0'+m;
    }
    if(h<10){
        hh='0'+h;
    }
document.getElementById("display").textContent=hh+" : "+mm+" : "+ss;
}


document.getElementById("start").addEventListener('click',e=>{
    if(status==="start"){
      interval=  window.setInterval(start,1000);
        status="stop";
        e.target.textContent="stop";
    }
    else{
        window.clearInterval(interval);
        status="start";
        e.target.textContent="start";
    }
});


document.getElementById("reset").addEventListener('click',e=>{
    window.clearInterval(interval);
    document.getElementById("start").textContent="start";
    s=0;
    h=0;
    m=0;
    document.getElementById("display").textContent=0+"0 : "+0+"0 : 0"+0;
    status="start";
    

});


