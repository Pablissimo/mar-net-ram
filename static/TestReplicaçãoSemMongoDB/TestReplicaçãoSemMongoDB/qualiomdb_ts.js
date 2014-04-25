var registro = (function () {
    function registro() {
    }
    return registro;
})();

var QualiomDB = (function () {
    function QualiomDB(nome_banco) {
        this.nome_banco = nome_banco;
        this.contador = 0;
        this.db = [];
    }
    QualiomDB.prototype.gerarchave = function () {
        this.contador++;
        return this.nome_banco + this.contador.toString;
    };

    QualiomDB.prototype.adicionar = function (dado) {
        var reg = new registro();
        reg.chave = this.gerarchave();
        reg.dado = dado;
        this.db.push(reg);
    };
    return QualiomDB;
})();
//# sourceMappingURL=qualiomdb_ts.js.map
