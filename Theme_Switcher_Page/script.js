let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");
let themeUserInputEl = document.getElementById("themeUserInput");

function changeBg(event) {
  let keyValue = event.key;
  let userValue = themeUserInputEl.value;
  if (keyValue === "Enter") {
    if (userValue === "Light") {
      bgContainerEl.style.backgroundImage =
        "url(https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png)";
      headingEl.style.color = "#014d40";
    } else if (userValue === "Dark") {
      bgContainerEl.style.backgroundImage =
        "url(https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png)";
      headingEl.style.color = "#ffffff";
    } else {
      alert("Enter Valid Value");
    }
  }
}

themeUserInputEl.addEventListener("keydown", changeBg);
