function gravar()
{
    var qual_edit = $(this);
     var dado_edit = qual_edit.val();
    var chave_edit = qual_edit.attr('id');

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
         alert(e.data);
     }
};

   
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
    $(".dado").change(gravar);
}

$(function()
{
    inilializar();
})

    
