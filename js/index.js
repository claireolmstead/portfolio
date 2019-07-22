var position = $(window).scrollTop(); 

// should start at 0

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > 20) {
    	//h1
       document.getElementById("h1").style.transform = "scale(0.5, 0.5)";
       document.getElementById("h1").style.top = "0";
       document.getElementById("h1").style.left = "0";
       document.getElementById("h1").style.position = "fixed";
       //nav
       document.getElementById("nav1").style.transform = "rotate(0.25turn)";
       document.getElementById("nav1").style.top = "40vh";
       document.getElementById("nav1").style.right = "0";
       document.getElementById("nav1").style.position = "fixed";

    }
});