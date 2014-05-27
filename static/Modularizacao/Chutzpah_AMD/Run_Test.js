var req = require('../qlib/amd.js');

req.require('../chutzpah_AMD/Pilha', function (runner) {
    runner.RunTest('../chutzpah_AMD/TestePilha');
});
