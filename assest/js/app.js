let currentDay = document.getElementById("current_day");

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date();

let day = weekDays[date.getDay()];
currentDay.innerHTML = day;

//let hour = date.getUTCHours();
//let minutes = date.getUTCMinutes();
//let seconds = date.getUTCSeconds();
//let currentUTCTime = document.getElementById("current_utc");
//currentUTCTime.innerHTML = date.getTime();


function updateUTCTime() {
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    let seconds = String(now.getUTCSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current_utc').innerHTML = currentTime+ ' UTC';
}

updateUTCTime();
setInterval(updateUTCTime, 60000);

