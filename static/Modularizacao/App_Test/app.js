 // adaptação qualiom 
define("../App_Test/app",["require", "exports", "../ProjetoA/A"], function(require, exports, A) {
    function valor() {
        var html = 'app.ts - iniciado com sucesso<br>';

        var a = new A.ClasseA();
        html = html + a.hola();
        return html;
    }
    exports.valor = valor;
    ;
});
//# sourceMappingURL=app.js.map
