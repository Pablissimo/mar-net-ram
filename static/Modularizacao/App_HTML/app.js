<<<<<<< HEAD
﻿//import E2 = require("../ProjetoE/E2");
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
=======
﻿ // adaptação qualiom 
define("../App_HTML/app",["require", "exports", "../ProjetoA/A"], function(require, exports, A) {
    function inicia() {
        var el = document.getElementById('content');

        var html = 'app.ts - iniciado com sucesso<br>';

        var a = new A.ClasseA();

        html = html + a.hola();

        el.innerHTML = html;
    }
    exports.inicia = inicia;
    ;

    exports.inicia();
>>>>>>> 8a7f72ae91cc341f79ae8d6ffa71b5d6cad2bb67
});
//# sourceMappingURL=app.js.map
