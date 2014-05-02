"use strict";
//https://github.com/openshift-quickstart/openshift-mongo-node-express-example/blob/master/server.js  

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

        process.on('exit', function () { self.db.close(); });

        self.db.open(function (err, db_open) {
            if (err) 
                callback(err);
            self.db.authenticate(dbUser, dbPass, { authdb: "admin" }, function (err, res) {
                if (err) {
                    callback(err);
                }
                else {
                    self.collection = self.db.collection(banco);
                    try {
                        callback();
                    } finally {
                        setTimeout(function () {
                            self.db.close();
                        }, 2000);
                        //self.db.close();
                    }
                }
            });
        });
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

    self.listar = function (callback) {
        var pesquisa_stream_ou_cursor = self.collection.find().sort({_id:1});
        pesquisa_stream_ou_cursor.toArray(callback);
    }

    self.apagarTUDO = function () {
        self.collection.remove();
    }

    self.alterar = function (chave, dadoalterado) {
        self.collection.update(
           { _id:  chave},
           {
               _id: chave,
               dado: dadoalterado
           },
           { upsert: false }
        )
    }
};

module.exports.QualiomDB = QualiomDB;
