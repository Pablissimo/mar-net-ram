 // adaptação qualiom 
define("../ProjetoC/C",["require", "exports", "../ProjetoE/E"], function(require, exports, E) {
    var ClasseC = (function () {
        function ClasseC() {
        }
        ClasseC.prototype.hola = function () {
            var e = new E.ClasseE();
            return "C - ok<br>" + e.hola();
        };
        return ClasseC;
    })();
    exports.ClasseC = ClasseC;
});
//# sourceMappingURL=C.js.map
