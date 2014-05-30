define(function (require, exports, module) {
    var Engine = require('famous/core/Engine');
    var Appview = require('./app/appview');

    var mainContext = Engine.createContext();
    var appview = new Appview();
    mainContext.add(appview);


});