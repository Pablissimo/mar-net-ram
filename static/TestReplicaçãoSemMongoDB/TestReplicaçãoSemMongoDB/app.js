
var qdb = require("./qualiomdb.js")

var ClasseAplicacao=function()
{

    var self=this;
    
    self.teste_caso_1=function()
    {
        var A = new qdb.QualiomDB('A');
        var B = new qdb.QualiomDB('B');
	
        //1
        A.adicionar('um');
        A.adicionar('dois');
        A.adicionar('tres');
	
        //2
        B.adicionar('um');
        B.adicionar('dois');
        B.adicionar('tres');
        B.adicionar('quatro');


        //3
        A.deletar('A1');
        A.alterar(2, 'três');
	
        //4
        B.alterar(2, 'três');
	
        // sync
        A.sync();
        B.sync();
	
        A.listadados(A.db.length);
        B.listadados(B.db.length);
	
    };
};

var app=new ClasseAplicacao();

app.teste_caso_1();