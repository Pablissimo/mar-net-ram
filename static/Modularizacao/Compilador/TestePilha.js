 // adaptação qualiom 
define("../Compilador/TestePilha",["require", "exports", "../Compilador/bdd", "../Compilador/Pilha"], function(require, exports, bdd, p) {
    bdd.specification("Pilha", function () {
        var pilha = new p.Pilha();

        bdd.when("Quando a <pilha> for criada", function () {
        }).then("Então ela deverá estar vazia", function () {
            bdd.expects(pilha.items.length).equals(1);
        });
    });
});
//# sourceMappingURL=TestePilha.js.map
