function Servidor() {
    somar = function (a, b) {
        Somar_servidor(a, b);
    }
}

function Somar_servidor(a, b) {
    return a + b;
}

module.exports = Servidor;