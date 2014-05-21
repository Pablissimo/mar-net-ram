// UnitTest.js 
var assert = require('assert');
var compilador = require('./compiladorBDD');
 
exports['Test 1'] = function (test) {

    var arquivo= "Especificação: Pilha\r\n" +
                 "Quando a pilha <P> for criada\r\n" +
                 "Então ela deverá estar vazia\r\n";

    var comp = new compilador.BDD_Compilador_de_espeficicacao();

    var e = comp.compila(arquivo);

    assert.equal(1, e.length);
    assert.equal("Pilha", e[0].title);
    assert.equal(1, e[0].events.length);
    //assert.equal(1, e[0].events.condition.length);
    //assert.equal('Quando a pilha <P> for criada', e[0].events.condition[0]);
    //assert.equal(1, e[0].events.ensures.length);
    //assert.equal('Então ela deverá estar vazia', e[0].events.ensures[0]);
}

