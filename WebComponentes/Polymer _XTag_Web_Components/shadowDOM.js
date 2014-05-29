//Shadow DOM
var el = document.createElement('div');
var shadow = el.createShadowRoot();
shadow.innerHTML = '<content select="h1">Marcelloooooo</content>';
document.body.appendChild(el);