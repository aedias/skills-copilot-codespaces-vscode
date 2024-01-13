// create web server
// 1. import http module
const http = require('http');
// 2. create server
const server = http.createServer(function (req, res) {
    // 3. set response header
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    // 4. set response content
    res.write('<html><body><p>This is home page.</p></body></html>');
    res.end();
});
// 5. listen port 3000
server.listen(3000);
console.log('Server is running at http://