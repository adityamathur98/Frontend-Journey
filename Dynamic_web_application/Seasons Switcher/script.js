let seasonSmallImageEl = document.getElementById("seasonSmallImage");
let seasonMediumImageEl = document.getElementById("seasonMediumImage");

function changeImg(sectionId) {
  if (sectionId === "springBtn") {
    seasonSmallImageEl.src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
    seasonMediumImageEl.src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
  } else if (sectionId === "summerBtn") {
    seasonSmallImageEl.src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
    seasonMediumImageEl.src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
  } else if (sectionId === "autumnBtn") {
    seasonSmallImageEl.src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
    seasonMediumImageEl.src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
  } else {
    seasonSmallImageEl.src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
    seasonMediumImageEl.src =
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";
  }
}
