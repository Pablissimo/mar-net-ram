define(function (require, exports, module) {
    var Surface = require('famous/core/Surface');
    var View = require('famous/core/View');

    function Nav() {
        View.apply(this, arguments);

        _create_nav.call(this);

    }

    Nav.prototype = Object.create(View.prototype);
    Nav.prototype.constructor = Nav;

    function _create_nav() {
        var fundo = new Surface({
            size: [20, 44],
            content:['NAV'],
            classes: ['nav_top'],
            properties: {
                backgroundColor: 'yellow',
                zIndex: 3 
            }
        });
        this.add(fundo);
    }
    module.exports = Nav;
});