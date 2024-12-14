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
  {
    text: "Learn HTML",
    uniqueNo: 1,
  },
  {
    text: "Learn CSS",
    uniqueNo: 2,
  },
  {
    text: "Learn JS",
    uniqueNo: 3,
  },
  {
    text: "Learn Bootstrap",
    uniqueNo: 4,
  },
];

let todosCount = todoList.length;

let addButtonEl = document.getElementById("addTodoButton");
let todoItemsContainerEl = document.getElementById("todoItemsContainer");

function onTodoStatusChange(checkboxId, labelId) {
  let checkboxEl = document.getElementById(checkboxId);
  console.log(checkboxEl.checked);

  let labelEl = document.getElementById(labelId);
  labelEl.classList.toggle("checked");
}

function removeTodo(todoId) {
  let todoEl = document.getElementById(todoId);
  todoItemsContainerEl.removeChild(todoEl);
}

function createAndAppendTodo(todo) {
  let todoId = "todo" + todo.uniqueNo;
  let checkboxId = "checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;
  let todoText = todo.text;

  let todoEl = document.createElement("li");
  todoEl.classList.add("todo-item-container", "d-flex", "flex-row");
  todoEl.id = todoId;
  todoItemsContainerEl.appendChild(todoEl);

  let inputEl = document.createElement("input");
  inputEl.id = checkboxId;
  inputEl.onclick = function () {
    onTodoStatusChange(checkboxId, labelId);
  };
  inputEl.type = "checkbox";
  inputEl.classList.add("checkbox-input");
  todoEl.appendChild(inputEl);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoEl.appendChild(labelContainer);

  let labelEl = document.createElement("label");
  labelEl.setAttribute("for", checkboxId);
  labelEl.id = labelId;
  labelEl.classList.add("checkbox-label");
  labelEl.textContent = todoText;
  labelContainer.appendChild(labelEl);

  let deleteContainerEl = document.createElement("div");
  deleteContainerEl.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteContainerEl);

  let iconEl = document.createElement("i");
  iconEl.classList.add("far", "fa-trash-alt", "delete-icon");
  iconEl.onclick = function () {
    removeTodo(todoId);
  };
  deleteContainerEl.appendChild(iconEl);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}

function addTodo() {
  let userInputEl = document.getElementById("todoUserInput");
  let userInputValue = userInputEl.value;

  if (userInputValue === "") {
    alert("Enter Valid Text");
    return;
  }

  todosCount = todosCount + 1;
  let newTodo = {
    text: userInputValue,
    uniqueNo: todosCount,
  };
  createAndAppendTodo(newTodo);
  userInputEl.textContent = "";
}

addButtonEl.onclick = function () {
  addTodo();
};
