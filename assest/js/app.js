const currentDay = document.getElementById("current_day");

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();

const day = weekDays[date.getDay()];
currentDay.innerHTML = day;



function updateDateTime() {

    const date = new Date();
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const currentUTC = document.getElementById("current_utc");

    const currentTime = `${hours}:${minutes}:${seconds} UTC`;
    currentUTC.innerHTML = currentTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);