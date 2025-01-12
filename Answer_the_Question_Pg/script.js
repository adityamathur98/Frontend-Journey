let answerData = {
  answer: "Delhi",
  selectedCity: null,
};

let questionsFormEl = document.getElementById("questionsForm");

let idHyderabadEl = document.getElementById("idHyderabad");
idHyderabadEl.addEventListener("change", function (event) {
  answerData.selectedCity = event.target.value;
});

let idChennaiEl = document.getElementById("idChennai");
idChennaiEl.addEventListener("change", function (event) {
  answerData.selectedCity = event.target.value;
});

let idDelhiEl = document.getElementById("idDelhi");
idDelhiEl.addEventListener("change", function (event) {
  answerData.selectedCity = event.target.value;
});

let idMumbaiEl = document.getElementById("idMumbai");
idMumbaiEl.addEventListener("change", function (event) {
  answerData.selectedCity = event.target.value;
});

let resultMsgEl = document.getElementById("resultMsg");

function validAnswer() {
  let { answer, selectedCity } = answerData;
  if (selectedCity === null) {
    resultMsgEl.textContent = "Please Select the Answer!";
    resultMsgEl.style.color = "red";
  } else if (selectedCity === answer) {
    resultMsgEl.textContent = "Correct Answer!";
    resultMsgEl.style.color = "green";
  } else {
    resultMsgEl.textContent = "Wrong Answer!";
    resultMsgEl.style.color = "red";
  }
}

questionsFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  validAnswer();
});
