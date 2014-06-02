var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'html' });
    res.end(index);
}).listen(9615);

//Just Change The CONTENT TYPE to 'html'