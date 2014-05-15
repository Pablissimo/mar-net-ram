import A = require("../ProjetoA/A");

 export function inicia(){
     var el = document.getElementById('content');
     
     var html = 'app.ts - iniciado com sucesso<br>';

     var a = new A.ClasseA();
     
     //Edição feita pela Ferramenta de Desenvolvimento Chrome.....

     html = html + a.hola();

     el.innerHTML = html;
 };


inicia();