$(function ()
{        
    var estilo_inicial = localStorage.getItem("landscape");
    if (!estilo_inicial)
        estilo_inicial = 'estilo';

    mudar_estilo(estilo_inicial);

    $("nav a:nth-child(1)").click(function () { remove_estilo(); });
    $("nav a:nth-child(2)").click(function () { mudar_estilo("estilo"); });
});

function mudar_estilo(nome)
{
    var estilo = document.getElementById("style");
    if (estilo)
        estilo.parentNode.removeChild(estilo);
    $("head").append("<link rel='stylesheet' type='text/css' href='css/" + nome + ".css' id='style'>");
    localStorage.setItem("estilo", nome);
}

function remove_estilo() {
    var estilo = document.getElementById("style");
    if (estilo)
        estilo.parentNode.removeChild(estilo);
}
