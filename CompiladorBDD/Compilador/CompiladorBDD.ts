import bdd = require("./bdd");

export class BDD_Compilador_de_espeficicacao {

    linha: string;
    specifications: bdd.BDD_Espeficicacao[];
    especificacao_atual: bdd.BDD_Espeficicacao;
    evento_atual: bdd.BDD_Espeficicacao_Evento;
    garantia_atual: string;
    condicao_atual: string;

    // Quando compilar o documento
    compila(arquivo: string): bdd.BDD_Espeficicacao[] {
        this.specifications = [];
        var linhas = arquivo.split('\r\n');
        for (var i = 0; i < linhas.length; i++) { // Então cada
            this.linha = linhas[i].trim(); // linha
            //deverá analizada por[[BDD_Compilador_de_espeficicacao_linha]]
            var valid = this.analiza_linha();
            // E se a linha linha for inválida deve-se mostrar um erro indicando o número da linha
            if (!valid) {
                throw ("Linha invalida " + (i + 1));
            }
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
            var especificacao = this.linha.substring(14).trim();;
            var e = new bdd.BDD_Espeficicacao();
            e.title = especificacao;
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
        var s = this.linha.toLocaleUpperCase();
        //Quando a linha começar com a palavra "Quando"
        var con = s.substring(0, 7) == 'QUANDO ';
        if (con) {
            //Então a linha deverá ser considerada uma < condição> do <evento>
            var evento = new bdd.BDD_Espeficicacao_Evento();
            var condicao = this.linha;
            // E o <evento> deverá ser adicionado <Especificação atual>.<eventos>
            this.especificacao_atual.events.push(evento);
            // E esse < evento > será o < evento atual >
            this.evento_atual = evento;
            // E a < condição > deverá ser adicionada<evento atual>.< conditions >
            evento.conditions.push(condicao);
            // E <garantia atual> deverá ficar nula
            this.garantia_atual = null;
            // E a linha será válida
            return true;
        }
        return false;
    }

    ehGarantia() {
        var s = this.linha.toLocaleUpperCase();
        // Quando a linha começar com a palavra "Então"
        var gar = (s.substring(0, 6) == 'ENTAO ') || s.substring(0, 6) == 'ENTÃO ';
        // E o < evento atual> for valido
        var gar = gar && (this.evento_atual != null)
        if (gar) {
            //Então a linha deverá ser considerada uma < garantia> do <evento>
            var garantia = this.linha;
            //E a < garantia > deverá ser registrada no<evento atual>.< ensures >
            this.evento_atual.ensures.push(garantia);
            // E essa <garantia> será a <garantia atual>
            this.garantia_atual = garantia;
            // E a linha será válida
            return true;
        }
        return false;
    }

    ehContinuacaoEvento() {
        var s = this.linha.toLocaleUpperCase();
        // Quando a linha começar com a palavra "E"
        var cond = (s.substring(0, 2) == 'E ');
        // E o < evento atual> for valido
        var cond = cond && (this.evento_atual != null)
        // E <garantia atual> atual for nula
        var cond = cond && (this.garantia_atual == null)
        if (cond) {
            // Então a linha deverá ser considerada como uma < condição > que continua o < evento atual>
            var condicao = this.linha;
            //E a <condição> deverá ser adicionado <Especificação atual>.<events>.<conditions>
            this.evento_atual.conditions.push(condicao);
            // E a linha será válida
            return true;
        }
        return false;
    }

    ehContinuacaoGarantia() {
        var s = this.linha.toLocaleUpperCase();
        // Quando a linha começar com a palavra "E"
        var gar = (s.substring(0, 2) == 'E ');
        // E o < evento atual> for valido
        var gar = gar && (this.evento_atual != null)
        // E houver <garantia atual> 
        var gar = gar && (this.garantia_atual != null)
        if (gar) {
            // Então a linha deverá ser considerada como uma <garantia> que continua a <garantia atual>
            var garantia = this.linha;
            // E a <garantia> deverá ser registrada no <evento atual>.<ensures>
            this.evento_atual.ensures.push(garantia);
            // E a linha será válida
            return true;
        }
        return false;
    }
}


