
let form = document.getElementById("form")
let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("password")
let cpassword = document.getElementById("cpassword")

form.addEventListener("submit", (e) => {

    if (!validateInput()) {
        e.preventDefault();
    }
})

function validateInput() {
    let success=true;
    let username_value = username.value.trim()
    let email_value = email.value.trim()
    let password_value = password.value.trim()
    let cpassword_value = cpassword.value.trim()

    // username validation
    if (username_value === "") {
        success=false;
        setError(username, "Username is Required");
    }
    else {
        setSuccess(username);
    }

    // email validation
    if (email_value === "") {
        success=false;
        setError(email, "Email is Required");
    }
    else if (!validateEmail(email_value)) {
        success=false;
        setError(email, "Enter a valid Email");
    }
    else {
        setSuccess(email);
    }

    // password validation
    if (password_value === "") {
        success=false;
        setError(password, "Password is Required");
    }
    else if (password_value.length < 8) {
        success=false;
        setError(password, "Password must be above 8 characters")
    }
    else {
        setSuccess(password);
    }

    // confirm password validation
    if (password_value === "") {
        success=false;
        setError(cpassword, "Confirm password is Required");
    }
    else if (password_value !== cpassword_value) {
        success=false;
        setError(cpassword, "password mismatch");
    }
    else {
        setSuccess(cpassword);
    }

    return success;

}

function setError(element, message) {
    let parentClass = element.parentElement
    let errorElement = parentClass.querySelector(".error")

    errorElement.innerText = message;

    parentClass.classList.add("error")
    parentClass.classList.remove("success")
}

function setSuccess(element) {
    let parentClass = element.parentElement
    let errorElement = parentClass.querySelector(".error")

    errorElement.innerText = "";

    parentClass.classList.add("success")
    parentClass.classList.remove("error")
}

function validateEmail(email_value) {
    if (email_value.substring(email_value.indexOf("@")).length > 5 && email_value.includes(".com") && email_value.substring(0, email_value.indexOf("@")).length >= 1) {
        return true;
    }
    else {
        return false;
    }
    // return String(email_value).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}