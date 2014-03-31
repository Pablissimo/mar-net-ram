$(function () {
    $("#chave").blur(function () {
        localStorage.setItem('chavelocal', $("#chave").val());
    });
    if (localStorage.getItem('chavelocal')) {
        $("#chave").val(localStorage.getItem('chavelocal'));
    }
    $("#texto").blur(function () {
        localStorage.setItem('textolocal', $("#texto").val());
    });
    if (localStorage.getItem('textolocal')) {
        $("#texto").val(localStorage.getItem('textolocal'));
    } $
});

var texto = localStorage.getItem('textolocal');
var chave = localStorage.getItem('chavelocal');
var jason = JSON.parse(texto, chave);
alert(jason);