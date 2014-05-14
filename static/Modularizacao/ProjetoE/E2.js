var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
 // adaptação qualiom 
define("E2",["require", "exports", "../ProjetoE/E1"], function(require, exports, E1) {
    var Circulo = (function (_super) {
        __extends(Circulo, _super);
        //area: number;
        //public raio: number;
        function Circulo(raio) {
            _super.call(this);
            this.raio = raio;
            //this.raio = raio;
        }
        Circulo.prototype.calcularArea = function () {
            return (3.14 * (this.raio * this.raio));
        };
        return Circulo;
    })(E1.FiguraGeometrica);
    exports.Circulo = Circulo;
});
//# sourceMappingURL=E2.js.map
