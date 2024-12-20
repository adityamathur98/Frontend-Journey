let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
  name: "Rahul",
  age: 25,
  gender: "Male",
};
let todos = [
  {
    todo: "Attending CCBP sessions",
    todoStatus: "Completed",
  },
  {
    todo: "Completing practice sets",
    todoStatus: "Not Completed",
  },
  {
    todo: "Asking doubts",
    todoStatus: "Completed",
  },
];

let valuesToString = [bikes, person, todos];

let jsonContainerEl = document.getElementById("jsonContainer");

function createAndAppendValue(stringifiedValue) {
  let containerEl = document.createElement("div");
  containerEl.classList.add("value-container");
  jsonContainerEl.appendChild(containerEl);

  let valueEl = document.createElement("span");
  valueEl.classList.add("stringify-container");
  valueEl.textContent = stringifiedValue;
  containerEl.appendChild(valueEl);
}

function convertToJsonString(value) {
  let stringifiedValue = JSON.stringify(value);
  createAndAppendValue(stringifiedValue);
}

for (let values of valuesToString) {
  convertToJsonString(values);
}
