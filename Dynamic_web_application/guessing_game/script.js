let userInputEl = document.getElementById("userInput");
let randomNum = Math.ceil(Math.random() * 100);
let gameResultEl = document.getElementById("gameResult");

function checkGuess() {
  let userValue = parseInt(userInputEl.value);
  if (userValue === randomNum) {
    gameResultEl.textContent = "Congrates, You Got it Right";
    gameResultEl.style.backgroundColor = "Green";
  } else if (userValue > randomNum) {
    gameResultEl.textContent = "Too High, Try Again";
    gameResultEl.style.backgroundColor = "#1e217c";
  } else if (userValue < randomNum) {
    gameResultEl.textContent = "Too Low, Try Again";
    gameResultEl.style.backgroundColor = "#1e217c";
  } else {
    gameResultEl.textContent = "Please, Enter Valid Input";
    gameResultEl.style.backgroundColor = "red";
  }
}
