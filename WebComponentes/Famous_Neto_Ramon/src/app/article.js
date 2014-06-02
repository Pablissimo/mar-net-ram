define(function (require, exports, module) {
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var View = require('famous/core/View');
    var Transform = require('famous/core/Transform');
    var Section = require('./section');
    var StateModifier = require('famous/modifiers/StateModifier');

    function Article() {
        View.apply(this, arguments);

        _create_article.call(this);
        _criar_section.call(this);

    }

    Article.prototype = Object.create(View.prototype);
    Article.prototype.constructor = Article;

    function _create_article() {
        var cor = new Surface({
            classes: ['article']           
        });

        this.add(cor);
    }

    function _criar_section() {
        this.section = new Section();

        var sectionModifier = new StateModifier({
            transform: Transform.behind
        });

        this.add(sectionModifier).add(this.section);
    }

    module.exports = Article;
});