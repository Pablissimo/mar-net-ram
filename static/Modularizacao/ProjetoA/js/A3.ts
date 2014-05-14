import modA1 = require('A1');
import modA2 = require('A2');

export class A3 extends modA1.A1 implements modA2.A2 {
    tamanho(): number {
        return 4;
    }

    forma(): string {
        return "Quadrado";
    }
}
