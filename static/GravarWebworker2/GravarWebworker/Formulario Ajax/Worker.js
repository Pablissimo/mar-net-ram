onmessage = function (e) {
    var m = e.data; // sem JSONs (mais rapido)
    //var m = JSON.parse(e.data); // com JSON (bom hovuer comunicacao com servidor, ou outra linguagem ou db/storage)

    var req = new XMLHttpRequest();
    req.open('POST', 'gravar.ashx', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    var var_gravar = "chave=" + m.chave + "&dado=" + m.dado;

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            var resposta = "Todas os campos foram gravado com sucesso!";
            self.postMessage(resposta);
        }
    }
    req.send(var_gravar);//Envia os dados armazenados na variavel "var_guardar" para o banco(tabela)
}