/// <reference path="../lib/knockout.d.ts" />
 // adaptação qualiom 
define("../ViewModels/ColorBoxViewModel",["require", "exports", "knockout"], function(require, exports, ko) {
    var ColorBoxViewModel = (function () {
        function ColorBoxViewModel(colorCalculator) {
            this.colorCalculator = colorCalculator;
            this.red = ko.observable('');
            this.green = ko.observable('');
            this.blue = ko.observable('');
            this.hex = ko.observable('');
        }
        ColorBoxViewModel.prototype.toHex = function () {
            var hex = this.colorCalculator.toHex(parseInt(this.red()), parseInt(this.green()), parseInt(this.blue()));
            this.hex(hex);
        };
        return ColorBoxViewModel;
    })();
    
    return ColorBoxViewModel;
});
//# sourceMappingURL=ColorBoxViewModel.js.map
