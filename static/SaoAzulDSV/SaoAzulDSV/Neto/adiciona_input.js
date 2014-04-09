//$(function (e) {
//    if (e.wich == 13 || e.keyCode == 13)
//        if (!i) {
//            var i = 0;
//            $("#div_input").append("<input id='dado" + i + "' class='dado' name='dado" + i + "' placeholder='Escreva aqui' />");
//            return;
//        }
//        //else
//        //    i++;
//        //    $("div_input").append("<input id='dado" + i + "' class='dado' name='dado" + i + "' placeholder='Escreva aqui' />");
   
//})
$(window).load(function () {
    for (i = 1; i < localStorage.getItem("contador") ; i++) {
        $("#div_input").append("<input id='dado" + i + "' class='dado' name='dado" + i + "' placeholder='Escreva aqui' /><br>");
    }
});

$(function () {
    var contador = localStorage.getItem("contador");
    if (!contador)
        contador = 1;
    add(contador);

    $("#btn").click(function () {add(contador++)});
})

function add(contar) {
    $("#div_input").append("<input id='dado" + contar + "' class='dado' name='dado" + contar + "' placeholder='Escreva aqui' /><br>");
    localStorage.setItem("contador", contar);
}