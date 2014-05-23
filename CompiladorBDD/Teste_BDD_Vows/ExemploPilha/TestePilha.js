var vows = require('vows'),
    assert = require('assert');

var criacao = require('./Criacao');

var Pilha = criacao.Pilha;
var Fila = criacao.Fila;

vows.describe('Pilha').addBatch({
    'Quando a pilha for criada': {
        topic: new (Pilha),

        'Então ela devera estar vazia': function (pilha) {
            assert.equal(pilha.itens_na_pilha, 1);
        }
    },
    'Quando a fila for criada': {
        topic: new (Fila),

        'Então ela devera estar vazia': function (fila) {
            assert.equal(fila.itens_na_fila, null);
        }
    }
}).export(module); // É necessário exportar o modulo para que seja identificado os testes