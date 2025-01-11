let formData = {
  name: "",
  email: "",
  status: "Active",
  gender: "Male",
};

let myFormEl = document.getElementById("myForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");

let statusEl = document.getElementById("status");
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");

nameEl.addEventListener("change", function (event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = "Required*";
  } else {
    nameErrMsgEl.textContent = "";
  }
  formData.name = event.target.value;
});

emailEl.addEventListener("change", function (event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = "Required*";
  } else {
    emailErrMsgEl.textContent = "";
  }
  formData.email = event.target.value;
});

statusEl.addEventListener("change", function (event) {
  formData.status = event.target.value;
});

genderMaleEl.addEventListener("change", function (event) {
  formData.gender = event.target.value;
});

genderFemaleEl.addEventListener("change", function (event) {
  formData.gender = event.target.value;
});

function formValidation(formData) {
  let { name, email } = formData;

  if (name === "") {
    nameErrMsgEl.textContent = "Required*";
  }

  if (email === "") {
    emailErrMsgEl.textContent = "Required*";
  }
}

function submitFormData(formData) {
  let option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 1f87e6b7419f6cbfc9b8a5fbf312a1b327ca4b9955b97e37083bfd285a04dcef",
    },
    body: JSON.stringify(formData),
  };
  let url = "https://gorest.co.in/public-api/users/";

  fetch(url, option)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      if (jsonData.code === 422) {
        if (jsonData.data[0].message === "has already been taken") {
          emailErrMsgEl.textContent = "Email Already Exist!!";
        }
      }
    });
}

myFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  formValidation(formData);
  submitFormData(formData);
});
