// UnitTest.js 
var assert = require('assert');
var pubsub = require('../PubSub.js');
var jornal = require('../Jornal.js');



exports['Case_01'] = function (test) {

    var pub = new pubsub.PubSub();

    var atual = pub.publish("Mensagem 1");
    //var esperado = ;



    assert.ok(true, "This shouldn't fail");
}

exports['Case_02'] = function (test) {


    assert.ok(1 === 1, "This shouldn't fail");
    assert.ok(false, "This should fail");
}