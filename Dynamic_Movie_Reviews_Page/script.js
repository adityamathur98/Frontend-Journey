let reviewsContainerEl = document.getElementById("reviewsContainer");

let addBtnEl = document.getElementById("addBtn");
let titleInputEl = document.getElementById("titleInput");
let reviewTextareaEl = document.getElementById("reviewTextarea");

addBtnEl.onclick = function () {
  let titleInputValue = titleInputEl.value;
  let reviewTextareaValue = reviewTextareaEl.value;

  if (titleInputValue === "") {
    alert("Enter The Movie Title");
    return;
  }

  let movieTitle = document.createElement("h1");
  movieTitle.textContent = "Movie Title: " + titleInputValue;
  movieTitle.classList.add("movie-title");
  reviewsContainerEl.appendChild(movieTitle);

  let movieReviewEl = document.createElement("p");
  movieReviewEl.textContent = "Review: " + reviewTextareaValue;
  reviewsContainerEl.appendChild(movieReviewEl);

  let horizontalLine = document.createElement("hr");
  reviewsContainerEl.appendChild(horizontalLine);

  titleInputEl.value = "";
  reviewTextareaEl.value = "";
};
