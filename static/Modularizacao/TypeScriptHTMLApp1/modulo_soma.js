define(["require", "exports"], function(require, exports) {
    (function (Module_soma) {
        var Classe_Soma = (function () {
            function Classe_Soma() {
            }
            Classe_Soma.prototype.somar = function (a, b) {
                return a + b;
            };
            return Classe_Soma;
        })();
        Module_soma.Classe_Soma = Classe_Soma;
    })(exports.Module_soma || (exports.Module_soma = {}));
    var Module_soma = exports.Module_soma;
});
//# sourceMappingURL=modulo_soma.js.map
