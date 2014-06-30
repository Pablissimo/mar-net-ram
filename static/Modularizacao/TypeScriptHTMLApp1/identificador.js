 // adaptação qualiom 
define("../TypeScriptHTMLApp1/identificador",["require", "exports", 'modulo_soma'], function(require, exports, mod_soma) {
    var obj = new mod_soma.Classe_Soma();

    //alert(obj.somar(1, 2));
    $("#calcular").click(calcular);

    /// <summary>Repeat <tt>str</tt> several times.</summary>
    function calcular() {
        if ($('#navegador').prop('checked') == true) {
            var a = parseInt($("#A").val());
            var b = parseInt($("#B").val());

            var resultado = obj.somar(a, b);

            $("#R").val(resultado.toString());
        } else if ($('#servidor').prop('checked') == true) {
            alert("Em manutenção, tente outra vez na opção navegador");
        } else {
            alert("Escolha uma opção valida");
        }
    }
    ;
});
//# sourceMappingURL=identificador.js.map
