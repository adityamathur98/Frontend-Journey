let profileDetails = {
  imgSrc:
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
  name: "RAHUL ATTULURI",
  age: 25,
};

let profileContainerEl = document.getElementById("profileContainer");
let imgContainerEl = document.getElementById("imgContainer");

profileContainerEl.classList.add(
  "d-flex",
  "flex-column",
  "justify-content-center",
  "text-center"
);

let imgEl = document.createElement("img");
imgEl.src = profileDetails.imgSrc;
imgContainerEl.appendChild(imgEl);

let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = profileDetails.name;
profileContainerEl.appendChild(headingEl);

let paraEl = document.createElement("p");
paraEl.textContent = "Age : " + profileDetails.age;
paraEl.classList.add("para");
profileContainerEl.appendChild(paraEl);
