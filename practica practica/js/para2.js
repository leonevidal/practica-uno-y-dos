$("#hive1").click(
    function () { 
        alert("esto es para esconder")
        $("#befect1").hide()                
    }
);

$("#show1").click(
    function () { 
        $("#befect1").slideDown("slow");
    }
);
$("#hive2").click(
    function () { 
        $("#imagen").fadeOut(2000)
        $("#conme").fadeOut(2000);
    }
);

$("#show2").click(
    function () { 
        $("#imagen").fadeIn(3000)
        $("#conme").fadeIn(3000);
    }
);

$("#io2").click(
    function () { 
        $("#imagen").toggle("slow")
        $("#conme").toggle("slow");
    }
);
$("#hive3").click(
    function () { 
        $("#befect3").css("background"," rgb(157, 206, 221)").slideUp(3000).slideDown(300);
    }
);

$("#show3").click(
    function () { 
        $("#befect3").slideDown("slow");
    }
);
