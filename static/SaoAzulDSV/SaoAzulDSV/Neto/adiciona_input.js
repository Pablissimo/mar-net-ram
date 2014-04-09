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
    var i = 0;
    for (i = 1; i <= localStorage.getItem("contador"); i++) {
        $("#div_input").append("<label>Mensagem"+i+"</label><input id='dado" +i + "' class='dado' name='dado" + i + "' placeholder='Escreva aqui' /><br>");
    }
});

$(function () {
    var contador = localStorage.getItem("contador");
    if (!contador) {
        contador = 1;
    add(contador);
    }

    $(document).keypress(function (e) {
        if (e.which == 13 && contador <10) {
            add(++contador);
            $("input").last().focus();
        }
    });

    $("#btt-remove").click(function () {
        if (contador > 1) {
            $(this).parents('input').remove();
            contador--;
            localStorage.setItem("contador", contador);
        }
    });    
})

function add(contar) {
    $("#div_input").append("<label>Mensagem"+contar+"</label><input id='dado" + contar + "' class='dado' name='dado" + contar + "' placeholder='Escreva aqui' /><br>");
    localStorage.setItem("contador", contar);
}
