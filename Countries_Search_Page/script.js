let searchInputEl = document.getElementById("searchInput");
let resultCountriesEl = document.getElementById("resultCountries");

let spinnerEl = document.getElementById("spinner");

let searchValue = "";
let countryList = [];

function createAndAppendCountry(countryObj) {
  let { name, flag, population } = countryObj;

  let itemContainer = document.createElement("div");
  itemContainer.classList.add(
    "col-11",
    "col-md-5",
    "me-auto",
    "ms-auto",
    "d-flex",
    "flex-row",
    "country-card"
  );
  resultCountriesEl.appendChild(itemContainer);

  let imgEl = document.createElement("img");
  imgEl.src = `${flag}`;
  imgEl.classList.add("country-flag", "mt-auto", "mb-auto");
  itemContainer.appendChild(imgEl);

  let textContainer = document.createElement("div");
  textContainer.classList.add("ms-4", "d-flex", "flex-column");
  itemContainer.appendChild(textContainer);

  let nameEl = document.createElement("h1");
  nameEl.textContent = name;
  nameEl.classList.add("country-name");
  textContainer.appendChild(nameEl);

  let populationEl = document.createElement("p");
  populationEl.textContent = population;
  populationEl.classList.add("country-population");
  textContainer.appendChild(populationEl);
}

function displaySearchResult() {
  resultCountriesEl.textContent = "";
  for (let country of countryList) {
    let countryName = country.name;
    if (countryName.includes(searchValue)) {
      createAndAppendCountry(country);
    }
  }
}

function getCountries() {
  spinnerEl.classList.toggle("d-none");
  let url = "https://apis.ccbp.in/countries-data";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      spinnerEl.classList.toggle("d-none");
      countryList = jsonData;
      displaySearchResult();
    });
}

function onChangeSearchInput(event) {
  searchValue = event.target.value;
  displaySearchResult();
}

getCountries();
searchInputEl.addEventListener("keyup", onChangeSearchInput);
