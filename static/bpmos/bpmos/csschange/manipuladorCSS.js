$("#estilo").click(function() {
    $("#style1").removeAttr("disabled");
    $("#style2").Attr("disabled", "disabled");
})

$("#estilo2").click(function() {
    $("#style2").removeAttr("disabled");
    $("#style1").Attr("disabled", "disabled");
})

$("#estilo").click(function () {
    $("link[href*=estilo2.css]").attr("disabled", "disabled");
    $("link[href*=estilo.css]").removeAttr("disabled");
});

$("#estilo2").click(function () {
    $("link[href*=estilo1.css]").attr("disabled", "disabled");
    $("link[href*=estilo2.css]").removeAttr("disabled");
});