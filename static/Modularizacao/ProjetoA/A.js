 // adaptação qualiom 
define("../ProjetoA/A",["require", "exports", "../ProjetoD/D", "../ProjetoB/B"], function(require, exports, D, B) {
    var ClasseA = (function () {
        function ClasseA() {
        }
        ClasseA.prototype.hola = function () {
            var b = new B.ClasseB();
            var d = new D.ClasseD();
            return "A - ok<br>" + b.hola() + d.hola();
        };
        return ClasseA;
    })();
    exports.ClasseA = ClasseA;
});
//# sourceMappingURL=A.js.map
