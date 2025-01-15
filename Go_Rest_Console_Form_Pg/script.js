let formData = {
  requestUrl: "https://gorest.co.in/public-api/users",
  requestMethod: "POST",
  requestBody: "",
};

let consoleFormEl = document.getElementById("consoleForm");

let requestUrlEl = document.getElementById("requestUrl");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");

let responseStatusEl = document.getElementById("responseStatus");
let responseBodyEl = document.getElementById("responseBody");

requestUrlEl.addEventListener("change", function (event) {
  formData.requestUrl = event.target.value;
});

requestMethodEl.addEventListener("change", function (event) {
  formData.requestMethod = event.target.value;
});

requestBodyEl.addEventListener("change", function (event) {
  formData.requestBody = event.target.value;
});

function makeHttpRequest() {
  let { requestUrl, requestMethod, requestBody } = formData;

  let option = {
    method: requestMethod,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 4a4da44c8a37fff757f64d9b7272db84b13b048fe27f91d9bb93cc78bc42db42",
    },
    body: requestBody,
  };

  fetch(requestUrl, option)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      console.log(jsonData);
      let responseStatus = jsonData.code;
      let responseBody = JSON.stringify(jsonData);
      responseStatusEl.value = responseStatus;
      responseBodyEl.value = requestBody;
    });
}

function validateFormData() {
  let { requestUrl } = formData;

  if (requestUrl === "") {
    requestUrlErrMsgEl.textContent = "Required*";
  } else {
    requestUrlErrMsgEl.textContent = "";
  }
}

function onSubmitForm(event) {
  event.preventDefault();
  validateFormData();
  makeHttpRequest();
}

consoleFormEl.addEventListener("submit", onSubmitForm);
