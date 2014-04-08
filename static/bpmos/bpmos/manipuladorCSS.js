$(function () {

    // $("link[href=estiloAlternativo.css]").attr("disabled");
    $("#estiloAlternativo").attr("disabled");
    $("link[href=estilosensitive.css]").attr("disabled");

    $('.alternativo').click(trocar_tema_Alternativo);
    $('.sensitive').click(trocar_tema_Alternativo);
    $('.padrao').click(trocar_tema_padrao);
});

function trocar_tema_Alternativo() {

    //$("head").append("<link rel='stylesheet' type='text/css' href='estiloAlternativo.css'>")
    //$('body').css({
    //    background: "#fff"
    //});
    $("link[href=estiloAlternativo.css]").removeAttr("disabled");

}

function trocar_tema_sensitive() {
    //$("head").append("<link rel='stylesheet' type='text/css' href='estilosensitive.css'>")
    //$('body').css({
    //    background: "#ffb7f5"
    //});
}
function trocar_tema_padrao() {
    location.reload(true);
}