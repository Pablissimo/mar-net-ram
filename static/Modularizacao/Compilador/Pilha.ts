export class Pilha {
    items: number[] = [];

    empilhar(i: number): void {
        this.items.push(i);
    }

    pegar(): number {
        return this.items.pop();
    }
}
