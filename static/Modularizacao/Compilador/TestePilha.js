define("TestePilha",["require", "exports", "../Compilador/bdd", "../Compilador/Pilha"], function(require, exports, bdd, p) {
    bdd.specification("Pilha", function () {
        var pilha = new p.Pilha();
        var elemento = 1;

        bdd.when("Quando a <pilha> for criada", function () {
        }).then("Então ela deverá estar vazia", function () {
            bdd.expects(pilha.items.length).equals(0);
        });

        bdd.when("Quando um <elemento> for adicionado à <pilha>", function () {
            pilha.empilhar(elemento);
        }).then("Então o <elemento> deverá estar no topo da <pilha>", function () {
            bdd.expects(pilha.items[0]).equals(elemento);
        }).and("E ela deverá ter o tamanho 1", function () {
            bdd.expects(pilha.items.length).equals(1);
        });
    });
});
//# sourceMappingURL=TestePilha.js.map
