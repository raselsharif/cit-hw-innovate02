$(function () {
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        console.log(scroll);
        // ========== fix nav section ========
        if (scroll > 50) {
            $("#navBar").addClass("fixNav");
        } else {
            $("#navBar").removeClass("fixNav");
        }

        // =========== back to top ========
        if (scroll > 500) {
            $(".goToTop").fadeIn(500);
            $(".goToTop").css("visibility", "visible");
        } else {
            $(".goToTop").fadeOut(500);
        }
    });
    $(".goToTop").click(function () {
        $("body, html").animate({ scrollTop: 0 }, 1000)
    })
    // ========== after refresh back to top=======
    // $(window).on("load",function(){
    //     $("body, html").animate({ scrollTop: 0 }, 1000)
    // })
    // ============= pre loader ============
    $(window).on("load",function(){
        $("#preloader").delay(1000).fadeOut(500);
           $("body, html").animate({ scrollTop: 0 }, 500)

    })
    // ========== service section slider using slick slider js ========
    $('.card_wrapper').slick({
        dots: true,
        // dotsClass: ".service_slide_dots",
        appendDots: $(".service_slide_dots"),
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: ".left_arrow",
        nextArrow: ".right_arrow",
    });
    // ========== feedback section slider using slick slider js ========

    $('.feedback_wrapper_main').slick({
        dots: true,
        appendDots: $(".feedback_dots"),
        prevArrow: ".feedback_left_arrow",
        nextArrow: ".feedback_right_arrow",
    });
    // ======= counter up ==========
    $('.counter').counterUp({
        delay: 50,
        time: 1500
    });

    // ========== active menu ==============
    // $(".main_menu").on("click", function(){
    //     $(this).addClass("active_menu").siblings().removeClass("active_menu")
    // })
    // ========== accordion =======

    
});

// ============== accordion ==========
$(document).ready(function () {
    $(".card-header").click(function () {
        // self clicking close
        if ($(this).next(".card-body").hasClass("active")) {
            $(this).next(".card-body").removeClass("active").slideUp()
            $(this).children("span").removeClass("fa-minus").addClass("fa-plus")
        }
        else {
            $(".card .card-body").removeClass("active").slideUp()
            $(".card .card-header span").removeClass("fa-minus").addClass("fa-plus");
            $(this).next(".card-body").addClass("active").slideDown()
            $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
        }
    })
})