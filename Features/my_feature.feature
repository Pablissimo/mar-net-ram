Feature: Cadastro de produtos
  As manter a lista atualizada
  I want usuário
  So poder adicionar, remover e alterar produtos da lista
  
	Scenario: Listar produtos existentes
	  Given que eu quero acessar a Lista
	  When entrar no programa de Cadastro de Produto
	  Then a Lista atual deverá ser mostrada
	  And um Produto sem nome deverá ser adicionado automaticamente ao final da lista para possibilitar Cadastrar um novo Produto      
  
	Scenario: Cadastrar um novo Produto
	  Given que eu quero cadastrar um <Produto>
	  When eu selecionar o <Produto> cujo nome está em branco
	  And digitar o nome do <Produto> que quero cadastrar
	  And o nome do <Produto> estiver válido e não estiver em branco
	  Then o <Produto> será automaticamente adicionado à Lista

	Scenario: Modificar um <Produto>
	  Given que eu quero alterar o nome do <Produto>
	  When eu selecionar o <Produto>
	  And modificar seu nome 
	  And o nome do <Produto> estiver válido
	  Then a modificação no <Produto> será automaticamente gravada na Lista

	Scenario: Apagar um <Produto>
	  Given que eu quero remover um <Produto>
	  When eu selecionar o <Produto>
	  And eu clicar no botão remover
	  And confirmar
	  Then o <Produto> será removido da Lista

Feature: Trabalhar off-line
    As cada <operação> de algum <Produto> da <Lista>
	  Exemplos de <Lista>:
	    | Lista  | Produto |
	    | Almoço | Arroz   | 
	    | Almoço | Feijão  | 
	    | Almoço | Oleo    |	 	
	    | Lanche | Bolacha |
	    | Lanche | Leite   |
	  Exemplos de <operação>:
	    | operação  | Lista  | Produto(antes) | Produto(depois) |
	    | adicionar | Almoço |                | Macarrão        |
	    | apagar    | Almoço | Oleo           |                 |
	    | modificar | Almoço | Feijão         | Feijão Preto    |
	    	  
	I want usuário,
	So que algumas delas possam ser feitas, mesmo se não houver internet disponível

    Scenario: off-line
	  Given a internet não está disponível	  
	  When for feita alguma <operação> 
	  Then a <operação> se tornará uma <operação pendente> do sistema
	  And atualizar as informações que precisam ser mantidas no navegador para permitir acesso off-line

    Scenario: on-line
	  Given a internet está disponível	  
	  When for feita alguma <operação> 
	  Then o sistema deve <Sincronizar> cada <operação pendente>
	  And <Sincronizar> esta <operação>
	  And atualizar as informações que precisam ser mantidas no navegador para permitir acesso off-line

Feature: Sincronizar
    As permitir trabalhar off-line
	I want usuário
	So receber as modificações de outros usuários
	And que minhas modificações feitas em off-line sejam enviadas para o servidor

	Scenario: Geral
	  Given que eu fiz alguma <operação> enquanto estava off-line
	  When eu ficar online
	  And ou quando optar por sincronizar agora
	  And ou se houver alguma programação automatica
	  Then mesclar cada <operação feita por outros usuarios> com cada <operação> que fiz
	  And se houver conflitos, encaminhar para resolução de conflitos,
	  And enviar cada <operação> que fiz para o servidor

Feature: Resolução de conflitos
    As permitir trabalhar off-line
	I want usuário,
	So que conflitos entre cada <operação> minha e cada <operação feita por outros usuários> possam ser resolvidos
	
	Scenario: Há conflitos
	  Given que eu fiz alguma <operação> que gerou conflitos
	  When eu acessar o sistema 
	  Then preciso escolher entre minhas modificações e as modificações de outros usuarios
	  And ter opção de alterar a informação que gerou o conflito
	  And a <operação de resolução do conflito> poderá ser trabalhada on-line ou off-line
	
Feature: Edição concomitante
    As cada <operação> feita em algum <Produto> da <Lista>
	I want usuário,
	So que minhas modificações sejam enviadas o mais rápido possível para outros usuários
	And que modificações de outros usuários me sejam mostradas o mais rápido possível

    Scenario: Eu modifico a <Lista>
	  Given que eu modifiquei um <Produto>
	  When a <operação> for sincronizada com o servidor
	  Then a <operação> deverá ser enviada a todos os usuários que estão acessando essa lista
	  And a tela desses usuários deve ser atualizada

    Scenario: Outro usuário a <Lista>
	  Given que outro usuário modificou um <Produto> da lista que estou acessando
	  When a <operação> for sincronizada com o servidor
	  Then a <operação> deverá também ser atualizada na minha tela.