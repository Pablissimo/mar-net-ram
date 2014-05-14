
import E2 = require("../ProjetoE/E2");


window.onload = () => {
    var el = document.getElementById('content');

    var circulo = new E2.Circulo(10);

    el.innerText=('e2.circulo = ' + circulo.calcularArea().toString());
}; 