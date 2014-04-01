
function gravar()
{
    var elemento_da_chave = $("#chave"); // document.getElementById('chave') 
    var chave = elemento_da_chave.val(); // elemento_da_chave.value
    localStorage.setItem('chavelocal', chave);
    return
}

function carregar()
{

}

function inilializar()
{
    $("#chave").blur(gravar);
}

$(function()
{
    inilializar();
})



var chave, texto;


function () {
    
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

var x = { chave: chave, texto: texto };
alert(x); 