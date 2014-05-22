export class BDD_Espeficicacao {
    title: string;
    events: BDD_Espeficicacao_Evento[] = [];
}

export class BDD_Espeficicacao_Evento {
    conditions: string[] = [];
    ensures: string[] = [];
}

export function especificacao(title, declaration: () => void): BDD_Espeficicacao {
    var spec = new BDD_Espeficicacao();
    spec.title = title;
    return spec;
}