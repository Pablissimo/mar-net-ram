self.onmessage = function (event) {
    var num_workers = 4; // Total de Workers a serem chamados
    var pending_workers = num_workers;

    for (var i = 0; i < num_workers; i++) {
        var worker = new Worker('subworker.js');
        wortker.postMessage(event.data);

        worker.onmessage = function (event) {
            var str;
            str += event.data;
            pending_workers -= 1;

            if (pending_workers == 0) {
                self.postMessage(str);
            }

        }
    }
    work.onmessage = function (e) {
        alert(e.data);
    };
}