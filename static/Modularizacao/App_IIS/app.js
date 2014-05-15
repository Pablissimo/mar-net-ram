 // adaptação qualiom 
define("../App_IIS/app",["require", "exports", "../ProjetoA/A"], function(require, exports, A) {
    function inicia() {
        var el = document.getElementById('content');

        var html = 'app.ts - iniciado com sucesso<br>';

        var a = new A.ClasseA();

        //Edição feita pela Ferramenta de Desenvolvimento Chrome.....
        html = html + a.hola();

        el.innerHTML = html;
    }
    exports.inicia = inicia;
    ;

    exports.inicia();
});
//# sourceMappingURL=app.js.map
