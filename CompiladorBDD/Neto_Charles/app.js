var arquivo = "Especificacao: Pilha de array\r\n" +
              "Quando a pilha <P> for criada\r\n" +
              "Então ela deverá estar vazia\r\n" +
              "Especificacao: Fila\r\n" +
              "Quando a fila <P> for criada\r\n" +
              "Então ela deverá estar vazia\r\n";
var arquivo_string = arquivo.trim();

var var_JSON_Collection = [{}];

Compila(arquivo_string);

function Compila(arquivo_string) {
    var especificacao_atual = "";
    var evento_atual = "";
    var garantia_atual = "";
    var var_obj = "";
    var especificacao_collection = arquivo_string.split("Especificacao:");
    
    for (var e = 0; e < especificacao_collection.length; e++) {
        var array_texto = especificacao_collection[e].split("\r\n");
        
        var_obj = {
            specification: {
                title: "",
                events: [
                     {
                         conditions: [{}]
                     },
                     {
                         ensure: [{}]
                     }]
            }
        };

        var titulo_atual = array_texto[0];


        var_obj.specification.title = titulo_atual;

        for (var i = 1; i < array_texto.length; i++) {

            var array_palavra = array_texto[i].split(" ");

            for (var j in array_palavra) {
                var palavra = array_palavra[j];
                if (palavra != undefined) {

                    if (palavra[0] == ("#")) {
                        break;
                    }
                    if (palavra == "Quando") {
                        for (var j = 0; j < array_palavra.length; j++) {
                            if (j == 0) {
                                evento_atual = array_palavra[j];
                            }
                            else {
                                evento_atual = evento_atual + " " + array_palavra[j];
                            }
                        }
                        if (var_obj.specification.title == titulo_atual) {
                            var_obj.specification.events[0].conditions[0] = evento_atual;
                        }
                        break;
                    }
                    console.log(var_obj);
                }
            }
        }
        if (var_obj != undefined && var_obj != "" && var_obj != null && var_obj.specification.title != "")
        {
            var_JSON_Collection.push(var_obj);
        }
    }
}