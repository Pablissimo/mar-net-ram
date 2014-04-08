$(function black() {
    $("link[href=/Black theme.css]").attr("disabled", "disable");
    $("link[href=/CSSTest1.css]").attr("disabled", "disable");
    $('#btt-top').click(carregatheme);
})


function carregatheme() {
    $("link[href=./Black theme.css]").removeAttr("disabled");
}