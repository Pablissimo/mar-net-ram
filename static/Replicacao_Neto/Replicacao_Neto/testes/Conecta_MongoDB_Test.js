    // UnitTest.js 
var assert = require('assert');
var qdb = require('../qualiommongodb.js');
var mongodb = require('mongodb');


exports['TestarConexaoMongoDB'] = function (test) {

    var banco = "qualiom";
    var ip_servidor = process.env.OPENSHIFT_MONGODB_DB_HOST || "127.0.0.1";
    var porta_servidor = parseInt(process.env.OPENSHIFT_MONGODB_DB_PORT || 27017);
    var dbUser = process.env.OPENSHIFT_MONGODB_DB_USERNAME || 'qualiom';
    var dbPass = process.env.OPENSHIFT_MONGODB_DB_PASSWORD || 'qualiom';

    var dbServer = new mongodb.Server(ip_servidor, porta_servidor);

    var db = new mongodb.Db(banco, dbServer, { safe: false, auto_reconnect: true });
    var conectou = false;

    db.open(function (err, db_open) {
        assert.equal(null, err, err);
        global.db = db;
        setInterval(function () { global.db.close(); }, 1000);
        db.authenticate(dbUser, dbPass, { authdb: "admin" }, function (err, res) {
            assert.equal(null, err, err);
        });
    });
}
