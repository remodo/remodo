const d = new Date();

var dayArr = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dayOfWeek = dayArr[d.getDay()];
document.getElementById("dayOfWeek").innerHTML = "Today is " + dayOfWeek;
