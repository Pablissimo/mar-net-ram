function gravar()
{


    //localStorage.setItem('row_' + i, JSON.stringify(Objetos[i]));
    //var numero = 1;
   // eval("var chave" + numero);


    var elemento_da_chave = $("#chave1"); // document.getElementById('chave') 
    var chave1 = elemento_da_chave.val(); // elemento_da_chave.value
    localStorage.setItem('chavelocal', chave1);

    var elemento_da_chave = $("#texto1"); // document.getElementById('chave') 
    var texto1 = elemento_da_chave.val(); // elemento_da_chave.value
    localStorage.setItem('textolocal', texto1);
    //numero++;
}

function carregar()
{

}

function inilializar()
{
    $("#chave1").blur(gravar);
    $("#texto1").blur(gravar);
}

$(function()
{
    inilializar();
})



//var chave, texto;


/*function () {
    
    if (localStorage.getItem('chavelocal')) {
        $("#chave").val(localStorage.getItem('chavelocal'));
    }
    $("#texto").blur(
        function () {
            texto = $("texto").val();
            localStorage.setItem('textolocal', texto);
    });
    if (localStorage.getItem('textolocal')) {
        $("#texto").val(localStorage.getItem('textolocal'));
    } $
});

var x = { chave1: chave, texto2: texto };
alert(x); */