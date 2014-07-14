 // adaptação qualiom 
define("../Testes/Jasmine_test_02",["require", "exports", "../Programas/Pilha"], function(require, exports, modulo) {
    describe("Pilha tests", function () {
        //    beforeEach(() => {
        //        //ARRANGE
        //        //pilha = new modulo.Pilha();
        //    });
        it("Quando um elemento é adicionado na pilha", function () {
            //ACT
            var pilha = new modulo.Pilha();

            pilha.adicionaElemento("Ramon");
            pilha.adicionaElemento("Danillo");

            var esperado_UltimoElemento = "Danillo";
            var atual_ElementoAdicionado = pilha.listaElementos.length;

            //ASSERT
            expect(esperado_UltimoElemento).toEqual(atual_ElementoAdicionado);
        });

        it("Quando uma pilha possui N elementos", function () {
            //ACT
            var pilha = new modulo.Pilha();

            pilha.adicionaElemento("Ramon");
            pilha.adicionaElemento("Danillo");
            pilha.adicionaElemento("Fernando");
            pilha.adicionaElemento("Neto");
            pilha.adicionaElemento("Marcello");

            var elementoE = pilha.adicionaElemento[4];
            var esperado_ElementoRemovido = elementoE;
            var removerElemento = pilha.removeElemento();

            var atual_ElementosPilha = {
                elementoRemovido: removerElemento,
                tamanhoAtualPilha: pilha.listaElementos.length
            };

            var esperado = "Marcello";
            var esperado_TamanhoAtualPilha = 4;

            //ASSERT
            expect(esperado_ElementoRemovido).toEqual(atual_ElementosPilha.elementoRemovido);
            expect(esperado_TamanhoAtualPilha).toEqual(atual_ElementosPilha.tamanhoAtualPilha);
        });
    });
});
//# sourceMappingURL=Jasmine_test_02.js.map
