const passwordContent = document.getElementById("psw");
const conPassContent = document.getElementById("pswConfirm");
const validationMessage = document.getElementById("confirmMsg");

passwordContent.addEventListener("input", validatePasswords);
conPassContent.addEventListener("input", validatePasswords);

function validatePasswords() {
    if (passwordContent.value !== conPassContent.value) {
        validationMessage.classList.remove("hide")
    } else {
        validationMessage.classList.add("hide")
    }
}