function gravar()
{
    var dados_do_form_como_array = ($('#form').serializeArray());
    $.each(dados_do_form_como_array,
        function (nome, valor)
        {
            var nomeLocalSotarage = valor.name;
            var valorLocalSotarage = valor.value;
            localStorage.setItem(nomeLocalSotarage, valorLocalSotarage);
        }
    );
    
    var dados_do_form_serializado = JSON.stringify(dados_do_form_como_array);


    /*postMessage(dados_do_form_serializado);

    var elemento_da_chave = $("#chave1"); // document.getElementById('chave') 
    var chave1 = elemento_da_chave.val(); // elemento_da_chave.value
    localStorage.setItem('chavelocal', chave1);

    var elemento_da_chave = $("#texto1"); // document.getElementById('chave') 
    var texto1 = elemento_da_chave.val(); // elemento_da_chave.value
    localStorage.setItem('textolocal', texto1);*/
   
}

function carregar()
{

}

function inilializar()
{
    $(".chave").blur(gravar);
    $(".texto").blur(gravar);
}

$(function()
{
    inilializar();
})

    
