let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInputEl = document.getElementById("startIndexInput");
let deleteCountInputEl = document.getElementById("deleteCountInput");
let itemToAddInputEl = document.getElementById("itemToAddInput");

let spliceBtnEl = document.getElementById("spliceBtn");

let updatedArrayEl = document.getElementById("updatedArray");

function convertToJsonStringAndAppend(arr) {
  let stringifiedArr = JSON.stringify(arr);
  updatedArrayEl.textContent = stringifiedArr;
}

convertToJsonStringAndAppend(arr);

spliceBtnEl.onclick = function () {
  let startIndex = startIndexInputEl.value;
  let deleteCount = deleteCountInputEl.value;
  let itemToAdd = itemToAddInputEl.value;

  if (startIndex === "") {
    alert("Enter the Start Index");
    return;
  }

  if (deleteCount === "") {
    deleteCount = 0;
  }
  if (itemToAdd === "") {
    arr.splice(parseInt(startIndex), parseInt(deleteCount));
  } else {
    arr.splice(parseInt(startIndex), parseInt(deleteCount), itemToAdd);
  }
  startIndexInputEl.value = "";
  deleteCountInputEl.value = "";
  itemToAddInputEl.value = "";
  convertToJsonStringAndAppend(arr);
};
