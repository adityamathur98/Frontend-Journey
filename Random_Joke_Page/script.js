let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");

let spinnerEl = document.getElementById("spinner");

function getJoke() {
  spinnerEl.classList.toggle("d-none");
  let requestUrl = "https://apis.ccbp.in/jokes/random";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      spinnerEl.classList.toggle("d-none");
      let jokeText = jsonData.value;
      jokeTextEl.textContent = jokeText;
    });
}

jokeBtnEl.addEventListener("click", getJoke);
