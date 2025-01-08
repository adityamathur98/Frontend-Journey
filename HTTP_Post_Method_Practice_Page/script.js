let reuqestUrlEl = document.getElementById("reuqestUrl");
let requestBodyEl = document.getElementById("requestBody");
let requestStatusEl = document.getElementById("requestStatus");
let loadingEl = document.getElementById("loading");
let httpResponseEl = document.getElementById("httpResponse");

let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");

function addUserRequest() {
  let url = reuqestUrlEl.textContent;
  let option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 1f87e6b7419f6cbfc9b8a5fbf312a1b327ca4b9955b97e37083bfd285a04dcef",
    },
    body: requestBodyEl.value,
  };

  loadingEl.classList.toggle("d-none");

  fetch(url, option)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      loadingEl.classList.toggle("d-none");
      let responseCode = jsonData.code;
      let responseBody = JSON.stringify(jsonData);
      requestStatusEl.textContent = responseCode;
      httpResponseEl.textContent = responseBody;
    });
}

sendPostRequestBtnEl.addEventListener("click", addUserRequest);
