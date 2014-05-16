

casper.test.begin('Logou', 1, function suite(test) {
    casper.start('http://localhost:3000/login.html', function () {
        this.fill('#f', { login: 'ana', senha: 'maria' }, true);
    });
    casper.then(function () {
        var status = this.getHTML('#status');
        test.assertEquals(status, 'LOGOU');
    });
    casper.run(function () {
        test.done();
    });
});


casper.test.begin('Falha login', 1, function suite(test) {
    casper.start('http://localhost:3000/login.html', function () {
        this.fill('#f', { login: 'ana', senha: 'clara' }, true);
    });
    casper.then(function () {
        var status = this.getHTML('#status');
        test.assertEquals(status, 'usuario ou senha invalido');
    });
    casper.run(function () {
        test.done();
    });
});

