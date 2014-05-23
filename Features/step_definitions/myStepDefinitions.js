You can implement step definitions for undefined steps with these snippets:

this.Given(/^que eu quero acessar a Lista$/, function (callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.When(/^entrar no programa de Cadastro de Produto$/, function (callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^a Lista atual deverá ser mostrada$/, function (callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^um Produto sem nome deverá ser adicionado automaticamente ao final d
a lista para possibilitar Cadastrar um novo Produto$/, function (callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Given(/^que eu quero cadastrar um (.*)$/, function (Produto, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.When(/^eu selecionar o (.*) cujo nome está em branco$/, function (Produto,
callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.When(/^digitar o nome do (.*) que quero cadastrar$/, function (Produto, cal
lback) {
  assert.ok("1");
});

this.When(/^o nome do (.*) estiver válido$/, function (Produto, callback) {
  assert.ok("2");
});

this.Then(/^o (.*) será automaticamente adicionado à Lista$/, function (Produto,
 callback) {
   assert.ok("3");
});

this.Given(/^que eu quero alterar o nome do (.*)$/, function (Produto, callback)
 {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.When(/^eu selecionar o (.*)$/, function (Produto, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.When(/^modificar seu nome$/, function (callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^a modificação no (.*) será automaticamente gravada na Lista$/, funct
ion (Produto, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Given(/^que eu quero remover um (.*)$/, function (Produto, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.When(/^eu clicar no botão remover$/, function (callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.When(/^confirmar$/, function (callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^o (.*) será removido da Lista$/, function (Produto, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Given(/^a internet não está disponível$/, function (callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.When(/^for feita alguma (.*)$/, function (operação, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^a (.*) se tornará uma (.*) do sistema$/, function (operação, operaçã
oPendente, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^atualizar as informações que precisam ser mantidas no navegador para
 permitir acesso off\-line$/, function (callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Given(/^a internet está disponível$/, function (callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^o sistema deve (.*) cada (.*)$/, function (Sincronizar, operaçãoPend
ente, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^(.*) esta (.*)$/, function (Sincronizar, operação, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Given(/^que eu fiz alguma (.*) enquanto estava off\-line$/, function (opera
ção, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.When(/^eu ficar online$/, function (callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.When(/^ou quando optar por sincronizar agora$/, function (callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.When(/^ou se houver alguma programação automatica$/, function (callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^mesclar cada (.*) com cada (.*) que fiz$/, function (operaçãoFeitaPo
rOutrosUsuarios, operação, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^se houver conflitos, encaminhar para resolução de conflitos,$/, func
tion (callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^enviar cada (.*) que fiz para o servidor$/, function (operação, call
back) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Given(/^que eu fiz alguma (.*) que gerou conflitos$/, function (operação, c
allback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.When(/^eu acessar o sistema$/, function (callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^preciso escolher entre minhas modificações e as modificações de outr
os usuarios$/, function (callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^ter opção de alterar a informação que gerou o conflito$/, function (
callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^a (.*) poderá ser trabalhada on\-line ou off\-line$/, function (oper
açãoDeResoluçãoDoConflito, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Given(/^que eu modifiquei um (.*)$/, function (Produto, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.When(/^a (.*) for sincronizada com o servidor$/, function (operação, callba
ck) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^a (.*) deverá ser enviada a todos os usuários que estão acessando es
sa lista$/, function (operação, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^a tela desses usuários deve ser atualizada$/, function (callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Given(/^que outro usuário modificou um (.*) da lista que estou acessando$/,
 function (Produto, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});

this.Then(/^a (.*) deverá também ser atualizada na minha tela\.$/, function (ope
ração, callback) {
  // express the regexp above with the code you wish you had
  callback.pending();
});