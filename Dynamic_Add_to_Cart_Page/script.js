let cartItemTextInputEl = document.getElementById("cartItemTextInput");
let addBtnEl = document.getElementById("addBtn");

let cartItemsContainerEl = document.getElementById("cartItemsContainer");

addBtnEl.onclick = function () {
  let itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = cartItemTextInputEl.value;
  cartItemsContainerEl.appendChild(itemEl);
};
