let requestUrlEl = document.getElementById("requestUrl");
let userInputEl = document.getElementById("userInput");

let sendDeleteRequestBtnEl = document.getElementById("sendDeleteRequestBtn");

let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

let loadingEl = document.getElementById("loading");

function deleteUser() {
  let userId = userInputEl.value;
  console.log(userId);
  let url = `https://gorest.co.in/public-api/users/${userId}`;
  let option = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 1f87e6b7419f6cbfc9b8a5fbf312a1b327ca4b9955b97e37083bfd285a04dcef",
    },
  };
  loadingEl.classList.toggle("d-none");

  fetch(url, option)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      loadingEl.classList.toggle("d-none");
      let httpStatusCode = jsonData.code;
      let httpResponseData = JSON.stringify(jsonData);

      requestStatusEl.textContent = httpStatusCode;
      httpResponseEl.textContent = httpResponseData;
    });
}

sendDeleteRequestBtnEl.addEventListener("click", deleteUser);
