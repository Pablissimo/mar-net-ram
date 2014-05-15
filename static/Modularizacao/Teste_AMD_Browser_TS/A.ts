import mod_B = require('../Teste_AMD_Browser_TS/B');
import mod_D = require('../Teste_AMD_Browser_TS/D');

if (mod_B.OK != "OK")
    alert("ERRO NO B");
if (mod_D.OK != "OK")
    alert("ERROx NO D");

export var A = "Ossud";
export var OK = "OsssK";

document.write('Azdd');
