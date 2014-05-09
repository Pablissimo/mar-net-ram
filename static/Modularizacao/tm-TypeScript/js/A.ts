import mod_B = require('B');
import mod_D = require('D');

if (mod_B.OK != "OK")
    alert("ERRO NO B");
if (mod_D.OK != "OK")
    alert("ERROx NO D");

export var A = "OK";
export var OK = "OK";

document.write('A');
