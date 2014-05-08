import mod_soma = require('modulo_soma');

var obj = new mod_soma.Classe_Soma();

//alert(obj.somar(1, 2));

$("#calcular").click(calcular);

/// <summary>Repeat <tt>str</tt> several times.</summary>
function calcular() {

    if ($('#navegador').prop('checked') == true) {
        var a: number = parseInt($("#A").val());
        var b: number = parseInt($("#B").val());

        var resultado: number = obj.somar(a, b);

        $("#R").val(resultado.toString());
     
    }
    else if ($('#servidor').prop('checked') == true) {
        alert("Em manutenção, tente outra vez na opção navegador"); 
    }

    else {
        alert("Escolha uma opção valida");
    }
};