class dados
{
    chave: string;
    dado: string;
}

class CLiente
{

    private contador: number = 0;
    private db: dados[] = [];

    constructor(public nome_banco: string)
    {

    }
    //Criar chave
    criarchave()
    {
        this.contador++;
        return this.nome_banco + this.contador.toString;
    }

    adicionar(dado: string)
    {
        var reg: dados = new dados();
        reg.chave = this.criarchave();
        reg.dado = dado;
        this.db.push(reg);
    }
} 