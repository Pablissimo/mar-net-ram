//"use strict";
    // UnitTest.js 
var assert = require('assert');
var qdb_array = require('../qualiomarraydb.js');
var qdb_mongo = require('../qualiommongodb.js');

function TesteParametrizado(casos, testes) {
    var criaTeste = function (n, f, p) {
        exports[n] = function () { f(p); }
    }
    for (var caso in casos) {
        var param = casos[caso];
        for (var teste in testes) {
            var fn = testes[teste];
            criaTeste(caso + "-" + teste, fn, param);
        }
    }
}

TesteParametrizado(
    {
        "array": qdb_array,
        "mongo": qdb_mongo
    },
    {
        "Conectar": function (qdb) {
            assert.doesNotThrow(function () {
                var A = new qdb.QualiomDB();
                A.conectar('A', function (err) {
                    assert.equal(null, err, err);
                });
            });
        },

        "Adicionar_dados": function (qdb) {
            assert.doesNotThrow(function () {
                var A = new qdb.QualiomDB();
                A.conectar('A', function (err) {

                    A.adicionar('um');
                    A.adicionar('dois');

                    var esperado = [{ _id: 'A1', dado: 'um' }, { _id: 'A2', dado: 'dois' }];
                    var atual = A.listadados();

                    assert.deepEqual(esperado, atual, "deveria ter dados");
                });
            });            
        }//,

        //"limpar_dados": function (qdb) {
        //    assert.doesNotThrow(function () {
        //        var A = new qdb.QualiomDB();
        //        A.conectar('A', function (err) {

        //            A.apagarTUDO();

        //            var esperado = [];
        //            var atual = A.listadados('A');

        //            assert.deepEqual(esperado, atual, "nao deveria ter dados");
        //        });
        //    });            
        //}
    }
);

return;

exports['Adicionar'] = function (test) {

    assert.doesNotThrow(function () {
        var A = new qdb.QualiomDB('A');

        A.adicionar('um');

        var esperado = [{ chave: 'A1', dado: 'um' }];

        var atual = A.listadados();

        assert.equal(1, atual.length, "quantidade retornada invalida");
        assert.deepEqual(esperado, atual, "conteudo retornado invalido");
    }
    );
}

exports['Pesquisar'] = function (test) {

    assert.doesNotThrow(function () {
        var A = new qdb.QualiomDB('A');

        A.adicionar('um');
        A.adicionar('dois');

        var esperado = [{ chave: 'A1', dado: 'um' }];

        var atual = A.pesquisar('um');

        assert.equal(1, atual.length, "quantidade retornada invalida");
        assert.deepEqual(esperado, atual, "conteudo retornado invalido");
    }
    );
}

exports['Pesquisar-2'] = function (test) {

    assert.doesNotThrow(function () {
        var A = new qdb.QualiomDB('A');

        A.adicionar('um');
        A.adicionar('dois');
        A.adicionar('um');


        var esperado = [{ chave: 'A1', dado: 'um' }, { chave: 'A3', dado: 'um' }];

        var atual = A.pesquisar('um');

        assert.deepEqual(esperado, atual, "conteudo retornado invalido");
    }
    );
}



exports['Alterar'] = function (test) {

    var A = new qdb.QualiomDB('A');
    var B = new qdb.QualiomDB('B');

    //1
    A.adicionar('um');

    var esperado_um_A = [{ chave: 'A1', dado: 'um' }];
    var esperado_um_B = [];
    assert.deepEqual(esperado_um_A, A.pesquisar('um'), "dado UM banco A");
    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "dado UM banco B");

    A.alterar('A1', 'UM');
    var esperado_um_A = [{ chave: 'A1', dado: 'UM' }];
    var esperado_um_B = [];
    assert.deepEqual(esperado_um_A, A.pesquisar('UM'), "dado UM banco A");
    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "dado UM banco B");
}

exports['Deletar'] = function (test) {

    var A = new qdb.QualiomDB('A');
    var B = new qdb.QualiomDB('B');

    //1
    A.adicionar('um');
    A.adicionar('dois');

    var esperado_um_A = [{ chave: 'A1', dado: 'um' }];
    var esperado_um_B = [];
    assert.deepEqual(esperado_um_A, A.pesquisar('um'), "dado um banco A");
    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "dado um banco B");

    var esperado_um_A = [{ chave: 'A2', dado: 'dois' }];
    var esperado_um_B = [];
    assert.deepEqual(esperado_um_A, A.pesquisar('dois'), "dado dois banco A");
    assert.deepEqual(esperado_um_B, B.pesquisar('dois'), "dado dois banco B");

    A.deletar('A1');
    var esperado_um_A = [];
    var esperado_um_B = [];
    assert.deepEqual(esperado_um_A, A.pesquisar('um'), "dado um banco A");
    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "dado um banco B");
}


exports['Sync-01'] = function (test) {


    var A = new qdb.QualiomDB('A');
    var B = new qdb.QualiomDB('B');

    //1
    A.adicionar('um');


    assert_dado(A, B, 'um', [{ chave: 'A1', dado: 'um' }], [], 'fase 1');

    // sync
    A.sync();
    assert_dado(A, B, 'um', [{ chave: 'A1', dado: 'um' }], [], 'fase 2');

    B.sync();
    assert_dado(A, B, 'um', [{ chave: 'A1', dado: 'um' }], [{ chave: 'A1', dado: 'um' }], 'fase 3');

    A.sync();
    assert_dado(A, B, 'um', [{ chave: 'A1', dado: 'um' }], [{ chave: 'A1', dado: 'um' }], 'fase 4');

}

exports['Sync-02'] = function (test) {


    var A = new qdb.QualiomDB('A');
    var B = new qdb.QualiomDB('B');

    //1
    A.adicionar('um');
    B.adicionar('um');

    // fase 1 - ainda nao foi sincronizado, banco matriz vazio

    var esperado_A = [{ chave: 'A1', dado: 'um' }];
    var esperado_B = [{ chave: 'B1', dado: 'um' }];
    assert.deepEqual(esperado_A, A.pesquisar('um'), "banco A- fase 1");
    assert.deepEqual(esperado_B, B.pesquisar('um'), "banco B- fase 1");

    // fase 2 - sincrozado A, banco matriz = A
    A.sync();

    var esperado_A = [{ chave: 'A1', dado: 'um' }];
    var esperado_B = [{ chave: 'B1', dado: 'um' }];
    assert.deepEqual(esperado_A, A.pesquisar('um'), "banco A- fase 2");
    assert.deepEqual(esperado_B, B.pesquisar('um'), "banco B- fase 2");

    // fase 3 - sincrozado A e B, banco matriz = A + B, B recebeu A, mas A ainda nao recebeu B
    B.sync();

    var esperado_A = [{ chave: 'A1', dado: 'um' }];
    var esperado_B = [{ chave: 'A1', dado: 'um' }, { chave: 'B1', dado: 'um' }];
    assert.deepEqual(esperado_A, A.pesquisar('um'), "banco A- fase 3");
    assert.deepEqual(esperado_B, B.pesquisar('um'), "banco B- fase 3");

    // fase 4 - tudo sincronizado
    A.sync_matriz();

    var esperado_A = [{ chave: 'A1', dado: 'um' }, { chave: 'B1', dado: 'um' }];
    var esperado_B = [{ chave: 'A1', dado: 'um' }, { chave: 'B1', dado: 'um' }];
    assert.deepEqual(esperado_A, A.pesquisar('um'), "banco A- fase 4");
    assert.deepEqual(esperado_B, B.pesquisar('um'), "banco B- fase 4");

}

exports['Sync-03'] = function (test) {

    var A = new qdb.QualiomDB('A');
    var B = new qdb.QualiomDB('B');

    //1
    A.adicionar('um');
    A.adicionar('dois');
    B.adicionar('um');

    var esperado_um_A = [{ chave: 'A1', dado: 'um' }];
    var esperado_um_B = [{ chave: 'B1', dado: 'um' }];
    assert.deepEqual(esperado_um_A, A.pesquisar('um'), "dado um banco A");
    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "dado um banco B");

    var esperado_dois_A = [{ chave: 'A2', dado: 'dois' }];
    var esperado_dois_B = [];
    assert.deepEqual(esperado_dois_A, A.pesquisar('dois'), "dado dois banco A");
    assert.deepEqual(esperado_dois_B, B.pesquisar('dois'), "dado dois banco B");

    //2
    A.sync();

    var esperado_um_A = [{ chave: 'A1', dado: 'um' }];
    var esperado_um_B = [{ chave: 'B1', dado: 'um' }];
    assert.deepEqual(esperado_um_A, A.pesquisar('um'), "sync dado um banco A");
    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "sync dado um banco B");

    var esperado_dois_A = [{ chave: 'A2', dado: 'dois' }];
    var esperado_dois_B = [];
    assert.deepEqual(esperado_dois_A, A.pesquisar('dois'), "sync dado dois banco A");
    assert.deepEqual(esperado_dois_B, B.pesquisar('dois'), "sync dado dois banco B");


    //3
    B.sync();

    var esperado_um_A = [{ chave: 'A1', dado: 'um' }];
    var esperado_um_B = [{ chave: 'A1', dado: 'um' }, { chave: 'B1', dado: 'um' }];
    assert.deepEqual(esperado_um_A, A.pesquisar('um'), "sync dado um banco A");
    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "sync dado um banco B");

    var esperado_dois_A = [{ chave: 'A2', dado: 'dois' }];
    var esperado_dois_B = [{ chave: 'A2', dado: 'dois' }];
    assert.deepEqual(esperado_dois_A, A.pesquisar('dois'), "sync dado dois banco A");
    assert.deepEqual(esperado_dois_B, B.pesquisar('dois'), "sync dado dois banco B");

    //4
    A.sync();

    var esperado_um_A = [{ chave: 'A1', dado: 'um' }, { chave: 'B1', dado: 'um' }];
    var esperado_um_B = [{ chave: 'A1', dado: 'um' }, { chave: 'B1', dado: 'um' }];
    assert.deepEqual(esperado_um_A, A.pesquisar('um'), "sync dado um banco A");
    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "sync dado um banco B");

    var esperado_dois_A = [{ chave: 'A2', dado: 'dois' }];
    var esperado_dois_B = [{ chave: 'A2', dado: 'dois' }];
    assert.deepEqual(esperado_dois_A, A.pesquisar('dois'), "sync dado dois banco A");
    assert.deepEqual(esperado_dois_B, B.pesquisar('dois'), "sync dado dois banco B");
}


function assert_dado(A, B, dado, esperadoA, esperadoB, msg) {
    var atual_a = A.pesquisar(dado);
    var atual_b = B.pesquisar(dado);
    assert.deepEqual(esperadoA, atual_a, "dado " + dado + "banco A- " + msg);
    assert.deepEqual(esperadoB, atual_b, "dado " + dado + "banco B- " + msg);
}