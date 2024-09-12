// in one rotation there are 360 degrees
// 12 hour to complete 360 degree rotation => 1hour = 30 deg
// 60 mins to complete 360 degree rotation => 1min = 6 deg
// 60 sec to complete 360 degree rotation => 1sec = 6 deg

let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");


function clock() {

    let date = new Date();
    // console.log(date);

    let hr = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();

    hour.style.transform = `rotateZ(${hr * 30 + mins / 12}deg)`;
    minute.style.transform = `rotateZ(${mins * 6}deg)`;
    second.style.transform = `rotateZ(${sec * 6}deg)`;
}

clock()
setInterval(clock, 1000);