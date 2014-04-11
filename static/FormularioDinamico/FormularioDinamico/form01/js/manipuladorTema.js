$(function ()
{  //metodo de disabilitar CSS da pagina HTML

    var estilo_inicial = localStorage.getItem("estilo");
    if (!estilo_inicial)
        estilo_inicial = 'temaVermelho';
    mudar_estilo(estilo_inicial);

    $("#home").click(
        function () {
            mudar_estilo("temaVermelho");
        });

    $("#sem_css").click(
        function () {
            remove_estilo();
        });
})

function mudar_estilo(nome)
{
    remove_estilo();
    $("head").append("<link rel='stylesheet' type='text/css' href='css/" + nome + ".css' id='style'>");
    localStorage.setItem("estilo", nome);
}

function remove_estilo() {
    var estilo = document.getElementById("style");
    if (estilo)
        estilo.parentNode.removeChild(estilo);
}