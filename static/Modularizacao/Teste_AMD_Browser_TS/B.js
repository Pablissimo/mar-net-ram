 // adaptação qualiom 
define("../Teste_AMD_Browser_TS/B",["require", "exports", 'C'], function(require, exports, mod_C) {
    if (mod_C.OK != "OK")
        alert("ERRO NO B");

    exports.B = "OK";
    exports.OK = "OK";

    document.write('B');
});
//# sourceMappingURL=B.js.map
