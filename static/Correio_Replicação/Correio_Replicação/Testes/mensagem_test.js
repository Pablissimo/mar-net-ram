// UnitTest.js 
var assert = require('assert');
var qdb = require('../correio_passodebebe.js');


exports['Caso_1'] = function (test) {

    var correio = new qdb.Correio();

    correio.enviaMsg('Ana', 'Maria', 'Oi');

    var atual = correio.listaMsg('Maria');

    assert.equal(1, atual.length);
    assert.equal('Ana', atual[0].remetente);
    assert.equal('Maria', atual[0].destinatario);
    assert.equal('Oi', atual[0].mensagem);
}

exports['Caso_2'] = function (test) {

    var correio = new qdb.Correio();

    correio.enviaMsg('Anne', 'Mary', 'Hello');

    var atual = correio.listaMsg('Mary');

    assert.equal(1, atual.length);
    assert.equal('Anne', atual[0].remetente);
    assert.equal('Mary', atual[0].destinatario);
    assert.equal('Hello', atual[0].mensagem);
    assert.equal(0, correio.listaMsg('Mary').length);
    assert.equal(0, correio.listaMsg('Anne').length);
}


exports['Caso_3'] = function (test) {

    var correio = new qdb.Correio();

    correio.enviaMsg('Anne', 'Mary', 'Hello');
    correio.enviaMsg('John', 'Peter', 'Hi');

    var atual = correio.listaMsg('Mary');

    assert.equal(1, atual.length);
    assert.equal('Anne', atual[0].remetente);
    assert.equal('Mary', atual[0].destinatario);
    assert.equal('Hello', atual[0].mensagem);
    assert.equal(0, correio.listaMsg('Mary').length);
    assert.equal(0, correio.listaMsg('Anne').length);
    assert.equal(1, correio.listaMsg('Peter').length);
    assert.equal(0, correio.listaMsg('John').length);
}





