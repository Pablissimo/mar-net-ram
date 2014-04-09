$(function () { //quando carrega o html
    $("#adicionar").click(quando_clicar_no_botao);
})

var contador = 0;
function adicionar(chave, dado) {
    //$("#div_input").append("<div id='" + chave +"'><input class='dado' name='"+chave+"' placeholder='Escreva aqui' value='"+dado+"' onkeypress='quando_teclar_no_input(this);' /><button></div>");
    var agrupador = $("<div>");
    agrupador.attr("id", chave);
    var input = $("<input>");
    input.attr("class", "dado");
    input.attr("name", chave);
    input.attr("placeholder", "Escreve aqui");
    input.val(dado);
    input.keydown(function (e) {
        if (e.which == 8) {
            var dado = input.val();
            if (dado == "")
                agrupador.remove();
        }
    });
    var botao_remover = $("<button>");
    botao_remover.html("-");
    botao_remover.click(function () {
        agrupador.remove();
    })
    agrupador.append(input);
    agrupador.append(botao_remover);
    $("#div_input").append(agrupador);
}
function quando_clicar_no_botao() {
    contador++;
    var chave = "dado" + contador;
    var dado = "";
    adicionar(chave, dado);   
}

