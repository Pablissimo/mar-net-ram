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
    assert.equal(1, e[0].events[0].conditions.length);
    assert.equal('Quando a pilha <P> for criada', e[0].events[0].conditions[0]);
    assert.equal(1, e[0].events[0].ensures.length);
    assert.equal('Então ela deverá estar vazia', e[0].events[0].ensures[0]);
}

exports['Test 2'] = function (test) {

    var arquivo = "Especificação: Pilha\r\n" +
                 "Quando a pilha <P> for criada\r\n" +
                 "Então ela deverá estar vazia\r\n"+
                 "Quando um <item> for adicionado a pilha <P>\r\n" +
                 "Então então ele deve estar no topo\r\n";

    var comp = new compilador.BDD_Compilador_de_espeficicacao();

    var e = comp.compila(arquivo);

    assert.equal(1, e.length);
    assert.equal("Pilha", e[0].title);
    assert.equal(2, e[0].events.length);
    //
    assert.equal(1, e[0].events[0].conditions.length);
    assert.equal('Quando a pilha <P> for criada', e[0].events[0].conditions[0]);
    assert.equal(1, e[0].events[0].ensures.length);
    assert.equal('Então ela deverá estar vazia', e[0].events[0].ensures[0]);
    //
    assert.equal(1, e[0].events[1].conditions.length);
    assert.equal('Quando um <item> for adicionado a pilha <P>', e[0].events[1].conditions[0]);
    assert.equal(1, e[0].events[1].ensures.length);
    assert.equal('Então então ele deve estar no topo', e[0].events[1].ensures[0]);
}

exports['Test 3'] = function (test) {

    var arquivo = "Especificação: Pilha\r\n" +
                 "Quando a pilha <P> for criada\r\n" +
                 "Então ela deverá estar vazia\r\n" +
                 "Quando um <item> for adicionado a pilha <P>\r\n" +
                 "E a pilha está vazia\r\n"+
                 "Então então ele deve estar no topo\r\n" +
                 "E o tamanho da pilha será igual a 1\r\n";

    var comp = new compilador.BDD_Compilador_de_espeficicacao();

    var e = comp.compila(arquivo);

    assert.equal(1, e.length);
    assert.equal("Pilha", e[0].title);
    assert.equal(2, e[0].events.length);
    //
    assert.equal(1, e[0].events[0].conditions.length);
    assert.equal('Quando a pilha <P> for criada', e[0].events[0].conditions[0]);
    assert.equal(1, e[0].events[0].ensures.length);
    assert.equal('Então ela deverá estar vazia', e[0].events[0].ensures[0]);
    //
    assert.equal(2, e[0].events[1].conditions.length);
    assert.equal('Quando um <item> for adicionado a pilha <P>', e[0].events[1].conditions[0]);
    assert.equal('E a pilha está vazia', e[0].events[1].conditions[1]);
    assert.equal(2, e[0].events[1].ensures.length);
    assert.equal('Então então ele deve estar no topo', e[0].events[1].ensures[0]);
    assert.equal('E o tamanho da pilha será igual a 1', e[0].events[1].ensures[1]);
}

exports['Test 4'] = function (test) {

    var arquivo = "Especificação: Pilha\r\n" +
                 "Quando a pilha <P> for criada\r\n" +
                 "Então ela deverá estar vazia\r\n"+
                 "\r\n"+
                 "Especificação: Fila\r\n" +
                 "Quando a fila <P> for criada\r\n" +
                 "Então ela deverá estar vazia\r\n";

    var comp = new compilador.BDD_Compilador_de_espeficicacao();

    var e = comp.compila(arquivo);

    assert.equal(2, e.length);
    assert.equal("Pilha", e[0].title);
    assert.equal(1, e[0].events.length);
    assert.equal(1, e[0].events[0].conditions.length);
    assert.equal('Quando a pilha <P> for criada', e[0].events[0].conditions[0]);
    assert.equal(1, e[0].events[0].ensures.length);
    assert.equal('Então ela deverá estar vazia', e[0].events[0].ensures[0]);

    assert.equal("Fila", e[1].title);
    assert.equal(1, e[1].events.length);
    assert.equal(1, e[1].events[0].conditions.length);
    assert.equal('Quando a fila <P> for criada', e[1].events[0].conditions[0]);
    assert.equal(1, e[1].events[0].ensures.length);
    assert.equal('Então ela deverá estar vazia', e[1].events[0].ensures[0]);
}

exports['Test 5'] = function (test) {

    var arquivo = "Especificação: Pilha\r\n" +
                 "Quando a pilha <P> for criada\r\n" +
                 "Então ela deverá estar vazia\r\n" +
                 "\r\n" +
                 "Especificação: Fila\r\n" +
                 "Quando a fila <P> for criada\r\n" +
                 "E a fila <P> for valida\r\n" +
                 "Então ela deverá estar vazia\r\n"+
                 "E podera ser adicionado conteudo\r\n";

    var comp = new compilador.BDD_Compilador_de_espeficicacao();

    var e = comp.compila(arquivo);

    assert.equal(2, e.length);
    assert.equal("Pilha", e[0].title);
    assert.equal(1, e[0].events.length);
    assert.equal(1, e[0].events[0].conditions.length);
    assert.equal('Quando a pilha <P> for criada', e[0].events[0].conditions[0]);
    assert.equal(1, e[0].events[0].ensures.length);
    assert.equal('Então ela deverá estar vazia', e[0].events[0].ensures[0]);

    assert.equal("Fila", e[1].title);
    assert.equal(1, e[1].events.length);
    assert.equal(2, e[1].events[0].conditions.length);
    assert.equal('Quando a fila <P> for criada', e[1].events[0].conditions[0]);
    assert.equal('E a fila <P> for valida', e[1].events[0].conditions[1]);
    assert.equal(2, e[1].events[0].ensures.length);
    assert.equal('Então ela deverá estar vazia', e[1].events[0].ensures[0]);
    assert.equal('E podera ser adicionado conteudo', e[1].events[0].ensures[1]);
}

exports['Test 6'] = function (test) {

    var arquivo = "Especificação: Pilha\r\n" +
                 "Quando a pilha <P> for criada\r\n" +
                 "Então ela deverá estar vazia\r\n" +
                 "\r\n" +
                 "Quando a fila <P> for criada\r\n" +
                 "Então ela deverá estar vazia\r\n";

    var comp = new compilador.BDD_Compilador_de_espeficicacao();

    var e = comp.compila(arquivo);

    assert.equal(1, e.length);
    assert.equal("Pilha", e[0].title);
    assert.equal(2, e[0].events.length);

    assert.equal(1, e[0].events[0].conditions.length);
    assert.equal('Quando a pilha <P> for criada', e[0].events[0].conditions[0]);
    assert.equal(1, e[0].events[0].ensures.length);
    assert.equal('Então ela deverá estar vazia', e[0].events[0].ensures[0]);

    assert.equal(1, e[0].events[1].conditions.length);
    assert.equal('Quando a fila <P> for criada', e[0].events[1].conditions[0]);
    assert.equal(1, e[0].events[1].ensures.length);
    assert.equal('Então ela deverá estar vazia', e[0].events[1].ensures[0]);
}

exports['Test 7'] = function (test) {

    var arquivo = "Especificação: Pilha\r\n" +
                 "Quando a pilha <P> for criada\r\n" +
                 "Então ela deverá estar vazia\r\n" +
                 "\r\n" +
                 "Quando a fila <P> for criada\r\n" +
                 "E a fila <P> for valida\r\n" +
                 "Então ela deverá estar vazia\r\n" +
                 "E podera ser adicionado conteudo\r\n";

    var comp = new compilador.BDD_Compilador_de_espeficicacao();

    var e = comp.compila(arquivo);

    assert.equal(1, e.length);
    assert.equal("Pilha", e[0].title);
    assert.equal(2, e[0].events.length);

    assert.equal(1, e[0].events[0].conditions.length);
    assert.equal('Quando a pilha <P> for criada', e[0].events[0].conditions[0]);
    assert.equal(1, e[0].events[0].ensures.length);
    assert.equal('Então ela deverá estar vazia', e[0].events[0].ensures[0]);

    assert.equal(2, e[0].events[1].conditions.length);
    assert.equal('Quando a fila <P> for criada', e[0].events[1].conditions[0]);
    assert.equal('E a fila <P> for valida', e[0].events[1].conditions[1]);
    assert.equal(2, e[0].events[1].ensures.length);
    assert.equal('Então ela deverá estar vazia', e[0].events[1].ensures[0]);
    assert.equal('E podera ser adicionado conteudo', e[0].events[1].ensures[1]);
}

exports['Test 8'] = function (test) {

    var arquivo = "Especificação Pilha\r\n" +
                 "Quando a pilha <P> for criada\r\n" +
                 "Então ela deverá estar vazia\r\n" +
                 "\r\n" +
                 "Quando a fila <P> for criada\r\n" +
                 "E a fila <P> for valida\r\n" +
                 "Então ela deverá estar vazia\r\n" +
                 "E podera ser adicionado conteudo\r\n";

    var comp = new compilador.BDD_Compilador_de_espeficicacao();

    var e = comp.compila(arquivo);

    assert.equal(e[0], null);
}


exports['Test 9'] = function (test) {

    var arquivo = "Especificação: Pilha\r\n" +
                 "E ela deverá estar vazia\r\n"+
                 "Quando a pilha <P> for criada\r\n" +
                 "Então ela deverá estar vazia\r\n" +
                 "\r\n" +
                 "Quando a fila <P> for criada\r\n" +
                 "E a fila <P> for valida\r\n" +
                 "Então ela deverá estar vazia\r\n" +
                 "E podera ser adicionado conteudo\r\n";

    var comp = new compilador.BDD_Compilador_de_espeficicacao();

    var e = comp.compila(arquivo);

    assert.equal(e[0].valid, false);
}