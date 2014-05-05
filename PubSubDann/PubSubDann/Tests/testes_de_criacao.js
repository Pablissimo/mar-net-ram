// UnitTest.js 
var assert = require('assert');
var jornal = require('../Jornal.js');
var pubsub = require('../PubSub.js');
var publicador = new pubsub.Publisher();

exports['Case_01'] = function (test) {

    //1 --> Inscrição de Assinante.
    publicador.prototype.subscribe('D');
    var atual1 = publicador.prototype.listaSubscriber('D');
    var esperado1 = 'D';    
    assert.deepEqual(atual1, esperado1, "Erro Fase 1");

    //2 --> Envio de Mensagem para quem é Assinante.
    var atual2 = publicador.prototype.visitSubscribers('publish', 'Teste')[0].publication;
    var esperado2 = 'Teste';    
    assert.deepEqual(atual2, esperado2, "Erro Fase 2");
}

exports['Case_02'] = function (test) {

    //1 --> Inscrição de Assinantes.
    publicador.prototype.subscribe('C');
    publicador.prototype.subscribe('A');
    var atual1 = publicador.prototype.listaSubscriber('C');
    var esperado1 = 'C';
    assert.deepEqual(atual1, esperado1, "Erro Fase 1");

    //2 --> Cancelamento de Assinatura.
    publicador.prototype.unsubscribe('A');
    var atual2 = publicador.prototype.listaSubscriber('A');
    var esperado2 = '';
    assert.deepEqual(atual2, esperado2, "Erro Fase 2");
}

exports['Case_03'] = function (test) {

    //1 --> Inscrição dos Assinantes.
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

    //2 --> Publicação da Mensagem.
    var atual2 = publicador.prototype.visitSubscribers('publish', 'Mensagem 1')[0].publication;
    var esperado2 = 'Mensagem 1';
    assert.deepEqual(atual2, esperado2, "Erro Fase 2");

    //2 --> Cancelamento de Assinatura.
    publicador.prototype.unsubscribe('A');
    publicador.prototype.unsubscribe('E');
    var atual3 = publicador.prototype.listaSubscriber('A');
    var esperado3 = '';
    assert.deepEqual(atual3, esperado3, "Erro Fase 3");
    
    //3 --> Relação de Assinantes que recebem Mensagem (Pleonasmo).
    var atual4 = publicador.prototype.listaSubscriber('subscribers');
    var esperado4 = 'C,H,R,L,S';
    assert.deepEqual(atual4, esperado4, "Erro Fase 4");
}