let imageEl = document.getElementById("image");
let imageWidthEl = document.getElementById("imageWidth");
let warningMessageEl = document.getElementById("warningMessage");

let maxImageWidth = 300;
let defaultImageWidth = 200;
let minImageWidth = 100;

imageWidthEl.textContent = defaultImageWidth + "px";

imageEl.style.width = defaultImageWidth + "px";

function incrementSize() {
  if (defaultImageWidth >= maxImageWidth) {
    warningMessageEl.textContent = "Too big. Decrease the Size of Image";
  } else {
    defaultImageWidth = defaultImageWidth + 5;
    let updatedImageWidth = defaultImageWidth + "px";

    warningMessageEl.textContent = "";
    imageEl.style.width = updatedImageWidth;
    imageWidthEl.textContent = updatedImageWidth;
  }
}

function decrementSize() {
  if (defaultImageWidth <= minImageWidth) {
    warningMessageEl.textContent = "Too Small. Increase the size of Image";
  } else {
    defaultImageWidth = defaultImageWidth - 5;
    let updatedImageWidth = defaultImageWidth + "px";

    warningMessageEl.textContent = "";
    imageEl.style.width = updatedImageWidth;
    imageWidthEl.textContent = updatedImageWidth;
  }
}
