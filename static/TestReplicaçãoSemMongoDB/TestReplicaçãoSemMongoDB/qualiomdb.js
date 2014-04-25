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


    self.deletar = function (chave) {
        for (var index in self.db) {
            var registro = self.db[index];
            if (registro.chave == chave) {
                delete registro.dado;
                delete registro.chave;
            }
        }
    }

    self.alterar = function (chave, dado) {
        for (var index in self.db) {
            var registro = self.db[index];
            if (registro.chave == chave) {
                registro.dado = dado;
            }
        }
    }

    self.pesquisar = function (dado) {
        var retorno = new Array();
        for (var index in self.db) {
            var registro = self.db[index];
            if (registro.dado == dado) {
                retorno.push(registro);
            }
        }
        retorno.sort(function (a, b)
        {
            if (a.chave == a.b.chave)
                return 0;
            if (a.chave > a.b.chave)
                return 1;
            return -1;
        });
        return retorno;
    }

    self.listadados = function () {
        return self.db;
    }

    self.sync = function () {

        var banco = banco_matriz;

        var i;
        var igual = false;
        for (var index in banco) {
            var registro = banco[index];


            for (i = 0; i < self.db.length; i++) {
                if (self.db[i].chave == registro.chave) {
                    igual = true;
                }
            }

            if (igual == false) {
                self.db.push(registro);
            }
            igual = false;
        }
    }

};


var banco_matriz = new exports.QualiomDB("matriz");
