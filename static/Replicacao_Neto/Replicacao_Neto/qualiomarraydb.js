exports.QualiomDB = function () {
    var self = this;
    self.db = new Array();//array do banco
    self.log = new Array();//array do log/historico
    self.indexLog = 0;//qual o ultimo item enviado para o banco matriz
    self.contador = 0;// contador da chave

    self.conectar=function(banco, callback)
    {
        self.nome_banco = banco;//nome do banco de dados para geracao da chave
        callback();
    };

    self.gerarchave = function (dado) {//gerador de chaves
        self.contador++;
        return self.nome_banco + self.contador;
    }

    self.adicionar = function (dado) {// adiciona um dado no proprio banco
        var chave = self.gerarchave();
        self.db.push({ _id: chave, dado: dado });//grava o dado no banco
        self.log.push({ operacao: 'adicionar', chave: chave, dado: dado }); //historia
    };

    self.deletar = function (chave) {//deleta um dado no proprio banco
        for (var index in self.db) {
            var registro = self.db[index];
            if (registro.chave == chave) {//compara a chave do registro com a chave que vai ser excluida
                delete self.db[index];//exclui
                self.log.push({ operacao: 'deletar', chave: chave });//historia
            }
        }
    }

    self.apagarTUDO = function () {
        self.db = new Array();
    }

    self.alterar = function (chave, dado) {//altera um dado no proprio banco
        for (var index in self.db) {
            var registro = self.db[index];
            if (registro.chave == chave) {//comparação de chaves
                registro.dado = dado;// altera dado
                self.log.push({ operacao: 'alterar', chave: chave, dado: dado });//historia
            }
        }
    }

    self.pesquisar = function (dado) {//pesquisa o dado no banco
        var retorno = new Array();
        for (var index in self.db) {
            var registro = self.db[index];
            if (registro.dado == dado) {
                retorno.push(registro);
            }
        }

        retorno.sort(function (a, b) {//ordena o array de retorno
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

    self.adicionar_rep = function (dado, chave) {//adiciona no banco matriz
        exports.banco_matriz.db.push({ chave: chave, dado: dado });
    }

    self.alterar_rep = function (dado, chave) {//altera no banco matriz
        for (var index in exports.banco_matriz.db) {
            var registro = exports.banco_matriz.db[index];
            if (registro.chave == chave) {
                registro.dado = dado;
            }
        }
    }

    self.deletar_rep = function (chave) {//deleta no banco matriz
        for (var index in exports.banco_matriz.db) {
            var registro = exports.banco_matriz.db[index];
            if (registro.chave == chave) {
                delete exports.banco_matriz.db[index];
            }
        }
    }

    self.sync = function () {
        for (i = self.indexLog; i < self.log.length; i++) {
            var item = self.log[i];

            if (item.operacao == 'adicionar') {
                exports.banco_matriz.adicionar_rep(item.dado, item.chave);
                exports.banco_matriz.log.push({ operacao: 'adicionar', chave: item.chave, dado: item.dado });//historico do banco matriz
            }

            else if (item.operacao == 'alterar') {
                exports.banco_matriz.alterar_rep(item.dado, item.chave);
                exports.banco_matriz.log.push({ operacao: 'alterar', chave: item.chave, dado: item.dado });//historico do banco matriz
            }

            else if  (item.operacao == 'deletar') {
                exports.banco_matriz.deletar_rep(item.chave);
                exports.banco_matriz.log.push({ operacao: 'deletar', chave: item.chave, dado: item.dado });//historico do banco matriz
            }
        }
        self.sync_matriz();//adiciona no banco as mensagens que foram enviado por outro banco
        self.indexLog = self.db.length;//Seta o ultimo registro que foi enviado para o matriz
    }


    self.sync_matriz = function () {//Se tiver alguma mensagem para o banco que está consutando ele pega o dado e grava em seu banco
        var outrosbancos = new Array();
        for (var i in exports.banco_matriz.log) {
            var item = exports.banco_matriz.log[i];
            var subchave = item.chave;
            if (self.nome_banco != subchave.slice(0, 1)) {
                if (item.operacao == 'adicionar') {
                    self.db.push({ chave: item.chave, dado: item.dado });
                }

                else if (item.operacao == 'alterar') {
                    for (var index in self.db) {
                        var registro = self.db[index];
                        if (registro.chave == item.chave) {
                            registro.dado = item.dado;
                        }
                    }
                }

                else if (item.operacao == 'deletar') {
                    for (var index in self.db) {
                        var registro = self.db[index];
                        if (registro.chave == item.chave) {
                            delete self.db[index];
                        }
                    }
                }
            }
            else {
                outrosbancos.push({ operacao: item.operacao, chave: item.chave, dado: item.dado });//Se não ele adiciona em outro array para os outros bancos, sem a mensagem que já foi sincronizada pelo banco atual
            };  
        }
        exports.banco_matriz.log = outrosbancos; //atribui ao log do banco matriz as mensagens que não foram sincronizadas.   
    }
};
exports.banco_matriz = new exports.QualiomDB("matriz");