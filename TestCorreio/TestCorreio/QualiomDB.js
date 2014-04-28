exports.QualiomDB = function (banco) {
    var self = this;
    self.db = new Array();
    self.log = new Array();
    self.nome_banco = banco;
    self.indexLog = 0;
    self.UltimoIndexSync = 0;
    self.assinantes = new Array();
    self.contador = 0;
    self.mensagem = new Array();

    self.envia = function (emitente, destinatario, mensagem) {
        self.db.push(emitente:emitente, destinatario:destinatario, mensagem:mensagem);
    }
    self.recebe = function () {
        
    }
    self.pesquisar = function (Mensagem) {
        var retorno = new Array();
        for (var index in self.db) {
            var registro = self.db[index];
            if (registro.mensagem == Mensagem) {
                retorno.push(registro);
            }
        }
    }
    self.listaMensagens = function () {
        return self.db;
    }
}
