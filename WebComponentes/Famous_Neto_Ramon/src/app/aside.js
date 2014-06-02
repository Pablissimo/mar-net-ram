define(function (require, exports, module) {
    var Surface = require('famous/core/Surface');
    var View = require('famous/core/View');
    

    function Aside() {
        View.apply(this, arguments);

        _create_aside.call(this);

    }

    Aside.prototype = Object.create(View.prototype);
    Aside.prototype.constructor = Aside;

    function _create_aside() {
        var cor = new Surface({
            content: ['ASIDE'],
            classes: ['aside_left']
        });

        this.add(cor);
    }
    module.exports = Aside;
});