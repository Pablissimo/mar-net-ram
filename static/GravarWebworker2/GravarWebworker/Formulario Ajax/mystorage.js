function gravar()
{
    var tamanhoArrayForm = $('#form').serializeArray().length;

    for (var i = 1; i <= tamanhoArrayForm ; i++)
    {
        var dado = $("#dado" + i).val();
        localStorage.setItem(i, dado);
    }
}
   
function carregar()
{
    var tamanhoArrayForm = $('#form').serializeArray().length;

    for (var i = 1; i <= tamanhoArrayForm ; i++)
    {
        var dado = localStorage.getItem(i);
        $("#dado" + i).val(dado);
    }
}

function inilializar()
{
    $("#form").ready(carregar);
    $(".chave").blur(gravar);
    $(".dado").blur(gravar);
}

$(function()
{
    inilializar();
})

    
