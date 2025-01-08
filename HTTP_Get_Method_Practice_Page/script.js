let requestUrlEl = document.getElementById("requestUrl");
let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

let loadingEl = document.getElementById("loading");

function getRequest() {
  let url = requestUrlEl.textContent;
  let option = { method: "GET" };

  loadingEl.classList.toggle("d-none");

  fetch(url, option)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      loadingEl.classList.toggle("d-none");
      let code = jsonData.code;
      requestStatusEl.textContent = code;
      httpResponseEl.textContent = JSON.stringify(jsonData);
    });
}

sendGetRequestBtnEl.addEventListener("click", getRequest);
