var assert = require('assert');
var qualiom = require('../qlib/qualiom_require.js');

exports['Caso_1'] = function (test) {

    qualiom.require('../App_Test/app',
        function (app) {
            assert.equal('app.ts - iniciado com sucesso<br>A - ok<br>B - ok<br>C - ok<br>E - ok<br>D - ok<br>E - ok<br>', app.valor());
        })
    
}

exports['Caso_E'] = function (test) {

    qualiom.require('../ProjetoE/E',
        function (mod_e) {
            var e_obj = new mod_e.ClasseE();
            assert.equal("E - ok<br>", e_obj.hola());
        });
}
