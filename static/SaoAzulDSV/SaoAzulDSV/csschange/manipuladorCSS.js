$(function () {
    $("#style2").attr("disabled", true);
    $("#estilo").click(estilo1);
    $("#estilo").click(estilo2);

})

function estilo1() {
    $("#style2").attr("disabled", true);
    $("#style1").removeAttr("disabled");
}

function estilo2() {
    $("#style1").attr("disabled", true);
    $("#style2").removeAttr("disabled");
}