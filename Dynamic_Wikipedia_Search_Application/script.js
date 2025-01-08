let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
  let { title, link, description } = result;

  let resultItemEl = document.createElement("div");
  resultItemEl.classList.add("result-item");
  searchResultsEl.appendChild(resultItemEl);

  let titleEl = document.createElement("a");
  titleEl.href = link;
  titleEl.target = "_blank";
  titleEl.textContent = title;
  titleEl.classList.add("result-title");
  resultItemEl.appendChild(titleEl);

  let titleBreakEl = document.createElement("br");
  resultItemEl.appendChild(titleBreakEl);

  let urlEl = document.createElement("a");
  urlEl.classList.add("result-url");
  urlEl.href = link;
  urlEl.target = "_blank";
  urlEl.textContent = link;
  resultItemEl.appendChild(urlEl);

  let lineBreakEl = document.createElement("br");
  resultItemEl.appendChild(lineBreakEl);

  let descriptionEl = document.createElement("p");
  descriptionEl.classList.add("link-description");
  descriptionEl.textContent = description;
  resultItemEl.appendChild(descriptionEl);
}

function displayResults(searchResults) {
  spinnerEl.classList.toggle("d-none");
  for (let result of searchResults) {
    createAndAppendSearchResult(result);
  }
}

function searchWikipidia(event) {
  if (event.key === "Enter") {
    spinnerEl.classList.toggle("d-none");
    searchResultsEl.textContent = "";
    let searchValue = searchInputEl.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchValue;
    let options = {
      method: "GET",
    };
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let { search_results } = jsonData;
        displayResults(search_results);
      });
  }
}

searchInputEl.addEventListener("keydown", searchWikipidia);
