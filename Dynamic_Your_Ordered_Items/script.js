let itemList = [
  {
    itemName: "Veg Biryani",
    uniqueNo: 1,
  },
  {
    itemName: "Chicken 65",
    uniqueNo: 2,
  },
  {
    itemName: "Paratha",
    uniqueNo: 3,
  },
];

let orderedItemsContainerEl = document.getElementById("orderedItemsContainer");

let headingEl = document.createElement("h1");
headingEl.textContent = "Your Ordered Items";
headingEl.classList.add("text-center");
orderedItemsContainerEl.appendChild(headingEl);

let listContainerEl = document.createElement("ul");
listContainerEl.classList.add("unordered-list", "text-center");
orderedItemsContainerEl.appendChild(listContainerEl);

function deleteItem(id) {
  let itemEl = document.getElementById(id);
  listContainerEl.removeChild(itemEl);
}

function createAndAppendItem(item) {
  let name = item.itemName;
  let itemId = "item" + item.uniqueNo;
  let btnId = "button" + item.uniqueNo;

  let itemEl = document.createElement("li");
  itemEl.id = itemId;
  itemEl.classList.add("orderd-item");
  itemEl.textContent = name;
  listContainerEl.appendChild(itemEl);

  let buttonEl = document.createElement("button");
  buttonEl.textContent = "Cancel";
  buttonEl.classList.add("btn", "btn-danger", "ms-2");
  buttonEl.id = btnId;
  buttonEl.onclick = function () {
    deleteItem(itemId);
  };
  itemEl.appendChild(buttonEl);
}

for (let item of itemList) {
  createAndAppendItem(item);
}
