/// <reference path="../lib/jasmine/jasmine.d.ts" />

import Pilha = require("../../Chutzpah_AMD_app/services/Pilha");

describe("Pilha", () => {
    var pilha: Pilha;
    beforeEach(() => {
        //ARRANGE

        pilha = new Pilha();
    });

    it("Quando a pilha for criada", () => {
        //ACT      
            expect(pilha.itens_na_pilha()).toBe(undefined);
    });
});