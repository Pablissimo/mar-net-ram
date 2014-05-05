// UnitTest.js 
var assert = require('assert');
var qsrv = require('./QualiomServer.js');
var qcli = require('./QualiomClient.js');


function TesteParametrizado(casos, testes) {
    var criaTeste = function (n, f, p) {
        exports[n] = function () { f(p); }
    }
    for (var caso in casos) {
        var param = casos[caso];
        for (var teste in testes) {
            var fn = testes[teste];
            criaTeste(caso + "-" + teste, fn, param);
        }
    }
}


TesteParametrizado(
    {
        um: { a: 1, b: 2, resp: 3 },
        dois: { a: 2, b: 1, resp: 3 },
        tres: { a: 3, b: 1, resp: 4 }
    },
    {

        'Test 1': function (p) {
            var srv = new qsrv.QualiomServer();

            var cli = new qcli.QualiomClient();
            cli.soma(p.a, p.b, function (resposta) {
                try {
                    assert.equal(resposta, p.resp);
                }
                finally {
                    srv.stop();
                }
            });
        }
    });

