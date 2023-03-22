function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

const newcharImage = [
    "assets/img/home/dehya.png",
    "assets/img/home/mika.png"
]

const newcharRating = [
    "assets/img/home/rate.png",
    "assets/img/home/rate2.png"
]

const newcharDescription = [
    "A member of the Eremites, a mercenary organization that roams the sands of Sumeru. Valiant and powerful, she enjoys great fame amongs her fellow Eremites.",
    "A young knight born to an ordinary family. He serves as a Front-Line Surveyor in his Company. He is a low-key and cautious character."
]

// ambil class/id tiap box char yang buat pindah, misal:

const charBoxes = document.querySelectorAll(".newchar-change")
const charRating = document.querySelector(".newchar-rating")
const charDescription = document.querySelector(".newchar-desc")
const charImage = document.querySelector(".newchar-char")

charBoxes.forEach((charBox, index) => {
    charBox.addEventListener("click", function () {
        // console.log(index)
        charRating.innerHTML = newcharRating[index]
        charDescription.innerHTML = newcharDescription[index]
        charImage.style.backgroundImage = newcharImage[index]
    })
})