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


    self.deletar = function (e) {
        delete self.db[e];
    }

    self.alterar = function (c, d) {
        self.db[c].dado = d;
    }

    self.pesquisar = function (dado) {
        var retorno = new Array();
        for (var index in self.db) {
            var registro = self.db[index];
            if (registro.dado == dado) {
                retorno.push(registro);
            }
        }
        return retorno;
    }

    self.listadados = function () {
        return self.db;
    }

    self.sync = function (d)
    {
        for (var i in d)
        {
            var reg = d[i];
            if (self.db.dado != reg.dado)
            {
                self.db.push(reg);
            }
        }

        return self.db;
    }

};
