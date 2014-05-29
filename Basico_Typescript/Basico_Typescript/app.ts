console.log('Hello world');

//criação de Variavel tipo Boolean
var tipo_Boolean: boolean = true;


//criação de Variavel tipo numerido
var tipo_numerico: number = 6;


//criação de Variavel tipo String
var tipo_string: string = 'neto';

//criação de Variavel tipo Array
var tipo_array: number[] = [1, 0, 10];
tipo_array.add1();

//criação de Variavel tipo Enum
enum Cores { Vermelho, Amarelo, Azul };
var c: Cores = Cores.Amarelo;

//Criação de Classes
class Matriz {
    private contador: number = 0;
    db: string[] = [];
    nome_banco: string;
    constructor(nome: string) {
        this.nome_banco = nome;
    }
}

function adicionar(dado) {
    var recebe_dado = dado;
}