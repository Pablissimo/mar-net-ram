var assert = require('assert');
var qdb = require('./correio_passoBebe.js');

exports['Caso_1'] = function (test) {

    var correio = new qdb.Correio();

    correio.enviaMensagem('Ana', 'Maria', 'Oi');
    
    var atual = correio.listaMensagem('Maria');

    assert.equal(1, atual.length);
    assert.equal('Ana', atual[0].remetente);
    assert.equal('Maria', atual[0].destinatario);
    assert.equal('Oi', atual[0].mensagem);
}

exports['Caso_2'] = function (test) {

    var correio = new qdb.Correio();

    correio.enviaMensagem('Anne', 'Mary', 'Hello');

    var atual = correio.listaMensagem('Mary');

    assert.equal(1, atual.length);
    assert.equal('Anne', atual[0].remetente);
    assert.equal('Mary', atual[0].destinatario);
    assert.equal('Hello', atual[0].mensagem);
    assert.equal(0, correio.listaMsg('Mary'));
    assert.equal(0, correio.listMsg('Anne'));
}


exports['Caso_3'] = function (test) {

    var correio = new qdb.Correio();

    correio.enviaMensagem('Anne', 'Mary', 'Hello');
    correio.enviaMensagem('John', 'Peter', 'Hi');

    var atual = correio.listaMensagem('Mary');

    assert.equal(1, atual.length);
    assert.equal('Anne', atual[0].remetente);
    assert.equal('Mary', atual[0].destinatario);
    assert.equal('Hello', atual[0].mensagem);
    assert.equal(0, correio.listaMensagem('Mary'));
    assert.equal(0, correio.listMensagem('Anne'));
    assert.equal(1, correio.listaMensagem('Peter'));
    assert.equal(0, correio.listMensagem('Anne'));
}



