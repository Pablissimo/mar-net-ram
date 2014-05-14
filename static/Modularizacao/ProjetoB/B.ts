import C = require("../ProjetoC/C");

export class ClasseB {
    hola(): string {
        var c = new C.ClasseC();
        return "B - ok<br>" + c.hola();
    }
}