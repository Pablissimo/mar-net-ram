var request = require("request");

exports.QualiomClient = (function () {
    function QualiomClient() {
    }
    QualiomClient.prototype.soma = function (a, b, callback) {
        
        var obj = { operacao: 'soma', a: a, b: b };
        var str = JSON.stringify(obj);

        request({
            uri: "http://127.0.0.1:8000",
            method: "POST",
            form: {
                str: str
            }
        }, function (error, response, body) {
            var obj = JSON.parse(body);
            callback(obj.resposta);
        });
        
    };
    return QualiomClient;
})();


// url - uri
// PROTOCOLO:USUARIO@SENHA//HOST/PATH?QUERYSTRING#HASHSTRING