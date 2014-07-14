var req = require('./amd.js');

req.require('./bdd_console_runner', function (runner) {
    runner.RunTest('./Programas/Pilha');
});
