 // adaptação qualiom 
define("E1",["require", "exports"], function(require, exports) {
    (function (ModuleE1) {
        var E1 = (function () {
            function E1() {
            }
            E1.prototype.E1 = function () {
            };

            E1.prototype.OK = function () {
                document.write('E1');
                return "OK";
            };
            return E1;
        })();
        ModuleE1.E1 = E1;
    })(exports.ModuleE1 || (exports.ModuleE1 = {}));
    var ModuleE1 = exports.ModuleE1;
});
//# sourceMappingURL=E1.js.map
