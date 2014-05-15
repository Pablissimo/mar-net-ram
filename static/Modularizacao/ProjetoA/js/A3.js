var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'A1'], function(require, exports, modA1) {
    var A3 = (function (_super) {
        __extends(A3, _super);
        function A3() {
            _super.apply(this, arguments);
        }
        A3.prototype.tamanho = function () {
            return 4;
        };

        A3.prototype.forma = function () {
            return "Quadrado";
        };
        return A3;
    })(modA1.A1);
    exports.A3 = A3;
});
//# sourceMappingURL=A3.js.map
