let currentDay = document.getElementById("current_day");

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date();

let day = weekDays[date.getDay()];
currentDay.innerHTML = day;


let currentUTCTime = document.getElementById("current_utc");
currentUTCTime.innerHTML = date.getTime();