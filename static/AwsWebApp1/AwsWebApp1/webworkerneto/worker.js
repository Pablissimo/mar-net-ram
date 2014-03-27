onmessage = function (e) {
    postMessage("worker escreveu: " + e.data);
};