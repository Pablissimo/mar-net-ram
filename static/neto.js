
function atualiza_nome()
{
  var nome=pega_nome();
  if (nome)
  {   
     seta('Olá: '+nome); 
	 document.getElementById("nome").setAttribute("class","azul");
  }	 
  else
  {
    seta('');
	 document.getElementById("nome").setAttribute("class","vermelho");
  }	 
}

function pega_nome()
{
  var elemento_nome = document.getElementById("nome");
  var nome_digitado = elemento_nome.value;
  return nome_digitado;
}

function seta(texto_de_ola)
{
  var elemento_ola = document.getElementById("ola1");
  elemento_ola.innerHTML = texto_de_ola;
  var elemento_ola = document.getElementById("ola2");
  elemento_ola.innerHTML = texto_de_ola;
  var elemento_ola = document.getElementById("ola3");
  elemento_ola.innerHTML = texto_de_ola;
  var elemento_ola = document.getElementById("ola4");
  elemento_ola.innerHTML = texto_de_ola;
}
