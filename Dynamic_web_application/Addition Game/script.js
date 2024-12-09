let firstNumberEl = document.getElementById("firstNumber");
let secondNumberEl = document.getElementById("secondNumber");
let userInputEl = document.getElementById("userInput");
let gameResultEl = document.getElementById("gameResult");

let checkButtonEl = document.getElementById("checkButton");
let restartButtonEl = document.getElementById("restartButton");

let successMsg = "Congratulation!, You Got it Right.";
let failureMsg = "Please Try Again!";

firstNumberEl.textContent = Math.ceil(Math.random() * 100);
secondNumberEl.textContent = Math.ceil(Math.random() * 100);

checkButtonEl.onclick = function () {
  let sum_Of_Num =
    parseInt(firstNumberEl.textContent) + parseInt(secondNumberEl.textContent);
  let userValue = userInputEl.value;

  if (sum_Of_Num == userValue) {
    gameResultEl.textContent = successMsg;
    gameResultEl.style.backgroundColor = "#028a0f";
  } else {
    gameResultEl.textContent = failureMsg;
    gameResultEl.style.backgroundColor = "#1e217c";
  }
};

restartButtonEl.onclick = function () {
  firstNumberEl.textContent = Math.ceil(Math.random() * 100);
  secondNumberEl.textContent = Math.ceil(Math.random() * 100);
  gameResultEl.textContent = "";
  userInputEl.value = "";
};
