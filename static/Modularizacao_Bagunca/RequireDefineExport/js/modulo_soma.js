var Module_soma;
(function (Module_soma) {
    var Classe_Soma = (function () {
        function Classe_Soma() {
        }
        Classe_Soma.prototype.somar = function (json) {
            var objeto = JSON.parse(json);
            var a = objeto.a;
            var b = objeto.b;
            var resultado = a + b;

            var retorno_objeto = { resultado: resultado };
            var retorno_json = JSON.stringify(retorno_objeto);
            return retorno_json;
        };
        return Classe_Soma;
    })();
    Module_soma.Classe_Soma = Classe_Soma;
})(Module_soma || (Module_soma = {}));
//# sourceMappingURL=modulo_soma.js.map
