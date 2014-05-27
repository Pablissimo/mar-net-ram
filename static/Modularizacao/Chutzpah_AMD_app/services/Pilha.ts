class Construtor {
    items_pilha: any[];
    items_fila: any[];


    itens_na_pilha() {  
        var itens_pilha = this.items_pilha;
        return itens_pilha;
    }

    empilhar(item: any) {
        this.items_pilha.push(item);
    }
}                                           

export = Construtor;