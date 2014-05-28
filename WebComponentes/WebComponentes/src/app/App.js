var Engine = require('famous/core/Engine');
var Surface = require('famous/core/Surface');

var mainContext = Engine.createContext();

createSurface();

function createSurface() {
    var firstSurface = new Surface({
        size: [200, 100],
        content: 'Hello Famo.us',
        properties: {
            color: 'white',
            textAlign: 'center',
            backgroundColor: '#FA5C4F'
        }
    });

    mainContext.add(firstSurface);
}