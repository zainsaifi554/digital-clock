
var hours = document.getElementById("hours");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

setInterval(() => {

    var time = new Date(); 

    if (time.getHours < 12) {

        hours.innerText = time.getHours();
        min.innerText = time.getMinutes();
        sec.innerText = time.getSeconds() +":" + "AM";
        
    }
    else {
        hours.innerText = time.getHours()-12;
        min.innerText = time.getMinutes();
        sec.innerText = time.getSeconds()+":" + "PM";

    }

}, 1000);