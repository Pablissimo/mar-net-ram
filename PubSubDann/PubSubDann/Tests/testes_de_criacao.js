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
    publicador.prototype.subscribe('C');
    publicador.prototype.subscribe('A');
    var atual1 = publicador.prototype.listaSubscriber('C');
    var esperado1 = 'C';
    assert.deepEqual(atual1, esperado1, "Erro Fase 1");

    //2
    publicador.prototype.unsubscribe('A');
    var atual2 = publicador.prototype.listaSubscriber('A');
    var esperado2 = '';
    assert.deepEqual(atual2, esperado2, "Erro Fase 2");
}

exports['Case_03'] = function (test) {

    //1 --> Lista de todos os assinantes
    publicador.prototype.subscribe('C');
    publicador.prototype.subscribe('H');
    publicador.prototype.subscribe('A');
    publicador.prototype.subscribe('R');
    publicador.prototype.subscribe('L');
    publicador.prototype.subscribe('E');
    publicador.prototype.subscribe('S');

    var atual1 = publicador.prototype.listaSubscriber('C');
    var esperado1 = 'C';
    assert.deepEqual(atual1, esperado1, "Erro Fase 1");

    //2 --> Publicação da mensagem para quem é assinante.
    var atual2 = publicador.prototype.visitSubscribers('publish', 'Mensagem 1')[0].publication;
    var esperado2 = 'Teste';
    assert.deepEqual(atual2, esperado2, "Erro Fase 2");

    //3 --> Mensagem para quem é Assinante  
    var atual2 = publicador.prototype.listaSubscriber('A');
    var esperado2 = '';
    assert.deepEqual(atual2, esperado2, "Erro Fase 2");
}
