let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");

let timerTextEl = document.getElementById("timerText");

let secondLeft = 0;
let timerId;

function startCount() {
  if (secondLeft > 1) {
    secondLeft--;
    timerTextEl.textContent = secondLeft + " seconds left";
  } else {
    clearInterval(timerId);
    timerTextEl.textContent = "Your Moment is Complete";
  }
}

function setTimeAndShow() {
  timerTextEl.textContent = secondLeft + " seconds left";
  timerId = setInterval(startCount, 1000);
}

twentySecondsBtnEl.addEventListener("click", function () {
  secondLeft = 20;
  clearInterval(timerId);
  setTimeAndShow();
});

thirtySecondsBtnEl.addEventListener("click", function () {
  secondLeft = 30;
  clearInterval(timerId);
  setTimeAndShow();
});

fortySecondsBtnEl.addEventListener("click", function () {
  secondLeft = 40;
  clearInterval(timerId);
  setTimeAndShow();
});

oneMinuteBtnEl.addEventListener("click", function () {
  secondLeft = 60;
  clearInterval(timerId);
  setTimeAndShow();
});
