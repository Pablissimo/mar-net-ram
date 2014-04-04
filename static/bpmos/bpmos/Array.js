tabela = new Array();

function novaTabela() {
    var temp = "variavel={'Chave1':'" + document.getElementById("chave1").value +
                        "','Texto1':'" + document.getElementById("texto1").value +
                        "','Chave2':'" + document.getElementById("chave2").value +
                        "','Texto2':'" + document.getElementById("texto2").value + "'}";
    tabela[tabela.length] = eval(temp);
}

function enviarDados() {
    var parametro = "dados";
    for (i = 0; i < tabela.length; i++) {
        parametro += "[";
        parametro += tabela[i].chave1 + ",";
        parametro += tabela[i].texto1 + ",";
        parametro += tabela[i].chave2 + ",";
        parametro += tabela[i].texto2 + ",";
        parametro += "],";
    }
    parametro = parametro.substr(0, parametro.length - 1);
    alert(parametro);
}