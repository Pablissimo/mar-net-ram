import E1 = require("E1");

export class Circulo extends E1.FiguraGeometrica {
    //area: number;
    constructor() { 
        super();
    }
    calcularArea(area: number):number {
        return (3.14 * (area * area));
    }
}
