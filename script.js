// let timeDisplay=document.getElementById("timeDisplay");

function displayTime(){
    let time = new Date();
    let hours = time.getHours();
    let h = hours < 10 ? "0"+ hours : hours;
    let minutes = time.getMinutes();
    let m = minutes < 10 ? "0"+ minutes : minutes;
    let seconds = time.getSeconds();
    let s = seconds < 10 ? "0"+ seconds : seconds;
    timeDisplay.innerHTML = h+ ":"+ m+":"+ s;
}
setInterval(displayTime,1000);