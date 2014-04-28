exports.Correio = (function () {
    function Correio() {
    }
    var listaMensagem = new Array();


    Correio.prototype.enviaMsg = function (remetente, destinatario, mensagem) {
        listaMensagem.push({ remetente: remetente, destinatario: destinatario, mensagem: mensagem });
    };
    
    Correio.prototype.listaMsg = function (destinatario) {
        var resultado = new Array();
        var outrosdestinarios = new Array();
        
        for (var index in listaMensagem) {
            var msg=listaMensagem[index];
            if (msg.destinatario == destinatario)
                resultado.push(msg);
            else
                outrosdestinarios.push(msg);
        }

        listaMensagem = outrosdestinarios;
        return resultado;
    };


    return Correio;
})();