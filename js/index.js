
$(window).scroll(function(){
    let {top:footer} = $("footer").offset()
    let windowOffset = $(window).scrollTop()
    if(windowOffset > 100){
    $(".navbar").css("background","#fff");
    $(".navbar a").css("color","#000");
    $(".navbar-brand .logo").attr('src',"./assets/img/bakery-color.png")
    $(".fa-bars").addClass("text-dark");

    }else{
    $(".navbar").css("background","transparent");
    $(".navbar-brand .logo").attr('src',"./assets/img/bakery-light-1.png")
    $(".fa-bars").removeClass("text-dark");
    $(".navbar a").css("color","#fff");
    }
    if(windowOffset >= footer){
        $("#backToTop").fadeIn(1000)
    }else{
        $("#backToTop").fadeOut(1000)
        
    }
})

$("#backToTop").click(function(){
    $("html,body").animate({scrollTop:0}, 1000)
})