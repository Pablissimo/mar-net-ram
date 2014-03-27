var count = 0;
onconnect = function (e) {
    count += 1;
    var port = e.ports[0];
    port.postMessage('Hello World!' + count);
    port.onmessage = function (e) {
        port.postMessage('pong');
    }
}