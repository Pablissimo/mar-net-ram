$(function () {
    var contador = localStorage.getItem("contador");
    if (!contador) {
        contador = 1;
        localStorage.setItem("contador", contador);
        localStorage.setItem("dado" + contador, contador);
    }

    for (i = 1; i <= contador ; i++)
    {
        var valor =  pega_valor(contador);
        add(i, valor);
    }

    // atribuicao de eventos
    $(document).keypress(apertou_tecla);

})

function pega_valor(v)
{
    localStorage.getItem("dado"+ v);
}

function apertou_tecla(e)
{
    var contador = localStorage.getItem("contador");
    if (e.which == 13) {
        add(++contador);


        //Gravar contador no LocalStorage
        gravarLocalStorage(contador);

        $("input").last().focus();

    }
}


function gravarLocalStorage(c) //c = Contador
{
    //Contador
    localStorage.setItem("contador", c);    
    localStorage.setItem("dado"+c, c);
}



function add(e, valor)
{
    var label = "<label>Mensagem" + e + "</label>";
    var input = "<input class='dado' name='dado" + e + "' placeholder='Escreva aqui' value='"+valor+"'/>";
    var button = "<button onclick='removeCampo(" + e + ");'>Remove</button>";


    $("#div_input").append("<div id='dado" +e+ "'>"+label+input+button+"</div>");
}


function removeCampo(e)
{
    var dado = $("#dado" + e);
    dado.remove();
}