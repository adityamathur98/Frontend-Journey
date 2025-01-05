let hourInputEl = document.getElementById("hourInput");
let minutesInputEl = document.getElementById("minutesInput");

let convertBtnEl = document.getElementById("convertBtn");

let timeInSecondsEl = document.getElementById("timeInSeconds");
let errorMsgEl = document.getElementById("errorMsg");

function showSeconds(hour, minute) {
  let seconds = hour * 3600 + minute * 60;
  timeInSecondsEl.textContent = seconds + "s";
  timeInSecondsEl.classList.remove("d-none");
}

function showResult(event) {
  timeInSecondsEl.classList.add("d-none");
  if (hourInputEl.value === "") {
    errorMsgEl.textContent = "Please enter valid Number of Hours";
  } else if (minutesInputEl.value === "") {
    errorMsgEl.textContent = "Please enter valid Number of Minutes";
  } else {
    errorMsgEl.textContent = "";
    let hour = parseInt(hourInputEl.value);
    let minute = parseInt(minutesInputEl.value);

    showSeconds(hour, minute);
  }
}

convertBtnEl.addEventListener("click", showResult);
