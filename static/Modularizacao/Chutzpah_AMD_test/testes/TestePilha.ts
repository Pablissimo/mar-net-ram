/// <reference path="../lib/jasmine/jasmine.d.ts" />

import p = require("../../Chutzpah_AMD_app/services/Pilha");

describe("Pilha", () => {
    var pilha = null;
    beforeEach(() => {
        //ARRANGE
        pilha = new p();
    });

    it("Quando a pilha for criada",() => {
        //ACT      
        expect(true).toBe(false);
    });
});