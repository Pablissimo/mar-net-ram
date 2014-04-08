//$(function () { //metodo de disabilitar
//    $("#style2").attr("disabled", true);


//    $("#estilo").click(estilo1);
//    $("#estilo2").click(estilo2);

//})

//function estilo1() {
//    $("#style2").attr("disabled", true);
//    $("#style1").removeAttr("disabled");
//}

//function estilo2() {
//    $("#style1").attr("disabled", true);
//    $("#style2").removeAttr("disabled");
//}




//$(function () { //metodo que remove a linha de estilo através da função removejscssfile
//    removejscssfile("estilo2.css", "css"); //remove all occurences of "somescript.js" on page


//    $("#estilo").click(estilo1);
//    $("#estilo2").click(estilo2);

//})

//function estilo1() {

//    removejscssfile("estilo2.css", "css"); //remove all occurences of "somescript.js" on page
//    $("head").append("<link rel='stylesheet' type='text/css' href='estilo.css' id='style1'>");
//}

//function estilo2() {
//    removejscssfile("estilo.css", "css"); //remove all occurences of "somescript.js" on page
//    $("head").append("<link rel='stylesheet' type='text/css' href='estilo2.css' id='style1'>");
//}


//function removejscssfile(filename, filetype) {
//    var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none" //determine element type to create nodelist from
//    var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none" //determine corresponding attribute to test for
//    var allsuspects = document.getElementsByTagName(targetelement)
//    for (var i = allsuspects.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
//        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
//            allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
//    }
//}


$(function () {  //metodo de disabilitar
    $("#style2").attr("disabled", true);


    $("#estilo").click(estilo1);
    $("#estilo2").click(estilo2);

})

function estilo1() {
    $("#style2").attr("disabled", true);
    $("#style1").removeAttr("disabled");
}

function estilo2() {
    $("#style1").attr("disabled", true);
    $("#style2").removeAttr("disabled");
}