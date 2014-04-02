function worker() {
    var message = event.data;
    var result = message + ' Testando...';
    postMessage(result);
}