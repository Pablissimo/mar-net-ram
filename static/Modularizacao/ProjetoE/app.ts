import E2 = require("js/E2");

export var ok = "";

window.onload = () => {
    var el = document.getElementById('content');
    var objeto = new E2.Circulo();

    el.innerHTML = objeto.calcularArea(3).toString();
};