  var date = new Date(); 
  var myDay = date.getDay();
  
console.log(myDay);

var weekday = ['Sunday', 'Monday', 'Tuesday', 
            'Wednesday', 'Thursday', 'Friday', 'Saturday' 
        ]; 
        document.getElementById("day").innerHTML="Happy " + weekday[myDay] + "💖"; 
         