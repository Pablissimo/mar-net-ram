import E = require("../ProjetoE/E");

export class ClasseD {
    hola(): string {
        var e = new E.ClasseE();
        return "D - ok<br>" + e.hola();
    }
}