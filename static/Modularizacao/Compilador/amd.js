var req = require('../qlib/qualiom_require.js');

req.require('../Compilador/bdd_console_runner',
   function (runner) {
       runner.RunTest('../Compilador/TestePilha');
   }
);