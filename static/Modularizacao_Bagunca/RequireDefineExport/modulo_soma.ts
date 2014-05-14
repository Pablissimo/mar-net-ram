module Module_soma {

    export class Classe_Soma {

        public somar(json: string) {
            var objeto: any = JSON.parse(json);
            var a: number = objeto.a;
            var b: number = objeto.b;
            var resultado: number = a + b;

            var retorno_objeto: any = { resultado: resultado };
            var retorno_json: string = JSON.stringify(retorno_objeto);
            return retorno_json;
        }

    }
}