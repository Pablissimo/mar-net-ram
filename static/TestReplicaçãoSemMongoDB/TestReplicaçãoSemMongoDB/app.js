#!/bin/env node

var qdb = require('./qualiomdb.js');

var ClasseAplicacao=function()
{

    var self=this;
    
    self.teste_caso_1=function()
    {
        A = new Array();
        B = new Array();
      
	
                //1
                A.push('um');
                A.adicionar('dois');
                A.adicionar('tres');
	
                //2
                B.adicionar('um');
                B.adicionar('dois');
                B.adicionar('tres');
                B.adicionar('quatro');
	
                //3
                A.excluir('A1');
                A.alterar('A3', 'três');
	
                //4
                B.alterar('B3', 'três');
	
                // sync
                A.sync();
                B.sync();
	
                A.listadados();
                B.listadados();
	
            });
        });
    };
};

var app=new ClasseAplicacao();

app.teste_caso_1();