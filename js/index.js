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
