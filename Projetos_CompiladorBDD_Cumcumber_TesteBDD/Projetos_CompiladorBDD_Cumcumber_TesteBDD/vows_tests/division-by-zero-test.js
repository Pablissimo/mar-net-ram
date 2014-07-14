    // division-by-zero-test.js

var vows = require('vows'),
    assert = require('assert');

    //Suites de teste em vows são a maior unidade de testes. 
   
var suite = vows.describe('Division by Zero');  //Suites de teste são criados com vows.describe .

   suite.addBatch({ //Os testes são adicionados a suites em lotes. Isto é feito com o método addBatch.
       
        //Contexts são executados em paralelo, eles são puramente assíncronos. 
        //A ordem em que eles finalizam é portanto indefinidas.
        //Contexts usualmente contém tópios e vows (votos), que combinados definem seu teste.

        'when dividing a number by zero': { //context --> Contesto de testes.
        topic: function () { return 42 / 0 },

        'we get Infinity': function (topic) { //context --> Contexto de testes.
            assert.equal(topic, Infinity);
        }
    },
    'but when dividing zero by zero': {  //context --> Contexto de testes.
        topic: function () { return 0 / 0 },

        'we get a value which': { //context --> Contexto de testes.
            'is not a number': function (topic) {
                assert.isNaN(topic);
            },
            'is not equal to itself': function (topic) { //context --> Contexto de testes.
                assert.notEqual(topic, topic);
            }
        }
    }
}).run(); // Run it