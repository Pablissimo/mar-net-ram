define(function (require, exports, module) {
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Surface = require('famous/core/Surface');

    var mainContext = Engine.createContext();

    createSurface();

    function createSurface() {
        // your app here
        var logo = new ImageSurface({
            size: [750, 400],
            content: 'img/logo.jpg',
            classes: ['double-sided']

        });

        var background = new Surface({
            properties: {
                backgroundColor: '#FA5C4F'
            }
        });

        var initialTime = Date.now();
        var centerSpinModifier = new Modifier({
            origin: [0.5, 0.5],
            transform: function () {
                return Transform.rotateY(.002 * (Date.now() - initialTime));
            }
        });

        mainContext.add(background);
        mainContext.add(centerSpinModifier).add(logo);
    }
});
