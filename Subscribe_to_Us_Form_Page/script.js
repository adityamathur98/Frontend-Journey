let formData = {
  name: "",
  email: "",
};

let subscribeFormEl = document.getElementById("subscribeForm");

let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");

let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");

function onLostFocus1(event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = "Required*";
  } else {
    nameErrMsgEl.textContent = "";
  }
  formData.name = event.target.value;
}

function onLostFocus2(event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = "Required*";
  } else {
    emailErrMsgEl.textContent = "";
  }
  formData.email = event.target.value;
}

nameEl.addEventListener("change", onLostFocus1);
emailEl.addEventListener("change", onLostFocus2);

function validForm() {
  let { name, email } = formData;
  if (name === "") {
    nameErrMsgEl.textContent = "Required*";
  }

  if (email === "") {
    emailErrMsgEl.textContent = "Required*";
  }
}

function onSubmit(event) {
  event.preventDefault();
  validForm();
}

subscribeFormEl.addEventListener("submit", onSubmit);
