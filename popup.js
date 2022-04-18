let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timeRef = document.querySelector('.timerDisplay');
let int;

document.getElementById('startTimer').addEventListener('click',()=>{
    int = setInterval(displayTimer,1000);
    document.querySelector(".start").disabled = true;
});

document.getElementById('pauseTimer').addEventListener('click',()=>{
    clearInterval(int);
    document.querySelector(".start").disabled = false;
});

document.getElementById('resetTimer').addEventListener('click',()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timeRef.innerHTML = '00 : 00 : 00';
});

function displayTimer(){
   seconds+=1;
   if(seconds==60){
    seconds=0;
    minutes++;
    if(minutes==60){
        minutes=0;
        hours++;
    }
}
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes<10 ? "0" + minutes : minutes;
    let s = seconds<10 ? "0" + seconds : seconds;
    timeRef.innerHTML = ` ${h} : ${m} : ${s}` ; 
}