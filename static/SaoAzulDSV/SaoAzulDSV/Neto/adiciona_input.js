$(function () {
    var contador = localStorage.getItem("contador"); //Lê do localStorage o valor do contador;
    if (!contador || contador == 0) {// Se contador for null
        contador = 1;// Seta 1 no contador
        gravar_contadores(contador, contador)//Inicia os contadores no Local Storage.
    }

    for (i = 1; i <= contador ; i++)// for para criar inputs existêntes
    {
        add(i);// chama a função de adicionar uma div com input
        carregar_Storage(i);// Ao carregar os campos ele carrega os valores que estão no Local Storage
    }

    atualiza_localStorage();// Atualização do Local Storage

    $(document).keypress(grava_dados_local);// Ao precionar uma tecla ele grava no Local Storage.

    // atribuicao de eventos
    $(document).keypress(apertou_tecla);// Qualquer tecla que for precionada vai chamar a função
})


function apertou_tecla(e)
{
    var ultimo_input_add = localStorage.getItem("ultimo_input_add");        // Lê do Local storage qual o numero do ultimo input criado
    var contador = localStorage.getItem("contador");        // Lê do Local storage qual o numero do ultimo input criado
    if (e.which == 13) {        // se a tecla clicada for o Enter
        add(++ultimo_input_add);        // soma ao contador primeiro e depois chama a função de add
        
        //Gravar contador no LocalStorage
        gravar_contadores(ultimo_input_add, ++contador);       // manda para o gravar os valores Ultimo_input_add e Contador Somado +1

        $("input").last().focus();      //Adiciona Foco no ultimo input add
    }
}


function gravar_contadores(i, c)       //c = Contador
{
    localStorage.setItem("contador", c);        // Guarda no Local Storage o valor do contador
    localStorage.setItem("ultimo_input_add", i);        // Guarda no Local Storage o valor do contador
}

function add(e, valor)
{
    var label = "<label>Mensagem" + e + "</label>";     //Var que guarda o Label Mensagem
    var input = "<input class='dado' id='input" + e + "' placeholder='Escreva aqui'/>";     // Var que guarda o Input
    var button = "<button onclick='removeCampo(" + e + ");'>Remove</button>";       //Var que guarda o Button


    $("#div_input").append("<div id='dado" + e + "'>" + label + input + button + "</div>");     // adiciona ao final na #div_input o input

}

function atualiza_localStorage() {

    //Ao carregar a Pagina pegando e setando valores no Local Storage 
    var ultimo_input_add = localStorage.getItem("ultimo_input_add");          // Lê do Local storage qual o numero do ultimo input criado
    var contador = localStorage.getItem("contador");        // Lê do Local storage qual o numero do contador de input criado e excluidos
    ultimo_input_add = contador;        //atribui ao ultimo input o valor do contador para que o numero seja sequêncial
    localStorage.setItem("ultimo_input_add", ultimo_input_add);     // Guarda no Local Storage o valor ultimo Input adicinado
}

function grava_dados_local() {// grava os dados digitados pelo usuario no local storage

    var ultimo_input_add = localStorage.getItem("ultimo_input_add"); //Lê no local Storage o valor do ultimo input gerado
    for (i = 1; i <= ultimo_input_add; i++) {// laço para gravar no local storage.
        var valor_input = $("#input" + i).val();//atrinui a valor o valor que contem dentro do input
        localStorage.setItem("input" + i, valor_input);//da um set no local storage com o nome e valor
    }
}

function carregar_Storage() {
    $("#input" + i).val(localStorage.getItem("input" + i));// carrega o local storage nos inputs
}


function removeCampo(e)
{
    var dado = $("#dado" + e);      //atribui a var dado o valor de dado + e que é o valor do input
    dado.remove();      //Remove o input
    localStorage.removeItem("input"+e);      //Apagado do Local Storage o item que foi apagado atraves do ID
    var c = localStorage.getItem("contador");    //Lê do localStorage o valor do contador;
    c--;        //Decrementa o valor de do contador
    localStorage.setItem("contador", c);        // Guarda no Local Storage o valor do contador
}