/// <reference path="../lib/jasmine/jasmine.d.ts" />
define(["require", "exports", "../../Chutzpah_AMD_app/services/Pilha"], function(require, exports, Pilha) {
    describe("Pilha", function () {
        var pilha;
        beforeEach(function () {
            //ARRANGE
            pilha = new Pilha();
        });

        it("Quando a pilha for criada", function () {
            //ACT
            expect(pilha.itens_na_pilha()).toBe(undefined);
        });
    });
});
//# sourceMappingURL=TestePilha.js.map
