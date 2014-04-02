function gravar()
{
    var mensagem = "";
    var work = new Worker("Worker.js");
    var tamanhoArrayForm = $('#form').serializeArray().length;

    for (var i = 1; i <= tamanhoArrayForm ; i++)
    {
        var dado = $("#dado" + i).val();
        localStorage.setItem(i, dado);

        work.addEventListener('message', function (e) {
            console.log('', e.data);
        }, false);

        var string_dados = (i+" "+dado);

        work.postMessage(string_dados);
        mensagem += string_dados + " ";
    };
    alert(mensagem);
    work.onmessage = function (e) {
        alert(e.data);
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
    $(".chave").change(gravar);
    $(".dado").change(gravar);
}

$(function()
{
    inilializar();
})

    
