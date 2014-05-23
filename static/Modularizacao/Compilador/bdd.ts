
export interface BDD_TestRunner {
    invoke(title: string, func: () => void);
    error(msg: string): void;
    fail(msg: string): void;
    inconclusive(msg: string): void;
}

export class BDD_Espeficicacao {
    title: string;
    module_name: string;
    events: BDD_Espeficicacao_Evento[] = [];
    func: () => void;
}

export class BDD_Espeficicacao_Evento {
    conditions: string[] = [];
    ensures: string[] = [];

    conditions_funcs: Array<() => void> = [];
    ensures_funcs: Array<() => void> = [];
}

var all_spec: BDD_Espeficicacao[] = [];
var declaring_spec: BDD_Espeficicacao;
var reseting_topic: boolean = false;

export function specification(title: string, declaration: () => void): void {
    try {
        declaring_spec = new BDD_Espeficicacao();
        all_spec.push(declaring_spec);
        declaring_spec.title = title;
        declaring_spec.module_name = module.id;
        declaring_spec.func = declaration;
    }
    finally {
        declaring_spec = null;
    }
}

export function when(title: string, declaration: () => void): BDD_When_Declaration {
    if (reseting_topic)
        return new BDD_When_Declaration();
    if (declaring_spec == null)
        testRunner.fail("when fora de uma espeficicação");
    var w = new BDD_When_Declaration();
    w.evento = new BDD_Espeficicacao_Evento();
    w.evento.conditions.push(title);
    w.evento.conditions_funcs.push(declaration);
    declaring_spec.events.push(w.evento);
    return w;
}

export class BDD_When_Declaration {
    evento: BDD_Espeficicacao_Evento;
    then(title: string, declaration: () => void): BDD_Then_Declaration {
        if (reseting_topic)
            return new BDD_Then_Declaration();
        this.evento.ensures.push(title);
        this.evento.ensures_funcs.push(declaration);
        var t = new BDD_Then_Declaration();
        t.evento = this.evento;
        return t;
    }
    and(title: string, declaration: () => void): BDD_Then_Declaration {
        if (reseting_topic)
            return new BDD_When_Declaration();
        this.evento.conditions.push(title);
        this.evento.conditions_funcs.push(declaration);
        return this;
    }
}

export class BDD_Then_Declaration {
    evento: BDD_Espeficicacao_Evento;
    and(title: string, declaration: () => void): BDD_Then_Declaration {
        if (reseting_topic)
            return new BDD_Then_Declaration();
        this.evento.ensures.push(title);
        this.evento.ensures_funcs.push(declaration);
        return this;
    }
}

export function expects(value: any): BDD_Expects {
    return new BDD_Expects(value);
}

export class BDD_Expects {
    constructor(public value: any) {
    }

    equals(expectedValue: any) {
        if (this.value != expectedValue)
            testRunner.fail('Valor esperado= "' + new String(expectedValue) + ' encontrado="' + new String(this.value));
    }
}

var testRunner: BDD_TestRunner;

export function RunTest(runner: BDD_TestRunner, testFile: string) {
    testRunner = runner;
    q_require(testFile, function (t: any) {
        for (var i = 0; i < all_spec.length; i++) {
            var spec = all_spec[i];
            run_spec_test(spec)
        }
    });
}

function run_spec_test(spec: BDD_Espeficicacao) {
    var topic = null;
    var first = true;
    testRunner.invoke("Especificação: " + spec.title, () => {
        var topic_ok = false;
        testRunner.invoke(null, () => {
            topic = Object.create(spec.func.prototype);
            try {
                if (first)
                    declaring_spec = spec;
                reseting_topic = !first;
                topic.constructor();
                topic_ok = true;
            }
            finally {
                declaring_spec = null;
            }
        });
        if (topic_ok) {
            for (var i = 0; i < spec.events.length; i++) {
                var event = spec.events[i];
                for (var j = 0; j < event.conditions.length; j++)
                    testRunner.invoke(event.conditions[j], event.conditions_funcs[j]);
                for (var k = 0; k < event.ensures.length; k++)
                    testRunner.invoke(event.ensures[k], event.ensures_funcs[k]);
            }
            first = false;
        }
    });
}