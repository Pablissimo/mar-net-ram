import bdd = require("../Compilador/bdd");
import p = require("../Compilador/Pilha");

bdd.specification("Pilha", () => {

    var pilha = new p.Pilha();
    var elemento = 1;

    bdd.when("Quando a <pilha> for criada", () => {

    }).then("Então ela deverá estar vazia", () => {
            bdd.expects(pilha.items.length).equals(0);
        });

    bdd.when("Quando um <elemento> for adicionado à <pilha>", () => {
        pilha.empilhar(elemento);
    }).then("Então o <elemento> deverá estar no topo da <pilha>",
        () => {
            bdd.expects(pilha.items[0]).equals(elemento);
        }).and("E ela deverá ter o tamanho 1",
        () => {
            bdd.expects(pilha.items.length).equals(1);
        });
});