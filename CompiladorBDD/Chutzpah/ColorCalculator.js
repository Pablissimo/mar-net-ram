 // adaptação qualiom 
define("../Chutzpah/ColorCalculator",["require", "exports"], function(require, exports) {
    var ColorCalculator = (function () {
        function ColorCalculator() {
        }
        ColorCalculator.prototype.byteToHex = function (value) {
            return (value < 16 ? "0" + value.toString(16) : value.toString(16)).toUpperCase();
        };

        ColorCalculator.prototype.toHex = function (red, green, blue) {
            return "#" + this.byteToHex(red) + this.byteToHex(green) + this.byteToHex(blue);
        };

        ColorCalculator.prototype.toRgb = function (hex) {
            throw new Error("not implemented yet");
        };
        return ColorCalculator;
    })();

    
    return ColorCalculator;
});
//# sourceMappingURL=ColorCalculator.js.map
