import D = require("../ProjetoD/D");
import B = require("../ProjetoB/B");

export class ClasseA {
    hola(): string {
        var b = new B.ClasseB();
        var d = new D.ClasseD();
        return "A - ok<br>" + b.hola() + d.hola();
    }
}