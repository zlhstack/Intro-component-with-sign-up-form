// Button and Input
const input = document.querySelectorAll(".input");
const button = document.querySelector(".button");
// Eye Icon and Password
const eyeIcon = document.querySelector(".eye");
const password = document.getElementById("password");
const passwordEyeIconErrorIcon = document.querySelector(
  ".password-eyeIcon-errorIcon"
);
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

button.addEventListener("click", () => {
  input.forEach((input) => {
    const inputPlaceholder = input.placeholder;
    const inputValue = input.value;

    // Checking Input
    // First Name Checking
    if (inputPlaceholder === "First Name") {
      if (!/[a-z\d]/gi.test(inputValue)) {
        input.style.border = "2px solid red";
        input.style.boxShadow = "0 3px red";
        errorContentFname.textContent = "First Name cannot be empty";
        errorIconFname.style.display = "block";
      } else if (/[\d]/g.test(inputValue)) {
        input.style.border = "2px solid red";
        input.style.boxShadow = "0 3px red";
        errorContentFname.textContent = "First Name cannot contain numbers";
        errorIconFname.style.display = "block";
      } else {
        input.style.border = "1px solid hsl(246, 25%, 77%)";
        input.style.boxShadow = "0 3px hsl(246, 25%, 77%)";
        errorContentFname.textContent = "";
        errorIconFname.style.display = "none";
      }
    }

    // Last Name Checking
    if (inputPlaceholder === "Last Name") {
      if (!/[a-z\d]/gi.test(inputValue)) {
        input.style.border = "2px solid red";
        input.style.boxShadow = "0 3px red";
        errorContentLname.textContent = "Last Name cannot be empty";
        errorIconLname.style.display = "block";
      } else if (/[\d]/g.test(inputValue)) {
        input.style.border = "2px solid red";
        input.style.boxShadow = "0 3px red";
        errorContentLname.textContent = "Last Name cannot contain numbers";
        errorIconLname.style.display = "block";
      } else {
        input.style.border = "1px solid hsl(246, 25%, 77%)";
        input.style.boxShadow = "0 3px hsl(246, 25%, 77%)";
        errorContentLname.textContent = "";
        errorIconLname.style.display = "none";
      }
    }

    // Email Checking
    if (inputPlaceholder === "Email") {
      if (!/[a-z\d]/gi.test(inputValue)) {
        input.style.border = "2px solid red";
        input.style.boxShadow = "0 3px red";
        errorContentEmail.textContent = "Email cannot be empty";
        errorIconEmail.style.display = "block";
      } else if (
        !/@gmail.com$/.test(inputValue) &&
        /[a-z\d]/.test(inputValue)
      ) {
        input.style.border = "2px solid red";
        input.style.boxShadow = "0 3px red";
        errorContentEmail.textContent = "Looks like this is not an email";
        errorIconEmail.style.display = "block";
      } else {
        input.style.border = "1px solid hsl(246, 25%, 77%)";
        input.style.boxShadow = "0 3px hsl(246, 25%, 77%)";
        errorContentEmail.textContent = "";
        errorIconEmail.style.display = "none";
      }
    }

    // Password Checking
    if (inputPlaceholder === "Password") {
      if (!/[a-z\d]/gi.test(inputValue)) {
        input.style.border = "2px solid red";
        input.style.boxShadow = "0 3px red";
        errorContentPassword.textContent = "Password cannot be empty";
        errorIconPassword.style.display = "block";
        passwordEyeIconErrorIcon.style.transform = "translate(0, -80%)";
      } else if (!/[a-z\d]{4,}/gi.test(inputValue)) {
        input.style.border = "2px solid red";
        input.style.boxShadow = "0 3px red";
        errorContentPassword.textContent = "Password must at least 4";
        errorIconPassword.style.display = "block";
        passwordEyeIconErrorIcon.style.transform = "translate(0, -80%)";
      } else if (!/[a-z]/gi.test(inputValue) || !/\d/.test(inputValue)) {
        input.style.border = "2px solid red";
        input.style.boxShadow = "0 3px red";
        errorContentPassword.textContent =
          "Password must contain letters and numbers";
        errorIconPassword.style.display = "block";
        passwordEyeIconErrorIcon.style.transform = "translate(0, -80%)";
      } else {
        input.style.border = "1px solid hsl(246, 25%, 77%)";
        input.style.boxShadow = "0 3px hsl(246, 25%, 77%)";
        errorContentPassword.textContent = "";
        errorIconPassword.style.display = "none";
        passwordEyeIconErrorIcon.style.transform = "translate(0, -50%)";
      }
    }
  });
});

// Password Show or Hide
eyeIcon.addEventListener("click", () => {
  if (eyeIcon.src.endsWith("eye-open.svg")) {
    password.type = "text";
    eyeIcon.src = "images/eye-close.svg";
  } else {
    password.type = "password";
    eyeIcon.src = "images/eye-open.svg";
  }
});
