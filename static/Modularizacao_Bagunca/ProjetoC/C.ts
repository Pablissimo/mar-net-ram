import E = require("../ProjetoE/E");

export class ClasseC {
    hola(): string {
        var e = new E.ClasseE();
        return "C - ok<br>" + e.hola();
    }
}