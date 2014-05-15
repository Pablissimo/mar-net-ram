var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "../ProjetoE/E1"], function(require, exports, mod_E1) {
    var Retangulo = (function (_super) {
        __extends(Retangulo, _super);
        function Retangulo(altura, largura) {
            _super.call(this);
            this.altura = altura;
            this.largura = largura;
        }
        Retangulo.prototype.calcularArea = function () {
            return (this.altura * this.largura);
        };
        return Retangulo;
    })(mod_E1.FiguraGeometrica);
    exports.Retangulo = Retangulo;
});
//# sourceMappingURL=D1.js.map
