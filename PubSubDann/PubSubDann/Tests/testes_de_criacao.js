// UnitTest.js 
var assert = require('assert');
var jornal = require('../Jornal.js');
var pubsub = require('../PubSub.js');
var publicador = new pubsub.Publisher();


exports['Case_01'] = function (test) {

    //1
    publicador.prototype.subscribe('D');
    var atual1 = publicador.prototype.listaSubscriber('D');
    var esperado1 = 'D';    
    assert.deepEqual(atual1, esperado1, "Erro Fase 1");

    //2
    var atual2 = publicador.prototype.visitSubscribers('publish', 'Teste')[0].publication;
    var esperado2 = 'Teste';    
    assert.deepEqual(atual2, esperado2, "Erro Fase 2");
}


exports['Case_02'] = function (test) {

    //1
    publicador.prototype.subscribe('D');
    var atual1 = publicador.prototype.listaSubscriber('D');
    var esperado1 = 'D';
    assert.deepEqual(atual1, esperado1, "Erro Fase 1");

    //2
    publicador.prototype.unsubscribe('D');
    var atual2 = publicador.prototype.listaSubscriber(0);
    var esperado2 = "";
    assert.deepEqual(atual2, esperado2, "Erro Fase 2");

}