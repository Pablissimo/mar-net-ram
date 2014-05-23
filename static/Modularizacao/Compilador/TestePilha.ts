import bdd = require("../Compilador/bdd");
import p = require("../Compilador/Pilha");

bdd.specification("Pilha", () => {

    var pilha= new p.Pilha();
   
    bdd.when("Quando a <pilha> for criada", () => {
        
    }).then("Então ela deverá estar vazia", () => {
            bdd.expects(pilha.items.length).equals(1);
        });
});