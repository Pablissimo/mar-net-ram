import A = require("../ProjetoA/A");

<<<<<<< HEAD
export var ok = 5;
 
window.onload = () => {
    var el = document.getElementById('content');
=======
 export function inicia(){
     var el = document.getElementById('content');
     
     var html = 'app.ts - iniciado com sucesso<br>';
>>>>>>> 8a7f72ae91cc341f79ae8d6ffa71b5d6cad2bb67

     var a = new A.ClasseA();

     html = html + a.hola();

     el.innerHTML = html;
 };


inicia();
