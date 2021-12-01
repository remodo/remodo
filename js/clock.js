function displayPage() {
const now = new Date();

var dayArr = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dayOfWeek = dayArr[now.getDay()];
document.getElementById("dayOfWeek").innerHTML = dayOfWeek;

let ampm = now.getHours() >= 12 ? ' PM' : ' AM';
let hr = now.getHours() % 12;
//let hr = hr.toString().length == 1 ? 0 + hr.toString() : hr;
let min = now.getMinutes();
//let min = min.toString().length == 1 ? 0 + min.toString() : min;
//let sec = now.getSeconds();
//let sec = sec.toString().length == 1 ? 0 + sec.toString() : sec;
//let time12 = hr + ":" + min + ":" + sec + " " + ampm;
let time12 = hr + ":" + min + ampm;
document.getElementById("time12").innerHTML = time12;
refreshPage();
}

function refreshPage(){
    var refresh = 30000; // Refresh rate in milli seconds
    mytime = setTimeout('displayPage()',refresh)
}
    
