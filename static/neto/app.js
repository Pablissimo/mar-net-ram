var w;

function startWorker()
{
if(typeof(Worker) !== "undefined")
{
  if(typeof(w) == "undefined")
    {
    w = new Worker("app.js");
    }
  w.onmessage = function (event){
    document.getElementById("result").innerHTML = event.data;
  };
}
else
{
document.getElementById("result").innerHTML="Desculpe seu navegador não suporta WebWorker...";
}
}



var i = 0;

function timedCount()
{
    if(i != 100){
        i = i + 1;
        postMessage(i);
        setTimeout("timedCount()",1000);
    }
}

timedCount();


function somarValores(){
        var s1 = document.getElementById("text1").value;
        var s2 = document.getElementById("text2").value;
        var s3 = s1*s2;
        document.getElementById("conta").innerHTML = s3;
    }