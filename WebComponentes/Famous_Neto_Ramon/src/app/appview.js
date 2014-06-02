define(function (require, exports, module) {
    var Engine = require('famous/core/Engine');
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var StateModifier = require('famous/modifiers/StateModifier');
    var Transform = require('famous/core/Transform');

    function AppView() {
        View.apply(this, arguments);

        _criarArticle.call(this);
        _criarHeader.call(this);
        _criarAside.call(this);
        _criarFooter.call(this);
    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    var Header = require('./header');

    function _criarHeader() {
        this.header = new Header();

        var headerModifier = new StateModifier({
            transform: Transform.behind
        });

        this.add(headerModifier).add(this.header);
    }


    var Article = require('./article');

    function _criarArticle() {
        this.article = new Article();

        var articleModifier = new StateModifier({
            transform: Transform.behind
        });

        this.add(articleModifier).add(this.article);
    }

    var Aside = require('./aside');

    function _criarAside() {
        this.aside = new Aside();

        var asideModifier = new StateModifier({
            transform: Transform.behind
        });

        this.add(asideModifier).add(this.aside);
    }

    var Footer = require('./footer');

    function _criarFooter() {
        this.footer = new Footer();

        var footerModifier = new StateModifier({
            transform: Transform.behind
        });

        this.add(footerModifier).add(this.footer);
    }
    module.exports = AppView;

});