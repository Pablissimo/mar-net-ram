import assert = require('assert');
import qualiom = require('../tm/qualiom_require.js');

function (test) {

    qualiom.require('../App_Test/app',
        function (app) {
            assert.equal('app.ts - iniciado com sucesso<br>', app.valor());
        })

}
