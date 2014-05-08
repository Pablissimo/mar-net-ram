import mod_E = require('E');
export module A {
    if (mod_E.OK != "OK")
        alert("ERRO NO E");

    export var D = "OK";
    export var OK = "OK";

    document.write('D');
}