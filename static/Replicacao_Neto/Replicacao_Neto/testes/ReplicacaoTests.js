    // UnitTest.js 
var assert = require('assert');
var qdb = require('../qualiomdb.js');

exports['Caso 1'] = function (test) {


    var A = new qdb.QualiomDB('A');
    var B = new qdb.QualiomDB('B');

    //1
    A.adicionar('um');
    A.adicionar('dois');
    A.adicionar('tres');

    var esperado_um_A = [{ chave: 'A1', dado: 'um' }];
    var esperado_um_B = [];
    assert.deepEqual(esperado_um_A, A.pesquisar('um'), "fase 1 dado um banco A"); 
    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "fase 1 dado um banco B");

    var esperado_dois_A = [{ chave: 'A2', dado: 'dois' }];
    var esperado_dois_B = [];
    assert.deepEqual(esperado_dois_A, A.pesquisar('dois'), "fase 1  dado dois banco A");
    assert.deepEqual(esperado_dois_B, B.pesquisar('dois'), "fase 1  dado dois banco B");

    var esperado_tres_A = [{ chave: 'A3', dado: 'tres' }];
    var esperado_tres_B = [];
    assert.deepEqual(esperado_tres_A, A.pesquisar('tres'), "fase 1  dado tres banco A");
    assert.deepEqual(esperado_tres_B, B.pesquisar('tres'), "fase 1  dado tres banco B");
   

    //2
    B.adicionar('um');
    B.adicionar('dois');
    B.adicionar('tres');
    B.adicionar('quatro');

    var esperado_um_A = [{ chave: 'A1', dado: 'um' }];
    var esperado_um_B = [{ chave: 'B1', dado: 'um' }];
    assert.deepEqual(esperado_um_A, A.pesquisar('um'), "fase 2 dado um banco A");
    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "fase 2 dado um banco B");

    var esperado_dois_A = [{ chave: 'A2', dado: 'dois' }];
    var esperado_dois_B = [{ chave: 'B2', dado: 'dois' }];
    assert.deepEqual(esperado_dois_A, A.pesquisar('dois'), "fase 2 dado dois banco A");
    assert.deepEqual(esperado_dois_B, B.pesquisar('dois'), "fase 2 dado dois banco B");

    var esperado_tres_A = [{ chave: 'A3', dado: 'tres' }];
    var esperado_tres_B = [{ chave: 'B3', dado: 'tres' }];
    assert.deepEqual(esperado_tres_A, A.pesquisar('tres'), "fase 2 dado tres banco A");
    assert.deepEqual(esperado_tres_B, B.pesquisar('tres'), "fase 2 dado tres banco B");

    var esperado_quatro_A = [];
    var esperado_quatro_B = [{ chave: 'B4', dado: 'quatro' }];
    assert.deepEqual(esperado_quatro_A, A.pesquisar('quatro'), "fase 2 dado quatro banco A");
    assert.deepEqual(esperado_quatro_B, B.pesquisar('quatro'), "fase 2 dado quatro banco B");


    //3
    A.deletar('A1');

    var esperado_um_A = [];
    var esperado_um_B = [{ chave: 'B1', dado: 'um' }];
    assert.deepEqual(esperado_um_A, A.pesquisar('um'), "fase 3 dado um banco A");
    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "fase 3 dado um banco B");

    A.alterar('A3', 'três');

    var esperado_tres_A = [{ chave: 'A3', dado: 'três' }];
    var esperado_tres_B = [{ chave: 'B3', dado: 'tres' }];
    assert.deepEqual(esperado_tres_A, A.pesquisar('três'), "fase 3 dado tres banco A");
    assert.deepEqual(esperado_tres_B, B.pesquisar('tres'), "fase 3 dado tres banco B");

    //4
    B.alterar('B3', 'três');

    var esperado_tres_A = [{ chave: 'A3', dado: 'três' }];
    var esperado_tres_B = [{ chave: 'B3', dado: 'três' }];
    assert.deepEqual(esperado_tres_A, A.pesquisar('três'), "fase 4 dado tres banco A");
    assert.deepEqual(esperado_tres_B, B.pesquisar('três'), "fase 4 dado tres banco B");

    //5
    // sync
    A.sync();
    B.sync();
    A.sync();

    var esperado_um_A = [{ chave: 'B1', dado: 'um' }];
    var esperado_um_B = [{ chave: 'B1', dado: 'um' }];
    assert.deepEqual(esperado_um_A, A.pesquisar('um'), "fase 5 dado um banco A");
    assert.deepEqual(esperado_um_B, B.pesquisar('um'), "fase 5 dado um banco B");

    var esperado_dois_A = [{ chave: 'A2', dado: 'dois' }, { chave: 'B2', dado: 'dois' }];
    var esperado_dois_B = [{ chave: 'A2', dado: 'dois' }, { chave: 'B2', dado: 'dois' }];
    assert.deepEqual(esperado_dois_A, A.pesquisar('dois'), "fase 5 dado dois banco A");
    assert.deepEqual(esperado_dois_B, B.pesquisar('dois'), "fase 5 dado dois banco B");

    var esperado_tres_A = [{ chave: 'A3', dado: 'três' }, { chave: 'B3', dado: 'três' }];
    var esperado_tres_B = [{ chave: 'A3', dado: 'três' }, { chave: 'B3', dado: 'três' }];
    assert.deepEqual(esperado_tres_A, A.pesquisar('três'), "fase 5 dado tres banco A");
    assert.deepEqual(esperado_tres_B, B.pesquisar('três'), "fase 5 dado tres banco B");

    var esperado_quatro_A = [{ chave: 'B4', dado: 'quatro' }];
    var esperado_quatro_B = [{ chave: 'B4', dado: 'quatro' }];
    assert.deepEqual(esperado_quatro_A, A.pesquisar('quatro'), "fase 5 dado quatro banco A");
    assert.deepEqual(esperado_quatro_B, B.pesquisar('quatro'), "fase 5 dado quatro banco B");
 
}