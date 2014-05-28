import V = require("VCL/VCL");
import W = require("Widget");

export class PageWidgets extends V.TPage {
    constructor() {
        super();
        var widgetLoaded: number = 0;
        var widgets = new V.TWidgetGrid(this, "widgets");
        V.Application.createPage(W.Widget, [widgets, 'fun1']);
        V.Application.createPage(W.Widget, [widgets, 'fun2']);
        V.Application.createPage(W.Widget, [widgets, 'fun3']);
        V.Application.createPage(W.Widget, [widgets, 'fun4']);
        V.Application.createPage(W.Widget, [widgets, 'fun5']);
        V.Application.createPage(W.Widget, [widgets, 'fun6']);
        V.Application.createPage(W.Widget, [widgets, 'fun7']);
        V.Application.createPage(W.Widget, [widgets, 'fun8']);
        V.Application.createPage(W.Widget, [widgets, 'fun9']);
        V.Application.createPage(W.Widget, [widgets, 'fun10']);
    }

}


