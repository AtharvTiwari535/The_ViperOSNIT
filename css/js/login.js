const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton=document.getElementById("submit");

submitButton.addEventListener("mouseover", (button) => {
    let email = emailInput.value;
    let password = passwordInput.value;
    let validate = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)?/.
        test(email) && /[a-zA-Z0-9]{7}/.test(password)
    if (!validate) {
        button.target.classList.toggle("move");
        submitButton.style.background = "red"
    } else {
        button.target.classList.add("stop")
        submitButton.style.background = "green"
    }
})