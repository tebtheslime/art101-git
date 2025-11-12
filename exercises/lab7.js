$(".nice-block span").click(function () {

    $(this).parent().toggleClass("more less");

    if ($(this).html() == "more") {
        $(this).html("less");
    } else {
        $(this).html("more");
    }
});