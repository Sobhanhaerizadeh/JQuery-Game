// $(document).ready(function() {
//     $("#btn").click(function() {
//         $(".si").addClass("a2");
//     })

//     $("#btn1").click(function() {
//         $(".si").removeClass("a2");
//     })

//     $("#btn2").hover(function() {
//         $("div:odd").toggleClass("a2");
//     })
// });

$(document).ready(function() {
    $(".b1 , .b2 , .b3 , .b3 , .b4 , .b5 , .b6 , .b7 , .b8 , .b9 , .b10 , .b11 , .b12 , .b13 , .b14 , .b15 , .b16 , .b17 , .b16a , .b16b , .b16c ").hover(function() {
        document.write("You Lose :) !");
    })

    $(".end").hover(function() {
        document.write("You Win :D !");
    })

    $(".d1").hover(function() {
        $(".b1 , .b2 , .g1").fadeOut(3000);


    });

    $(".d2").hover(function() {
        $(".b3 , .b6").fadeOut(3000);


    });

    $(".d3").hover(function() {
        $(".b7 , .b8").fadeOut(3000);


    });

    $(".d4").hover(function() {
        $(".b16a , .b16b").fadeOut(3000);


    });

    $(".d5").hover(function() {
        $(".b11 , .b12").fadeOut(3000);


    });

    $(".d6").hover(function() {
        $(".b9 , .b10").fadeOut(3000);


    });

    $(".d7").hover(function() {
        $(".b14, .b15").fadeOut(3000);


    });


});