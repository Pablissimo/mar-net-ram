$(window).load(function () {
    for (i = 1; i < localStorage.getItem("contador") ; i++) {
        $("#input").append("<input id='dado" + i + "' class='dado' name='dado" + i + "' placeholder='dado' /><br>");
    }
});

$(function () {
    var contador = localStorage.getItem("contador");
    if (!contador)
        contador = 1;
    add(contador);

    $("#btnAdd").click(function () { add(contador++) });
})
