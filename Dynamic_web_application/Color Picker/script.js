let backgroundEl = document.getElementById("colorPickerContainer");
let selectedColorEl = document.getElementById("selectedColorHexCode");

function changeBgColor(sectioId) {
  let bgColor = document.getElementById(sectioId).textContent;
  backgroundEl.style.backgroundColor = bgColor;
  selectedColorEl.textContent = bgColor;
  selectedColorEl.style.color = bgColor;
}
