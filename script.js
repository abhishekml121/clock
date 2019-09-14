const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
//console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
// console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = sec * 360 / 60;

var circle = document.getElementsByClassName('circle');

var analog_div = document.getElementById("analog");
var analog = document.querySelector('#analog p');
var shyn = document.querySelector('.hour-marks');

function runTheClock() {

    hrPosition = hrPosition + (3 / 360);
    minPosition = minPosition + (6 / 60);
    secPosition = secPosition + 6;

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";

    let d = new Date();
    if (d.getSeconds() !== 0) {
        circle[0].style.stroke = "#000";
        analog_div.style.background = "linear-gradient(to right, lightgreen , yellow)";
        shyn.style.stroke = "#000";

    } else {
        circle[0].style.stroke = "#fcaf3e";
        analog_div.style.background = "linear-gradient(to left, #fcaf3e , yellow)";
        analog_div.style.transition = 'background .5s ease-in-out;';
        shyn.style.stroke = "#fcaf3e";
    }
    analog.innerHTML = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
}

var interval = setInterval(runTheClock, 1000);