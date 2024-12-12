// let inputEl = document.createElement("input");
// inputEl.type = "checkbox";
// inputEl.id = "myCheckBox";
// document.body.appendChild(inputEl);

// let labelEl = document.createElement("label");
// labelEl.textContent = "Graduated";
// // labelEl.htmlFor = "myCheckBox";
// labelEl.setAttribute("for", "myCheckBox");
// document.body.appendChild(labelEl);
let todoList = [
  { text: "Learn HTML" },
  { text: "Learn CSS" },
  { text: "Learn JS" },
  { text: "Learn Bootstrap" },
];

let todoItemsContainerEl = document.getElementById("todoItemsContainer");

function createAndAppendTodo(todo) {
  let todoEl = document.createElement("li");
  todoEl.classList.add("todo-item-container", "d-flex", "flex-row");
  todoItemsContainerEl.appendChild(todoEl);
  console.log(todoItemsContainerEl);

  let inputEl = document.createElement("input");
  inputEl.id = "checkboxInput";
  inputEl.type = "checkbox";
  inputEl.classList.add("checkbox-input");
  todoEl.appendChild(inputEl);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoEl.appendChild(labelContainer);

  let labelEl = document.createElement("label");
  labelEl.setAttribute("for", "checkboxInput");
  labelEl.classList.add("checkbox-label");
  labelEl.textContent = todo.text;
  labelContainer.appendChild(labelEl);

  let deleteContainerEl = document.createElement("div");
  deleteContainerEl.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteContainerEl);

  let iconEl = document.createElement("i");
  iconEl.classList.add("far", "fa-trash-alt", "delete-icon");
  deleteContainerEl.appendChild(iconEl);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}
