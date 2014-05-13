 // adaptação qualiom 
define("A",["require", "exports", 'B', 'D'], function(require, exports, mod_B, mod_D) {
    if (mod_B.OK != "OK")
        alert("ERRO NO B");
    if (mod_D.OK != "OK")
        alert("ERROx NO D");

    exports.A = "OK";
    exports.OK = "OK";

    document.write('A');
});
//# sourceMappingURL=A.js.map
