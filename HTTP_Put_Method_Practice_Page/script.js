let userInputEl = document.getElementById("userInput");
let requestBodyEl = document.getElementById("requestBody");
let sendPutRequestBtnEl = document.getElementById("sendPutRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let loadingEl = document.getElementById("loading");
let httpResponseEl = document.getElementById("httpResponse");

function updateDetail() {
  let userId = userInputEl.value;
  let url = `https://gorest.co.in/public-api/users/${userId}`;
  let requestBody = requestBodyEl.value;
  let option = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 1f87e6b7419f6cbfc9b8a5fbf312a1b327ca4b9955b97e37083bfd285a04dcef",
    },
    body: requestBody,
  };

  loadingEl.classList.toggle("d-none");

  fetch(url, option)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      loadingEl.classList.toggle("d-none");
      let responseCode = jsonData.code;
      let responseContent = JSON.stringify(jsonData);

      requestStatusEl.textContent = responseCode;
      httpResponseEl.textContent = responseContent;
    });
}

sendPutRequestBtnEl.addEventListener("click", updateDetail);
