let groceryItem = [
  "Milk",
  "Peanut Butter",
  "Tomato Sauce",
  "Cup Cake",
  "Biscuit",
  "Choco Chips",
];

let bgContainerEl = document.createElement("div");
bgContainerEl.classList.add("bg-container");
document.body.appendChild(bgContainerEl);

//Add Heading
let headingEl = document.createElement("h1");
headingEl.textContent = "Grocery List";
headingEl.classList.add("heading");
bgContainerEl.appendChild(headingEl);

//Add List Container
let listContainerEl = document.createElement("ul");
listContainerEl.classList.add("list-container");
bgContainerEl.appendChild(listContainerEl);

//Add Item
for (let item of groceryItem) {
  let listItemEl = document.createElement("li");
  listItemEl.textContent = item;
  listContainerEl.appendChild(listItemEl);
}

//Input El
let inputEl = document.createElement("input");
inputEl.type = "checkbox";
inputEl.id = "deliveryMode";
bgContainerEl.appendChild(inputEl);

//Label
let labelEl = document.createElement("label");
labelEl.setAttribute("for", "deliveryMode");
labelEl.classList.add("delivery-text");
labelEl.textContent = "Need for Delivery";
bgContainerEl.appendChild(labelEl);

let breakEl = document.createElement("br");
bgContainerEl.appendChild(breakEl);

//buttonEl
let buttonEl = document.createElement("button");
buttonEl.classList.add("btn", "btn-primary");
buttonEl.textContent = "Proceed to Pay";
bgContainerEl.appendChild(buttonEl);
