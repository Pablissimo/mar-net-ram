$(function ()
{
    $("#style2").attr("disabled", true);

    $("#estilo").click(chamaEstilo);
    $("#estilo2").click(chamaEstilo2);
});

function chamaEstilo()
{
    $("#style2").attr("disabled", true);
    $("#style1").removeAttr("disabled");
}

function chamaEstilo2()
{
    $("#style1").attr("disabled", true);
    $("#style2").removeAttr("disabled");
}
