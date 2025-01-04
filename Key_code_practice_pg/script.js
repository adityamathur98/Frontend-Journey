let userInputEl = document.getElementById("userInput");
let keyCodeListEl = document.getElementById("keyCodeList");

function addKeyCode(event) {
  let keyCode = event.keyCode;

  let listItem = document.createElement("li");
  listItem.textContent = keyCode;
  keyCodeListEl.appendChild(listItem);
}

userInputEl.addEventListener("keydown", addKeyCode);
