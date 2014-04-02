onmessage = function (e) {
    postMessage("chegou");
    
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