var assert = require('assert');
var qdb = require('../qualiomdb.js');

var A = new qdb.QualiomDB('A');
var B = new qdb.QualiomDB('B');
var matriz = qdb.banco_matriz;


exports['Caso_001'] = function (test)
{

    //1
    A.adicionar('um');
    A.sync();
    assert_dado(A, B, matriz, 'um', [{ chave: 'A1', dado: 'um' }], [], [{ chave: 'A1', dado: 'um' }], 'fase 1');    
}

exports['Caso_002'] = function (test)
{

    //1
    A.adicionar('um');
    A.sync();
    assert_dado(A, B, matriz, 'um', [{ chave: 'A1', dado: 'um' }], [], [{ chave: 'A1', dado: 'um' }], 'fase 1');

    //2
    A.alterar('A1', 'UM');
    A.sync();
    assert_dado(A, B, matriz, 'UM', [{ chave: 'A1', dado: 'UM' }], [], [{ chave: 'A1', dado: 'UM' }], 'fase 2');
}

exports['Caso_003'] = function (test)
{

    //1
    A.adicionar('um');
    A.sync();
    assert_dado(A, B, matriz, 'um', [{ chave: 'A1', dado: 'um' }], [], [{ chave: 'A1', dado: 'um' }], 'fase 1');

    //2
    A.deletar('A1');
    A.sync();
    assert_dado(A, B, matriz, 'um', [], [], [], 'fase 2');
}

exports['Caso_004'] = function (test)
{

    //1
    A.adicionar('um');
    A.adicionar('dois');
    A.adicionar('tres');
    A.sync();
    assert_dado(A, B, matriz, 'um', [{ chave: 'A1', dado: 'um' }], [], [{ chave: 'A1', dado: 'um' }], 'fase 1');
    assert_dado(A, B, matriz, 'dois', [{ chave: 'A2', dado: 'dois' }], [], [{ chave: 'A2', dado: 'dois' }], 'fase 1');
    assert_dado(A, B, matriz, 'tres', [{ chave: 'A3', dado: 'tres' }], [], [{ chave: 'A3', dado: 'tres' }], 'fase 1');

    //2
    A.deletar('A1');
    A.sync();
    assert_dado(A, B, matriz, 'um', [], [], [], 'fase 2');
    assert_dado(A, B, matriz, 'dois', [{ chave: 'A2', dado: 'dois' }], [], [{ chave: 'A2', dado: 'dois' }], 'fase 1');
    assert_dado(A, B, matriz, 'tres', [{ chave: 'A3', dado: 'tres' }], [], [{ chave: 'A3', dado: 'tres' }], 'fase 1');

    //3
    A.alterar('A3', 'TRÊS');
    A.sync();
    assert_dado(A, B, matriz, 'um', [], [], [], 'fase 2');
    assert_dado(A, B, matriz, 'dois', [{ chave: 'A2', dado: 'dois' }], [], [{ chave: 'A2', dado: 'dois' }], 'fase 1');
    assert_dado(A, B, matriz, 'TRÊS', [{ chave: 'A3', dado: 'TRÊS' }], [], [{ chave: 'A3', dado: 'TRÊS' }], 'fase 1');

}

function assert_dado(A, B, matriz, dado, esperadoA, esperadoB, esperadoMatriz, msg)
{
    var atual_a = A.pesquisar(dado);
    var atual_b = B.pesquisar(dado);
    var atual_matriz = matriz.pesquisar(dado);
    assert.deepEqual(esperadoA, atual_a, "dado: " + dado + " banco: A " + msg);
    assert.deepEqual(esperadoB, atual_b, "dado: " + dado + " banco: B " + msg);
    assert.deepEqual(esperadoMatriz, atual_matriz, "dado: " + dado + " banco: Matriz- " + msg);
}