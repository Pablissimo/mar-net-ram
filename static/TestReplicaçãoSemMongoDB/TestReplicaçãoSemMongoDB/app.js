
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
        A.alterar('A3', 'três');
	
        //4
        B.alterar('B3', 'trêssssssssssssssssssssssssssssssss');
	
        // sync
        A.sync();
        B.sync();
        A.sync();
	
    };
};

var app=new ClasseAplicacao();

app.teste_caso_1();