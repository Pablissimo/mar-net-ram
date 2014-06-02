define(function (require, exports, module) {
    var Engine = require("famous/core/Engine");
    var Surface = require("famous/core/Surface");
    var Modifier = require("famous/core/Modifier");
    var ContainerSurface = require("famous/surfaces/ContainerSurface");
    var Scrollview = require("famous/views/Scrollview");

    function section() {
        var mainContext = Engine.createContext();

        var container = new ContainerSurface({
            classes: ['section']
        });

        var surfaces = [];
        var scrollview = new Scrollview();

        var aux;
        for (var i = 0; i < 6; i++) {
            aux = new Surface({
                size: [undefined, 50],
                content: ['SECTION ' + (i + 1)],
                classes: ['section_1'],
                properties: {
                    backgroundColor: 'green'
                }
            });
            aux.pipe(scrollview);
            surfaces.push(aux);
        }

        scrollview.sequenceFrom(surfaces);
        container.add(scrollview);

        mainContext.add(new Modifier({ origin: [.2, .5] })).add(container);
    }
    module.exports = section;
});