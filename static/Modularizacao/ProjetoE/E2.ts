import E1 = require("../ProjetoE/E1");

export class Circulo extends E1.FiguraGeometrica {
    //area: number;
    //public raio: number;
    constructor(public raio: number) {
        super();
        //this.raio = raio;
    }
    calcularArea(): number {
        return (3.14 * (this.raio * this.raio));
    }
}
