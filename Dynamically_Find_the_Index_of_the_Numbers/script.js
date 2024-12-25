let numbers = [17, 31, 77, 20, 63];

let userInputEl = document.getElementById("userInput");

let indexOfNumberEl = document.getElementById("indexOfNumber");

function findIndexOfNumber() {
  let userValue = userInputEl.value;
  let index = numbers.findIndex(function (eachValue) {
    if (eachValue == userValue) {
      return true;
    } else {
      return false;
    }
  });
  indexOfNumberEl.textContent = index;
}
