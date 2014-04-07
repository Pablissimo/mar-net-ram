$(function()
{
    $('.alternativo').click(temaAlternativo);
    $('.verde').click(temaVerde);
    $('.roxo').click(temaRoxo);
    $('.vermelho').click(temaVermelho);
    $('.padrao').click(temaDefault);
})


function temaRoxo()
{
    removeTema();
    $('.roxo').addClass('roxoActive');
    $('body').css({
        background: "rgba(91, 21, 104, 1)"
    });
}
function temaVerde()
{
    removeTema();
    $('.verde').addClass('verdeActive');
    $('body').css({
        background: "#186915"
    });
}
function temaVermelho()
{
    removeTema();
    $('.vermelho').addClass('vermelhoActive');
    $('body').css({
        background: "#8e0404"
    });
}
function temaDefault()
{
    removeTema();
    $('.padrao').addClass('defaultActive');
    $('body').css({
        background: "#003862"
    });
}


function removeTema()
{
    $('.verde').removeClass('verdeActive');
    $('.roxo').removeClass('roxoActive');
    $('.vermelho').removeClass('vermelhoActive');
    $('.padrao').removeClass('defaultActive');
}

function temaAlternativo() {
    removeTema();
    $('.alternativo').addClass('alternativoActive');
}