onmessage = function (e) {
    postMessage("chegou");
    self.addEventListener('message', function(e) {

        var dadosMessage = e.data;

        var chave = dadosMessage.substring(0, 1);
        var dados = dadosMessage.substring(2);

        var req = new XMLHttpRequest();
        req.open('GET', 'PersistirDynamoDB.ashx?action=SavePerson', false);

        req.setRequestHeader('Content-Type', 'application/json;  charset=utf-8');
        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                self.postMessage({ 'Error': 'No', 'Message': 'Save Successful' });
            }
        }
        req.send(dados);
        req.send(chave);
    });    
}