onmessage = function (e) {
    postMessage("worker recebeu: " + e.data);
};