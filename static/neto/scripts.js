
$( document ).ready(function() {
  le();
});

function le()
{
   var nome = localStorage.getItem('nome'); 
   if (nome)
     $("#nome").val(nome);
}


function grava_nome()
{
   var nome=$("#nome").val();
   localStorage.setItem('nome', nome); 
}

function atualizar_o_nome()
{
  var nome=$("#nome").val();
  if (nome)
  {   
     seta('Oi, '+nome); 
  }	 
  else
  {
     seta('');
  }	 
}

function seta(texto_de_ola)
{
  $("#zero_graus, #noventa_graus, #cento_oitente_graus, #duzentos_setenta_graus").html(texto_de_ola);
}
