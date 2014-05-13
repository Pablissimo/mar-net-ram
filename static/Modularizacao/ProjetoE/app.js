 // adaptação qualiom 
define("app",["require", "exports", "js/E2"], function(require, exports, E2) {
    exports.ok = "";

    window.onload = function () {
        var el = document.getElementById('content');
        var objeto = new E2.Circulo();

        el.innerHTML = objeto.calcularArea(3).toString();
    };
});
//# sourceMappingURL=app.js.map
