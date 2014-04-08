$(function ()
{
    //$("#style2").attr("disabled", true);

    $("#estilo").click(chamaEstilo);
    $("#estilo2").click(chamaEstilo2);

    removejscssfile("somescript.js", "js") //remove all occurences of "somescript.js" on page
    removejscssfile("somestyle.css", "css") //remove all occurences "somestyle.css" on page

});

function chamaEstilo()
{
    //$("#style2").attr("disabled", true);
    //$("#style1").removeAttr("disabled");

}

function chamaEstilo2()
{
    //$("#style1").attr("disabled", true);
    //$("#style2").removeAttr("disabled");

}


function removejscssfile(filename, filetype) {
    var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none" //determine element type to create nodelist from
    var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none" //determine corresponding attribute to test for
    var allsuspects = document.getElementsByTagName(targetelement)
    for (var i = allsuspects.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
            allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
}

