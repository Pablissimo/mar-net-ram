import E1 = require("E1");

export class Circulo extends E1.FiguraGeometrica {
    raio: number;
    constructor(raio: number) {
        this.raio = raio;
    }
    calcularArea():number {
        return 0;
    }
}