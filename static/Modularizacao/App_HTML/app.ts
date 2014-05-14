
//import E2 = require("../ProjetoE/E2");

 export function inicia(){
     var el = document.getElementById('content');

     var html = 'app.ts - iniciado com sucesso <br';

  //   var circulo = new E2.Circulo(11.2);
    // html = html + 'e2.circulo = ' + circulo.calcularArea().toString()+"<br>";

     el.innerHTML = html;
 };


inicia();