var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var seconds = document.getElementById('seconds');

var clock = setInterval(
    function time() {
        var date_now = new Date();
        var hr = date_now.getHours();
        var min = date_now.getMinutes();
        var sec = date_now.getSeconds();

        var period = "AM";

        // logic for AM/PM determination
        if (hr == 0) {
            hr = 12;  // Midnight is 12 AM
        } else if (hr == 12) {
            period = "PM";  // Noon is 12 PM
        } else if (hr > 12) {
            hr = hr - 12;  // Convert to 12-hour format
            period = "PM";  // Afternoon/evening are PM
        }

        // addin leading zero 
        // for eg : display 09 instead of 9
        if (hr < 10) {
            hr = "0" + hr;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }


        hour.textContent = hr;
        minute.textContent = min;
        seconds.textContent = sec;

        ampm.textContent = period;
    }, 1000
);