import bdd = require("./bdd");
import comp = require("./CompiladorBDD");

bdd.especificacao('BDD_Compilador_de_espeficicacao', function() {
    var topic: comp.BDD_Compilador_de_espeficicacao;
    //Objetivo: Transformar um texto de espeficicação BDD em um objeto javascript 
    var Exemplo1 =
        {
            Texto: "Especificação: Pilha\r\n" +
            "Quando a pilha < P> for criada\r\n"+
            "Então ela deverá estar vazia",
        }
}
);

/*

Exemplo 1:
    Texto="""
	
	
	 
	"""
	JSON="""
	{specifications: [
	  {
	    title:"Pilha", 
	    events:[
		  conditions:
		  [
		    "Quando a pilha <P> for criada"
		  ],
		  ensures:
		  [
		    "Então ela deverá estar vazia"		
		  ]
	    ]
	  }
	  ]}
	"""

	Quando compilar o documento
	  Então cada linha deverá analizada por [[BDD_Compilador_de_espeficicacao_linha]]
	  E se a linha linha for inválida deve-se mostrar um erro indicando o número da linha

Especificação: BDD_Compilador_de_espeficicacao_linha
    Quando a linha começar com "#"
      Então a linha deve ser considerada um comentário
      E a linha deverá ser ignorada
	  Mas a linha será válida

    Quando a linha estiver em branco
      Então a linha deverá ser ignorada
	  Mas a linha será válida
  
	Quando a linha começar com a palavra "Especificação:"
	  Então o resto da linha deve ser a <Especificação>
	  E deve-se considerar essa <Especificação> como a <Especificação atual>
 	  E <evento atual> deverá ficar nulo
 	  E <garantia atual> deverá ficar nula
      E deve-se registrar a <Especificação> numa lista de <specifications>
	  E a linha será válida
	  
	Quando a linha começar com a palavra "Quando"
	  Então a linha deverá ser considerada uma <condição> do <evento>
	  E o <evento> deverá ser adicionado <Especificação atual>.<eventos>
	  E esse <evento> será o <evento atual>
	  E a <condição> deverá ser adicionada <evento atual>.<conditions>
	  E <garantia atual> deverá ficar nula
	  E a linha será válida
	  
	Quando a linha começar com a palavra "Então"
	  E o <evento atual> for valido
	  Então a linha deverá ser considerada uma <garantia> do <evento>
	  E a <garantia> deverá ser registrada no <evento atual>.<ensures>
	  E essa <garantia> será a <garantia atual>
	  E a linha será válida
	  
	Quando a linha começar com a palavra "E"
	  E o <evento atual> for valido
	  E <garantia atual> atual for nula
	  Então a linha deverá ser considerada como uma <condição> que continua o <evento atual>
	  E a <condição> deverá ser adicionado <Especificação atual>.<events>.<conditions>
	  E a linha será válida
	  
	Quando a linha começar com a palavra "E"
	  E o <evento atual> for valido
	  E houver <garantia atual> 
	  Então a linha deverá ser considerada como uma <garantia> que continua a <garantia atual>
	  E a <garantia> deverá ser registrada no <evento atual>.<ensures>
	  E a linha será válida
*/