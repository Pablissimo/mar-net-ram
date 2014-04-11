function agendar_gravacao()
{
    var qual_edit = $(this);
    var id_timeout = qual_edit.attr('id_timeout');
    if (id_timeout)
        clearTimeout(id_timeout);

    var id_timeout = setTimeout(function () { executar_gravacao(qual_edit); }, 2000);
    qual_edit.attr('id_timeout', id_timeout)
}

function executar_gravacao(qual_edit)
{
    var dado_edit = qual_edit.val();
    var chave_edit = qual_edit.attr('id');

    var dado_antigo = localStorage.getItem(chave_edit);
    if (dado_edit == dado_antigo)
        return;
    var work = new Worker("Worker.js");

    localStorage.setItem(chave_edit, dado_edit);

    work.addEventListener('message', function (e) {
        console.log('', e.data);
    }, false);

    var mensagem = {
        chave: chave_edit,
        dado: dado_edit
    };

    work.postMessage(mensagem); // SEM JSON

    //com JSON
    //mensagem_json = JSON.stringify(mensagem);
    //work.postMessage(mensagem_json);

    //mensagem = chave + ' ' + dado; // stringify

     work.onmessage = function (e) {
         $("#mensagemStatus").html(e.data);
         setTimeout(function () {
             $("#mensagemStatus").html(e.data);
         }, 2000); 
     }
};

   
function carregar()
{
    var tamanhoArrayForm = $('#form').serializeArray().length;

    for (var i = 1; i <= tamanhoArrayForm ; i++)
    {
        var dado = localStorage.getItem("dado"+i); //dado1
        $("#dado"+i).val(dado);
    }
}

function inilializar()
{
    $("#form").ready(carregar);
    //$(".dado").change(gravar);
    $(".dado").keypress(agendar_gravacao);
}

$(function()
{
    inilializar();
})

    
