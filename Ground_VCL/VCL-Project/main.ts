import V = require("VCL/VCL");
export function start() {
    V.Application.initialize();

    V.Application.CurrencyDecimals = 2;
    V.Application.ApplicationBrandName = "Contoso LTD";
    V.Application.ApplicationTitle = "VCL.JS App";
    V.Application.MainPage = "PageHome";
    V.Application.AuthenticationRequired = false;

    //add application navigation bar here
    var x = V.Application.addNavbarItem("Home", "icon-home icon-white", () => {
        V.Application.navigateToPage(V.Application.MainPage);
    });

    V.Application.run();
}

