// UnitTest.js 
var assert = require('assert');
var qdb = require('./qualiomdb.js');

exports['Conectar'] = function (test) {

    assert.doesNotThrow(function ()
    {
        var A = new qdb.QualiomDB('A');
    }
    );    
}

exports['listadados'] = function (test) {

    assert.doesNotThrow(function () {
        var A = new qdb.QualiomDB('A');

        var esperado=[];
        var atual = A.listadados();

        assert.deepEqual(esperado, atual, "nao deveria ter dados");
    }
    );
}

exports['Adicionar'] = function (test) {

    assert.doesNotThrow(function () {
        var A = new qdb.QualiomDB('A');

        A.adicionar('um');

        var esperado=[{chave: 'A1', dado: 'um'}];

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

        assert.equal(2, atual.length, "quantidade retornada invalida");
        assert.deepEqual(esperado, atual, "conteudo retornado invalido");
    }
    );
}