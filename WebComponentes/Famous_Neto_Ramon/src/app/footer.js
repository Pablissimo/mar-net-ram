define(function (require, exports, module) {
    var Surface = require('famous/core/Surface');
    var View = require('famous/core/View');

    function Footer() {
        View.apply(this, arguments);

        _create_footer.call(this);

    }

    Footer.prototype = Object.create(View.prototype);
    Footer.prototype.constructor = Footer;

    function _create_footer() {
        var cor = new Surface({
            content:['FOOTER'],
            classes: ['footer_down']
        });

        this.add(cor);
    }
    module.exports = Footer;
});