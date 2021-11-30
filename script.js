function display_ct7() {
var d = new Date()
var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
hours = x.getHours( ) % 12;
hours = hours ? hours : 12;
hours=hours.toString().length==1? 0+hours.toString() : hours;

var minutes=x.getMinutes().toString()
minutes=minutes.length==1 ? 0+minutes : minutes;

var seconds=x.getSeconds().toString()
seconds=seconds.length==1 ? 0+seconds : seconds;

var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayArr = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


let dayOfWeek = dayArr[d.getDay()];
document.getElementById("dayOfWeek").innerHTML = "Today is " + dayOfWeek;

function display_c7(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct7()',refresh)
}