const hourHand = document.querySelector('.hand.hour');
const minuteHand = document.querySelector('.hand.minute');
const secondHand = document.querySelector('.hand.second');
const digitalClock = document.getElementById('digital-clock');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secondHand.style.setProperty('--rotation', secondsDegrees);

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    minuteHand.style.setProperty('--rotation', minutesDegrees);

    const hours = now.getHours() % 12;
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);
    hourHand.style.setProperty('--rotation', hoursDegrees);

    // Update digital clock
    digitalClock.textContent = now.toLocaleTimeString();
}

setInterval(setDate, 1000);
setDate(); // Initial call to set hands immediately
