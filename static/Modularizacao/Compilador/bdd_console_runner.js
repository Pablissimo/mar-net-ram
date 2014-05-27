 // adaptação qualiom 
define("../Compilador/bdd_console_runner",["require", "exports", '../Compilador/bdd', 'fs'], function(require, exports, bdd, fs) {
    var styles = {
        //styles
        'bold': ['\x1B[1m', '\x1B[22m'],
        'italic': ['\x1B[3m', '\x1B[23m'],
        'underline': ['\x1B[4m', '\x1B[24m'],
        'inverse': ['\x1B[7m', '\x1B[27m'],
        'strikethrough': ['\x1B[9m', '\x1B[29m'],
        //text colors
        //grayscale
        'white': ['\x1B[37m', '\x1B[39m'],
        'grey': ['\x1B[90m', '\x1B[39m'],
        'black': ['\x1B[30m', '\x1B[39m'],
        //colors
        'blue': ['\x1B[34m', '\x1B[39m'],
        'cyan': ['\x1B[36m', '\x1B[39m'],
        'green': ['\x1B[32m', '\x1B[39m'],
        'magenta': ['\x1B[35m', '\x1B[39m'],
        'red': ['\x1B[31m', '\x1B[39m'],
        'yellow': ['\x1B[33m', '\x1B[39m'],
        //background colors
        //grayscale
        'whiteBG': ['\x1B[47m', '\x1B[49m'],
        'greyBG': ['\x1B[49;5;8m', '\x1B[49m'],
        'blackBG': ['\x1B[40m', '\x1B[49m'],
        //colors
        'blueBG': ['\x1B[44m', '\x1B[49m'],
        'cyanBG': ['\x1B[46m', '\x1B[49m'],
        'greenBG': ['\x1B[42m', '\x1B[49m'],
        'magentaBG': ['\x1B[45m', '\x1B[49m'],
        'redBG': ['\x1B[41m', '\x1B[49m'],
        'yellowBG': ['\x1B[43m', '\x1B[49m']
    };

    var BDD_Console_Runner = (function () {
        function BDD_Console_Runner() {
            this.ident = 0;
            this.errorcount = 0;
            this.failcount = 0;
            this.inconclusivecount = 0;
        }
        BDD_Console_Runner.prototype.log = function (s, color, ident) {
            if (typeof ident === "undefined") { ident = true; }
            if (color != '')
                s = styles[color][0] + s + styles[color][1];
            if (ident)
                for (var i = 0; i < this.ident; i++)
                    s = '  ' + s;
            console.log(s);
        };

        BDD_Console_Runner.prototype.specification = function (title, func) {
            this.invoke(title, func);
        };

        BDD_Console_Runner.prototype.event = function (title, func) {
            this.invoke(title, func);
        };

        BDD_Console_Runner.prototype.ensure = function (title, func) {
            this.ident++;
            try  {
                this.invoke(title, func);
            } finally {
                this.ident--;
            }
        };

        BDD_Console_Runner.prototype.invoke = function (line, func) {
            this.log(line, '');
            this.ident++;
            try  {
                func();
            } finally {
                this.ident--;
            }
        };

        BDD_Console_Runner.prototype.file = function (file, line) {
            this.log('  Local: ' + file + ':' + line.toString(), 'grey', false);
        };

        BDD_Console_Runner.prototype.error = function (msg, file, line) {
            for (var i = 0; i < msg.length; i++)
                this.log(msg[i], 'magentaBG');
            this.file(file, line);
            this.errorcount++;
        };

        BDD_Console_Runner.prototype.fail = function (msg, file, line) {
            for (var i = 0; i < msg.length; i++)
                this.log(msg[i], 'redBG');
            this.file(file, line);
            this.failcount++;
        };

        BDD_Console_Runner.prototype.inconclusive = function (msg, file, line) {
            for (var i = 0; i < msg.length; i++)
                this.log(msg[i], 'yellow');
            this.file(file, line);
            this.inconclusivecount++;
        };

        BDD_Console_Runner.prototype.loadSpec = function (module_name, callback) {
            var spec_file = module_name;
            fs.readFile(spec_file, 'utf-8', function (err, data) {
                if (err)
                    this.error(["Erro ao abrir: " + spec_file, err.message, err.path]);
                var s = data.toString();
                s = s.replace('\r\n', '\n');
                s = s.replace('\r', '\n');
                var lines = s.split('\n');
                callback(lines);
            });
        };

        BDD_Console_Runner.prototype.summary = function (assessionCount) {
            this.log('', '');
            this.log('Testes executados: ' + assessionCount.toString(), '');
            this.ident += 2;
            if (this.errorcount > 0)
                this.log('Erros  encontrados: ' + this.errorcount.toString(), 'magentaBG');
            if (this.failcount > 0)
                this.log('Falhas encontrados: ' + this.failcount.toString(), 'redBG');
            if (this.inconclusivecount > 0)
                this.log('Inconclusões      : ' + this.inconclusivecount.toString(), 'yellow');
            this.ident -= 2;
        };
        return BDD_Console_Runner;
    })();

    function RunTest(testFile) {
        bdd.RunTest(new BDD_Console_Runner(), testFile);
    }
    exports.RunTest = RunTest;
});
//# sourceMappingURL=bdd_console_runner.js.map
