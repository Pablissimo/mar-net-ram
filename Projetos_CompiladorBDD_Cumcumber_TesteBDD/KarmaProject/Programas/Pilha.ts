export class Pilha {

    private pilhaTeam: Array<string>;
    
    public adicionaElemento(elemento: string): string
    {   
        this.pilhaTeam.push(elemento);

        var top: string = this.pilhaTeam[this.pilhaTeam.length];;

        return top;
    }

    public removeElemento(): string
    {
        return this.pilhaTeam.pop();
    }

    public listaElementos(): Array<string>
    {
        return this.pilhaTeam;
    }
};