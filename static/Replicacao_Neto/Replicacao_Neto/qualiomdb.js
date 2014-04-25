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
        self.db.push({ chave: chave, dado: dado });
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




    self.sync = function () {

        //sync dos dados dos bancos A, B ou "N" para o banco_matriz.
        //---------------------------------------------------------------

        var i;
        var igual = false;
        for (var index in self.db) { //for para ler todos os registros do banco de dados
            var registro = self.db[index];// atribui a registro o valor do array do self.db[index];


            for (i = 0; i < banco_matriz.db.length; i++) {//for para todos os resgistros do banco_matriz
                if (banco_matriz.db[i].chave == registro.chave) {//comparação de chaves para não ter replicações
                    igual = true;// seta variavel igual como true se tiver alguma chave igual ja banco matriz
                }
            }


            if (igual == false) {//se não tiver nenhuma chave repetida
                banco_matriz.db.push(registro);//registro é add no banco_matriz
            }
            igual = false;
        }


        //sync dos dados do banco_matriz para os outros bancos A, B ou "N".
        //---------------------------------------------------------------


        for (var index in banco_matriz.db) { //for para ler todos os registros do banco_matriz
            var registro = banco_matriz.db[index];//atribui a registro o valor do array banco_matriz[index];


            for (i = 0; i < self.db.length; i++) {//for para todos os resgistros do banco que está fazendo sync
                if (self.db[i].chave == registro.chave) {//comparação de chaves para não ter replicações
                    igual = true;// seta variavel igual como true se tiver alguma chave igual ja banco matriz
                }
            }


            if (igual == false) {//se não tiver nenhuma chave repetida
                self.db.push(registro);//add o registro no banco que esta fazendo o sync
            }
            igual = false;
        }
    }
};


var banco_matriz = new exports.QualiomDB("matriz");
