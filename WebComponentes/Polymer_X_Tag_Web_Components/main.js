//Custom elements são  criados usando: document.registerElement():

var XFoo = document.registerElement('x-foo');
document.body.appendChild(new XFoo());

//Extendendo elementos

var MegaButton = document.registerElement('mega-button', {
    prototype: Object.create(HTMLButtonElement.prototype),
    extends: 'button'
});


var XFooProto = Object.create(HTMLElement.prototype);

XFooProto.createdCallback = function () {
    this.innerHTML = "<b>I'm an x-foo-with-markup!</b>";
};

var XFoo = document.registerElement('x-foo-with-markup', { prototype: XFooProto });