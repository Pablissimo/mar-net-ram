    /// <reference path="QUnit.js" />
    /// <reference path="../../intellitect.sharepoint.web/scripts/SampleRestService.js" />
 
var restService = null;
module("SampleRestService.getToken()", {
    setup: function () {
        restService = new SampleRestService("http://IntelliTect.com/Blog");
    },
    teardown: function () {
        restService = null;
    }
});
test("Provide valid credentials", function () {
    var token = restService.getToken("Inigo.Montoya", "Ykmfptd!");
    equal(token, "ecy8b081wh6owf8o", 
	"The token value returned was not as expected.");
});
test("Prevent empty string for the name", function () {
    raises(function() {
        var token = restService.getToken("", "Ykmfptd!");
    }, "Unexpectedly, no error was raised given a blank name.");
});
test("Prevent empty null for the password", function () {
    raises(function () {
        var token = restService.getToken("Inigo.Montoya", null);
    }, "Unexpectedly, no error was raised given a null password.");
});
 
 
module("SampleRestService.downloadFile()")
test("Throw an exception if file does not exist.", function () {
    raises(function () {
        var restService =
          new SampleRestService("http://IntelliTect.com/Blog", 
          "Inigo.Montoya", null);
        var file = restService.downloadFile("Bog.us");
    }, "Unexpectedly, no error was raised given an invalid file.");
});
