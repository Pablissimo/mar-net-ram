// UnitTest.js 
var assert = require('assert');
var qdb = require('./qualiomdb.js');

exports['Caso 1'] = function (test) {


    var A = new qdb.QualiomDB('A');
    var B = new qdb.QualiomDB('B');

    //1
    A.adicionar('um');
    A.adicionar('dois');
    A.adicionar('tres');

    //2
    B.adicionar('um');
    B.adicionar('dois');
    B.adicionar('tres');
    B.adicionar('quatro');


    //3
    A.deletar(0);
    A.alterar(2, 'três');

    //4
    B.alterar(2, 'três');

    // sync
    A.sync();
    B.sync();
    A.sync();

   
    var esperado_um =   [{ chave: 'B1', dado: 'um' }];
    assert.deepEqual(esperado_um, A.pesquisar('um'), "dado UM banco A");
    assert.deepEqual(esperado_um, B.pesquisar('um'), "dado UM banco B");

    var esperado_dois = [{ chave: 'A2', dado: 'dois' }, { chave: 'B2', dado: 'dois' }];
    assert.deepEqual(esperado_um, A.pesquisar('dois'), "dado DOIS banco A");
    assert.deepEqual(esperado_um, B.pesquisar('dois'), "dado DOIS banco B");

    var esperado_tres = [];
    assert.deepEqual(esperado_um, A.pesquisar('tres'), "dado TRES banco A");
    assert.deepEqual(esperado_um, B.pesquisar('tres'), "dado TRES banco B");

    var esperado_tres_acentuado = [{ chave: 'A3', dado: 'três' }, { chave: 'B2', dado: 'três' }];
    assert.deepEqual(esperado_um, A.pesquisar('três'), "dado TRÊS banco A");
    assert.deepEqual(esperado_um, B.pesquisar('três'), "dado TRÊS banco B");

    var esperado_quatro = [{ chave: 'B4', dado: 'quatro' }];
    assert.deepEqual(esperado_um, A.pesquisar('quatro'), "dado QUATRO banco A");
    assert.deepEqual(esperado_um, B.pesquisar('quatro'), "dado QUATRO banco B");

}


exports['Caso 3'] = function (test) {


    var A = new qdb.QualiomDB('A');
    var B = new qdb.QualiomDB('B');

    //1
    A.adicionar('um');

    //2 sync
    A.sync();
    B.sync();
    A.sync();

    // 3
    B.adicionar('dois');
    // 4
    B.deletar('A1');

    // 5
    A.deletar('A1');
    A.adicionar('dois');

    // caiu internet no B


    var esperado_um = [];

    assert.deepEqual(esperado_um, A.pesquisar('um'), "dado UM banco A");
    assert.deepEqual(esperado_um, B.pesquisar('um'), "dado UM banco B");


    var esperado_dois_A = [{ chave: 'A2', dado: 'dois' }];
    var esperado_doisBA = [{ chave: 'B1', dado: 'dois' }];

    assert.deepEqual(esperado_dois_A, A.pesquisar('dois'), "dado DOIS banco A");
    assert.deepEqual(esperado_doisBA, B.pesquisar('dois'), "dado DOIS banco B");


    // sync
    A.sync();
    B.sync();
    A.sync();


    var esperado_um = [];
    assert.deepEqual(esperado_um, A.pesquisar('um'), "dado UM banco A");
    assert.deepEqual(esperado_um, B.pesquisar('um'), "dado UM banco B");

    var esperado_dois = [{ chave: 'A2', dado: 'dois' }, { chave: 'B1', dado: 'dois' }];
    assert.deepEqual(esperado_dois, A.pesquisar('dois'), "dado DOIS banco A");
    assert.deepEqual(esperado_dois, B.pesquisar('dois'), "dado DOIS banco B");

}
