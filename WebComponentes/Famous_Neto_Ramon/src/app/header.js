define(function (require, exports, module) {
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var View = require('famous/core/View');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    var header = Engine.createContext();

    function Header() {
        View.apply(this, arguments);

        _create_header.call(this);

    }

    Header.prototype = Object.create(View.prototype);
    Header.prototype.constructor = Header;

    function _create_header() {
        var fundo = new Surface({
            size: [undefined, 44],
            classes: ['header_top'],
            properties: {
                backgroundColor: 'red',
                zIndex: -3,
            }
        });
        header.add(fundo).add(_criar_nav.call(this));
    }

    var Nav = require('./nav');

    function _criar_nav() {
        this.nav = new Nav();

        var navModifier = new StateModifier({
            transform: Transform.behind
        });

        header.add(navModifier).add(this.nav);
    }

   
    module.exports = Header;
});