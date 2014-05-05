var express = require('express');
var app = express();

app.get('/hello.txt', function (req, res) {
    res.send('Teste de Requisição HTTP');
});

var server = app.listen(2000, function () {
    console.log('Escutando a porta %d', server.address().port);
});