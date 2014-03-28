$(document).ready(function () {
    $("#btn_receber").click(function (event) {
        event.preventDefault();
        $.ajax({
            //pegando a url apartir do href do link
            url: $(this).attr("href"),
            type: 'GET',
            context: jQuery('#resultado'),
            success: function (data) {
                this.append(data);
            }
        });
    });

    $("#btn_enviar").click(function (event) {
        event.preventDefault();
        $.ajax({
            //pegando a url apartir da action do form
            url: $(this).parent("form").attr("action"),
            data: 'busca=' + $("#busca").val(),
            type: 'POST',
            context: jQuery('#resultado'),
            success: function (data) {
                this.append(data);
            }
        });
    });

});