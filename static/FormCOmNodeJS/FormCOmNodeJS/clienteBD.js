var dados = (function () {
    function dados() {
    }
    return dados;
})();

var CLiente = (function () {
    function CLiente(nome_banco) {
        this.nome_banco = nome_banco;
        this.contador = 0;
        this.db = [];
    }
    //Criar chave
    CLiente.prototype.criarchave = function () {
        this.contador++;
        return this.nome_banco + this.contador.toString;
    };

    CLiente.prototype.adicionar = function (dado) {
        var reg = new dados();
        reg.chave = this.criarchave();
        reg.dado = dado;
        this.db.push(reg);
    };
    return CLiente;
})();
//# sourceMappingURL=clienteBD.js.map
