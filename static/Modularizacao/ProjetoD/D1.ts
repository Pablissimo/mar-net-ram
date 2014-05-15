import mod_E1 = require("../ProjetoE/E1");

export class Retangulo extends mod_E1.FiguraGeometrica {    
    constructor(public altura: number, public largura: number) {
        super();
    }
    calcularArea(): number {
        return (this.altura * this.largura);
    }
}
