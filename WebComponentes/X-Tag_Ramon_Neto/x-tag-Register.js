//Exemplo Button
xtag.register('x-ramon',
 {
     extends: 'button',
     lifecycle: {
         created: function () {
             this.innerHTML = "<x-neto>Ramon</x-neto>"
         }
     },
         events: {
             'click:delegate(button)': function (e) {
                 alert("Empty!");    
             }
         }
     }
);

//Exemplo Button
xtag.register('x-neto',
 {
     extends: 'button',
     lifecycle: {
         created: function () {
             this.innerHTML = "<button>Neto</button>"
         }
     },
     events: {
         'click:delegate(button)': function (e) {
             alert("Empty!");
         }
     }
 }
);
//Exemplo template

xtag.register('templated-component', {
    lifecycle: {
        created: function () {
            var tpl = document.getElementById('test-template').content;
            this.appendChild(tpl.cloneNode(true));
        }
    }
});

var t = document.createElement('templated-component');
document.body.appendChild(t);
 
//// Example 1
//// Listen on the document for any button with a class of 'save'
//xtag.addEvent(document, 'click:delegate(button.save)', function (e) {
//    // <button class="save"> was clicked
//    // 'this' is the button
//});

//// Example 2
//// Here's the syntax inside a custom element.
//xtag.register('x-foo', {
//    lifecycle: {
//        created: function () {
//            this.innerHTML = '<a>HI</a>';
//        }
//    },
//    events: {
//        'click:delegate(a)': function (e) {
//            console.log('a clicked', this);
//        }
//    }
//});

//KeyboardEvent:keypass

//Keypass acts as a filter, only letting through certain keycodes.

//  xtag.addEvent(input, 'keydown:keypass(13)', function(e){
//      // 'enter' pressed
//  });

//xtag.addEvent(input, 'keydown:keypass(13,27)', function(e){
//    // 'enter' or 'esc' pressed
//});