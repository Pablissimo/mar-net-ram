
$( document ).ready(function() {
  le();
});

function le()
{
   var nome = localStorage.getItem('nome'); 
   if (nome)
     $("#nome").val(nome);
}

function gravar()
{
   var nome=$("#nome").val();
   localStorage.setItem('nome', nome); 
}

function atualiza_nome()
{
  var nome=$("#nome").val();
  if (nome)
  {   
     seta('Olá: '+nome); 
	 $("#nome").removeClass("vermelho");
	 $("#nome").addClass("azul");
  }	 
  else
  {
     seta('');
	 $("#nome").removeClass("azul");
	 $("#nome").addClass("vermelho");
  }	 
}

function seta(texto_de_ola)
{
  $("#ola1,#ola2,#ola3,#ola4").html(texto_de_ola);
}
