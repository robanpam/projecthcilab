let div1 = document.querySelector("#gandharva")
let div2 = document.querySelector("#pardis")
let div3 = document.querySelector("#caravan")
let div4 = document.querySelector("#port")
let div5 = document.querySelector("#city")
let div6 = document.querySelector("#forest")
let div7 = document.querySelector("#apam")
let div8 = document.querySelector("#mountain")

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
    div7.classList.toggle("hidden")
})

div7.addEventListener("click", function () {
    div7.classList.add("hidden")
    div8.classList.toggle("hidden")
})

div8.addEventListener("click", function () {
    div8.classList.add("hidden")
    div1.classList.toggle("hidden")
})