$(document).ready(function () {
    var x = 0;
    $('.Down').on("click", function () {
        if (x == 0) {
            $('.down').css("left", "0px");
            x = 1;
        }

        else {
            $('.down').css("left", "1000px");
            setTimeout(() => {
                $('.down').css("display", "none");
                $('.down').css("left", "-1000px");
            }, 500);
            x = 0;
        }
        $('.down').css("display", "block");

    })

    $('.hire , #hire').on("click", function (event) {
        event.preventDefault();
        $(window).scrollTop(0);
        $('.contact').fadeIn(1000);
        $('body').css("overflow", "hidden");
    })
    $('.contact .Close').on("click", function () {
        $('.contact').fadeOut(1000);
        $('body').css("overflow", "visible");
    })

});

window.onload = function () {
    $('#loading').fadeOut(1000, function () { $('body').css('overflow', 'visible') })
}