exports.QualiomDB = function (banco) {
    var self = this;
    self.db = new Array();
    self.log = new Array();
    self.nome_banco = banco;

    self.contador = 0;

    self.gerarchave = function (dado) {
        self.contador++;
        return self.nome_banco + self.contador;
    }

    self.adicionar = function (dado) {
        var chave = self.gerarchave();
        self.db.push({ chave: chave, dado: dado });
        self.log.push({ operacao: 'adicionar', chave: chave, dado: dado });
    };


    self.deletar = function (chave) {
        for (var index in self.db) {
            var registro = self.db[index];
            if (registro.chave == chave) {
                delete registro.dado;
                delete registro.chave;
                self.log.push({ operacao: 'deletar', chave: chave });
            }
        }
    }

    self.alterar = function (chave, dado) {
        for (var index in self.db) {
            var registro = self.db[index];
            if (registro.chave == chave) {
                registro.dado = dado;
                self.log.push({ operacao: 'alterar', chave: chave, dado: dado });
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
        retorno.sort(function (a, b) {
            if (a.chave == b.chave)
                return 0;
            if (a.chave > b.chave)
                return 1;
            return -1;
        });
        return retorno;
    }

    self.listadados = function () {
        return self.db;
    }


    self.pesquisar_rep = function (d)
    {
        var retorno = new Array();
        for (var index in exports.banco_matriz.db) {
            var registro = exports.banco_matriz.db[index];
            if (registro.dado == d) {
                retorno.push(registro);
            }
        }
        retorno.sort(function (a, b) {
            if (a.chave == b.chave)
                return 0;
            if (a.chave > b.chave)
                return 1;
            return -1;
        });
        return retorno;
    }

    self.adicionar_rep = function (c, d)
    {
        exports.banco_matriz.db.push({chave:c, dado:d});
    }

    self.deletar_rep = function (c, d)
    {
        for (var index in exports.banco_matriz.db)
        {
            var registroBM = exports.banco_matriz.db[index];
            if (registroBM.chave == c)
            {
                delete registroBM.dado;
                delete registroBM.chave;
            }
        }
    }

    self.alterar_rep = function (c, d)
    {
        for (var index in exports.banco_matriz.db)
        {                       
            var registroBM = exports.banco_matriz.db[index];
            if (registroBM.chave == c)
            {
                registroBM.dado = d;

            }
        }
    }


    self.sync = function () {
        for (var index in self.log) {
            var item = self.log[index];
          
            if (item.operacao == 'adicionar')
            {
                exports.banco_matriz.adicionar_rep(item.chave, item.dado);
            }

            if (item.operacao == 'deletar')
            {
                exports.banco_matriz.deletar_rep(item.chave, item.dado);
            }

            if (item.operacao == 'alterar')
            {
                exports.banco_matriz.alterar_rep(item.chave, item.dado);
            }
        }
    }
};

exports.banco_matriz = new exports.QualiomDB("matriz");
