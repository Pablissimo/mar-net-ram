
var worker; //Definindo a variavel 

function startWorker()
{
    //Teste de compatibilidade do Browser para WebWorker
    if(typeof(Worker)!=="undefined")
    {
        if(typeof(worker)=="undefined")
        {
            worker = new Worker("doWork.js"); // Instanciando o objeto Worker
            worker2 = new Worker("doWork.js"); // Instanciando o objeto Worker
        }
        worker.onmessage = function (event) //Evento para exibição de resultados
        {
            document.getElementById("result").innerHTML = event.data; //Onde serão impressos os resultados no HTML
        };
        worker2.onmessage = function (event) //Evento para exibição de resultados
        {
            document.getElementById("result2").innerHTML = event.data; //Onde serão impressos os resultados no HTML
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
    worker2.terminate();
}
