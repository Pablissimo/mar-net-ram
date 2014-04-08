$(function () {  //metodo de disabilitar CSS da pagina HTML

    var estilo_inicial = localStorage.getItem("estilo");
    if (!estilo_inicial)
        estilo_inicial = 'CSSTest1';
    mudar_estilo(estilo_inicial);

    $("#btt-top").click(function () { mudar_estilo("Black theme"); });
    $("#btt-reset").click(function () { mudar_estilo("CSSTest1"); });
    $("#btt-rigth").click(function () { mudar_estilo("redTheme"); });
    $("#btt-left").click(function () { mudar_estilo("yellowTheme"); });
    $("#btt-bot").click(function () { mudar_estilo("greenTheme"); });

})

function mudar_estilo(nome) {
    var estilo = document.getElementById("style");
    if (estilo)
        estilo.parentNode.removeChild(estilo);
    $("head").append("<link rel='stylesheet' type='text/css' href='" + nome + ".css' id='style'>");
    localStorage.setItem("estilo", nome);
}
