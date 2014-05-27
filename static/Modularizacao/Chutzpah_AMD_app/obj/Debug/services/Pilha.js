define(["require", "exports"], function(require, exports) {
    var Construtor = (function () {
        function Construtor() {
        }
        Construtor.prototype.itens_na_pilha = function () {
            var itens_pilha = this.items_pilha;
            return itens_pilha;
        };

        Construtor.prototype.itens_na_fila = function () {
            var itens_fila = this.items_fila;
            return itens_fila;
        };

        Construtor.prototype.empilhar = function (item) {
            this.items_pilha.push(item);
        };
        return Construtor;
    })();

    
    return Construtor;
});
//# sourceMappingURL=Pilha.js.map
