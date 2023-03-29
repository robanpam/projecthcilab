function showNavbar() {
    var x = document.getElementById("myNav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

let divDehya = document.querySelector("#dehya")
let divMika = document.querySelector("#mika")
let buttonDehya = document.querySelector("#buttonDehya")
let buttonMika = document.querySelector("#buttonMika")

buttonMika.addEventListener("click", function () {
    divDehya.classList.add("hidden")
    divMika.classList.toggle("hidden")
})

buttonDehya.addEventListener("click", function () {
    divMika.classList.add("hidden")
    divDehya.classList.toggle("hidden")
})