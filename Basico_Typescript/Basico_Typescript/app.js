console.log('Hello world');

//criação de Variavel tipo Boolean
var tipo_Boolean = true;

//criação de Variavel tipo numerido
var tipo_numerico = 6;

//criação de Variavel tipo String
var tipo_string = 'neto';

//criação de Variavel tipo Array
var tipo_array = [1, 0, 10];
tipo_array.add1();

//criação de Variavel tipo Enum
var Cores;
(function (Cores) {
    Cores[Cores["Vermelho"] = 0] = "Vermelho";
    Cores[Cores["Amarelo"] = 1] = "Amarelo";
    Cores[Cores["Azul"] = 2] = "Azul";
})(Cores || (Cores = {}));
;
var c = 1 /* Amarelo */;

//Criação de Classes
var Matriz = (function () {
    function Matriz(nome) {
        this.contador = 0;
        this.db = [];
        this.nome_banco = nome;
    }
    return Matriz;
})();

function adicionar(dado) {
    var recebe_dado = dado;
}
//# sourceMappingURL=app.js.map
