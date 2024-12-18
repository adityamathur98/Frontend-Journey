let couterValueEl = document.getElementById("couterValue");
let incrementBtnEl = document.getElementById("incrementBtn");

let clickCount = localStorage.getItem("clickCount");

if (clickCount === null) {
  couterValueEl.textContent = 0;
} else {
  couterValueEl.textContent = clickCount;
}

incrementBtnEl.onclick = function () {
  let prevValue = couterValueEl.textContent;
  let updatedValue = parseInt(prevValue) + 1;
  couterValueEl.textContent = updatedValue;
  localStorage.setItem("clickCount", updatedValue);
};
