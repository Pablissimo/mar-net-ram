var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
 // adaptação qualiom 
define("E2",["require", "exports", "E1"], function(require, exports, E1) {
    var Circulo = (function (_super) {
        __extends(Circulo, _super);
        //area: number;
        function Circulo() {
         _super.call(this);
        }
        Circulo.prototype.calcularArea = function (area) {
            return (3.14 * (area * area));
        };
        return Circulo;
    })(E1.FiguraGeometrica);
    exports.Circulo = Circulo;
});
//# sourceMappingURL=E2.js.map
