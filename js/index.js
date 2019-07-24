var position = $(window).scrollTop(); 

// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > 200){
      document.getElementById('h1').className = "h1New";
      document.getElementById('nav1').className = "navNew";

    }
    else if (scroll < 200){
      document.getElementById('h1').className = "h1OG";
      document.getElementById('nav1').className = "nav1OG";
    }

});

var a1 = document.getElementById("a1");
a1.slideIndex = 1;
showSlides(a1.slideIndex, a1);

var a2 = document.getElementById("a2");
a2.slideIndex = 1;
showSlides(a2.slideIndex, a2);

function plusSlides(n, slideshow) {
  showSlides(slideshow.slideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
  showSlides(slideshow.slideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
  var i;
  var slides = slideshow.getElementsByClassName("slide");
  var dots = slideshow.getElementsByClassName("dot");
  if (n > slides.length){
    slideshow.slideIndex = 1
  }    
  if (n < 1) {
    slideshow.slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideshow.slideIndex-1].style.display = "block";  
  dots[slideshow.slideIndex-1].className += " active";
}
