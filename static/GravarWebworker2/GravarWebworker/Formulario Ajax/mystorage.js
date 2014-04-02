function gravar()
{
    var qual_edit = $(this);
    alert($.val());
    return;
    var work = new Worker("Worker.js");
    var tamanhoArrayForm = $('#form').serializeArray().length;

    for (var i = 1; i <= tamanhoArrayForm ; i++)
    {
        var dado = $("#dado" + i).val();
        localStorage.setItem(i, dado);

        work.addEventListener('message', function (e) {
            console.log('', e.data);
        }, false);

        var mensagem = {
            chave: i,
            dado: dado
        };

        work.postMessage(mensagem); // SEM JSON

        // com JSON
        //mensagem_json = JSON.stringify(mensagem);
        //work.postMessage(mensagem_json);

        mensagem = chave + ' ' + dado; // stringify
    };
    var i=1;
    work.onmessage = function (e) {
        i++;
        if(i == tamanhoArrayForm) {
            //alert(e.data);
    }
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
   // $(".chave").change(gravar);
    $(".dado").change(gravar);
}

$(function()
{
    inilializar();
})

    
