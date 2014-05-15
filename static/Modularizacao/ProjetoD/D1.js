var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
 // adaptação qualiom 
define("../ProjetoD/D1",["require", "exports", "../ProjetoE/E1"], function(require, exports, E1) {
    var Retangulo = (function (_super) {
        __extends(Retangulo, _super);
        function Retangulo(altura, largura) {
            _super.call(this);
            this.altura = altura;
            this.largura = largura;
        }
        Retangulo.prototype.calcularArea = function () {
            return this.largura * this.altura;
        };
        return Retangulo;
    })(E1.FiguraGeometrica);
    exports.Retangulo = Retangulo;
});
//# sourceMappingURL=D1.js.map
