function showNavbar() {
    var x = document.getElementById("myNav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

let div1 = document.querySelector("#ritou")
let div2 = document.querySelector("#inacity")
let div3 = document.querySelector("#chinju")
let div4 = document.querySelector("#gns")
let div5 = document.querySelector("#tatarasuna")
let div6 = document.querySelector("#kujou")

div1.addEventListener("click", function () {
    div1.classList.add("hidden")
    div2.classList.toggle("hidden")
})

div2.addEventListener("click", function () {
    div2.classList.add("hidden")
    div3.classList.toggle("hidden")
})

div3.addEventListener("click", function () {
    div3.classList.add("hidden")
    div4.classList.toggle("hidden")
})

div4.addEventListener("click", function () {
    div4.classList.add("hidden")
    div5.classList.toggle("hidden")
})

div5.addEventListener("click", function () {
    div5.classList.add("hidden")
    div6.classList.toggle("hidden")
})

div6.addEventListener("click", function () {
    div6.classList.add("hidden")
    div1.classList.toggle("hidden")
})