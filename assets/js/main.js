

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".navigation").addClass("scroll");
    } else {
        $(".navigation").removeClass("scroll");
    }
});



var counter = 0;
var op = ["0", '-50%', "-100%", "-150%", "-200%", "-150%", "-100%", "-50%"];
setInterval(_=>{
    document.documentElement.style.setProperty("--slider", op[counter]);
    counter++;
    if(counter > 8){
        counter =0;
        
    }
}, 5000);