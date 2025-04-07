$(function(){
    $(".landing_banner_content").addClass("active");

    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $(".header_menu").addClass("active");
        }
        else{
            $(".header_menu").removeClass("active");
        }

        var targetSecond = $(".second_container").position().top + 300;
        if($(window).scrollTop()+ $(window).height() > targetSecond){
            $(".second_container").addClass("active");
        }

        var targetThird= $(".third_container").position().top + 300;
        if($(window).scrollTop()+ $(window).height() > targetThird){
            $(".third_container").addClass("active");
        }

        var targetFourth= $(".fourth_container").position().top + 300;
        if($(window).scrollTop()+ $(window).height() > targetFourth){
            $(".fourth_container").addClass("active");
        }

        var targetFifth= $(".fifth_container").position().top + 300;
        if($(window).scrollTop()+ $(window).height() > targetFifth){
            $(".fifth_container").addClass("active");
        }
    });

    $(document).on("click", ".mobile_menu", function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $(".menu_container").stop().slideToggle(300);
    });

    $(window).resize(function(){
        $(".menu_container").removeAttr("style");
        $(".mobile_menu").removeClass("active");
    });

    $(document).on("click", ".menu_container nav a", function(e){
        e.preventDefault();
        var thisHash = $(this).attr("href")
        $('html,body').animate({
            scrollTop: ($(thisHash).offset().top - 62)
        }, 800, 'swing');

        if($(window).width() < 992){
            $(".menu_container").removeAttr("style");
            $(".mobile_menu").removeClass("active");
        }
    });

    $(document).on("click", ".landing_content_cta a", function(e){
        e.preventDefault();
        var thisHash = $(this).attr("href")
        $('html,body').animate({
            scrollTop: ($(thisHash).offset().top - 62)
        }, 800, 'swing');

        if($(window).width() < 992){
            $(".menu_container").removeAttr("style");
            $(".mobile_menu").removeClass("active");
        }
    });
});