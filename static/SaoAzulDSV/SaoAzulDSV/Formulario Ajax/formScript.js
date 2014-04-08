$(function ()
{
    $('.default').ready(temaDefault);
    $('#btt-top').click(black);
    $('#btt-bot').click(temaVerde);
    $('#btt-rigth').click(temaVermelho);
    $('#btt-left').click(temaAmarelo);
    $('#btt-reset').click(temaDefault);

    $('#resetPos').click(moveDefault);
    $('#trl-top').click(moveTop);
    $('#trl-rigth').click(moveRigth);
    $('#trl-bot').click(moveBot);
    $('#trl-left').click(moveLeft);

})

function temaDefault()
{
    removeTema();
    $('.default').addClass('defaultActive');
}

//function temaBlack()
//{
//    removeTema();
//    $('body').addClass('black');
//}

function temaVerde()
{
    removeTema();
    $('body').addClass('verde');
}

function temaVermelho()
{
    removeTema();
    $('body').addClass('vermelho');
}

function temaAmarelo() {
    removeTema();
    $('body').addClass('amarelo');
}

function removeTema()
{
    $('body').removeClass('verde');
    $('body').removeClass('black');
    $('body').removeClass('amarelo');
    $('body').removeClass('vermelho');
    $('body').removeClass('default');
}




function moveTop()
{
    $("#csstest").css({ marginTop: "-200px"});
}

function moveLeft()
{
    $("#csstest").css({ marginLeft: "-200px" });
}
function moveBot()
{
    var altura = $(window).height();
    altura = altura / 2 - 20;
    $("#csstest").css({ marginTop: altura+"px" });
}

function moveRigth()
{
    var largura = $(window).width();
    largura = largura / 2 - 20;
    $("#csstest").css({ marginLeft: largura + "px" });
}

function moveDefault()
{
    $("#csstest").css({ margin: "50px auto" });
}