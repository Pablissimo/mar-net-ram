 // adaptação qualiom 
define("../ProjetoD/D",["require", "exports", "../ProjetoE/E"], function(require, exports, E) {
    var ClasseD = (function () {
        function ClasseD() {
        }
        ClasseD.prototype.hola = function () {
            var e = new E.ClasseE();
            return "D - ok<br>" + e.hola();
        };
        return ClasseD;
    })();
    exports.ClasseD = ClasseD;
});
//# sourceMappingURL=D.js.map
