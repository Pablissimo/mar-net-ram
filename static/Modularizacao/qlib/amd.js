var modules = modules || {};
var modules_info = modules_info || {};

var timeout_load_module;

function q_require(module_name, after_initialize) {
    if (typeof module_name !== 'string')
        throw 'Require só suporta um módulo';

    var mod = modules[module_name];
    var modinfo = modules_info[module_name];

    if (typeof mod === "undefined") {
        curr_module_name = module_name;
        var modulo_exports = {};
        modules[module_name] = modulo_exports;
        modinfo = { name: module_name, exports: modulo_exports, dependencias: null, func: null, inicializado: false, callbacks: [], try_init_count: 0};
        modules_info[module_name] = modinfo;
        IncludeJSSRC(modinfo);
    }

    if (typeof after_initialize !== "undefined") {
        if (modinfo.inicializado)
            after_initialize()
        else
            modinfo.callbacks.push(after_initialize);
    }
}

function define(module_name, dependencias, modulo_func) {

    if ((typeof module_name !== 'string') || (typeof dependencias !== 'object') || (typeof modulo_func !== 'function'))
        throw 'Compilador Typescript não tem a adaptação para AMD';

    var modinfo=modules_info[module_name];
    if (typeof modinfo === 'undefined')
        throw 'O módulo '+module_name+' está sendo usado de maneira errada';

    modinfo.dependencias = dependencias;
    modinfo.func = modulo_func;
    var argumentos = [];

    agenda_inicializacao_modulos();
    for (var i = 0; i < dependencias.length; i++) {
        if (dependencias[i] != 'require' && dependencias[i] != "exports")
            q_require(dependencias[i]);
    }

}

function agenda_inicializacao_modulos() {
    if (timeout_load_module)
        clearTimeout(timeout_load_module);
    timeout_load_module = setTimeout(inicializacao_modulos, 500);
}

function inicializacao_modulos() {
    for (var module in modules_info) {
        var info = modules_info[module];
        if (!inicia_modulo(info)) {
            agenda_inicializacao_modulos();
            break;
        }
    }
}

function inicia_modulo(info) {

    var argumentos = [];

    if (info.dependencias == null) {
        if (info.try_init_count > 10)
            throw ("O módulo " + info.name + " não pôde ser iniciado.");
        info.try_init_count++;
        return false;
    }

    for (var i = 0; i < info.dependencias.length; i++) {
        var depname = info.dependencias[i];
        if (depname == 'require')
            argumentos.push(q_require);
        else if (depname == "exports")
            argumentos.push(info.exports);
        else {
            var depinfo = modules_info[depname];
            if (!inicia_modulo(depinfo))
                return false;
            argumentos.push(depinfo.exports);
        }
    }
    if (!info.inicializado) {
        info.func.apply(info.func, argumentos);
        for (var i = 0; i < info.callbacks.length; i++)
            (function (idx) {
                setTimeout(function () {
                    info.callbacks[idx](info.exports);
                }, 1);
            })(i);
        info.inicializado = true;
    }
    return true;
}

function IncludeJSSRC(modinfo) {
    var fileUrl = modinfo.name;
    var qualiom_module = fileUrl.substring(0, 3) == '../';
    if (qualiom_module)
        fileUrl += '.js';
    if (typeof window === "undefined") {
        var r = require(fileUrl);
        if (!qualiom_module) {
            modinfo.inicializado = true;
            modinfo.exports = r;
            modinfo.dependencias = [];
            agenda_inicializacao_modulos();
        }
    }
    else {
        var oScript = document.createElement("script");
        oScript.language = "javascript";
        oScript.type = "text/javascript";
        oScript.defer = true;
        oScript.id = sId;
        oScript.src = fileUrl;
        document.body.appendChild(oScript);
    }
}

if (typeof global !== "undefined") {
    global.define = define;
    global.q_require = q_require;
}

if (typeof exports !== "undefined") {
    exports['require'] = q_require;
}

if (typeof window !== "undefined") {
    window.require = q_require;
    window.q_require = q_require;
    window.define = define;
    window.onload = function () {
        var data_main_ok = false;
        var scripts = document.body.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            var script = scripts[i];
            if (script.getAttribute('src').indexOf('qualiom_require.js') >= 0) {
                var data_main = script.getAttribute('data-main');
                require(data_main);
                data_main_ok = true;
            }
        }
        if (!data_main_ok)
            throw "Faltou data-main na inclusao do módulo"
        var oHead = document.getElementsByTagName('HEAD').item(0);
    }
}