var proto = Object.create(HTMLElement.prototype);
proto.createdCallback = function () {
    this.addEventListener('click', function (e) {
        alert('Obrigado por clicar-me!');
    });
};

//Criação de Custom element + definição do Custom element+ registro do Custom element.
var xQualiom = Object.create(HTMLElement.prototype);
xQualiom.createdCallback = function () {
    this.innerHTML = "<h1>Web Component - Qualiom</h1>";
};
xQualiom = document.registerElement('x-qualiom', { prototype: xQualiom });

//Criação de elemento que Extend Botão (button).
var MegaButton = document.registerElement('mega-button', {
    prototype: Object.create(HTMLButtonElement.prototype),
    extends: 'button'
});

//Criação de elemento que utiliza o elemento criado <mega-button>,
//Mesmas características do <x-qualiom>.
var xQualiom_button = Object.create(HTMLElement.prototype);
xQualiom_button.createdCallback = function () {
    this.innerHTML = '<button is="mega-button"><h1>Web Component - Qualiom</h1></button>';
};
xQualiom_button = document.registerElement('x-qualiom-button', { prototype: xQualiom_button });


var XFoo = document.registerElement('x-foo', { prototype: proto });


var protox = Object.create(HTMLElement.prototype, {
    createdCallback: {
        value: function () {
            var t = document.querySelector('#sdtemplate');
            var clone = document.importNode(t.content, true);
            this.createShadowRoot().appendChild(clone);
        }
    }
});
document.registerElement('x-foo-from-template', { prototype: protox });


