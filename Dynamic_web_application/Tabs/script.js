let aboutButtonEl = document.getElementById("aboutButton");
let timeToVisitButtonEl = document.getElementById("timeToVisitButton");
let attractionButtonEl = document.getElementById("attractionButton");

let aboutTabEl = document.getElementById("aboutTab");
let timeToVisitTabEl = document.getElementById("timeToVisitTab");
let attractionTabEl = document.getElementById("attractionTab");

timeToVisitTabEl.classList.add("d-none");
attractionTabEl.classList.add("d-none");

aboutButtonEl.onclick = function () {
  aboutTabEl.classList.remove("d-none");
  timeToVisitTabEl.classList.add("d-none");
  attractionTabEl.classList.add("d-none");

  aboutButtonEl.classList.add("selected-button");
  timeToVisitButtonEl.classList.remove("selected-button");
  attractionButtonEl.classList.remove("selected-button");
};

timeToVisitButtonEl.onclick = function () {
  aboutTabEl.classList.add("d-none");
  timeToVisitTabEl.classList.remove("d-none");
  attractionTabEl.classList.add("d-none");

  aboutButtonEl.classList.remove("selected-button");
  timeToVisitButtonEl.classList.add("selected-button");
  attractionButtonEl.classList.remove("selected-button");
};

attractionButtonEl.onclick = function () {
  aboutTabEl.classList.add("d-none");
  timeToVisitTabEl.classList.add("d-none");
  attractionTabEl.classList.remove("d-none");

  aboutButtonEl.classList.remove("selected-button");
  timeToVisitButtonEl.classList.remove("selected-button");
  attractionButtonEl.classList.add("selected-button");
};
