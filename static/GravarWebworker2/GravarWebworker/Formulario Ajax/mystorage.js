function gravar()
{
    //var dados_do_form_como_array = $('#form').size();

    for (var i = 1; i <= 3 ; i++)
    {
        var dado = $("#dado" + i).val();
        localStorage.setItem(i, dado);
    }
    
    /*var dados_do_form_como_array = ($('#form').serializeArray()); //Serializando o Array do Formulário com JSON, ex.: { name : value } 
    

    //Foreach do JQUERY de Atribuição.
    $.each(dados_do_form_como_array, 
        function (nome, valor) // Onde nome = posição do array(objeto) e valor é o valor da posição do array ( { name : value} ) 
        {
            var nomeLocalSotarage = valor.name; //Pegaando apenas o Título do atributo JSON, ex: { name }
            var valorLocalSotarage = valor.value; //Pegaando apenas o Valor do atributo JSON, ex: { value }
            localStorage.setItem(nomeLocalSotarage, valorLocalSotarage); //Setando o LocalStorage.
        }
    );*/

    //Preparar para Gravar com WEBWORKER
    //var dados_do_form_serializado = JSON.stringify(dados_do_form_como_array);
   
}

function carregar()
{

    for (var i = 1; i <= 3 ; i++)
    {
        var dado = localStorage.getItem(i);
        $("#dado" + i).val(dado);
    }

    /*
    var dados_do_form_como_array = ($('#form').serializeArray()); //Serializando o Array do Formulário com JSON, ex.: { name : value } 
    //Foreach do JQUERY de Carregamento.
    $.each(dados_do_form_como_array, 
        function (nome, valor) {

            var nomeLocalSotarage = valor.name;
            var valorLocalSotarage = valor.value;

            if (localStorage.getItem(nomeLocalSotarage)) {
                eval('$("#' + nomeLocalSotarage + '")').val(localStorage.getItem(nomeLocalSotarage));//$("#chave1").val(localStorage.getItem(nomeLocalSotarage));
            }
        }
    )*/
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

    
