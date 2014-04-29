    // UnitTest.js 
var assert = require('assert');
var qdb = require('../qualiommongodb.js');
var mongodb = require('mongodb');

exports['TestarConexaoMongoDB'] = function (test) {

    var banco = "qualiom";
    var ip_servidor = process.env.OPENSHIFT_MONGODB_DB_HOST || "127.0.0.1";
    var porta_servidor=parseInt(process.env.OPENSHIFT_MONGODB_DB_PORT || 27017);
    var dbUser = process.env.OPENSHIFT_MONGODB_DB_USERNAME || 'qualiom';
    var dbPass = process.env.OPENSHIFT_MONGODB_DB_PASSWORD || 'qualiom';

    var dbServer = new mongodb.Server(ip_servidor, porta_servidor);

    var db = new mongodb.Db(banco, dbServer, { safe: false, auto_reconnect: true });
    var conectou = false;

    db.open(function (err, db_open) {
        assert.equal(null, err, err);
        db.authenticate(dbUser, dbPass, { authdb: "admin" }, function (err, res) {
            assert.equal(null, err, err);
            db.close();
        });
    });

}

exports['Conectar-MDB'] = function (test) {

    assert.doesNotThrow(function () {
        var A = new qdb.QualiomDB();
        A.conectar('A', function () {
            A.desconecta();
        });
    }
    );
}

exports['listadados-MDB'] = function (test) {

    assert.doesNotThrow(function () {
        var A = new qdb.QualiomDB();
        A.conectar('A', function () {

            var esperado = [];
            var atual = A.listadados();

            assert.deepEqual(esperado, atual, "nao deveria ter dados");

            A.desconecta();
        });
    }
    );
}

exports['Adicionar-MDB'] = function (test) {

    assert.doesNotThrow(function () {
        var A = new qdb.QualiomDB();
        A.conectar('A', function () {
            A.adicionar('um');

            var esperado = [{ chave: 'A1', dado: 'um' }];

            var atual = A.listadados();

            assert.equal(1, atual.length, "quantidade retornada invalida");
            assert.deepEqual(esperado, atual, "conteudo retornado invalido");
            A.desconecta();
        });
    });
}

//exports['Pesquisar-MDB'] = function (test) {

//    assert.doesNotThrow(function () {
//        var A = new qdb.QualiomDB('A');

//        A.adicionar('um');
//        A.adicionar('dois');

//        var esperado = [{ chave: 'A1', dado: 'um' }];

//        var atual = A.pesquisar('um');

//        assert.equal(1, atual.length, "quantidade retornada invalida");
//        assert.deepEqual(esperado, atual, "conteudo retornado invalido");
//    }
//    );
//}

//exports['Pesquisar-2-MDB'] = function (test) {

//    assert.doesNotThrow(function () {
//        var A = new qdb.QualiomDB('A');

//        A.adicionar('um');
//        A.adicionar('dois');
//        A.adicionar('um');


//        var esperado = [{ chave: 'A1', dado: 'um' }, { chave: 'A3', dado: 'um' }];

//        var atual = A.pesquisar('um');

//        assert.deepEqual(esperado, atual, "conteudo retornado invalido");
//    }
//    );
//}



//exports['Alterar-MDB'] = function (test) {

//    var A = new qdb.QualiomDB('A');
//    var B = new qdb.QualiomDB('B');

//    //1
//    A.adicionar('um');

//    var esperado_um_A = [{ chave: 'A1', dado: 'um' }];
//    var esperado_um_B = [];
//    assert.deepEqual(esperado_um_A, A.pesquisar('um'), "dado UM banco A");
//    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "dado UM banco B");

//    A.alterar('A1', 'UM');
//    var esperado_um_A = [{ chave: 'A1', dado: 'UM' }];
//    var esperado_um_B = [];
//    assert.deepEqual(esperado_um_A, A.pesquisar('UM'), "dado UM banco A");
//    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "dado UM banco B");
//}

//exports['Deletar-MDB'] = function (test) {

//    var A = new qdb.QualiomDB('A');
//    var B = new qdb.QualiomDB('B');

//    //1
//    A.adicionar('um');
//    A.adicionar('dois');

//    var esperado_um_A = [{ chave: 'A1', dado: 'um' }];
//    var esperado_um_B = [];
//    assert.deepEqual(esperado_um_A, A.pesquisar('um'), "dado um banco A");
//    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "dado um banco B");

//    var esperado_um_A = [{ chave: 'A2', dado: 'dois' }];
//    var esperado_um_B = [];
//    assert.deepEqual(esperado_um_A, A.pesquisar('dois'), "dado dois banco A");
//    assert.deepEqual(esperado_um_B, B.pesquisar('dois'), "dado dois banco B");

//    A.deletar('A1');
//    var esperado_um_A = [];
//    var esperado_um_B = [];
//    assert.deepEqual(esperado_um_A, A.pesquisar('um'), "dado um banco A");
//    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "dado um banco B");
//}


//exports['Sync-01-MDB'] = function (test) {


//    var A = new qdb.QualiomDB('A');
//    var B = new qdb.QualiomDB('B');

//    //1
//    A.adicionar('um');


//    assert_dado(A, B, 'um', [{ chave: 'A1', dado: 'um' }], [], 'fase 1');

//    // sync
//    A.sync();
//    assert_dado(A, B, 'um', [{ chave: 'A1', dado: 'um' }], [], 'fase 2');

//    B.sync();
//    assert_dado(A, B, 'um', [{ chave: 'A1', dado: 'um' }], [{ chave: 'A1', dado: 'um' }], 'fase 3');

//    A.sync();
//    assert_dado(A, B, 'um', [{ chave: 'A1', dado: 'um' }], [{ chave: 'A1', dado: 'um' }], 'fase 4');

//}

//exports['Sync-02-MDB'] = function (test) {


//    var A = new qdb.QualiomDB('A');
//    var B = new qdb.QualiomDB('B');

//    //1
//    A.adicionar('um');
//    B.adicionar('um');

//    // fase 1 - ainda nao foi sincronizado, banco matriz vazio

//    var esperado_A = [{ chave: 'A1', dado: 'um' }];
//    var esperado_B = [{ chave: 'B1', dado: 'um' }];
//    assert.deepEqual(esperado_A, A.pesquisar('um'), "banco A- fase 1");
//    assert.deepEqual(esperado_B, B.pesquisar('um'), "banco B- fase 1");

//    // fase 2 - sincrozado A, banco matriz = A
//    A.sync();

//    var esperado_A = [{ chave: 'A1', dado: 'um' }];
//    var esperado_B = [{ chave: 'B1', dado: 'um' }];
//    assert.deepEqual(esperado_A, A.pesquisar('um'), "banco A- fase 2");
//    assert.deepEqual(esperado_B, B.pesquisar('um'), "banco B- fase 2");

//    // fase 3 - sincrozado A e B, banco matriz = A + B, B recebeu A, mas A ainda nao recebeu B
//    B.sync();

//    var esperado_A = [{ chave: 'A1', dado: 'um' }];
//    var esperado_B = [{ chave: 'A1', dado: 'um' }, { chave: 'B1', dado: 'um' }];
//    assert.deepEqual(esperado_A, A.pesquisar('um'), "banco A- fase 3");
//    assert.deepEqual(esperado_B, B.pesquisar('um'), "banco B- fase 3");

//    // fase 4 - tudo sincronizado
//    A.sync_matriz();

//    var esperado_A = [{ chave: 'A1', dado: 'um' }, { chave: 'B1', dado: 'um' }];
//    var esperado_B = [{ chave: 'A1', dado: 'um' }, { chave: 'B1', dado: 'um' }];
//    assert.deepEqual(esperado_A, A.pesquisar('um'), "banco A- fase 4");
//    assert.deepEqual(esperado_B, B.pesquisar('um'), "banco B- fase 4");

//}

//exports['Sync-03-MDB'] = function (test) {

//    var A = new qdb.QualiomDB('A');
//    var B = new qdb.QualiomDB('B');

//    //1
//    A.adicionar('um');
//    A.adicionar('dois');
//    B.adicionar('um');

//    var esperado_um_A = [{ chave: 'A1', dado: 'um' }];
//    var esperado_um_B = [{ chave: 'B1', dado: 'um' }];
//    assert.deepEqual(esperado_um_A, A.pesquisar('um'), "dado um banco A");
//    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "dado um banco B");

//    var esperado_dois_A = [{ chave: 'A2', dado: 'dois' }];
//    var esperado_dois_B = [];
//    assert.deepEqual(esperado_dois_A, A.pesquisar('dois'), "dado dois banco A");
//    assert.deepEqual(esperado_dois_B, B.pesquisar('dois'), "dado dois banco B");

//    //2
//    A.sync();

//    var esperado_um_A = [{ chave: 'A1', dado: 'um' }];
//    var esperado_um_B = [{ chave: 'B1', dado: 'um' }];
//    assert.deepEqual(esperado_um_A, A.pesquisar('um'), "sync dado um banco A");
//    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "sync dado um banco B");

//    var esperado_dois_A = [{ chave: 'A2', dado: 'dois' }];
//    var esperado_dois_B = [];
//    assert.deepEqual(esperado_dois_A, A.pesquisar('dois'), "sync dado dois banco A");
//    assert.deepEqual(esperado_dois_B, B.pesquisar('dois'), "sync dado dois banco B");


//    //3
//    B.sync();

//    var esperado_um_A = [{ chave: 'A1', dado: 'um' }];
//    var esperado_um_B = [{ chave: 'A1', dado: 'um' }, { chave: 'B1', dado: 'um' }];
//    assert.deepEqual(esperado_um_A, A.pesquisar('um'), "sync dado um banco A");
//    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "sync dado um banco B");

//    var esperado_dois_A = [{ chave: 'A2', dado: 'dois' }];
//    var esperado_dois_B = [{ chave: 'A2', dado: 'dois' }];
//    assert.deepEqual(esperado_dois_A, A.pesquisar('dois'), "sync dado dois banco A");
//    assert.deepEqual(esperado_dois_B, B.pesquisar('dois'), "sync dado dois banco B");

//    //4
//    A.sync();

//    var esperado_um_A = [{ chave: 'A1', dado: 'um' }, { chave: 'B1', dado: 'um' }];
//    var esperado_um_B = [{ chave: 'A1', dado: 'um' }, { chave: 'B1', dado: 'um' }];
//    assert.deepEqual(esperado_um_A, A.pesquisar('um'), "sync dado um banco A");
//    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "sync dado um banco B");

//    var esperado_dois_A = [{ chave: 'A2', dado: 'dois' }];
//    var esperado_dois_B = [{ chave: 'A2', dado: 'dois' }];
//    assert.deepEqual(esperado_dois_A, A.pesquisar('dois'), "sync dado dois banco A");
//    assert.deepEqual(esperado_dois_B, B.pesquisar('dois'), "sync dado dois banco B");
//}


//function assert_dado(A, B, dado, esperadoA, esperadoB, msg) {
//    var atual_a = A.pesquisar(dado);
//    var atual_b = B.pesquisar(dado);
//    assert.deepEqual(esperadoA, atual_a, "dado " + dado + "banco A- " + msg);
//    assert.deepEqual(esperadoB, atual_b, "dado " + dado + "banco B- " + msg);
//}