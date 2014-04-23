exports.QualiomDB = function (banco) {
    var self = this;
    self.db = new Array();
    self.nome_banco = banco;

    self.contador = 0;

    self.gerarchave = function (dado) {
        self.contador++;
        return self.nome_banco + self.contador;
    }

    self.adicionar = function (dado) {
        var chave = self.gerarchave();
        self.db.push({chave: chave, dado: dado});
    };


    self.deletar = function () {

    }

    self.alterar = function () {

    }

    self.listadados = function (a) {
        for (i=0; i<= db.length; i++) {
            console.log(db[i]);
        }
    }

};
