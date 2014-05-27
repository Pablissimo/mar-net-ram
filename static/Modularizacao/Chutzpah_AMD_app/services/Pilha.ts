class Construtor {
    items_pilha: any[];
    items_fila: any[];


    itens_na_pilha() {  
        var itens_pilha = this.items_pilha;
        return itens_pilha;
    }

    itens_na_fila() {
        var itens_fila = this.items_fila;
        return itens_fila;
    }

    empilhar(item: any) {
        this.items_pilha.push(item);
    }
}                                           

export = Construtor;