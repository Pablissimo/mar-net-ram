$(function ()
{        
    adiciona();
    $("nav a:nth-child(1)").click(function () { estilo_css(true); });
    $("nav a:nth-child(2)").click(function () {estilo_css(false) });
});

function adiciona()
{
    $("head").append("<link rel='stylesheet' type='text/css' href='css/ResponsiveStyle.css' class='style'>");
    $("head").append("<link rel='stylesheet' type='text/css' href='css/Animacoes.css' class='style'>");
    $("head").append("<link rel='stylesheet' type='text/css' href='css/landscape.css' class='style'>");
    $("head").append("<link rel='stylesheet' type='text/css' href='css/ControleTela.css' class='style'>");
}

function etilo(e) {
    var style = $('.style').prop('disabled', e);
}

