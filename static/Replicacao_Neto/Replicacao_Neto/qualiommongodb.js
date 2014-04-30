    // https://github.com/openshift-quickstart/openshift-mongo-node-express-example/blob/master/server.js  

var mongodb = require('mongodb');

var QualiomDB = function () {
    var self = this;
    var db = null;

    self.conectar = function (banco, callback) {

        self.nome_banco = banco;
        var dbServer = new mongodb.Server(process.env.OPENSHIFT_MONGODB_DB_HOST || "127.0.0.1", parseInt(process.env.OPENSHIFT_MONGODB_DB_PORT || 27017));
        self.db = new mongodb.Db(banco, dbServer, { safe: false, auto_reconnect: true });
        var dbUser = process.env.OPENSHIFT_MONGODB_DB_USERNAME || 'qualiom';
        var dbPass = process.env.OPENSHIFT_MONGODB_DB_PASSWORD || 'qualiom';

        self.db.open(function (err, db_open) {
            if (err) {
                erro = err;
                callback();
            };
            self.db.authenticate(dbUser, dbPass, { authdb: "admin" }, function (err, res) {
                if (err) { erro = err; };
                self.collection = self.db.collection(banco);
                callback();
            });
        });
        db.close();
    };

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
    self.desconecta = function () {
        db.close();
    }
};

module.exports.QualiomDB = QualiomDB;
