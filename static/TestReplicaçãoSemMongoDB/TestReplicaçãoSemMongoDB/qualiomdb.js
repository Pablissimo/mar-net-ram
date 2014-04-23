var QualiomDB = function () {
    var self = this;
    var db = null;

    self.contador = 0;

    self.gerarchave = function (dado, callback) {
        self.contador++;
        return self.nome_banco + self.contador;
    }

    self.adicionar = function (dado, callback) {
        var chave = self.gerarchave();
        self.collection.insert(
         { "_id": chave, "dado": dado },
         callback);
    };

};
