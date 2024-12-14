let recipeObj = {
  title: "Tomato Pasta",
  imgSrc:
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
  ingredients: [
    "Pasta",
    "Oil",
    "Onions",
    "Salt",
    "Tomato Pasta Sauce",
    "Cheese",
  ],
};

let recipeTitleEl = document.getElementById("recipeTitle");
recipeTitleEl.textContent = recipeObj.title;

let recipeImgEl = document.getElementById("recipeImg");
recipeImgEl.src = recipeObj.imgSrc;

let ingredientsEl = document.getElementById("ingredients");

for (let ingredient of recipeObj.ingredients) {
  let ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("list-item");
  ingredientsEl.appendChild(ingredientEl);
}
