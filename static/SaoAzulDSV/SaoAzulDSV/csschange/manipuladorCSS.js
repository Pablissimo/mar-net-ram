$(function () {  //metodo de disabilitar CSS da pagina HTML

    var estilo_inicial = localStorage.getItem("estilo");
    if (!estilo_inicial)
        estilo_inicial = 'estilo';
    mudar_estilo(estilo_inicial);

    $("#estilo").click(function () { mudar_estilo("estilo"); });
    $("#estilo2").click(function () { mudar_estilo("estilo2"); });

})

function mudar_estilo(nome) {
    var estilo = $("style");
    if (estilo)
      estilo.remove(estilo);
    $("head").append("<link rel='stylesheet' type='text/css' href='" + nome + ".css' id='style'>");
    localStorage.setItem("estilo", nome);
}
