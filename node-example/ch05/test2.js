var http = require('http');
var server = http.createServer();
var port = 3000;
server.listen(port, () => {
    console.log('웹 서버가 시작되었습니다.', port);
});

server.on('connection', (socket) => {
    console.log('클라이언트가 접속했습니다.', socket.remoteAddress, socket.remotePort);
});
server.on('request', (req, res) => {
    console.log('클라이언트 요청이 들어왔습니다.');
    console.dir(req);
})
server.on('close', () => {
    console.log('서버가 종료됩니다.')
})