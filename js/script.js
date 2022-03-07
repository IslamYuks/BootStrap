$(document).ready(function(){
    // Header style app
    $("header li a").on("click",function (){
        $(this).addClass("active").parent().siblings().find("a").removeClass("active")
    })

    // window app
    var homeOffset = $(".home").offset().top
    console.log(homeOffset); 
    $(window).scroll(function(){
        var windowScroll = $(this).scrollTop()
        
        if(windowScroll > 70 ) {
            $("header").addClass("changeHeader")
        }else{
            $("header").removeClass("changeHeader")

        }

    })



    // dynamic Taps

    // $("header li a").click(function(){
    // var myId =$(this).attr("id");
    // $("body section").hide()
    // $('.' + myId).fadeToggle()
    // })


    // Filter image

    $(".tabs button").click(function(){
        var myClass = $(this).attr("class") 
        
        if(myClass == "all")  $(".images img").fadeIn()

        else{
        $(".images img").hide()
        $(".images ." + myClass).fadeIn()}
    })


    // Smoth scroll header
    var headerHeight = $("header").height()
    $("header a").click(function(){
        var id = $(this).attr("id");

        $("body,html").animate({
            scrollTop: $("." + id ).offset().top -headerHeight
        })
    })

    // scroll Top To app

    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            $(".scrollTop").fadeIn()
    
        }else{
            $(".scrollTop").fadeOut()
        }

        $(".scrollTop").click(function(){
            $("body,html").animate({
                scrollTop : 0
            }, 800).stopAnimate()
        })
    })



    $("textarea").keyup(function(e){
        var max = e.target.value.length;
        if(max >= 101){
            e.target.value = e.target.value.substr(0,100)
            alert("maximum latters 100 ")
        }
        else{
            
        }

    })



})