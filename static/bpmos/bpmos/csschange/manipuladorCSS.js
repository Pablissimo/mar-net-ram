$('#estilo').click(function() {
    $("#style1").removeAttr("disabled");
    $("#style2").Attr("disabled", "disabled");
})

$('#estilo2').click(function() {
    $("#style2").removeAttr("disabled");
    $("#style1").Attr("disabled", "disabled");
})