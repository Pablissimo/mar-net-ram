var express = require('express');
var app = express();

app.get('/hello.txt', function (req, res) {
    res.send(req.ip);
});

var server = app.listen(1000, function () {
    console.log('O Server está escutando a porta %d', server.address().port);
});