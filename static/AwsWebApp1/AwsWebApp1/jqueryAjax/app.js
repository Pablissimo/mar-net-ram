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

function envia() {

    var work = new Worker("worker.js");

    work.addEventListener('message', function (e) {
        console.log('', e.data);
    }, false);

    work.postMessage(localStorage.getItem('dados'));
 
    work.onmessage = function (e) {
        alert(e.data);
    };
}