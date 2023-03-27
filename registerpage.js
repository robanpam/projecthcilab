const username = document.getElementById("name")
const age = document.getElementById("age")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmpw = document.getElementById("confirmpw")
const agreebox = document.getElementById("agreebox")
const registerform = document.getElementById("registerform")
const namaerror = document.getElementById("nameerror")
const ageerror = document.getElementById("ageerror")
const emailerror = document.getElementById("emailerror")
const pwerror = document.getElementById("passworderror")
const cfpwerror = document.getElementById("confirmpwerror")

var flag = 0

registerform.addEventListener("submit", (e) => {
    e.preventDefault()
    flag = 0

    if (username.value.length < 5) {
        namaerror.innerHTML = "Name must be at least 5 characters."
        username.value = ""
        flag = 1
    }

    if (age.value < 12) {
        ageerror.innerHTML = "You must be over 12 years old."
        age.value = ""
        flag = 1
    }

    if (!email.value.includes("@gmail.com")) {
        emailerror.innerHTML = "Email must include '@gmail.com'."
        email.value = ""
        flag = 1
    }

    if (confirmpw.value != password.value) {
        cfpwerror.innerHTML = "Different password!"
        confirmpw.value = ""
        flag = 1
    }

    if (password.value.length < 8) {
        pwerror.innerHTML = "Password must be at least 8 characters."
        password.value = ""
        confirmpw.value = ""
        flag = 1
    }

    var number
    for(var i=0;i<password.value.length;i++){
        var c = password.value.charAt(i)
        if(!isNaN(c)) number = 1
    }
    if (number != 1) {
        pwerror.innerHTML = "Password must include digit."
        password.value = ""
        confirmpw.value = ""
        flag = 1
    }

    if (!agreebox.checked) {
        flag = 1
    }

    if (flag == 0) {
        window.location = "home.html"
    } else {
    }
})