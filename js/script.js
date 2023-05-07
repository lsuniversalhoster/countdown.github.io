const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

let secValue = 11,
  minValue = 2,
  hourValue = 2,
  dayValue = 20;

// überprüfen, ob im localStorage bereits ein Countdown-Wert gespeichert wurde
if (localStorage.getItem("countdown")) {
  // den Wert aus dem localStorage laden
  const countdown = JSON.parse(localStorage.getItem("countdown"));
  secValue = countdown.seconds;
  minValue = countdown.minutes;
  hourValue = countdown.hours;
  dayValue = countdown.days;
}

const timeFunction = setInterval(() => {
  secValue--;

  if (secValue === 0) {
    minValue--;
    secValue = 60;
  }
  if (minValue === 0) {
    hourValue--;
    minValue = 60;
  }
  if (hourValue === 0) {
    dayValue--;
    hourValue = 24;
  }

  if (dayValue === 0) {
    clearInterval(timeFunction);
  }
  
  // den aktuellen Countdown-Wert im localStorage speichern
  const countdown = {
    seconds: secValue,
    minutes: minValue,
    hours: hourValue,
    days: dayValue,
  };
  localStorage.setItem("countdown", JSON.stringify(countdown));

  seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
  minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
  hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
  days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000); //1000ms = 1s
