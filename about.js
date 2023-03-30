function showNavbar() {
    var x = document.getElementById("myNav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}
var modal = document.getElementById("photoModal");
var photobtn = document.getElementById("photoBtn");
var spans = document.querySelectorAll(".close");
var modal1 = document.getElementById("videoModal");
var videobtn = document.getElementById("videoBtn");

setTimeout(() => {
    console.log(modal)
    console.log(photobtn)
    console.log(spans)
    console.log(modal1)
    console.log(videobtn)

    photobtn.onclick = function () {
        modal.style.display = "block";
    }

    videobtn.onclick = function () {
        modal1.style.display = "flex"
        modal1.style.alignItems = "center"
    }

    spans.forEach((span) => {
        span.onclick = function () {
            modal.style.display = "none";
            modal1.style.display = "none";
        }
    })

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    window.onclick = function (event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
    }
}, 500);

var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}