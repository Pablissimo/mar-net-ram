//import E2 = require("../ProjetoE/E2");
 // adaptação qualiom 
define("app",["require", "exports"], function(require, exports) {
    exports.ok = 5;

    window.onload = function () {
        var el = document.getElementById('content');

        var text = 'ok<br>';

        //  var circulo = new E2.Circulo(10);
        // text = e2.circulo = ' + circulo.calcularArea().toString();
        el.innerHTML = text;
    };
});
//# sourceMappingURL=app.js.map
