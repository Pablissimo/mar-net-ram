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