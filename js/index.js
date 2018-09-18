$(function () {
    $("header .list").click(function () {
        $(".meaubox").slideDown();
    })
    $(".meaubox .top ul li").first().click(function () {
        $(".meaubox").slideUp();
    })


    $("footer .top dl dt").click(function () {
        $(this).next(".small").css("display", "block");
        $(this).find(".add").css("display", "none");
        $(this).find(".re").css("display", "block");
    })

    $("footer .top dl dt .re").click(function (e) {
        e.stopPropagation();
        $(".small").css("display", "none");
        $(".add").css("display", "block");
        $(this).css("display", "none");
    })


    $(window).resize(function () {
        if ($(window).width() > 767) {
            $(".add").css("display", "none");
            $(".re").css("display", "none");
            $(".small").css("display", "none");
            $(".meaubox").slideUp();
        }
        else{
            $(".add").css("display", "block");
        }
    })
})