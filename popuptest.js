setTimeout(() => {
    var modal = document.getElementById("photoModal");
    var photobtn = document.getElementById("photoBtn");
    var span0 = document.getElementsByClassName("close")[0];
    var span = document.getElementsByClassName("close")[1];
    var modal1 = document.getElementById("videoModal");
    var videobtn = document.getElementById("videoBtn");
    
    photobtn.onclick = function(){
        modal.style.display = "block";
    }

    videobtn.onclick = function(){
        modal1.style.display = "block"
    }
    
    span0.onclick = function(){
        modal.style.display = "none";
    }

    span.onclick = function(){
        modal1.style.display = "none";
    }
    
    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none";
        }
        if(event.target == modal1){
            modal1.style.display = "none";
        }
    }

}, 500);

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("slide");
if (n > slides.length)
{
  slideIndex = 1;
}
if (n < 1)
{
  slideIndex = slides.length
}
for (i = 0; i < slides.length; i++)
{
  slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";
}
      