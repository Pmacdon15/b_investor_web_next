var username = document.getElementById("in-username");
var inputName = document.getElementById("in-name");
var initialCash = document.getElementById("in-initial-cash");
var password = document.getElementById("in-password");
var retypePassword = document.getElementById("in-retype-password");

var validationEmail = document.getElementById("in-username-validation");
var validationName = document.getElementById("in-name-validation");
var validationInitialCash = document.getElementById(
  "in-initial-cash-validation"
);
var validationPassword = document.getElementById("in-password-validation");
var validationRetypePassword = document.getElementById(
  "in-retype-password-validation"
);

var checkedUsername = false;
var checkedName = false;
var checkedInitialCash = false;
var checkedPassword = false;
var checkedRetypePassword = false;

username.addEventListener("keyup", (event) => {
  if (event.key === "Enter" || event.keyCode === 13) {
    inputName.focus();
  }
  if (isValidEmail(username.value.trim())) {
    validationEmail.classList.add("fa-check");
    validationEmail.classList.remove("fa-remove");
    validationEmail.style.color = "green";
    checkedUsername = true;
    $("#in-message").text("");
  } else {
    validationEmail.classList.remove("fa-check");
    validationEmail.classList.add("fa-remove");
    validationEmail.style.color = "red";
    checkedUsername = false;
    $("#in-message").text("Insert a valid email");
  }

  username.value = username.value.toLowerCase();
});

function isValidEmail(email) {
  //check size
  if (email.length < 8) {
    return false;
  }
  //check if it has "@" symbol
  if (email.indexOf("@") < 1) {
    return false;
  }

  // check if it has "." symbol
  var emailPartitioned = email.split(".");
  var howManyDots = emailPartitioned.length;
  if (
    howManyDots == 1 ||
    email.charAt(email.length - 1) == "." ||
    email.charAt(email.length - 2) == "."
  ) {
    return false;
  }

  // check if it has "." after the "@" symbol
  if (
    email.indexOf("@") >
    email.length - emailPartitioned[howManyDots - 1].length
  ) {
    return false;
  }

  // Check if there are more than 1 "@" character
  if (email.split("@").length > 2) {
    return false;
  }

  // check if it has no " "
  if (email.indexOf(" ") != -1) {
    return false;
  }

  return true;
}

inputName.addEventListener("keyup", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    // return;
  }
  if (event.key === "Enter" || event.keyCode === 13) {
    initialCash.focus();
  }
  if (isValidName(inputName.value)) {
    validationName.classList.add("fa-check");
    validationName.classList.remove("fa-remove");
    validationName.style.color = "green";
    checkedName = true;
    $("#in-message").text("");
  } else {
    validationName.classList.remove("fa-check");
    validationName.classList.add("fa-remove");
    validationName.style.color = "red";
    checkedName = false;
    $("#in-message").text("Insert a valid name");
  }
});

function isValidName(name) {
  if (name.length < 3) {
    return false;
  }
  return true;
}

initialCash.addEventListener("keyup", (event) => {
  if (event.isComposing || event.keyCode === 229) {
    // return;
  }
  if (event.key === "Enter" || event.keyCode === 13) {
    password.focus();
  }
  if (isValidInitialCash(initialCash.value)) {
    // validationInitialCash.innerHTML = "✔";
    validationInitialCash.style.color = "green";
    validationInitialCash.classList.add("fa-check");
    validationInitialCash.classList.remove("fa-remove");
    checkedInitialCash = true;
    $("#in-message").text("");
  } else {
    validationInitialCash.classList.remove("fa-check");
    validationInitialCash.classList.add("fa-remove");
    validationInitialCash.style.color = "red";
    checkedInitialCash = false;
    $("#in-message").text("Initial cash between 0 and 100,000.00");
    // validationInitialCash.innerHTML =
    // "✘ Insert a value between 0 and 100,000.00";
  }
});
initialCash.addEventListener("change", (event) => {
  if (
    Number.isNaN(
      formatNumber(parseFloat(initialCash.value.replace(",", "")).toFixed(2))
    )
  ) {
    return;
  } else {
    initialCash.value = formatNumber(
      parseFloat(initialCash.value.replace(",", "")).toFixed(2)
    );
  }

  if (initialCash.value == "NaN") {
    initialCash.value = "";
  }
});

function isValidInitialCash(initialCash) {
  if (Number.isNaN(parseFloat(initialCash))) {
    return false;
  }

  if (parseFloat(initialCash) < 0 || parseFloat(initialCash) > 100000) {
    return false;
  }
  return true;
}

password.addEventListener("keyup", validatePassword);
retypePassword.addEventListener("keyup", validatePassword);

function validatePassword() {
  if (isValidRetypePassword(retypePassword.value)) {
    validationRetypePassword.classList.add("fa-check");
    validationRetypePassword.classList.remove("fa-remove");
    validationRetypePassword.style.color = "green";
    checkedRetypePassword = true;
  } else {
    validationRetypePassword.classList.remove("fa-check");
    validationRetypePassword.classList.add("fa-remove");
    validationRetypePassword.style.color = "red";
    checkedRetypePassword = false;
    $("#in-message").text("Retyped password doesn't match");
  }

  if (isValidPassword(password.value)) {
    validationPassword.classList.add("fa-check");
    validationPassword.classList.remove("fa-remove");
    validationPassword.style.color = "green";
    checkedPassword = true;
  } else {
    validationPassword.classList.remove("fa-check");
    validationPassword.classList.add("fa-remove");
    validationPassword.style.color = "red";
    checkedPassword.le = false;
    $("#in-message").text("Password must be 6 characters long");
  }

  if (
    isValidPassword(password.value) &&
    isValidRetypePassword(retypePassword.value)
  ) {
    $("#in-message").text("");
  }
}
function isValidPassword(password) {
  if (password.length < 6) {
    return false;
  }
  return true;
}

function isValidRetypePassword(retypePassword) {
  if (retypePassword != password.value) {
    return false;
  }
  return true;
}

function areAllFieldsValid() {
  if (
    checkedInitialCash == true &&
    checkedName == true &&
    checkedInitialCash == true &&
    checkedPassword == true &&
    checkedRetypePassword == true
  ) {
    return true;
  } else {
    return false;
  }
}
