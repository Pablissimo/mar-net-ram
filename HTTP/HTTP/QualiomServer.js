var express = require('express');
var bodyParser = require('body-parser');

exports.QualiomServer = (function () {

    var app_express, server_express;

    function QualiomServer() {

        app_express = express();

        app_express.use(bodyParser());

        app_express.post('/', function (request, response) {
            var str = request.body.str;
            var obj = JSON.parse(str);

            var op = obj.operacao;
            var a = obj.a;
            var b = obj.b;

            var fn = QualiomServer.prototype[op];
            var r=fn(a, b);

            var obj_resp = { resposta: r };            
            response.end(JSON.stringify(obj_resp));
        });

        server_express=app_express.listen(8000);
    }
    QualiomServer.prototype.stop = function () {
        server_express.close();
    }
    QualiomServer.prototype.soma = function (a, b) {
        return a + b;
    };
    return QualiomServer;
})();