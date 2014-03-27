
var worker; //Definindo a variavel 

function startWorker()
{
    //Teste de compatibilidade do Browser para WebWorker
    if(typeof(Worker)!=="undefined")
    {
        if(typeof(worker)=="undefined")
        {
            worker = new Worker("doWork.js"); // Instanciando o objeto Worker
        }
        worker.onmessage = function (event) //Evento para exibição de resultados
        {
            /*$("result").html(event.data); Igual a linha de baixo mas usando Jquery*/
            document.getElementById("result").innerHTML=event.data; //Onde serão impressos os resultados no HTML
        };
    }
    else
    {
        document.getElementById("result").innerHTML="Sorry, your browser does not support Web Workers...";
    }
}
//Função para finalizar o WebWorker
function stopWorker()
{ 
    worker.terminate();
}
