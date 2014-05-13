/// <reference path="../../projetoe/js/e1.ts" />
 // adaptação qualiom 
define("C1",["require", "exports"], function(require, exports) {
    var mod_E2 = ModuleE2;

    if (mod_E2.OK != "OK")
        alert("ERRO NO E2");

    var C1 = (function () {
        function C1() {
        }
        C1.prototype.C1 = function () {
        };

        C1.prototype.OK = function () {
            return "OK";
        };
        return C1;
    })();
    exports.C1 = C1;
});
//# sourceMappingURL=C1.js.map
