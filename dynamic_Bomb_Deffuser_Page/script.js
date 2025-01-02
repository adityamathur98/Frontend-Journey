let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");

let counter = parseInt(timerEl.textContent);
let uniqueId = null;

defuserEl.addEventListener("keydown", defuseFunction);

uniqueId = setInterval(function () {
  counter--;
  timerEl.textContent = counter;

  if (counter === 0) {
    timerEl.textContent = "BOOM";
    clearInterval(uniqueId);
  }
}, 1000);

function defuseFunction(event) {
  let boomDefuseText = event.target.value;
  if (boomDefuseText === "defuse" && event.key === "Enter" && counter !== 0) {
    timerEl.textContent = "You Did it";
    clearInterval(uniqueId);
  }
}
