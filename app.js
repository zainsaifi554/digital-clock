
// var hours = document.getElementById("hours");
// var min = document.getElementById("min");
// var sec = document.getElementById("sec");
// var amPm = document.getElementById("amPm");
// setInterval(() => {

//     var time = new Date(); 

//     if (time.getHours <=13) {
   

//         hours.innerText = time.getHours();
//         min.innerText = time.getMinutes();
//         sec.innerText = time.getSeconds() +":" + "AM"; 
        
//     }


//     else {
//         hours.innerText = time.getHours()-12;
//         min.innerText = time.getMinutes();
//         sec.innerText = time.getSeconds()+":" + "PM";

//     }
    

// }, 1000);

var hours = document.getElementById("hours");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var amPm = document.getElementById("amPm");

setInterval(() => {
    var time = new Date(); 
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var format;

    // Determine AM/PM
    if (h < 12) {
        format = "AM";
    } else {
        format = "PM";
    }

    // Convert to 12-hour format
    if (h > 12) {
        h = h - 12;
    } else if (h === 0) {
        h = 12; // Midnight case
    }

    // Add leading zero for hours
    if (h < 10) {
        hours.innerText = "0" + h;
    } else {
        hours.innerText = h;
    }

    // Add leading zero for minutes
    if (m < 10) {
        min.innerText = "0" + m;
    } else {
        min.innerText = m;
    }

    // Add leading zero for seconds
    if (s < 10) {
        sec.innerText = "0" + s;
    } else {
        sec.innerText = s;
    }

    // Set AM/PM separately
    amPm.innerText = format;

}, 1000);
