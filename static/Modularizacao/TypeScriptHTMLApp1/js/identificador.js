define(["require", "exports", 'modulo_soma'], function(require, exports, mod_soma) {
    var obj = new mod_soma.Classe_Soma();

    //alert(obj.somar(1, 2));
    $("#calcular").click(calcular());

    function calcular() {
        if ($('#navegador').prop('checked') == true) {
            var a = $("#A").val();
            var b = $("#B").val();
            var objeto = { a: a, b: b };
            var objeto_json = JSON.stringify(objeto);
            var resultado = obj.somar(objeto_json);

            var resultado_objeto = JSON.parse(resultado);

            $("#R").val(resultado_objeto.resultado);
        } else if ($('#servidor').prop('checked') == true) {
            //Requisição para servidor
        }
    }
    ;
});
//# sourceMappingURL=C:/Users/Qualiom/Documents/GitHub/mar-net-ram/static/Modularizacao/TypeScriptHTMLApp1/js/identificador.js.map
