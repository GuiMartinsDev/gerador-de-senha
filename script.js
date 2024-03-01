let slideElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let passWord = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novaSenha = "";

sizePassword.innerHTML = slideElement.value;

slider.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  let pass = "";

  for (let i = 0, n = charset.length; i < slideElement.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  containerPassword.classList.remove("hide");
  passWord.innerHTML = pass;
  novaSenha = pass;
}

buttonElement.addEventListener("click", generatePassword);

function copyPassword() {
  alert("Senha copiada com sucesso!");
  navigator.clipboard.writeText(novaSenha);
}

containerPassword.addEventListener("click", copyPassword);
