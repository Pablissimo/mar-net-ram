 // adaptação qualiom 
define("../ProjetoB/B",["require", "exports", "../ProjetoC/C"], function(require, exports, C) {
    var ClasseB = (function () {
        function ClasseB() {
        }
        ClasseB.prototype.hola = function () {
            var c = new C.ClasseC();
            return "B - ok<br>" + c.hola();
        };
        return ClasseB;
    })();
    exports.ClasseB = ClasseB;
});
//# sourceMappingURL=B.js.map
