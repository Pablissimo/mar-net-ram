var modules = modules || {};
var modules_info = modules_info || {};

var timeout_load_module;

function require(module_name, callback) {

    if (typeof modules[module_name] === "undefined") {
        curr_module_name = module_name;

        var modulo_exports = {};
        modules[module_name] = modulo_exports;
        modules_info[module_name] = { name: module_name, exports: modulo_exports, dependencias: null, func: null, inicializado: false };

        var arq_modulo = "js/" + module_name + ".js";
        AjaxPage("js_mod_" + module_name,  arq_modulo, "curr_module_name='"+module_name+"';",
            function () {
                if (callback)
                    callback(module_name, modulo_exports);
            });
    }
}

function define(dependencias, modulo_func) {

    var module_name = curr_module_name;
    modules_info[module_name].dependencias = dependencias;
    modules_info[module_name].func = modulo_func;
    var argumentos = [];

    agenda_inicializacao_modulos();
    for (var i = 0; i < dependencias.length; i++) {
        if (dependencias[i] != 'require' && dependencias[i] != "exports")
            require(dependencias[i]);
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
        inicia_modulo(info);
    }
}

function inicia_modulo(info) {

    var argumentos = [];

    for (var i = 0; i < info.dependencias.length; i++) {
        var depname = info.dependencias[i];
        if (depname == 'require')
            argumentos.push(require);
        else if (depname == "exports")
            argumentos.push(info.exports);
        else {
            var depinfo = modules_info[depname];
            inicia_modulo(depinfo);
            argumentos.push(depinfo.exports);
        }
    }
    if (!info.inicializado) {
        info.func.apply(info.func, argumentos);
        info.inicializado = true;
    }
}

function load_dependence(dependencias, index, argumentos, modulo_func, modulo_exports) {
    if (index < dependencias.length) {
        var nome_modulo_dependencia = dependencias[index];

        var modulo_dependencia = modules[nome_modulo_dependencia] || (modules[nome_modulo_dependencia] = {});
        if (nome_modulo_dependencia == "require") {
            argumentos.push(require);
            load_dependence(dependencias, index + 1, argumentos, modulo_func, modulo_exports);
        }
        else if (nome_modulo_dependencia == "exports") {
            argumentos.push(modulo_exports);
            load_dependence(dependencias, index + 1, argumentos, modulo_func, modulo_exports);
        }
        else if (typeof modulo_dependencia === 'undefined') {
            require(nome_modulo_dependencia,
                function () {
                    argumentos.push(modulo_dependencia);
                    load_dependence(dependencias, index + 1, argumentos, modulo_func, modulo_exports);
                }
                );
        }
        else {
            argumentos.push(modulo_dependencia); // ja fora carregado
            load_dependence(dependencias, index + 1, argumentos, modulo_func, modulo_exports);
        }
    }
    else {
        modulo_func.apply(modulo_func, argumentos);
    }
}





function GetHttpRequest() {
    if (window.XMLHttpRequest) // Gecko
        return new XMLHttpRequest();
    else if (window.ActiveXObject) // IE
        return new ActiveXObject("MsXml2.XmlHttp");
}

function AjaxPage(sId, url, prefix_source, callback) {
    var oXmlHttp = GetHttpRequest();
    oXmlHttp.onreadystatechange = oXmlHttp.OnReadyStateChange = function () {
        if (oXmlHttp.readyState == 4) {
            if (oXmlHttp.status == 200 || oXmlHttp.status == 304) {
                IncludeJS(sId, url, prefix_source + oXmlHttp.responseText, callback);
            }
            else {
                alert('XML request error: ' + oXmlHttp.statusText + ' (' + oXmlHttp.status + ')');
            }
        }
    }
    oXmlHttp.open('GET', url, true);
    oXmlHttp.send(null);
}
function IncludeJS(sId, fileUrl, source, callback) {
    if ((source != null) && (!document.getElementById(sId))) {
        var oHead = document.getElementsByTagName('HEAD').item(0);
        var oScript = document.createElement("script");
        oScript.language = "javascript";
        oScript.type = "text/javascript";
        oScript.id = sId;
        oScript.defer = true;
        oScript.text = source;
        oHead.appendChild(oScript);
        window.setTimeout(callback, 1);
    }
}

window.require = require;
window.define = define;
