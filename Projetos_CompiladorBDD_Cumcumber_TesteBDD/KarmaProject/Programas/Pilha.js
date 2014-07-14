 // adaptação qualiom 
define("../Programas/Pilha",["require", "exports"], function(require, exports) {
    var Pilha = (function () {
        function Pilha() {
        }
        Pilha.prototype.adicionaElemento = function (elemento) {
            this.pilhaTeam.push(elemento);

            var top = this.pilhaTeam[this.pilhaTeam.length];
            ;

            return top;
        };

        Pilha.prototype.removeElemento = function () {
            return this.pilhaTeam.pop();
        };

        Pilha.prototype.listaElementos = function () {
            return this.pilhaTeam;
        };
        return Pilha;
    })();
    exports.Pilha = Pilha;
    ;
});
//# sourceMappingURL=Pilha.js.map
