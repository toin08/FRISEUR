
$(document).ready(() => {
    let header = $(".header");
    $(window).scroll(() => {
        if ($(window).scrollTop() > 130) {
            header.addClass("header-active");
        }
        else {
            header.removeClass("header-active");
        }
    });



    let sectionHome = $(".section-home").offset().top;
    var section1 = $(".section-1").offset().top - 30;
    var section2 = $(".section-2").offset().top - 30;
    var section3 = $(".section-3").offset().top - 30;
    var section4 = $(".section-4").offset().top - 30;
    var section5 = $(".section-5").offset().top - 30;
    var section6 = $(".section-6").offset().top - 30;
    var section7 = $(".section-7").offset().top - 30;
    $(window).scroll(() => {

        if ($(window).scrollTop() >= sectionHome) {
            $(".nav-item a").removeClass("active");
            $("#nav-link-1").addClass("active");
        }
        if ($(window).scrollTop() >= section1) {
            $(".nav-item a").removeClass("active");
            if (!$("#nav-link-2").hasClass("active"))
                $("#nav-link-2").addClass("active");
        }
        if ($(window).scrollTop() >= section2) {
            $(".nav-item a").removeClass("active");
            $("#nav-link-3").addClass("active");
        }
        if ($(window).scrollTop() >= section3) {
            $(".nav-item a").removeClass("active");
            $("#nav-link-4").addClass("active");
        }
        if ($(window).scrollTop() >= section4) {
            $(".nav-item a").removeClass("active");
            $("#nav-link-5").addClass("active");
        }
        if ($(window).scrollTop() >= section5) {
            $(".nav-item a").removeClass("active");
            $("#nav-link-6").addClass("active");
        }
        if ($(window).scrollTop() >= section6) {
            $(".nav-item a").removeClass("active");
            $("#nav-link-7").addClass("active");
        }
        if ($(window).scrollTop() >= section7) {
            $(".nav-item a").removeClass("active");
            $("#nav-link-8").addClass("active");
        }
    });

    $("li").hover(()=>{
        $(this).addClass("show");
    });
    function efeito() {
        $("body").animate({ top: 0 }, 200, function () { $(this).hide(); });
    }
    $(".form").changeColor();



    setInterval(function () {
        $(".b-1").removeClass("hidden").addClass("visible");
        $(".b-2").addClass("hidden").removeClass("visible");

    }, 2000);
let bar1 =  document.querySelector('.bar1');
let bar2 =  document.querySelector('.bar2');
let bar3 =  document.querySelector('.bar3');
let menubar = document.querySelector('.menubar');
let links = document.querySelector('.links');



menubar.addEventListener("click" , function() {
    bar1.classList.toggle('barclose1');
    bar2.classList.toggle('barclose2');
    bar3.classList.toggle('barclose3');
    links.classList.toggle('newlinks');
});

});


