let petsImageUrls = {
  dog: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png",
  cat: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-cat-img.png",
  parrot:
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-parrot-img.png",
  spider:
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-spider-img.png",
  rabbit:
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-rabbit-img.png",
};

let petSelectEl = document.getElementById("petSelect");
let petImgEl = document.getElementById("petImg");

function onChangeOption(event) {
  let userOptionValue = event.target.value;
  let selctedPetUrl = petsImageUrls[userOptionValue];
  petImgEl.src = selctedPetUrl;
}

petSelectEl.addEventListener("change", onChangeOption);
