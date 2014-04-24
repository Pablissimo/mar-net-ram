
var qdb = require("./qualiomdb.js")

var ClasseAplicacao=function()
{

    var self=this;
    
    self.teste_caso_1=function()
    {
        var A = new qdb.QualiomDB('A');
        var B = new qdb.QualiomDB('B');
	
        //1
        A.add('um');
        A.add('dois');
        A.add('tres');
        
        //2
        B.add('um');
        B.add('dois');
        B.add('tres');
        B.add('quatro');


        //3
        A.delete(0);
        A.update(2, 'três');
	
        //4
        B.update(2, 'três');
	
        // sync
        A.sync();
        B.sync();
	
        A.listadados(A.db.length);
        B.listadados(B.db.length);
	
    };
};

var app=new ClasseAplicacao();

app.teste_caso_1();