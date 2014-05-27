describe("Pilha", function () {
    it("Quando pilha for criada", function () {

        var pilha = new Array();
        var atual_PilhaCriada = pilha.length;
        var esperado_PilhaVazia = 0;

        expect(esperado_PilhaVazia).toEqual(atual_PilhaCriada);
    });

    it("Quando um elemento é adicionado na pilha", function () {

        var pilha = new Array();

        pilha.push("Ramon");
        pilha.push("Danillo");

        var esperado_UltimoElemento = "Danillo";
        var atual_ElementoAdicionado = pilha[1];

        expect(esperado_UltimoElemento).toEqual(atual_ElementoAdicionado);
    });

    it("Quando uma pilha possui N elementos", function () {

        var pilha = new Array();

        pilha.push("Ramon");
        pilha.push("Danillo");
        pilha.push("Fernando");
        pilha.push("Neto");
        pilha.push("Marcello");

        var elementoE = pilha[4];
        var esperado_ElementoRemovido = elementoE;
        var removerElemento = pilha.pop();

        var atual_ElementosPilha = {
            elementoRemovido: removerElemento,
            tamanhoAtualPilha: pilha.length
        };

        var esperado = "Marcello";
        var esperado_TamanhoAtualPilha = 4;

        expect(esperado_ElementoRemovido).toEqual(atual_ElementosPilha.elementoRemovido);
        expect(esperado_TamanhoAtualPilha).toEqual(atual_ElementosPilha.tamanhoAtualPilha);
    });
});


