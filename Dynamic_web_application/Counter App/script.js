let counterEl = document.getElementById("counterValue");
function onDecrease() {
  let prevValue = counterEl.textContent;
  let updatedValue = parseInt(prevValue) - 1;
  counterEl.textContent = updatedValue;
  if (updatedValue > 0) {
    counterEl.style.color = "green";
  } else if (updatedValue < 0) {
    counterEl.style.color = "red";
  } else {
    counterEl.style.color = "black";
  }
}

function onIncrease() {
  let prevValue = counterEl.textContent;
  let updatedValue = parseInt(prevValue) + 1;
  counterEl.textContent = updatedValue;
  if (updatedValue > 0) {
    counterEl.style.color = "green";
  } else if (updatedValue < 0) {
    counterEl.style.color = "red";
  } else {
    counterEl.style.color = "black";
  }
}

function onReset() {
  let updatedValue = 0;
  counterEl.textContent = updatedValue;
  counterEl.style.color = "black";
}
