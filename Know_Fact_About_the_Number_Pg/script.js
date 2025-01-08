let userInputEl = document.getElementById("userInput");
let spinnerEl = document.getElementById("spinner");
let factEl = document.getElementById("fact");

function getNumberFact(value) {
  spinnerEl.classList.toggle("d-none");
  factEl.classList.toggle("d-none");
  let url = `https://apis.ccbp.in/numbers-fact?number=${value}`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      spinnerEl.classList.toggle("d-none");
      factEl.classList.toggle("d-none");
      factEl.textContent = jsonData.fact;
    });
}

function getFact(event) {
  if (event.key === "Enter") {
    let userValue = event.target.value;

    if (userValue === "") {
      alert("Enter A Number");
      return;
    }

    getNumberFact(userValue);
  }
}

userInputEl.addEventListener("keyup", getFact);
