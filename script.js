const form = document.querySelector("form");

const startTimer = () => {
  let timer = choice.value;
  let totalseconds;

  totalseconds = timer * 60;

  let minutes = Math.floor(totalseconds / 60);
  let seconds = totalseconds % 60;

  const interval = setInterval(() => {
    timerDisplay(minutes, seconds);
    if (seconds >= 10) display.innerHTML = `<h1>${minutes}:${seconds}</h1>`;
    else display.innerHTML = `<h1>${minutes}:0${seconds}</h1>`;

    if (seconds === 0) {
      seconds = 60;
      minutes--;
    }

    if (minutes < 0) {
      clearInterval(interval);
      display.innerHTML = `<h1> Terminé !`;
    }
    seconds--;
  }, 1000);
};

const timerDisplay = (min, sec) => {};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  startTimer();
});
