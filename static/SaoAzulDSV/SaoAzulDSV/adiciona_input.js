var banco_de_dados = {
    contador: 1,
    items: { chave1: "um"}
};
$(function () {
    //carregar_Storage();
    var db = localStorage.getItem("banco_de_dados");
    if (db)
        banco_de_dados = JSON.parse(db);  // deserializar json
    // lista as chaves que foram gravadas
    for (var chave in banco_de_dados.items) {
        var dado = banco_de_dados.items[chave];
        AdcionaItem(chave, dado);
    }
    // atribuicao de eventos
    $(document).keypress(function(e) {
        if (e.which == 13){ //Verifica se a tecla é Enter.
            CriaCampo();
        }
    });// Qualquer tecla que for precionada vai chamar a função
    $('#btnAdd').click(CriaCampo);
})

function CriaCampo() 
{    
    var ultimo = $('input').last();
    var val = ultimo.val();

    if (val != "")
    {
        banco_de_dados.contador++;
        var chave = "chave" + banco_de_dados.contador;
        AdcionaItem(chave, "");// soma ao contador primeiro e depois chama a função de add
        $("input").last().focus();      //Adiciona Foco no ultimo input add
    }
}


function AdcionaItem(chave, dado)
{
    var painel = $('<div>');
    //var label = "<label>Mensagem " + banco_de_dados.contador + "</label>";     //Var que guarda o Label Mensagem
    var label = $("<label>");
    label.html(chave );

    //var input = "<input class='dado' id='input" + e + "' placeholder='Escreva aqui'/>";     // Var que guarda o Input
    var input = $('<input>');
    input.attr('id', chave);
    input.attr('value', dado);
    input.attr('placeholder', "Escreva aqui");
    input.keyup(function (e) {
        if (e.which == 46) { //Ctrl+DEL 
            RemoveItem(painel, chave);
        }
        else {
            GravaItem(chave, input.val());
        }
    });// Ao precionar uma tecla ele grava no Local Storage.
    //var button = "<button onclick='removeCampo(" + e + ");'>Remove</button>";       //Var que guarda o Button
    var button = $('<button>');
    button.html('Remover');
    button.click(function () {
        RemoveItem(painel, chave);
    });
    //$("#div_input").append("<div id='dado" + e + "'>" + label + input + button + "</div>");     // adiciona ao final na #div_input o input
    painel.append(label);
    painel.append(input);
    painel.append(button);

    $('#div_input').append(painel);
}
function GravaItem(chave, dado) {
    banco_de_dados.items[chave] = dado;
    localStorage.setItem('banco_de_dados', JSON.stringify(banco_de_dados)); // stringifly => serializa para json
}
function RemoveItem(painel, chave)
{
    painel.remove();
    delete banco_de_dados.items[chave];
    localStorage.setItem('banco_de_dados', JSON.stringify(banco_de_dados));
    $("input").last().focus();  
}