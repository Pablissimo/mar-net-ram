﻿$(function ()
{        
    var estilo_inicial = localStorage.getItem("estilo");
    if (!estilo_inicial)
        estilo_inicial = 'estilo';

    mudar_estilo(estilo_inicial);

    $(".alternativo").click(function () { mudar_estilo("estiloAlternativo"); });
    $(".estilosensitive").click(function () { mudar_estilo("estilosensitive"); });
    $(".padrao").click(function () { mudar_estilo("estilo"); });
});

function mudar_estilo(nome)
{
    var estilo = document.getElementById("estilo");
    if (estilo)
        estilo.parentNode.removeChild(estilo);
    $("head").append("<link rel='stylesheet' type='text/css' href='" + nome + ".css' id='style'>");
    localStorage.setItem("estilo", nome);
}
