let mainForm = document.getElementById("main-form");
let form = document.getElementById("form");
let emailInput = document.getElementById("emailInput");
let check = document.getElementById("custom-check");
let submitBtn = document.getElementById("main-btn");
let formSubmitted = document.getElementById("form-submitted");

let returnBtn = document.getElementById("return");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  const checkboxInput = document.getElementById("checkboxInput");

  if (validateEmail(email) && checkboxInput.checked) {
    formSuccess();
    emailInput.value = "";
    emailInput.classList.remove("active");
    check.classList.remove("active");
  } else {
    emailInput.classList.add("active");
    check.classList.add("active");
  }
});

function formSuccess() {
  mainForm.classList.add("hide");
  formSubmitted.classList.add("show");
}

function validateEmail(email) {}
