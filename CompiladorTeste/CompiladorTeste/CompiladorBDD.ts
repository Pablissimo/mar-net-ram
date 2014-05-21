export class BDD_Compilador_de_espeficicacao {

    linha: string;
    specifications: BDD_Espeficicacao[];
    especificacao_atual: BDD_Espeficicacao;
    evento_atual: BDD_Espeficicacao_Evento;
    garantia_atual: string;

    // Quando compilar o documento
    compila(arquivo: string): BDD_Espeficicacao[] {
        this.specifications = [];
        var linhas = arquivo.split('\r\n');
        for (var i = 0; i < linhas.length; i++) { // Então cada
            this.linha = linhas[i].trim(); // linha
            //deverá analizada por[[BDD_Compilador_de_espeficicacao_linha]]
            var valid = this.analiza_linha();
            // E se a linha linha for inválida deve-se mostrar um erro indicando o número da linha
            if (!valid)
                throw ("Linha invalida " + (i + 1));
        }
        return this.specifications;
    }

    // Especificação: BDD_Compilador_de_espeficicacao_linha
    analiza_linha(): boolean {       
        if (this.ehComentario())
            return true;
        if (this.linha == "") // Quando a linha estiver em branco
            return true; // Então a linha deverá ser ignorada Mas a linha será válida
        if (this.ehEspecificacao())
            return true;
        if (this.ehEvento())
            return true;
        if (this.ehGarantia())
            return true;
        if (this.ehContinuacaoEvento())
            return true;
        if (this.ehContinuacaoGarantia())
            return true;
        return false;
    }

    ehComentario(): boolean {
        if (this.linha.substring(0, 1) == '#') // Quando a linha começar com "#"
            //Então a linha deve ser considerada um comentário
            //E a linha deverá ser ignorada
            //Mas a linha será válida
            return true;
        return false;
    }

    ehEspecificacao(): boolean {
        var s = this.linha.toLocaleUpperCase();
        var b = s.substring(0, 14) == 'ESPECIFICAÇÃO:' ||
            s.substring(0, 14) == 'ESPECIFICACAO:';
        if (b) // Quando a linha começar com a palavra "Especificação:"
        {
            //Então o resto da linha deve ser a < Especificação >
            var e = new BDD_Espeficicacao();
            e.title = this.linha.substring(14).trim();
            //E deve - se considerar essa < Especificação > como a < Especificação atual >
            this.especificacao_atual = e;
            //E <evento atual> deverá ficar nulo
            this.evento_atual = null;
            //E <garantia atual> deverá ficar nula
            this.garantia_atual = null;
            //E deve-se registrar a <Especificação> numa lista de <specifications>
            this.specifications.push(e);
            //E a linha será válida
            return true;
        }
        return false;
    }

    ehEvento() {
        return true;
    }

    ehGarantia() {
        return true;
    }

    ehContinuacaoEvento() {
        return true;
    }
    ehContinuacaoGarantia() {
        return true;
    }
}

export class BDD_Espeficicacao {
    title: string;
    eventos: BDD_Espeficicacao_Evento[];
}

export class BDD_Espeficicacao_Evento {
    conditions: string[];
    ensures: string[];
}