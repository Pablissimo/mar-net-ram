import bdd = require('../Compilador/bdd');
//import util = require('util');

class BDD_Console_Runner implements bdd.BDD_TestRunner {
    ident: number = 0;

    log(s: string) {
        for (var i = 0; i < this.ident; i++)
            s = '  ' + s;
        console.log(s);
    }

    invoke(line: string, func: () => void): void {
        if (line != null) {
            this.log(line);
            this.ident++;
        }
        try {
            func();
        }
        finally {
            if (line != null)
                this.ident--;
        }
    }

    error(msg: string): void {
        this.log(msg);
    }

    fail(msg: string): void {
        this.log(msg);
    }

    inconclusive(msg: string): void {
        this.log(msg);
    }
}

export function RunTest(testFile: string) {
    bdd.RunTest(new BDD_Console_Runner(), testFile);
}