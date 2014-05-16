define([
  'intern!bdd',
  'intern/chai!expect',
  '../MyWidget'
], function (bdd, expect, MyWidget) {
    bdd.describe('demo widget', function () {
        var widget;

        bdd.before(function () {
            widget = new MyWidget();
        });

        bdd.after(function () {
            widget.destroy();
        });

        bdd.it('should have children', function () {
            expect(widget.children).to.not.be.empty;
        });
    });
});