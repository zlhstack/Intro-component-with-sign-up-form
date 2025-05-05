// Button
const button = document.querySelector(".button");
// Eye Icon and Password
const eyeIcon = document.querySelector(".eye");
const passwordEyeIconErrorIcon = document.querySelector(
  ".password-eyeIcon-errorIcon"
);
// Input
const inputFirstName = document.getElementById("fname");
const inputLastName = document.getElementById("lname");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
// Error Content
const errorContentFname = document.getElementById("errorContentFname");
const errorContentLname = document.getElementById("errorContentLname");
const errorContentEmail = document.getElementById("errorContentEmail");
const errorContentPassword = document.getElementById("errorContentPassword");
// Error Icon
const errorIconFname = document.getElementById("errorIconFname");
const errorIconLname = document.getElementById("errorIconLname");
const errorIconEmail = document.getElementById("errorIconEmail");
const errorIconPassword = document.getElementById("errorIconPassword");

button.addEventListener("click", async () => {
  // Check First Name
  try {
    const fname = await checkFirstName(inputFirstName.value.trim());
    whenNoError(inputFirstName, errorContentFname, errorIconFname);
    console.log(fname);
  } catch (error) {
    whenError(inputFirstName, errorContentFname, errorIconFname, error);
  }

  // Check Last Name
  try {
    const lname = await checkLastName(inputLastName.value.trim());
    whenNoError(inputLastName, errorContentLname, errorIconLname);
    console.log(lname);
  } catch (error) {
    whenError(inputLastName, errorContentLname, errorIconLname, error);
  }

  // Check Email
  try {
    const email = await checkEmail(inputEmail.value.trim());
    whenNoError(inputEmail, errorContentEmail, errorIconEmail);
    console.log(email);
  } catch (error) {
    whenError(inputEmail, errorContentEmail, errorIconEmail, error);
  }

  // Check Password
  try {
    const password = await checkPassword(inputPassword.value.trim());
    whenNoError(inputPassword, errorContentPassword, errorIconPassword);
    passwordEyeIconErrorIcon.style.transform = "translate(0, -50%)";
    console.log(password);
  } catch (error) {
    whenError(inputPassword, errorContentPassword, errorIconPassword, error);
    passwordEyeIconErrorIcon.style.transform = "translate(0, -80%)";
  }
});

// When No Error Occurs
function whenNoError(input, errorContent, errorIcon) {
  console.log(input);
  input.style.border = "1px solid hsl(246, 25%, 77%)";
  input.style.boxShadow = "0 3px hsl(246, 25%, 77%)";
  errorContent.textContent = "";
  errorIcon.style.display = "none";
}

// When Error Occurs
function whenError(input, errorContent, errorIcon, message) {
  input.style.border = "2px solid red";
  input.style.boxShadow = "0 3px red";
  errorContent.textContent = message;
  errorIcon.style.display = "block";
}

// First Name Checking Function
function checkFirstName(fname) {
  return new Promise((resolve, reject) => {
    if (!/[a-z]/gi.test(fname)) {
      reject("First Name cannot be empty!");
    } else if (!/[a-z\d]{4,}/gi.test(fname)) {
      reject("First Name must contain at least 4!");
    } else if (/\d/g.test(fname)) {
      reject("First Name cannot contain numbers!");
    } else {
      resolve(fname);
    }
  });
}

// Last Name Checking Function
function checkLastName(lname) {
  return new Promise((resolve, reject) => {
    if (!/[a-z]/gi.test(lname)) {
      reject("Last Name cannot be empty!");
    } else if (!/[a-z\d]{4,}/gi.test(lname)) {
      reject("Last Name must contain at least 4!");
    } else if (/\d/g.test(lname)) {
      reject("Last Name cannot contain numbers!");
    } else {
      resolve(lname);
    }
  });
}

// Email Checking Function
function checkEmail(email) {
  return new Promise((resolve, reject) => {
    if (!/[a-z\d]/gi.test(email)) {
      reject("Email cannot be empty!");
    } else if (!/^[a-zA-Z0-9._%+-]+@(gmail|outlook|yahoo)\.com$/.test(email)) {
      reject("Looks like this is not an valid email!");
    } else {
      resolve(email);
    }
  });
}

// Password Checking Function
function checkPassword(password) {
  return new Promise((resolve, reject) => {
    if (!/[a-z\d]/gi.test(password)) {
      reject("Password cannot be empty!");
    } else if (!/[\w]{6,}/gi.test(password) && /[a-z\d]/gi.test(password)) {
      reject("Password must be at least 6!");
    } else if (
      !/^(?=(?:.*[a-zA-Z]){4,})(?=(?:.*\d){2,})/.test(password) &&
      /[a-z\d]/gi.test(password)
    ) {
      reject("password must contain at least 4 letters and 2 numbers!");
    } else {
      resolve(password);
    }
  });
}

// Password Show or Hide
eyeIcon.addEventListener("click", () => {
  if (eyeIcon.src.endsWith("eye-open.svg")) {
    inputPassword.type = "text";
    eyeIcon.src = "images/eye-close.svg";
  } else {
    inputPassword.type = "password";
    eyeIcon.src = "images/eye-open.svg";
  }
});
