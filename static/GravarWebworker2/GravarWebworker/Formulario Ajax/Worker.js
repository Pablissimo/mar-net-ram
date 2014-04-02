onmessage = function (e) {
    var dados_string = e.data;

    var chave = dados_string.substring(0,1);
    var dado = dados_string.substring(2);

    var req = new XMLHttpRequest();
    req.open('POST', 'gravar.ashx', true);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    var var_gravar = "chave=" + chave + "&dado=" + dado;

    req.setRequestHeader('Content-Type', 'charset=utf-8');
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            self.postMessage({ 'Error': 'No', 'Message': 'Save Successful' });
        }
    }
    req.send(var_gravar);
}