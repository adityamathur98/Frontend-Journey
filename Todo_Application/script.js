// let inputEl = document.createElement("input");
// inputEl.type = "checkbox";
// inputEl.id = "myCheckBox";
// document.body.appendChild(inputEl);

// let labelEl = document.createElement("label");
// labelEl.textContent = "Graduated";
// // labelEl.htmlFor = "myCheckBox";
// labelEl.setAttribute("for", "myCheckBox");
// document.body.appendChild(labelEl);
function getTodoListFromLocalStorage() {
  let stringifiedList = localStorage.getItem("todoList");
  let parsedList = JSON.parse(stringifiedList);

  if (parsedList === null) {
    return [];
  } else {
    return parsedList;
  }
}

let todoList = getTodoListFromLocalStorage();

let todosCount = todoList.length;

let addButtonEl = document.getElementById("addTodoButton");
let todoItemsContainerEl = document.getElementById("todoItemsContainer");
let saveTodoButtonEl = document.getElementById("saveTodoButton");

function onTodoStatusChange(checkboxId, labelId, todoId) {
  let checkboxEl = document.getElementById(checkboxId);
  let labelEl = document.getElementById(labelId);
  labelEl.classList.toggle("checked");

  let todoObjIndex = todoList.findIndex(function (eachTodo) {
    let eachTodoId = "todo" + eachTodo.uniqueNo;
    if (eachTodoId === todoId) {
      return true;
    } else {
      return false;
    }
  });

  let todoObj = todoList[todoObjIndex];

  if (todoObj.isChecked === true) {
    todoObj.isChecked = false;
  } else {
    todoObj.isChecked = true;
  }
}

function removeTodo(todoId) {
  let todoEl = document.getElementById(todoId);
  todoItemsContainerEl.removeChild(todoEl);

  let deletedElIndex = todoList.findIndex(function (eachTodo) {
    let eachTodoId = "todo" + eachTodo.uniqueNo;
    if (eachTodoId === todoId) {
      return true;
    } else {
      return false;
    }
  });
  todoList.splice(deletedElIndex, 1);
}

saveTodoButtonEl.onclick = function () {
  let stringifiedList = JSON.stringify(todoList);
  localStorage.setItem("todoList", stringifiedList);
};

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
  inputEl.checked = todo.isChecked;
  inputEl.onclick = function () {
    onTodoStatusChange(checkboxId, labelId, todoId);
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
  if (todo.isChecked) {
    labelEl.classList.add("checked");
  }
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
    isChecked: false,
  };
  todoList.push(newTodo);
  createAndAppendTodo(newTodo);
  userInputEl.value = "";
}

addButtonEl.onclick = function () {
  addTodo();
};
