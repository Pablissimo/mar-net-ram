define("bdd",["require", "exports"], function(require, exports) {
    var BDD_Espeficicacao = (function () {
        function BDD_Espeficicacao() {
            this.events = [];
        }
        return BDD_Espeficicacao;
    })();
    exports.BDD_Espeficicacao = BDD_Espeficicacao;

    var BDD_Espeficicacao_Evento = (function () {
        function BDD_Espeficicacao_Evento() {
            this.conditions = [];
            this.ensures = [];
            this.conditions_funcs = [];
            this.ensures_funcs = [];
        }
        return BDD_Espeficicacao_Evento;
    })();
    exports.BDD_Espeficicacao_Evento = BDD_Espeficicacao_Evento;

    var all_spec = [];
    var declaring_spec;
    var reseting_topic = false;

    function specification(title, declaration) {
        try  {
            declaring_spec = new BDD_Espeficicacao();
            all_spec.push(declaring_spec);
            declaring_spec.title = title;
            declaring_spec.module_name = module.id;
            declaring_spec.func = declaration;
        } finally {
            declaring_spec = null;
        }
    }
    exports.specification = specification;

    function when(title, declaration) {
        if (reseting_topic)
            return new BDD_When_Declaration();
        if (declaring_spec == null)
            testRunner.fail(["when fora de uma espeficicação"], declaring_spec.module_name, 0);
        var w = new BDD_When_Declaration();
        w.evento = new BDD_Espeficicacao_Evento();
        w.evento.conditions.push(title);
        w.evento.conditions_funcs.push(declaration);
        declaring_spec.events.push(w.evento);
        return w;
    }
    exports.when = when;

    var BDD_When_Declaration = (function () {
        function BDD_When_Declaration() {
        }
        BDD_When_Declaration.prototype.then = function (title, declaration) {
            if (reseting_topic)
                return new BDD_Then_Declaration();
            this.evento.ensures.push(title);
            this.evento.ensures_funcs.push(declaration);
            var t = new BDD_Then_Declaration();
            t.evento = this.evento;
            return t;
        };
        BDD_When_Declaration.prototype.and = function (title, declaration) {
            if (reseting_topic)
                return new BDD_When_Declaration();
            this.evento.conditions.push(title);
            this.evento.conditions_funcs.push(declaration);
            return this;
        };
        return BDD_When_Declaration;
    })();
    exports.BDD_When_Declaration = BDD_When_Declaration;

    var BDD_Then_Declaration = (function () {
        function BDD_Then_Declaration() {
        }
        BDD_Then_Declaration.prototype.and = function (title, declaration) {
            if (reseting_topic)
                return new BDD_Then_Declaration();
            this.evento.ensures.push(title);
            this.evento.ensures_funcs.push(declaration);
            return this;
        };
        return BDD_Then_Declaration;
    })();
    exports.BDD_Then_Declaration = BDD_Then_Declaration;

    var assessionCount = 0;

    function expects(value) {
        assessionCount++;
        return new BDD_Expects(value);
    }
    exports.expects = expects;

    var BDD_Expects = (function () {
        function BDD_Expects(value) {
            this.value = value;
        }
        BDD_Expects.prototype.equals = function (expectedValue) {
            if (this.value != expectedValue)
                testRunner.fail(['esperado  ="' + new String(expectedValue) + '"', 'encontrado="' + new String(this.value) + '"'], specFilename, specRow);
        };
        return BDD_Expects;
    })();
    exports.BDD_Expects = BDD_Expects;

    var testRunner;
    var specFilename;
    var specRow;

    function RunTest(runner, moduleName) {
        testRunner = runner;

        specFilename = moduleName + '.spec';
        specRow = 0;
        var specFile;

        runner.loadSpec(specFilename, function (lines) {
            specFile = lines;
            q_require(moduleName, function (t) {
                try  {
                    for (var i = 0; i < all_spec.length; i++) {
                        var spec = all_spec[i];
                        test_specification(spec);
                    }
                } catch (e) {
                    if (e !== 'abort')
                        throw e;
                } finally {
                    runner.summary(assessionCount);
                }
            });
        });

        function testSpecLine(expected_line) {
            do {
                if (specRow >= specFile.length) {
                    runner.error(['Diferença entre especificação e a implementação do teste', 'Espeficicação: Não especificado', 'Implementação: ' + expected_line], specFilename, specRow);
                    throw 'abort';
                }
                var line = specFile[specRow].trim();
                specRow++;
                var repete = ((line == '') || (line.substr(0, 1) == '#'));
            } while(repete);
            if (line != expected_line) {
                runner.error(['Diferença entre especificação e a implementação do teste', 'Espeficicação: ' + line, 'Implementação: ' + expected_line], specFilename, specRow);
                throw 'abort';
            }
        }

        function testSpecEOF() {
            while (specRow < specFile.length) {
                var s = specFile[specRow].trim();
                if ((s != '') && (s.substr(0, 1) != '#')) {
                    var msg = ['Especificações não implementadas:'];
                    var row = specRow;
                    while (specRow < specFile.length) {
                        msg.push(specFile[specRow]);
                        specRow++;
                    }
                    runner.error(msg, specFilename, row);
                }
                specRow++;
            }
        }

        function test_specification(spec) {
            var topic = null;

            function prepare_topic() {
                var topic_ok = false;
                topic = Object.create(spec.func.prototype);
                try  {
                    if (!reseting_topic)
                        declaring_spec = spec;
                    topic.constructor();
                    topic_ok = true;
                } catch (e) {
                    testRunner.error(['Erro na implementação da especificação'], specFilename, specRow);
                    throw e;
                } finally {
                    declaring_spec = null;
                }
            }

            var s = "Especificação: " + spec.title;
            testSpecLine(s);
            runner.specification(s, function () {
                var first = true;
                reseting_topic = false;
                prepare_topic();
                for (var i = 0; i < spec.events.length; i++) {
                    if (first)
                        first = false;
                    else {
                        reseting_topic = true;
                        prepare_topic();
                    }
                    var event = spec.events[i];
                    for (var j = 0; j < event.conditions.length; j++) {
                        s = event.conditions[j];
                        testSpecLine(s);
                        runner.event(s, event.conditions_funcs[j]);
                    }
                    for (var k = 0; k < event.ensures.length; k++) {
                        var s = event.ensures[k];
                        testSpecLine(s);
                        runner.ensure(s, event.ensures_funcs[k]);
                    }
                }
                testSpecEOF();
            });
        }
    }
    exports.RunTest = RunTest;
});
//# sourceMappingURL=bdd.js.map
