let div1 = document.querySelector("#harbor")
let div2 = document.querySelector("#tianheng")
let div3 = document.querySelector("#dihuam")
let div4 = document.querySelector("#wangshu")
let div5 = document.querySelector("#qingce")
let div6 = document.querySelector("#jueyun")

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