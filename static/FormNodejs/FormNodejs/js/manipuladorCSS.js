$(function () {
    adiciona_estilo();

    $("#sem_css").click(function () { estilo_css(true); });
    $("#com_css").click(function () {estilo_css(false) });
});

function adiciona_estilo() {

    $("head").append("<link rel='stylesheet' type='text/css' href='css/ResponsiveStyle.css' class='style'>");
    $("head").append("<link rel='stylesheet' type='text/css' href='css/Animacoes.css' class='style'>");
    $("head").append("<link rel='stylesheet' type='text/css' href='css/Style_form.css' class='style'>");
    $("head").append("<link rel='stylesheet' type='text/css' href='css/ControleTela.css' class='style'>");

}

function estilo_css(e) {
    var style = $('.style').prop('disabled', e);
}
