define(["require", "exports", 'B', 'D'], function (require, exports, B, D) {

    if (B.OK != "ok")
        alert("ERRO NO B");
    if (D.OK != "ok")
        alert("ERRO NO D");

    exports.A = exports.OK = 'ok';

    document.write('A');

});