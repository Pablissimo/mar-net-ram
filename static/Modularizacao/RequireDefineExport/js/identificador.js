define(["require", "exports", 'modulo_soma'], function(require, exports, mod_soma) {
    var obj = new mod_soma.Module_soma.Classe_Soma();

    $("#calcular").click(calcular);

    function calcular() {
        if ($('#navegador').prop('checked') == true) {
            var a = $("#A").val();
            var b = $("#B").val();
            var objeto = { a: a, b: b };
            var objeto_json = JSON.stringify(objeto);
            var resultado = obj.somar(objeto_json);

            var resultado_objeto = JSON.parse(resultado);

            $("#R").val(resultado_objeto.resultado.toString());
        } else if ($('#servidor').prop('checked') == true) {
        }
    }
    ;
});
//# sourceMappingURL=identificador.js.map
