const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyEl = document.querySelector(".fa-copy");
const alertEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", function (e) {
  e.preventDefault();
  createPassword();
});

copyEl.addEventListener("click", function () {
  copyPassword();
  if (inputEl.value) {
    alertEl.classList.remove("active");
    setTimeout(() => {
      alertEl.classList.add("active");
    }, 2000);
  }
});

function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLen = 15;
  let password = "";
  for (let i = 0; i < passwordLen; i++) {
    const randNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randNum, randNum + 1);
  }
  inputEl.value = password;
  alertEl.innerText = password + " copied!";
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(inputEl.value);
}
