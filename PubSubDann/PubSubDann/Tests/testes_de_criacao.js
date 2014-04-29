// UnitTest.js 
var assert = require('assert');
var jornal = require('../Jornal.js');
var pubsub = require('../PubSub.js');
var publicador = new pubsub.Publisher();


exports['Case_01'] = function (test) {

    var atual1 = 'Teste';
    var esperado1 = publicador.prototype.visitSubscribers('publish', 'Teste');
    
    assert.deepEqual();

    var atual1 = 'Teste';
    var esperado1 = publicador.prototype.visitSubscribers('publish','Teste');
    
    assert.deepEqual(atual1, esperado1[1].publication, "Erro Fase 1");
}
