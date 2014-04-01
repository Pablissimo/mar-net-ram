function gravar()
{
    var cha = $(".chave").val();
    alert(cha);

    //localStorage.setItem('row_' + i, JSON.stringify(Objetos[i]));
    //var numero = 1;
   // eval("var chave" + numero);


    var elemento_da_chave = $("#chave1"); // document.getElementById('chave') 
    var chave1 = elemento_da_chave.val(); // elemento_da_chave.value
    localStorage.setItem('chavelocal', chave1);

    var elemento_da_chave = $("#texto1"); // document.getElementById('chave') 
    var texto1 = elemento_da_chave.val(); // elemento_da_chave.value
    localStorage.setItem('textolocal', texto1);
   
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

    
