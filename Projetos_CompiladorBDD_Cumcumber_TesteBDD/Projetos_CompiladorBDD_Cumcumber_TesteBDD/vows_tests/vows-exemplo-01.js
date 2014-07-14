    // division-by-zero-test.js

//» A Suite é um objeto que pode ter ou não lotes, e pode ser executada ou exportada. 
//» Um lote é um objeto literal, o que representa uma estrutura de contextos aninhados. 
//» Um contexto é um objeto com um tópico opcional, pode ter ou não lotes votos e zero ou mais sub-contextos. 
//» Um tópico é um valor ou uma função que pode executar código assíncrono. 
//» Um voto é uma função que recebe o tópico como um argumento, e corre afirmações nele.

var vows = require('vows'),
    assert = require('assert');

    //Suites de teste em vows são a maior unidade de testes. 

var suite = vows.describe('Teste Pilha');  //Suites de teste são criados com vows.describe .

suite.addBatch({ //Os testes são adicionados a suites em lotes. Isto é feito com o método addBatch.

    //Contexts são executados em paralelo, eles são puramente assíncronos. 
    //A ordem em que eles finalizam é portanto indefinidas.
    //Contexts usualmente contém tópios e vows (votos), que combinados definem seu teste.

    'Quando a Pilha for criada': { //context --> Contexto de testes.
        topic: function () { return new Pilha() },

        'Então ela estará vazia': function (topic) { //context --> Contexto de testes.
            assert.equal(topic, 0);
        },
        'Quando elemento é adicionado na Pilha': { //context --> Contexto de testes.
            topic: function () { return 1 },

            'Então este elemento irá para o topo da Pilha': function (topic) { //context --> Contexto de testes.
                assert.equal(topic, 1);
            }
        }
    }
}).run(); // Run it