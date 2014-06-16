(function () {
    var BBarPrototype = Object.create(HTMLElement.prototype, {
            createdCallback: {
                enumerable: true,
                value: function () {
                    var root = this.createShadowRoot();
                    root.appendChild(this.template.content.cloneNode(true));
                }
            }
        });
    window.BBar = document.registerElement('b-bar', { prototype: BBarPrototype });
    Object.defineProperty(BBarPrototype, 'template', {
        get: function () {
            var fragment = document.createDocumentFragment();
            var div = fragment.appendChild(document.createElement('div'));
            div.innerHTML = ' Teste template ';
            while (child = div.firstChild) {
                fragment.insertBefore(child, div);
            }
            fragment.removeChild(div);
            return { content: fragment };
        }
    });
}());