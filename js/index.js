var position = $(window).scrollTop(); 

document.getElementById('h1').className = "h1OG";
document.getElementById('nav1').className = "nav1OG";

// should start at 0, but does not when new page is open
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

var old = 1;
var next = 3;
$("#next").click(function(){
	$("#slide"+old).css("display", "none");
	old++;
	$("#slide"+next).css("display", "inline-block");
	next++;
	if (next == 12) {
		next = 1;
	}else if (old == 12){
		old = 1;
	}
});
