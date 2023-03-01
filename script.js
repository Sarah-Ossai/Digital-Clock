//create a function for the current time
setInterval (setTime, 1000)
function setTime() {
//get the date first
const d = new Date();
//get the current hour
let hours = d.getHours();
//display the hour
document.getElementById('hour').innerHTML = hours;

//get the current minute
let minutes = d.getMinutes();
//display the min
document.getElementById('min').innerHTML = minutes;

//get the current seconds
let seconds = d.getSeconds();
//display the seconds
document.getElementById('seconds').innerHTML = seconds;
}

