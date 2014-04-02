onmessage = function (e) {
    var dados_string = e.data;

    var chave = dados_string.substring(0,1);
    var dado = dados_string.substring(2);
    var req = new XMLHttpRequest();
    req.open('GET', 'PersistirDynamoDB.ashx?action=SavePerson', false);

    req.setRequestHeader('Content-Type', 'application/json;  charset=utf-8');
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            self.postMessage({ 'Error': 'No', 'Message': 'Save Successful' });
        }
    }
    req.send(dado);
    req.send(chave);


}