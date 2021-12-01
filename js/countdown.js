// Set the date we're counting down to
var schedDate= new Date("Dec 5, 2021 15:37:25").getTime();
var timeLeft

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var timeDiff = schedDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  //if days 
  //timeLeft = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  //document.getElementById("timeLeft").innerHTML = timeLeft
    
  // If the count down is over, write some text 
  if (timeDiff < 0) {
    clearInterval(x);
    document.getElementById("timeLeft").innerHTML = "EXPIRED";
  }
}, 30000);
