import mod_soma = require('modulo_soma');

var obj = new mod_soma.Classe_Soma();

//alert(obj.somar(1, 2));

$("#calcular").click(calcular());



function calcular() {

    if ($('#navegador').prop('checked') == true) {
        var a:number = $("#A").val();
        var b:number = $("#B").val();
        var objeto:any = { a: a, b: b };
        var objeto_json:string = JSON.stringify(objeto);
        var resultado: any = obj.somar(objeto_json);

        var resultado_objeto: any = JSON.parse(resultado);

        $("#R").val(resultado_objeto.resultado);
    }
    else if ($('#servidor').prop('checked') == true) {
        //Requisição para servidor
    }

};