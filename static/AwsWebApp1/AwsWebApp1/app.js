window.onload = function () {
    var myWorker = new Worker('worker.js');
};

$(function () {

    $("#lista").keypress(function () {
        localStorage.setItem('dados', $("#lista").html());
    });

    if (localStorage.getItem('dados')) {
        $("#lista").html(localStorage.getItem('dados'));
    }

    $("#limpar").click(function () {
        localStorage.clear();
        window.location = window.location;
    });
});

function teste() {


    var message = localStorage.getItem('dados');
    // Recebe a mensagem do worker
    myWorker.onmessage = function (event) {
        alert(event.data);
    };

    myWorker.postMessage(message);
    alert("ok");

}