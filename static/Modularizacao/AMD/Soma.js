//define(
//    module_id /*optional*/, 
//    [dependencies] /*optional*/, 
//    definition function /*function for instantiating the module or object*/
//);


define('counter', function () {
    var current = 0;
    function next() {
        return current + 1;
    }
    function isFirst() {
        return current == 0;
    }
    return {
        next: next,
        isFirst: isFirst
    };
});