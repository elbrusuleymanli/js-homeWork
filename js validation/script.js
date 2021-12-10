let container = document.createElement("container");
let divgeneral = document.createElement("div");

let div1 = document.createElement("div");
let firstName = document.createElement("input");
let Name = document.createElement("label");
let warningName = document.createElement("span");

let surName = document.createElement("input");
let Surname = document.createElement("label");
let warningSurname = document.createElement("span");

let email = document.createElement("input");
let Email = document.createElement("label");
let warningEmail = document.createElement("span");

let password = document.createElement("input");
let Password = document.createElement("label");
let warningPassword = document.createElement("span");

let conFirmPassword = document.createElement("input");
let ComfirmP = document.createElement("label");
let warningConfirm = document.createElement("span");
let warningConfirm2 = document.createElement("span");

let conFirm = document.createElement("button");
conFirm.className = "btn btn-outline-primary m-4 ";

conFirm.innerText = "Confirm";

divgeneral.className = "validation";

div1.append(
  Name,
  firstName,
  warningName,
  Surname,
  surName,
  warningSurname,
  Email,
  email,
  warningEmail,
  Password,
  password,
  warningPassword,
  ComfirmP,
  conFirmPassword,
  warningConfirm,
  warningConfirm2
);
div1.style.marginLeft = "25px";

let upperLetter = /[A-Z]/g;
let lowerLetter = /[A-Z]/g;
let numbers = /[0-9]/g;
//name
div1.className = "div1";
Name.innerText = "First Name";
firstName.className = "firstname";
warningName.className = "warning";
warningName.innerText = "invalid Name";
Name.style.display = "block";
firstName.style.display = "block";

warningName.style.display = "none";

conFirm.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    firstName.value.trim() &&
    !firstName.value.includes(" ") &&
    !firstName.value.match(numbers)
  ) {
    warningName.style.display = "block";
    warningName.style.color = "green";
    warningName.innerText = "Correct";
    firstName.style.backgroundColor = "#e8ffd6";
    firstName.style.outline = "none";
  } else {
    warningName.style.display = "block";
    warningName.style.color = "red";
    firstName.style.backgroundColor = "#fdf4f4";
    firstName.style.outline = "none";
  }
});

//surname
Surname.innerText = "Surname";
surName.className = "surName";
warningSurname.className = "warning";
warningSurname.innerText = "invalid Surname";
surName.style.display = "block";

warningSurname.style.display = "none";

conFirm.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    surName.value.trim() &&
    !surName.value.includes(" ") &&
    !surName.value.match(numbers)
  ) {
    warningSurname.style.display = "block";
    warningSurname.style.color = "green";
    warningSurname.innerText = "Correct";
    surName.style.backgroundColor = "#e8ffd6";
    surName.style.outline = "none";
  } else {
    warningSurname.style.display = "block";
    warningSurname.style.color = "red";
    surName.style.backgroundColor = "#fdf4f4";
    surName.style.outline = "none";
  }
});

//email
Email.innerText = "E-mail";
email.className = "email";
warningEmail.className = "warning";
warningEmail.innerText = "invalid E-mail use(@ .)";
email.style.display = "block";

warningEmail.style.display = "none";
let mailformat = /([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
conFirm.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    email.value.trim().length >= 8 &&
    !email.value.includes(" ") &&
    email.value.match(mailformat)
  ) {
    warningEmail.style.display = "block";
    warningEmail.style.color = "green";
    warningEmail.innerText = "Correct";
    email.style.backgroundColor = "#e8ffd6";
    email.style.outline = "none";
  } else {
    warningEmail.style.display = "block";
    warningEmail.style.color = "red";
    email.style.backgroundColor = "#fdf4f4";
    email.style.outline = "none";
  }
});

//password
Password.innerText = "Password";
password.className = "password";
warningPassword.className = "warning";
warningPassword.innerText = "Invalid Password use(Upper,lower,digit,least 8)";
password.style.display = "block";

warningPassword.style.display = "none";

conFirm.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    password.value.trim().length >= 8 &&
    !password.value.includes(" ") &&
    password.value.match(upperLetter) &&
    password.value.match(lowerLetter) &&
    password.value.match(numbers)
  ) {
    warningPassword.style.display = "block";
    warningPassword.style.color = "green";
    warningPassword.innerText = "Correct";
    password.style.backgroundColor = "#e8ffd6";
    password.style.outline = "none";
  } else {
    warningPassword.style.display = "block";
    warningPassword.style.color = "red";
    password.style.backgroundColor = "#fdf4f4";
    password.style.outline = "none";
  }
});

//confirm password
ComfirmP.innerText = "Confirm Password";
conFirmPassword.className = "confirm-password";
warningConfirm.className = "warning";
warningConfirm.innerText = "Confirm password do not match";
warningConfirm2.innerText = "Invalid Password use(Upper,lower,digit,least 8)";
conFirmPassword.style.display = "block";

warningConfirm.style.display = "none";
warningConfirm2.style.display = "none";

conFirm.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    conFirmPassword.value == password.value &&
    password.value.trim().length >= 8 &&
    !password.value.includes(" ") &&
    password.value.match(upperLetter) &&
    password.value.match(lowerLetter) &&
    password.value.match(numbers)
  ) {
    warningConfirm.style.display = "block";
    warningConfirm.style.color = "green";
    warningConfirm.innerText = "Correct";
    conFirmPassword.style.backgroundColor = "#e8ffd6";
    conFirmPassword.style.outline = "none";
  } else if (
    password.value.trim().length >= 8 &&
    !password.value.includes(" ") &&
    password.value.match(upperLetter) &&
    password.value.match(lowerLetter) &&
    password.value.match(numbers)
  ) {
    warningConfirm.style.display = "block";
    warningConfirm.style.color = "red";
    warningConfirm2.style.display = "none";
    conFirmPassword.style.backgroundColor = "#fdf4f4";
    conFirmPassword.style.outline = "none";
  } else {
    warningConfirm2.style.display = "block";
    warningConfirm2.style.color = "red";
    warningConfirm.style.display = "none";
    conFirmPassword.style.backgroundColor = "#fdf4f4";
    conFirmPassword.style.outline = "none";
  }
});

divgeneral.append(div1, conFirm);

container.appendChild(divgeneral);

divgeneral.style.marginTop = "100px";

document.body.appendChild(container);
