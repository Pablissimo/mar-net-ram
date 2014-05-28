import V = require("VCL/VCL");
export function start() {
    V.Application.initialize();

    V.Application.CurrencyDecimals = 2;
    V.Application.ApplicationBrandName = "Contoso LTD";
    V.Application.ApplicationTitle = "VCL.JS App";
    V.Application.MainPage = "PageHome";
    V.Application.AuthenticationRequired = false;

    //add application navigation bar here
    V.Application.addNavbarItem("Grid & charts", "", () => {
        V.Application.navigateToPage(V.Application.MainPage);
    });

    V.Application.addNavbarItem("Components", "", () => {
        V.Application.navigateToPage("PageComponents");
    });


    V.Application.addNavbarItem("Tree", "", () => {
        V.Application.navigateToPage("PageTree");
    });

    V.Application.addNavbarItem("Widgets", "", () => {
        V.Application.navigateToPage("PageWidgets");
    });

    V.Application.addNavbarItem("Maps", "", () => {
        V.Application.navigateToPage("PageMap");
    });


    V.Application.run();
}

