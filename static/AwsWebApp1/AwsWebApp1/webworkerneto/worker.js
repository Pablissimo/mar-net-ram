//onmessage = function (e) {

    /*$.ajax({
        type: "GET",
        url: "gravar.ashx",
        data: { 'chave': '3', 'dados': e.data },
        success: function () {
            postMessage("Sucesso");
        }
    });*/

self.addEventListener('message', function (e) {

    var dados = e.data;
    var chave = "3";
        var req = new XMLHttpRequest();
        req.open('GET', 'gravar.ashx?action=SavePerson', false);

        req.setRequestHeader('Content-Type', 'application/json;  charset=utf-8');
        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                self.postMessage({ 'Error': 'No', 'Message': 'Save Successful' });
            }
        }
        req.send(dados);
        req.send(chave);
    });





   // $.get("/gravar.asxh?action=SavePerson", e.data, function(){})