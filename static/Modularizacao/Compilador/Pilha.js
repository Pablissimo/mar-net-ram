 // adaptação qualiom 
define("../Compilador/Pilha",["require", "exports"], function(require, exports) {
    var Pilha = (function () {
        function Pilha() {
            this.items = [];
        }
        Pilha.prototype.empilhar = function (i) {
            this.items.push(i);
        };

        Pilha.prototype.pegar = function () {
            return this.items.pop();
        };
        return Pilha;
    })();
    exports.Pilha = Pilha;
});
//# sourceMappingURL=Pilha.js.map
