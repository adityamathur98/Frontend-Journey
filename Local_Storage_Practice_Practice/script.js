let textAreaEl = document.getElementById("msg");
let saveBtn = document.getElementById("saveBtn");
let clearBtnEl = document.getElementById("clearBtn");

let storageKey = "userInput";

saveBtn.onclick = function () {
  let userValue = textAreaEl.value;
  localStorage.setItem(storageKey, userValue);
};

clearBtnEl.onclick = function () {
  textAreaEl.value = "";
  localStorage.removeItem(storageKey);
};

let storedValue = localStorage.getItem(storageKey);

textAreaEl.value = storedValue;

if (storedValue === null) {
  textAreaEl.value = "";
} else {
  textAreaEl.value = storedValue;
}
