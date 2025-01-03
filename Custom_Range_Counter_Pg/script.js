let startBtnEl = document.getElementById("startBtn");
let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let counterTextEl = document.getElementById("counterText");

function startCounter(fromValue, toValue) {
  let counter = fromValue;
  counterTextEl.textContent = counter;
  let intervalId = setInterval(function () {
    counterTextEl.textContent = counter;
    counter++;

    if (counter > toValue) {
      clearInterval(intervalId);
    }
  }, 1000);
}

function startTimer() {
  let userFromValue = fromUserInputEl.value;
  let toUserValue = toUserInputEl.value;

  if (userFromValue === "") {
    alert("Please Enter From Value");
    return;
  }

  if (toUserValue === "") {
    alert("Please Enter To Value");
    return;
  }

  let fromValue = parseInt(userFromValue);
  let toValue = parseInt(toUserValue);

  startCounter(fromValue, toValue);
}

startBtnEl.addEventListener("click", startTimer);
