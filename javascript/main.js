// const timer = document.getElementById("timer");
// const timerDays = document.getElementById("days");
// const timerHours = document.getElementById("hours");
// const timerMinutes = document.getElementById("minutes");
// const timerSeconds = document.getElementById("seconds");

const timer = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
}

// Set the date we're counting down to
let countDownDate = new Date("Oct 17, 2021 08:00:00").getTime();

const getCountdownTime = function() {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    timer.days.innerHTML = days;
    timer.hours.innerHTML = hours;
    timer.minutes.innerHTML = minutes;
    timer.seconds.innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        // timer.innerHTML = "EXPIRED";
    }
}

getCountdownTime();

// Update the count down every 1 second
setInterval(getCountdownTime, 1000);