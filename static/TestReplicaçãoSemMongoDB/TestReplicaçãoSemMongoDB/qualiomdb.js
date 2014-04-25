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


    self.adicionar_rep = function ()
    {
        
    }

    self.deletar_rep = function () {

    }

    self.alterar_rep = function () {

    }


    self.sync = function () {
        for (var index in self.log) {
            var item = self.log[index];

            if (item.operacao == 'adicionar')
            {
                banco_matriz.adicionar_rep()
            }

            if (item.operacao == 'deletar')
            {
                banco_matriz.deletar_rep()
            }

            if (item.operacao == 'alterar')
            {
                banco_matriz.alterar_rep()
            }
        }
    }
};

var banco_matriz = new exports.QualiomDB("matriz");
