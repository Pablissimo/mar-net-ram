var req = require('../qlib/qualiom_require.js');

req.require('../chutzpah_AMD/TestePilha', function (runner) {
    runner.RunTest('.');
});
