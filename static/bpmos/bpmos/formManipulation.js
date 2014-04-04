$(function()
{
    $('.default').ready(temaDefault);

    $('.verde').click(temaVerde);
    $('.roxo').click(temaRoxo);
    $('.vermelho').click(temaVermelho);
    $('.default').click(temaDefault);
})



function temaRoxo()
{
    removeTema();
    $('.roxo').addClass('roxoActive');
}

function temaVerde()
{
    removeTema();
    $('.verde').addClass('verdeActive');
}

function temaVermelho()
{
    removeTema();
    $('.vermelho').addClass('vermelhoActive');
}


function temaDefault()
{
    removeTema();
    $('.default').addClass('defaultActive');
}

function removeTema()
{
    $('.verde').removeClass('verdeActive');
    $('.roxo').removeClass('roxoActive');
    $('.vermelho').removeClass('vermelhoActive');
    $('.default').removeClass('defaultActive');
}