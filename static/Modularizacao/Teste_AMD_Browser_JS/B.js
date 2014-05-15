define("../Teste_AMD_Browser_JS/B",["require", "exports", 'C'], function (require, exports, C) {


    if (C.OK != "ok")
        alert("ERRO NO B");

    exports.B = exports.OK = 'ok';

    document.write('B');

});