function showNavbar() {
    var x = document.getElementById("myNav");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

setTimeout(() => {
    var modal = document.getElementById("photoModal");
    var photobtn = document.getElementById("photoBtn");
    var span = document.getElementsByClassName("close")[1];
    var modal1 = document.getElementById("videoModal");
    var videobtn = document.getElementById("videoBtn");

    console.log(modal)
    console.log(photobtn)
    console.log(span)
    console.log(modal1)
    console.log(videobtn)
    
    photobtn.onclick = function(){
        modal.style.display = "block";
    }

    videobtn.onclick = function(){
        modal1.style.display = "block"
    }
    
    span.onclick = function(){
        modal.style.display = "none";
    }

    span.onclick = function(){
        modal1.style.display = "none";
    }
    
    window.onclick = function(event){
        if(event.target == modal){
            modal.style.display = "none";
        }
        
    }
    window.onclick = function(event){
      if(event.target == modal1){
          modal1.style.display = "none";
      }
  }
}, 500);