let passwordData = {
  password: "",
  newPassword: "",
};

let updatePasswordFormEl = document.getElementById("updatePasswordForm");
let newPasswordEl = document.getElementById("newPassword");
let confirmPasswordEl = document.getElementById("confirmPassword");

let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");

function onEnterNewPassword(event) {
  if (event.target.value === "") {
    newPasswordErrMsgEl.textContent = "Required*";
  } else {
    newPasswordErrMsgEl.textContent = "";
  }
  passwordData.password = event.target.value;
}

function onConfirmPassword(event) {
  if (event.target.value === "") {
    confirmPasswordErrMsgEl.textContent = "Required*";
  } else {
    confirmPasswordErrMsgEl.textContent = "";
  }
  passwordData.newPassword = event.target.value;
}

newPasswordEl.addEventListener("blur", onEnterNewPassword);
confirmPasswordEl.addEventListener("blur", onConfirmPassword);

function validatePassword() {
  let { password, newPassword } = passwordData;

  if (password !== newPassword) {
    confirmPasswordErrMsgEl.textContent = "Password Must be Same";
  } else {
    confirmPasswordEl.textContent = "";
  }
}

function onUpdatePassword(event) {
  event.preventDefault();
  validatePassword();
}

updatePasswordFormEl.addEventListener("submit", onUpdatePassword);
