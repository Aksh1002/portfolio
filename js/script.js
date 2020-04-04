$(window).on("load",function(){
    $(".loader img").fadeOut(500,function(){
        $(".loader").fadeOut(750) });
});



$(document).ready(function(){

    $('#slides').superslides({
        animation:'fade',
        play:6000,
        pagination:false
    });


    var typed=new Typed(".typed",{
        strings:["Software Engineer.","Web Developer.","Student."],
        typeSpeed:100,
        loop:true,
        startDelay:1000,
        showCursor:false,

    });


    $('.owl-carousel').owlCarousel({
        loop:true,
        items:5,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })


    $(function() {
        $('.chart').easyPieChart({
            easing:'easeInOut',
            barColor:'#fff',
            trackColor:false,
            scaleColor:false,
            lineWidth:4,
            size:152,
            onStep:function(from,to,percent){
                $(this.el).find('.percent').text(Math.round(percent));
            }
        });
    });


    $("#navigation li a").click(function(e){
        e.preventDefault();

        var targetElement=$(this).attr("href");
        var targetPosition=$(targetElement).offset().top;
        $("html,body").animate({
            scrollTop: targetPosition-50
        },"slow");


    });




    const nav= $('#navigation');
    const navTop=nav.offset().top;

    $(window).on("scroll",stickyNavigation);

    function stickyNavigation(){
        var body=$("body");
        if($(window).scrollTop()>=navTop){
            body.css("padding-top",nav.outerHeight()+"px");
            body.addClass("fixedNav");
    
        }else{
            body.css("padding-top",0+"px");
            body.removeClass("fixedNav");
        }
        
    }


});