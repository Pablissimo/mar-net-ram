/// <reference path="../../lib/jasmine/jasmine.d.ts"/>
 // adaptação qualiom 
define("../ViewModel/ColorBoxViewModelTest",["require", "exports", "../../../FrontEndTools.WebUI/ViewModels/ColorBoxViewModel"], function(require, exports, ColorBoxViewModel) {
    describe("ColorBoxViewModel tests", function () {
        var viewModel = undefined;
        var calculator = undefined;

        beforeEach(function () {
            calculator = {
                toHex: function () {
                }
            };
            viewModel = new ColorBoxViewModel(calculator);
        });

        it("toHex method should call colorCalculator.toHex method with int parameters", function () {
            //ARRANGE
            viewModel.red("1");
            viewModel.green("2");
            viewModel.blue("3");
            spyOn(calculator, "toHex");

            //ACT
            viewModel.toHex();

            //ASSERT
            expect(calculator.toHex).toHaveBeenCalledWith(1, 2, 3);
        });

        it("toHex method should assign hex property", function () {
            //ARRANGE
            viewModel.red("1");
            viewModel.green("2");
            viewModel.blue("3");
            var spy = spyOn(calculator, "toHex");
            spy.andReturn("#010203");

            //ACT
            viewModel.toHex();

            //ASSERT
            expect(viewModel.hex()).toBe("#010203");
        });
    });
});
//# sourceMappingURL=ColorBoxViewModelTest.js.map
