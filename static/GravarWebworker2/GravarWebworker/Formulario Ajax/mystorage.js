
function gravar()
{
    var elemento_da_chave = $("#chave1"); // document.getElementById('chave') JS
    var chave = elemento_da_chave.val(); // elemento_da_chave.value JS
    localStorage.setItem('chavelocal', chave);
    var elemento_texto = $("#texto1");
    var texto = elemento_texto.val();
    localStorage.setItem('textolocal',texto);
    
}

function carregar()
{

}

function inilializar()
{
    $("#chave1").blur(gravar);
    if (localStorage.getItem('chavelocal')) {
        $("#chave1").val(localStorage.getItem('chavelocal'));}
    $("#texto1").blur(gravar);
    if (localStorage.getItem('chavelocal')){
        $("#texto1").val(localStorage.getItem('chavelocal'));}

}

$(function()
{
    inilializar();
})



var chave, texto;


var x = { chave: chave, texto: texto };
alert(x); 