var http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head><title>응답 페이지</title></head>');

    res.write('<body><h1>노드제이에스로부터의 응답 페이지</h1></body>');
    res.write('</html>')
    res.end();
}).listen(8000);