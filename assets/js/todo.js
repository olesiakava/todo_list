$("ul").on("click", "li", function (event) {
    $(this).toggleClass("done");
});


$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function (event) {
    if (event.which === 13) {
        var inputtext = $(this).val();
        $(this).val(" ");
        $("ul").append("<li><span><i class=\"fas fa-trash\"></i> </span>" + inputtext + "</li>");
    }
    ;
});

$(".fa-plus").on("click", function () {
    $("input").fadeToggle(500);

})
